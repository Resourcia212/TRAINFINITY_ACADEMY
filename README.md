# 🛡️ TRAINFINITY ACADEMY

> **"Professional Training for Safer, Stronger Workplaces."**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-navy.svg?style=flat)]()

**Trainfinity Academy** is a modern, high-performance web platform built for a premier professional training institution based in Nashik, Maharashtra. The academy specializes in flagship **Security & Safety Training**, **POSH & POCSO Legal Compliance**, **CPR / Basic Life Support (BLS)**, **Fire & Disaster Evacuation Drills**, **Corporate HRD & Soft Skills**, and **Industry-Specific Training Programs**.

---

## 📑 Table of Contents

- [Key Highlights & Features](#-key-highlights--features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Prerequisites](#-prerequisites)
- [Local Installation & Setup Guide](#-local-installation--setup-guide)
- [Available NPM Scripts](#-available-npm-scripts)
- [Deployment Guide](#-deployment-guide)
- [Contact & Academy Information](#-contact--academy-information)

---

## ✨ Key Highlights & Features

1. **Frosted Glassmorphism UI & Navigation**:
   - Modern glassmorphism sticky header with pill capsule navigation, active route highlighting, and emergency direct-dial CTA.
2. **Interactive Hero Visual Showcase**:
   - Dynamic 3-domain tab switcher (**POSH & HR**, **Security Training**, and **CPR & Safety**) powered by Framer Motion with smooth zoom-in crossfade transitions.
3. **Comprehensive Specialized Services Catalog**:
   - 10 full-service blueprints with dynamic routing (`/services/:slug`), category filtering, keyword search, curriculum scopes, and target audience breakdowns.
4. **Authentic Training Gallery (22 Real Photographs)**:
   - High-resolution real-world documentation covering:
     - Official recognition at the **Maharashtra Labour Commissionerate** (*नाशिक विभाग*).
     - 100+ Security Guard Convocation & Certificate Felicitations.
     - Medicover Hospitals staff patient care & security training.
     - Corporate Boardroom POSH & Internal Committee workshops.
     - Hands-on floor CPR & recovery drills.
     - Fullscreen interactive lightbox inspector.
5. **Verified Credentials & Institutional Documentation**:
   - **Nashik District Security Guard Board (नाशिक जिल्हा सुरक्षा रक्षक मंडळ)** official Marathi training certificate.
   - **TruIntel Reform Foundation** certified POSH Train-the-Trainer credential.
   - Interactive document modal with reference numbers, key points, and signatory details.
6. **Executive Proposal & Enquiry Form**:
   - Built with React Hook Form + Zod schema validation, customized dropdown chevrons, leading contextual icons, and instant confirmation toast notifications.
7. **Responsive & Accessible**:
   - Fully optimized for desktop, tablet, and mobile displays with WCAG AAA color contrast tokens and smooth scroll behaviors.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite 5](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Custom CSS Utilities |
| **Animations & Transitions** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Form & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + `@hookform/resolvers` |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Notifications** | [Sonner Toast](https://sonner.emilkowal.ski/) |

---

## 📂 Project Architecture

```plaintext
TRAINFINITY_ACADEMY/
├── public/
│   ├── images/
│   │   ├── credentials/       # Verified government board & trainer certificates
│   │   ├── gallery/           # 22 Authentic real-world training drill photographs
│   │   ├── hero/              # Hero showcase banners and infographics
│   │   └── logo/              # Trainfinity Academy logos & brand assets
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/            # Reusable UI (Container, SectionHeading, Lightbox, Modal, etc.)
│   │   ├── layout/            # Navbar with Glassmorphism, Footer
│   │   └── sections/          # Modular homepage sections (Hero, TrustStrip, Services, etc.)
│   ├── data/                  # Centralized structured datasets
│   │   ├── credentials.ts     # Official certificates and verification records
│   │   ├── gallery.ts         # 22 Photograph items with categories and captions
│   │   ├── services.ts        # 10 Specialized service blueprints & scopes
│   │   ├── siteContent.ts     # Contact details, address, social links, academy info
│   │   └── trainingPrograms.ts# Curriculum catalog
│   ├── pages/                 # Route pages
│   │   ├── Home.tsx           # Homepage
│   │   ├── About.tsx          # Academy overview & methodology
│   │   ├── Services.tsx       # Specialized services catalog with search & filter
│   │   ├── ServiceDetail.tsx  # Dynamic service blueprint details
│   │   ├── Security.tsx       # Flagship security operations page
│   │   ├── Training.tsx       # Training programs catalog
│   │   ├── Gallery.tsx        # Authentic training photo gallery with lightbox
│   │   ├── Credentials.tsx    # Government certificates & verified documentation
│   │   ├── Contact.tsx        # Executive service enquiry form & office location
│   │   └── NotFound.tsx       # 404 page
│   ├── lib/                   # Utility helpers (cn class merger)
│   ├── App.tsx                # App routing configuration
│   ├── main.tsx               # React DOM entrypoint
│   └── index.css              # Global design tokens, typography, glassmorphism CSS
├── index.html                 # HTML template with SEO meta tags & font imports
├── package.json               # NPM dependencies and scripts
├── tailwind.config.js         # Custom colors, fonts, shadows, and radii
├── tsconfig.json              # TypeScript compiler options
└── vite.config.ts             # Vite build configuration with alias '@'
```

---

## 💻 Local Installation & Setup Guide

Follow these simple steps to run the website locally on your laptop (Windows, macOS, or Linux).

### 1. Prerequisites

Make sure you have **Node.js** and **Git** installed on your computer:
- **Node.js**: `v18.0.0` or higher (Download from [nodejs.org](https://nodejs.org/))
- **NPM**: Comes bundled with Node.js (verify via `npm -v`)
- **Git**: (Download from [git-scm.com](https://git-scm.com/))

Verify your installation by running in your terminal/command prompt:
```bash
node -v
npm -v
git -v
```

---

### 2. Clone the Repository

Open your terminal or PowerShell and clone the project:

```bash
git clone https://github.com/Resourcia212/TRAINFINITY_ACADEMY.git
```

Navigate into the project directory:
```bash
cd TRAINFINITY_ACADEMY
```

---

### 3. Install Dependencies

Install all required NPM packages:

```bash
npm install
```

---

### 4. Start the Local Development Server

Run the development server:

```bash
npm run dev
```

You will see output similar to:
```bash
  VITE v5.4.21  ready in 430 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

Open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📜 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server on `http://localhost:3000` with instant Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript compilation (`tsc`) and builds optimized production bundles into the `dist/` directory. |
| `npm run deploy` | Builds the production app, creates SPA 404 fallback, and publishes to the `gh-pages` branch on GitHub. |
| `npm run preview` | Locally previews the production build from `dist/` on a local web server. |

---

## 🚀 Deployment Guide

### Deploy to GitHub Pages (Live)

1. Run the one-command deployment script:
   ```bash
   npm run deploy
   ```
2. Go to your GitHub repository: [Settings → Pages](https://github.com/Resourcia212/TRAINFINITY_ACADEMY/settings/pages).
3. Under **Branch**, select **`gh-pages`** and folder **`/(root)`**, then click **Save**.
4. Your website will be live at:
   👉 **[https://Resourcia212.github.io/TRAINFINITY_ACADEMY/](https://Resourcia212.github.io/TRAINFINITY_ACADEMY/)**

---

### Deploy to Vercel

1. Push your latest changes to GitHub.
2. Log in to [Vercel](https://vercel.com).
3. Click **"New Project"** and import the `Resourcia212/TRAINFINITY_ACADEMY` repository.
4. Keep the default settings (**Framework Preset: Vite**).
5. Click **"Deploy"**. Your site will be live within seconds with automated SSL and global CDN.

### Deploy to Netlify

1. Log in to [Netlify](https://netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select GitHub and choose `TRAINFINITY_ACADEMY`.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## 🏢 Contact & Academy Information

**TRAINFINITY ACADEMY**  
*Professional Training for Safer, Stronger Workplaces.*

- **📍 Address**: Flat No. 02, Vatsallydham, Indira Nagar, Opp. Day Care School, Kanifnath Nagar, Near Rajiv Nagar, Nashik – 422009, Maharashtra, India
- **📞 Direct Phone**: `+91 90110 65099` (090110 65099)
- **✉️ Official Email**: `info@trainfinityacademy.com`
- **📸 Instagram**: [@trainfinityacademy](https://instagram.com/trainfinityacademy)
- **🌐 Website**: [https://github.com/Resourcia212/TRAINFINITY_ACADEMY](https://github.com/Resourcia212/TRAINFINITY_ACADEMY)

---

© 2026 Trainfinity Academy. All rights reserved.
