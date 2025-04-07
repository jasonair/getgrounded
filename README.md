# Grounded Project

This project is hosted on GitHub Pages. Below are the steps to build and deploy the project.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

## Deployment Steps

1. **Install Dependencies**
   If you haven't already installed the dependencies, run:
   ```bash
   npm install
   ```

2. **Build the Project**
   To generate the production-ready files, run:
   ```bash
   npm run build
   ```
   This will create a `dist/` folder containing the compiled files.

3. **Deploy to GitHub Pages**
   To deploy the project to GitHub Pages, run:
   ```bash
   npm run deploy
   ```
   This will push the contents of the `dist/` folder to the `gh-pages` branch, which is used by GitHub Pages to serve the site.

4. **Verify Deployment**
   - Visit your GitHub Pages URL (e.g., `https://<username>.github.io/<repository-name>`).
   - Ensure the site is live and functioning as expected.

## Notes
- The deployment process uses the `vite.config.js` file to configure the base path for GitHub Pages.
- Ensure that GitHub Pages is enabled in your repository settings and is set to use the `gh-pages` branch.

## Troubleshooting
If the site does not deploy correctly:
- Check the GitHub Actions logs (if applicable) for errors.
- Ensure the `gh-pages` branch exists and contains the correct files.
- Verify that the `homepage` field in `package.json` is correctly set (if required by your setup).
