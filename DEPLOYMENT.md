# GitHub Pages Deployment Setup

This guide describes how to set up GitHub Pages for this project.

## Prerequisites

1. The repository must be hosted on GitHub
2. The `NEXT_PUBLIC_MAILERLITE_API_TOKEN` must be set up as a repository secret

## Setup

### 1. Configure Repository Secret

You have already set up the `NEXT_PUBLIC_MAILERLITE_API_TOKEN` as a secret. ✅

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left menu
4. Under **Source**:
   - Select **GitHub Actions** from the dropdown menu
   
That's it! The configuration is complete.

### 3. Trigger Deployment

The pipeline is automatically triggered on:
- Every push to the `main` branch
- Manually via the "Actions" tab → "Deploy Next.js to GitHub Pages" → "Run workflow"

## After the First Deployment

After the first successful deployment, your website will be available at:

```
https://tara-fusion.com/
```

The custom domain is already configured through the `CNAME` file in the `public/` directory.

## Local Testing

To test the production build locally:

```bash
npm run build
npx serve out
```

## Important Files

- `.github/workflows/deploy.yml` - GitHub Actions pipeline
- `next.config.ts` - Next.js configuration for GitHub Pages
- `public/.nojekyll` - Prevents Jekyll processing on GitHub Pages
- `public/CNAME` - Custom domain configuration

## Troubleshooting

### Custom Domain Not Working

Make sure that:
1. The `CNAME` file exists in the `public/` directory and contains `tara-fusion.com`
2. Your domain's DNS settings correctly point to GitHub Pages
3. The custom domain is configured in the GitHub repository settings under "Pages"

### Workflow Fails

1. Check if the `NEXT_PUBLIC_MAILERLITE_API_TOKEN` secret is set correctly
2. Ensure GitHub Pages is enabled in the repository settings
3. Check the logs in the "Actions" tab

### 404 Error After Deployment

- Wait 1-2 minutes after deployment
- Clear your browser cache
- Verify that the custom domain is configured correctly
