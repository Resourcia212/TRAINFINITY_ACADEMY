# 🚀 Trainfinity Academy — Deployment & Hosting Guide

> A comprehensive, step-by-step manual for cloning, configuring, and hosting the **Trainfinity Academy** website locally and deploying across top cloud platforms (**Vercel**, **Netlify**, and **GitHub Pages**).

---

## 📑 Table of Contents
1. [⚙️ Prerequisites](#️-prerequisites)
2. [💻 Local Setup & Development](#-local-setup--development)
3. [🅰️ Deploy to Vercel (Recommended)](#️-deploy-to-vercel-recommended)
4. [🅱️ Deploy to Netlify](#️-deploy-to-netlify)
5. [🅲 Deploy to GitHub Pages](#-deploy-to-github-pages)
6. [🛠️ Troubleshooting & FAQs](#️-troubleshooting--faqs)

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed and set up on your system:
- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **Git**: Installed and configured on your machine ([Download Git](https://git-scm.com/))
- **GitHub Account**: Active account on [github.com](https://github.com)
- **Package Manager**: `npm` (comes bundled with Node.js)

---

## 💻 Local Setup & Development

Follow these steps to clone and run the project locally on your laptop or desktop:

### 1. Clone the Repository
Open your terminal (PowerShell, Command Prompt, or Git Bash) and execute:
```bash
git clone https://github.com/Resourcia212/TRAINFINITY_ACADEMY.git
```

### 2. Navigate to the Directory
```bash
cd TRAINFINITY_ACADEMY
```

### 3. Install All Dependencies
```bash
npm install
```

### 4. Start the Local Development Server
```bash
npm run dev
```
> 🌐 The application will be running locally at **`http://localhost:3000`** with instant Hot Module Replacement (HMR).

---

## 🅰️ Deploy to Vercel (Recommended)

**Vercel** provides the fastest deployment workflow with automated global CDN distribution and SSL certificate generation.

### Step-by-Step Instructions:
1. **Push to GitHub**: Make sure your project is pushed to your GitHub account repository.
2. **Log In to Vercel**: Visit [vercel.com](https://vercel.com) and log in using your GitHub account.
3. **Import Project**:
   - Click the **"Add New..."** button in your dashboard.
   - Select **"Project"**.
   - Locate your `TRAINFINITY_ACADEMY` repository from the list and click **"Import"**.
4. **Configure Project Settings**:
   - **Framework Preset**: `Vite` (automatically detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Deploy**:
   - Click **"Deploy"**.
   - In ~30 to 45 seconds, Vercel will build and publish your website.
6. **Live URL**:
   - Your site will receive a free `https://<your-project-name>.vercel.app` domain.
   - You can also map a custom domain (e.g., `trainfinityacademy.com`) under **Settings ➔ Domains**.

---

## 🅱️ Deploy to Netlify

**Netlify** is another excellent cloud hosting platform offering continuous deployment directly from Git.

### Step-by-Step Instructions:
1. **Log In to Netlify**: Visit [netlify.com](https://netlify.com) and log in with your GitHub account.
2. **Add New Site**:
   - In your team overview, click **"Add new site"** ➔ **"Import an existing project"**.
   - Select **GitHub** as your Git provider and authorize Netlify.
   - Search for and select `TRAINFINITY_ACADEMY`.
3. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Base directory**: *(Leave blank)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. **Deploy**:
   - Click **"Deploy TRAINFINITY_ACADEMY"**.
5. **Client-Side Routing Support (SPA Fallback)**:
   - A `_redirects` or `404.html` fallback is already integrated to ensure deep URLs like `/services` and `/gallery` load without 404 errors.
6. **Live URL**:
   - Your site will go live on `https://<random-name>.netlify.app` with instant SSL.
   - You can customize the site name in **Site configuration ➔ Change site name**.

---

## 🅲 Deploy to GitHub Pages

If you wish to host the website directly on **GitHub Pages** (100% free with zero third-party accounts):

### Step 1: Update Configuration (If Forking/Cloning to your own Repo)
1. **In `package.json`**:
   Update the `"homepage"` URL with your GitHub username and repository name:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```
2. **In `vite.config.ts`**:
   Ensure the `base` property reflects your repository name in production:
   ```ts
   base: process.env.NODE_ENV === 'production' ? '/<your-repo-name>/' : '/'
   ```

### Step 2: Run the 1-Command Deployment
In your terminal, execute:
```bash
npm run deploy
```
*What this command does:*
- Compiles TypeScript and builds the optimized bundle (`npm run build`).
- Generates `dist/404.html` so client-side React routes work seamlessly on refresh.
- Pushes the compiled `dist` directory to the `gh-pages` branch on GitHub.

### Step 3: Activate GitHub Pages in Repository Settings
1. Open your repository on GitHub in your browser.
2. Click on **Settings** (top navigation tab) ➔ **Pages** (in the left-hand sidebar).
3. Under **"Build and deployment"** > **"Branch"**:
   - Select **`gh-pages`** from the branch dropdown.
   - Select **`/(root)`** as the directory folder.
   - Click **"Save"**.
4. Allow 1–2 minutes for GitHub to process the deployment.
5. Your website will be live at:
   👉 **`https://<your-username>.github.io/<your-repo-name>/`**

---

## 🛠️ Troubleshooting & FAQs

### Q1: Why do routes like `/services` or `/contact` show 404 when refreshed on GitHub Pages?
> **Answer**: GitHub Pages is a static file host that looks for direct files. The build script automatically copies `index.html` to `404.html` in `dist/`. Ensure you deploy using `npm run deploy` so the SPA router can handle deep link resolution.

### Q2: Why are images or styles missing on GitHub Pages?
> **Answer**: Ensure your `base` in `vite.config.ts` matches your exact GitHub repository name (e.g., `/TRAINFINITY_ACADEMY/`). All asset URLs are wrapped with the `assetUrl()` helper to dynamically prepend the correct base path.

### Q3: How do I redeploy after making changes?
- **For Vercel & Netlify**: Simply commit and push your changes to your `main` branch. The platforms will auto-trigger a new build and deploy within seconds.
- **For GitHub Pages**: Run `npm run deploy` in your terminal.

---

## 📞 Support & Repository

- **GitHub Repository**: [https://github.com/Resourcia212/TRAINFINITY_ACADEMY](https://github.com/Resourcia212/TRAINFINITY_ACADEMY)
- **Live Demo (GitHub Pages)**: [https://Resourcia212.github.io/TRAINFINITY_ACADEMY/](https://Resourcia212.github.io/TRAINFINITY_ACADEMY/)
- **Organization**: Trainfinity Academy, Nashik, Maharashtra

---

© 2026 Trainfinity Academy. All rights reserved.
