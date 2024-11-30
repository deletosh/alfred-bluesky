#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}

async function setupCredentials() {
    const credentialsPath = path.join(os.homedir(), '.bluesky-credentials.json');

    const identifier = await question('Enter your Bluesky identifier (email or handle): ');
    const appPassword = await question('Enter your Bluesky app password: ');

    const credentials = {
        identifier,
        appPassword
    };

    fs.writeFileSync(credentialsPath, JSON.stringify(credentials, null, 2));
    console.log('Credentials stored successfully!');

    rl.close();
}

setupCredentials().catch(console.error);