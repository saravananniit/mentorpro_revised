# Setup Guide - UI-Based API Key Input & Auto Deployment

## No GitHub Secrets Required!

Your app accepts the Gemini API key directly through the UI. No need to configure secrets in GitHub.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open the app and enter your Gemini API key in the UI form
   - Get your free API key from: https://ai.google.dev/

## Deployment to GitHub Pages - Automatic! ✅

The GitHub Actions workflow automatically:
- Triggers when you push to `main` or `master` branch
- Builds your project
- Deploys to GitHub Pages instantly

**Just push your code** - deployment happens automatically!

### To Enable GitHub Pages:

1. Go to your GitHub repository → **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - (The workflow already handles the rest)

3. Your site will be live at: `https://<your-username>.github.io/mentorpro_revised/`

## Security Notes

✅ API key is entered by users in the browser UI
✅ API key is stored in user's session (not persisted)
✅ No secrets needed in GitHub
✅ Safe for public repositories

## Troubleshooting Deployment

After pushing:
1. Go to **Actions** tab in your repository
2. Check the latest workflow run
3. If successful, you'll see a green checkmark

Your app is now being served at the GitHub Pages URL!
2. Wait for the "Deploy to GitHub Pages" workflow to complete
3. Visit https://saravananniit.github.io/mentorpro/
