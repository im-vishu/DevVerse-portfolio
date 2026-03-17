<div align="center">

<img src="public/logo.png" alt="Vishant - Creative Space Logo" width="80" height="80" />

# Vishant - Creative Space

**A visually stunning, fully responsive portfolio website built with React 18 & Three.js**

<br/>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-6C63FF?style=for-the-badge&logoColor=white)](https://reactjs18-3-d-portfolio.vercel.app/)
[![License: MIT](https://img.shields.io/badge/📄%20License-MIT-F7DF1E?style=for-the-badge&logoColor=black)](https://opensource.org/license/mit/)

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=flat-square&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat-square&logo=vercel&logoColor=white)

<br/>

[![Stars](https://img.shields.io/github/stars/ladunjexa/reactjs18-3d-portfolio?style=flat-square&logo=github&label=Stars)](https://github.com/ladunjexa/reactjs18-3d-portfolio/stargazers)
[![Forks](https://img.shields.io/github/forks/ladunjexa/reactjs18-3d-portfolio?style=flat-square&logo=github&label=Forks)](https://github.com/ladunjexa/reactjs18-3d-portfolio/forks)
[![Latest Release](https://img.shields.io/github/v/release/ladunjexa/reactjs18-3d-portfolio?style=flat-square&label=Release&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/releases/tag/v0.1.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff69b4?style=flat-square&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/pulls)
[![Known Vulnerabilities](https://snyk.io/test/github/ladunjexa/reactjs18-3d-portfolio/badge.svg?style=flat-square)](https://snyk.io/test/github/ladunjexa/reactjs18-3d-portfolio)

<br/>

![Vishant - Creative Space Preview](.github/README_ASSETS/3d-portfolio.png)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Deployment](#-deployment)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)
- [License](#-license)

---

## 🧭 Overview

**Vishant - Creative Space** is a modern, production-ready portfolio website that combines immersive 3D visuals with a clean, professional layout. Built with **React 18**, **Three.js**, and **Framer Motion**, it delivers a rich user experience across all screen sizes and devices.

Whether you're a developer, designer, or creative professional — this template provides a compelling foundation to showcase your work, skills, and experience with a memorable first impression.

---

## ✨ Features

- 🎮 **Interactive 3D Models** — Animated desktop PC and rotating Earth built with Three.js & WebGL
- 🌌 **Dynamic Star Field** — Immersive canvas-based star background
- 🎞️ **Smooth Animations** — Scroll-triggered transitions and micro-interactions powered by Framer Motion
- 📬 **Working Contact Form** — Email delivery via EmailJS (no backend required)
- 🧩 **Modular Architecture** — Clean component structure with TypeScript types
- 📱 **Fully Responsive** — Optimized layout for mobile, tablet, and desktop
- ⚡ **Blazing Fast** — Vite-powered development and production builds
- 🔍 **Type-Safe** — End-to-end TypeScript support

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | React 18 |
| **Language** | TypeScript |
| **3D Rendering** | Three.js + @react-three/fiber |
| **Animations** | Framer Motion |
| **Styling** | Tailwind CSS |
| **Build Tool** | Vite |
| **Email Service** | EmailJS |
| **Linting** | ESLint + Prettier |
| **Deployment** | Vercel |

![Technologies](https://skillicons.dev/icons?i=ts,react,threejs,tailwind,vite,vercel)

---

## 📁 Project Structure

<details>
<summary>Click to expand the full folder structure</summary>

```
reactjs18-3d-portfolio/
├── public/
│   ├── desktop_pc/             # 3D PC model assets (GLTF)
│   │   ├── textures/
│   │   ├── scene.bin
│   │   └── scene.gltf
│   ├── planet/                 # 3D Earth model assets (GLTF)
│   │   ├── textures/
│   │   ├── scene.bin
│   │   └── scene.gltf
│   ├── logo.png
│   └── logo.svg
│
├── src/
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # Application entry point
│   ├── globals.css             # Global styles
│   ├── vite.env.d.ts
│   │
│   ├── assets/                 # Static assets (images, icons)
│   │   ├── company/
│   │   ├── tech/
│   │   └── index.ts
│   │
│   ├── components/
│   │   ├── atoms/
│   │   │   └── Header.tsx
│   │   ├── canvas/             # Three.js 3D components
│   │   │   ├── Ball.tsx
│   │   │   ├── Computers.tsx
│   │   │   ├── Earth.tsx
│   │   │   ├── Stars.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Loader.tsx
│   │   │   └── Navbar.tsx
│   │   └── sections/           # Page sections
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Experience.tsx
│   │       ├── Feedbacks.tsx
│   │       ├── Hero.tsx
│   │       ├── Tech.tsx
│   │       ├── Works.tsx
│   │       └── page.tsx
│   │
│   ├── constants/
│   │   ├── config.ts           # Site configuration
│   │   ├── styles.ts           # Shared style constants
│   │   └── index.ts
│   │
│   ├── hoc/
│   │   ├── SectionWrapper.tsx  # Higher-order component for sections
│   │   └── index.ts
│   │
│   ├── utils/
│   │   └── motion.ts           # Framer Motion animation variants
│   │
│   └── types/
│       └── index.d.ts          # Global type definitions
│
├── .env                        # Environment variables (git-ignored)
├── .eslintrc.cjs
├── .prettierrc.cjs
├── index.html
├── package.json
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.js
```

</details>

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed on your machine before proceeding:

| Tool | Version |
|------|---------|
| Node.js | `>= 16.x` |
| npm | `>= 8.x` |
| Git | Latest |

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/ladunjexa/reactjs18-3d-portfolio.git
cd reactjs18-3d-portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the root directory (see [Environment Variables](#environment-variables) below).

**4. Start the development server**

```bash
npm run dev
```

**5. Open your browser**

Navigate to [http://localhost:5173](http://localhost:5173) to see the app running locally.

---

### Environment Variables

This project uses EmailJS to handle contact form submissions without a backend. You will need to create a free account at emailjs.com and obtain the following credentials.

Create a `.env` file in the root of the project:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_ACCESS_TOKEN=your_access_token
```

> ⚠️ **Never commit your `.env` file to version control.** It is already included in `.gitignore`.

To obtain these values:
1. Sign up at emailjs.com
2. Create an **Email Service** → copy the **Service ID**
3. Create an **Email Template** → copy the **Template ID**
4. Navigate to **Account** → **API Keys** → copy your **Public Key** (Access Token)

---

### Available Scripts

All scripts are defined in `package.json`:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local development server at `localhost:5173` |
| `npm run build` | Create an optimized production build in `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run ts:check` | Run TypeScript type-checking |

---

## ☁️ Deployment

### Deploy on Vercel *(Recommended)*

The fastest way to deploy. Click below to instantly clone and deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Freactjs18-3d-portfolio)

> Be sure to add your environment variables in the Vercel project settings.

---

### Deploy on Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/reactjs18-3d-portfolio)

---

### Manual Production Build

```bash
npm run build
```

This outputs a static site to the `./dist/` directory which can be hosted on any static file server.

---

## 💎 Acknowledgements

Special thanks to the open-source tools and resources that made this project possible:

- **Three.js** — 3D graphics engine
- **React Three Fiber** — React renderer for Three.js
- **Framer Motion** — Animation library
- **Tailwind CSS** — Utility-first CSS framework
- **React Vertical Timeline Component** — Timeline UI
- **React Parallax Tilt** — Tilt animation
- **Maath** — Math helpers for 3D
- **EmailJS** — Client-side email delivery
- **JavaScript Mastery** — Project inspiration

---

## 📬 Contact

<div align="center">

**Vishant** — Vishant - Creative Space

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect%20with%20me-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/vishanttchaudhary)
[![Gmail](https://img.shields.io/badge/Gmail-Send%20a%20Mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vishantchaudharyy@gmail.com)

</div>

---

## 📄 License

This project is open-source and available under the MIT License.  
See the LICENSE file for full details.

---

<div align="center">

Made with ❤️ by **Vishant - Creative Space**

⭐ **If you found this project helpful, please consider giving it a star!** ⭐

</div>