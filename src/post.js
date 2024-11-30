#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

class BlueskyClient {
    constructor() {
        this.service = 'https://bsky.social';
        this.credentialsPath = path.join(os.homedir(), '.bluesky-credentials.json');
        this.credentials = this.loadCredentials();
        this.authToken = null;
    }

    loadCredentials() {
        try {
            return JSON.parse(fs.readFileSync(this.credentialsPath, 'utf8'));
        } catch (error) {
            return null;
        }
    }

    async login() {
        if (!this.credentials) {
            throw new Error('No credentials found. Please run setup first.');
        }

        return new Promise((resolve, reject) => {
            const data = JSON.stringify({
                identifier: this.credentials.identifier,
                password: this.credentials.appPassword
            });

            const options = {
                hostname: 'bsky.social',
                path: '/xrpc/com.atproto.server.createSession',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            };

            const req = https.request(options, (res) => {
                let responseData = '';

                res.on('data', (chunk) => {
                    responseData += chunk;
                });

                res.on('end', () => {
                    if (res.statusCode === 200) {
                        const response = JSON.parse(responseData);
                        this.authToken = response.accessJwt;
                        resolve(true);
                    } else {
                        reject(new Error(`Authentication failed: ${responseData}`));
                    }
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.write(data);
            req.end();
        });
    }

    async createPost(text) {
        if (!this.authToken) {
            await this.login();
        }

        return new Promise((resolve, reject) => {
            const postData = {
                repo: this.credentials.identifier,
                collection: 'app.bsky.feed.post',
                record: {
                    $type: 'app.bsky.feed.post',
                    text: text,
                    createdAt: new Date().toISOString()
                }
            };

            const data = JSON.stringify(postData);

            const options = {
                hostname: 'bsky.social',
                path: '/xrpc/com.atproto.repo.createRecord',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.authToken}`,
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            };

            const req = https.request(options, (res) => {
                let responseData = '';

                res.on('data', (chunk) => {
                    responseData += chunk;
                });

                res.on('end', () => {
                    if (res.statusCode === 200) {
                        resolve({
                            success: true,
                            response: JSON.parse(responseData)
                        });
                    } else {
                        resolve({
                            success: false,
                            error: responseData
                        });
                    }
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.write(data);
            req.end();
        });
    }
}

async function main() {
    const query = process.argv[2] || '';
    const isPosting = process.env.POSTING === 'true';

    if (isPosting) {
        try {
            const client = new BlueskyClient();
            const result = await client.createPost(query);

            if (result.success) {
                // Output just the success message for notification
                console.log('Posted successfully to Bluesky!');
            } else {
                console.log('Error posting to Bluesky');
            }
        } catch (error) {
            console.log('Failed to post: ' + error.message);
        }
        return;
    }

    // Script Filter output for composing
    console.log(JSON.stringify({
        items: [{
            title: query ? 'Press Enter to post:' : 'Start typing your post...',
            subtitle: query || 'Type your message and press Enter when ready',
            arg: query,
            valid: !!query,
            variables: {
                POSTING: 'true'
            }
        }]
    }));
}

main().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
});