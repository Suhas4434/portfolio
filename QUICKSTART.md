# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Open Terminal

Navigate to the project folder:

```bash
cd portfolio-project
```

## Step 2: Install Everything

```bash
npm install
```

Wait for installation to complete (2-3 minutes).

## Step 3: Add Your Files

1. **Add your profile picture:**
   - Place your photo in the `public` folder
   - Name it: `profile-picture.jpg`
   - Recommended: 500x500px or larger

2. **Add your resume:**
   - Place your resume PDF in the `public` folder
   - Name it: `resume.pdf`

## Step 4: Update Your Links

Open `src/components/Hero.jsx` and update line with GitHub:

```javascript
// Find this line (around line 27):
{
  icon: <FaGithub />,
  href: 'https://github.com/suhas-k',  // ← Change to your GitHub username
  label: 'GitHub',
}
```

Open `src/components/Contact.jsx` and update GitHub link (around line 54):

```javascript
{
  icon: <FaGithub />,
  label: 'GitHub',
  value: 'github.com/suhas-k',  // ← Change to your username
  link: 'https://github.com/suhas-k',  // ← Change to your username
  color: 'purple',
}
```

## Step 5: Run Your Portfolio

```bash
npm run dev
```

Your portfolio will open automatically at: **http://localhost:3000**

## Step 6: Check Everything

Go through each section and verify:
- ✅ Your name appears correctly
- ✅ All links work (email, phone, WhatsApp, LinkedIn, GitHub)
- ✅ Profile picture shows
- ✅ All sections display properly

## Step 7: Build for Production (When Ready)

```bash
npm run build
```

## Step 8: Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

Or use the Vercel dashboard:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy!

---

## Customization Checklist

Before deploying, update these:

### Personal Information
- [ ] GitHub username in `Hero.jsx`
- [ ] GitHub username in `Contact.jsx`
- [ ] Profile picture in `public` folder
- [ ] Resume PDF in `public` folder

### Project Links (src/components/Projects.jsx)
- [ ] Replace all `#` with actual project URLs
- [ ] Add live demo links
- [ ] Add GitHub repository links

### Optional Updates
- [ ] Change color scheme in `tailwind.config.js`
- [ ] Update meta tags in `index.html`
- [ ] Add Google Analytics
- [ ] Enable contact form backend

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to production on Vercel
vercel --prod
```

## Need Help?

1. Check `README.md` for detailed documentation
2. Check `DEPLOYMENT.md` for deployment guide
3. Email: Suhaskgbd46@gmail.com

---

**You're all set! 🚀**

Your portfolio is ready to impress!
