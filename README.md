# Suhas K - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark theme with cyan/purple gradients, and showcases projects, skills, and experience.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Dark theme with cyan and purple gradients
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Sections**: 
  - Hero section with social links
  - About me with stats
  - Education timeline
  - Work experience
  - Project showcase
  - Skills with progress bars
  - Certifications
  - Contact form
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

### Step 1: Clone or Download the Project

If you have the project folder, navigate to it in your terminal:

```bash
cd portfolio-project
```

### Step 2: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- React & React DOM
- Vite (Build tool)
- Tailwind CSS
- Framer Motion (Animations)
- React Icons
- React Scroll
- And other dependencies

### Step 3: Add Your Profile Picture

1. Place your profile picture in the `public` folder
2. Rename it to `profile-picture.jpg` (or update the image path in `Hero.jsx`)
3. Recommended size: 500x500px or larger (square aspect ratio)

### Step 4: Add Your Resume

1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf` (or update the link in `Hero.jsx`)

### Step 5: Customize Your Information

Update the following files with your actual information:

**src/components/Hero.jsx**
- Update GitHub link (currently placeholder)
- Verify email, phone, WhatsApp, LinkedIn links

**src/components/Projects.jsx**
- Replace `#` with actual project demo and GitHub links

**src/components/Contact.jsx**
- Update GitHub username/link

## 🎨 Customization

### Colors

The portfolio uses Tailwind CSS. To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Content

All content is in the component files under `src/components/`:
- `Hero.jsx` - Main introduction
- `About.jsx` - About section
- `Education.jsx` - Education details
- `Experience.jsx` - Work experience
- `Projects.jsx` - Project showcase
- `Skills.jsx` - Technical skills
- `Certifications.jsx` - Awards & certifications
- `Contact.jsx` - Contact information and form

## 🚀 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

The page will automatically reload when you make changes.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build will be output to the `dist` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to deploy your project

Or use the Vercel dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

Or connect your GitHub repository to Netlify for automatic deployments.

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio-project/
├── public/
│   ├── profile-picture.jpg    # Your profile photo
│   └── resume.pdf             # Your resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is busy, Vite will automatically use the next available port.

### Module Not Found

Run `npm install` to ensure all dependencies are installed.

### Build Errors

1. Clear node_modules: `rm -rf node_modules`
2. Clear npm cache: `npm cache clean --force`
3. Reinstall: `npm install`

### Images Not Showing

- Ensure images are in the `public` folder
- Check file names match exactly (case-sensitive)
- Clear browser cache

## 📝 Adding New Sections

To add a new section:

1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add it to the main component
4. Add a navigation link in `Navbar.jsx`

## 🎯 SEO Optimization

Update `index.html` with your information:
- Title tag
- Meta description
- Meta keywords
- Open Graph tags (for social sharing)

## 📱 Contact Form Setup

The contact form currently shows an alert. To make it functional:

1. **Using EmailJS**:
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Follow their React integration guide
   - Update `Contact.jsx` with your service ID

2. **Using Formspree**:
   - Sign up at [formspree.io](https://formspree.io/)
   - Get your form endpoint
   - Update form action in `Contact.jsx`

3. **Backend API**:
   - Create a backend endpoint
   - Update `handleSubmit` function in `Contact.jsx`

## 🌟 Features to Add (Optional)

- Dark/Light mode toggle
- Blog section
- Testimonials
- Download resume button functionality
- Google Analytics
- Loading animations
- Particle.js background
- Typing animation for hero text

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions:
- Email: Suhaskgbd46@gmail.com
- LinkedIn: [Suhas K](https://linkedin.com/in/suhas-k-431178230)

---

**Built with ❤️ by Suhas K**
