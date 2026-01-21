# Alfred Bluesky Workflow

A powerful Alfred workflow that lets you post to Bluesky directly from your Mac. Simple, fast, and secure.

[Download Latest Release](https://github.com/deletosh/alfred-bluesky/releases/latest)

![Demo](demo/demo.gif)

## Features

- 🚀 Post to Bluesky instantly from Alfred
- 🔒 Secure credential management through Alfred's configuration
- 🔔 Real-time posting feedback
- ⚡ Fast and lightweight
- 🛠️ Easy to set up and configure

## Requirements

- [Alfred Powerpack](https://www.alfredapp.com/powerpack/)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- A Bluesky account

## Installation

1. Download the latest `.alfredworkflow` file from the [releases page](https://github.com/deletosh/alfred-bluesky/releases)
2. Double-click the downloaded file to install it in Alfred
3. Follow the setup instructions below

## Setup

### Step 1: Create a Bluesky App Password

1. Log in to [Bluesky](https://bsky.app)
2. Go to Settings → App Passwords
3. Click "Create App Password"
4. Name it "Alfred" (or whatever you prefer)
5. Copy the generated password (you'll need it in the next step)

### Step 2: Configure the Workflow

1. In Alfred, go to Preferences → Workflows
2. Select the "Bluesky" workflow from the list
3. Click the "Configure Workflow..." button (top-right corner, [𝓧] icon)
4. Fill in your credentials:
   - **Username or email**: Your Bluesky handle (e.g., `yourname.bsky.social`) or email address
   - **App Password**: The app password you created in Step 1 (**NOT** your login password)

Both fields are required and must be filled in for the workflow to function properly.

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
- Check if your credentials are correct in the workflow configuration
- Verify your app password is still valid in Bluesky settings
- Try regenerating your app password and updating it in Alfred

**Posts not appearing**
- Check the Bluesky website to verify the post
- Make sure you're connected to the internet
- Check your credentials in the workflow configuration

**Having node issues**
- See: https://askubuntu.com/a/1291470

### Getting Help

If you run into issues:
1. Check existing [GitHub Issues](https://github.com/deletosh/alfred-bluesky/issues)
2. Create a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Your macOS and Alfred versions
   - Any error messages (with sensitive info removed)

## Security

- Never share your app password
- The workflow only communicates with Bluesky's official API
- Credentials are stored securely in Alfred's workflow configuration
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

## Testing the Workflow

### Testing Locally (Before Distribution)

1. Double-click the `alfred-bluesky.alfredworkflow` file in this directory
2. Alfred will prompt you to install or update the workflow
3. Configure your credentials (see Setup → Step 2 above)
4. Open Alfred (⌘ Space) and type:
   ```
   bsky Test post from Alfred!
   ```
5. Press Enter and check your Bluesky profile to verify the post appears

### Manual Testing Without Installing

You can test the script directly from the command line:

```bash
# Set your credentials as environment variables
export BLUESKY_IDENTIFIER="yourname.bsky.social"
export BLUESKY_APP_PASSWORD="your-app-password"

# Test the script filter (shows what Alfred would display)
node src/post.js "Test message"

# Test actual posting
export POSTING=true
node src/post.js "Test message"
```

## Building From Source

1. Clone the repository:
   ```bash
   git clone https://github.com/deletosh/alfred-bluesky.git
   cd alfred-bluesky
   ```

2. Build the workflow:
   ```bash
   npm run build
   ```

   This creates `alfred-bluesky.alfredworkflow` with all necessary files.

## Version History

- **1.1.0** (2026-01-21)
  - Fixed hardcoded paths for proper distribution
  - Updated to use Alfred's workflow configuration for credentials
  - Fixed repo identifier to use DID from authentication response
  - Improved build process for reliable packaging
  - Updated for Alfred 5 compatibility

- **1.0.0** (2024-01-30)
  - Initial release
  - Basic posting functionality

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