# 🚀 Complete Deployment Guide for Vercel

This guide will walk you through deploying your portfolio to Vercel step by step.

## Prerequisites

- GitHub account
- Vercel account (free - sign up with GitHub)

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push Your Code to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it `portfolio` or `my-portfolio`
   - Keep it public or private
   - Don't initialize with README (we already have one)

2. Push your code to GitHub:

```bash
cd portfolio-project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. After signing in, click "Add New..." → "Project"
4. Import your GitHub repository:
   - Find your portfolio repository in the list
   - Click "Import"
5. Configure your project:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - Leave other settings as default
6. Click "Deploy"
7. Wait 1-2 minutes for the build to complete
8. Your site will be live at: `your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to update your domain's DNS settings

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

```bash
cd portfolio-project
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- Project name? **Press Enter** (uses folder name)
- Directory? **Press Enter** (current directory)
- Auto-detected settings? **Y**

Your project will be deployed! You'll get a URL like: `https://portfolio-abc123.vercel.app`

### Step 4: Deploy to Production

```bash
vercel --prod
```

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Every push to other branches = preview deployment

## Environment Variables (If Needed Later)

1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add your variables (e.g., API keys)

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically rebuild and deploy!

## Vercel Configuration File (Optional)

Create `vercel.json` in your project root for advanced configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## Common Issues & Solutions

### Build Fails

**Issue**: Build fails with module errors
**Solution**: 
```bash
# Locally
rm -rf node_modules package-lock.json
npm install
npm run build

# If successful, push changes
git add .
git commit -m "Fix dependencies"
git push
```

### Images Not Loading

**Issue**: Images work locally but not on Vercel
**Solution**: 
- Ensure images are in `public` folder
- Use `/image.jpg` not `./image.jpg` in code
- Check file names are exact (case-sensitive)

### 404 on Refresh

**Issue**: Page refreshes show 404
**Solution**: Vercel handles this automatically for Vite, but if needed:

Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Performance Optimization

After deployment, check your site with:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Vercel automatically optimizes:
- Image optimization
- Code splitting
- Compression
- CDN distribution

## Custom Domain Setup

### For domains bought on:

**Namecheap, GoDaddy, etc:**
1. Get nameservers from Vercel
2. Update nameservers in your domain registrar
3. Wait 24-48 hours for propagation

**Vercel Domain:**
1. Buy directly from Vercel
2. Automatically configured

## Monitoring Your Site

In Vercel dashboard you can see:
- Deployment history
- Build logs
- Analytics (on paid plans)
- Error tracking

## SSL Certificate

Vercel automatically provides:
- Free SSL certificate
- Automatic HTTPS
- Certificate renewal

## Rollback to Previous Version

1. Go to Deployments in Vercel dashboard
2. Find the deployment you want to restore
3. Click "..." → "Promote to Production"

## Best Practices

1. **Test Locally First**
   ```bash
   npm run build
   npm run preview
   ```

2. **Use Environment Variables for Secrets**
   - Never commit API keys
   - Use Vercel environment variables

3. **Keep Dependencies Updated**
   ```bash
   npm update
   ```

4. **Monitor Build Times**
   - Keep build under 1 minute for best experience

## Getting Help

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Discord](https://vercel.com/discord)
- [Vercel Support](https://vercel.com/support)

---

**Your portfolio is now live! 🎉**

Share your Vercel URL:
- On LinkedIn
- On your resume
- With potential employers
- On your GitHub profile

Example: https://suhas-portfolio.vercel.app
