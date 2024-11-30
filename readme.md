# Alfred Bluesky Workflow

A powerful Alfred workflow that lets you post to Bluesky directly from your Mac. Simple, fast, and secure.

![](https://i.imgur.com/RdpaNQr.png)

## Features

- 🚀 Post to Bluesky instantly from Alfred
- 🔒 Secure credential management with environment variables or local storage
- 🔔 Real-time posting feedback
- ⚡ Fast and lightweight
- 🛠️ Easy to set up and configure

## Requirements

- [Alfred Powerpack](https://www.alfredapp.com/powerpack/)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- A Bluesky account

## Installation

1. Download the latest `.alfredworkflow` file from the [releases page](https://github.com/yourusername/alfred-bluesky/releases)
2. Double-click the downloaded file to install it in Alfred
3. Follow the setup instructions below

## Setup

### Step 1: Create a Bluesky App Password

1. Log in to [Bluesky](https://bsky.app)
2. Go to Settings → App Passwords
3. Click "Create App Password"
4. Name it "Alfred" (or whatever you prefer)
5. Copy the generated password (you'll need it in the next step)

### Step 2: Configure Credentials

You have two options for setting up your credentials:

#### Option A: Environment Variables (Recommended)

1. In Alfred, go to the workflows section
2. Select the Bluesky workflow
3. Click the [𝓧] button in the top-right corner
4. Add these environment variables:
   - Name: `BLUESKY_IDENTIFIER` 
   - Value: Your Bluesky handle (e.g., `you.bsky.social`) or email
   
   - Name: `BLUESKY_APP_PASSWORD`
   - Value: The app password you created in Step 1

#### Option B: Setup Script

1. Open Terminal
2. Navigate to the workflow directory:
   ```bash
   cd ~/Library/Application\ Support/Alfred/Alfred.alfredpreferences/workflows/[workflow-id]
   ```
3. Run the setup script:
   ```bash
   node setup.js
   ```
4. Follow the prompts to enter your:
   - Bluesky identifier (handle or email)
   - App password

## Usage

1. Trigger Alfred (default: ⌘ Space)
2. Type `bsky` followed by your post
   ```
   bsky Hello world! Posting from Alfred 🚀
   ```
3. Press Enter to post
4. You'll see a notification confirming your post was successful

## Troubleshooting

### Common Issues

**"node: command not found"**
- Install Node.js from https://nodejs.org

**Authentication failed**
- Check if your credentials are correct
- Verify your app password is still valid in Bluesky settings
- Try regenerating your app password

**Posts not appearing**
- Check the Bluesky website to verify the post
- Make sure you're connected to the internet
- Try re-entering your credentials

**Having node issues**
- See: https://askubuntu.com/a/1291470

### Getting Help

If you run into issues:
1. Check existing [GitHub Issues](https://github.com/yourusername/alfred-bluesky/issues)
2. Create a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Your macOS and Alfred versions
   - Any error messages (with sensitive info removed)

## Security

- Never share your app password
- The workflow only communicates with Bluesky's official API
- Credentials are stored securely in:
  - Environment variables (Option A)
  - Local file system (Option B) at `~/.bluesky-credentials.json`
- Only uses app passwords, never your main Bluesky password

## Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## Building From Source

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alfred-bluesky.git
   cd alfred-bluesky
   ```

2. Package the workflow:
   ```bash
   zip -r ../alfred-bluesky.alfredworkflow . -x "*.git*" -x "*.DS_Store"
   ```

## Version History

- **1.0.0** (2024-01-30)
  - Initial release
  - Basic posting functionality
  - Environment variables support
  - Setup script option

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Bluesky](https://bsky.app) for the API
- [Alfred](https://www.alfredapp.com) for the amazing workflow system

## Support

If you find this workflow helpful, you can:
- ⭐ Star the repository
- 📢 Share it on social media
- 🐞 Report bugs
- 💡 Suggest features

---

Made with ❤️ by Dele Tosh