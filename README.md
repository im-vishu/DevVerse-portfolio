<div align="center">

<img src="public/logo.png" alt="Vishant - Creative Space" width="90" height="90" />

# Vishant — Creative Space

### My corner of the internet. Built with code, powered by creativity.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-6C63FF?style=for-the-badge&logoColor=white)](https://devverse-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-View%20Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/im-vishu/DevVerse-portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge&logo=opensourceinitiative&logoColor=black)](https://opensource.org/license/mit/)

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
- [Available Scripts](#-available-scripts)
- [Portfolio Sections](#-portfolio-sections)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)
- [License](#-license)

---

## 🧭 Overview

**Vishant — Creative Space** is a fully responsive, production-ready 3D portfolio website that blends immersive WebGL visuals with smooth, scroll-driven animations. Built from scratch with modern technologies, every section is designed to feel alive — from the interactive desktop scene on load, to the rotating Earth in the contact section, to the beautiful education timeline and one-click resume download.

This isn't just a template. It's a complete, fully-typed, production-ready portfolio solution.

**Built with:** React 18 • TypeScript 5.3.3 • Three.js • Framer Motion • Tailwind CSS • Vite

---

## ✨ Features

- 🎮 **Interactive 3D Models** — Animated desktop PC and rotating Earth rendered in WebGL
- 🌌 **Dynamic Star Field** — Generative canvas-based animated background
- 🎞️ **Scroll-Driven Animations** — Every section reveals with Framer Motion transitions
- 🎓 **Education Timeline** — Professional education section with smooth animations
- 📄 **Resume Download** — One-click PDF download button in navbar
- 🔗 **Social Profiles** — GitHub and LinkedIn links prominently displayed
- 📬 **Smart Contact Form** — Form validation, error handling, rate limiting, zero backend needed
- 🧩 **Fully Modular** — Clean, typed component architecture; easy to extend
- 📱 **Pixel-Perfect Responsive** — Looks great on every screen size (mobile, tablet, desktop)
- ⚡ **Instant Dev Experience** — Vite HMR makes iteration blazingly fast
- 🔐 **Strictly Typed** — End-to-end TypeScript with zero `any` shortcuts
- ♿ **Accessible** — ARIA labels, semantic HTML, keyboard navigation

---

## 🛠 Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Frontend Framework** | React | 18.2.0 |
| **Language** | TypeScript | 5.3.3 |
| **3D Rendering** | Three.js | Latest |
| **3D React Integration** | @react-three/fiber | Latest |
| **3D Utilities** | @react-three/drei | Latest |
| **Animations** | Framer Motion | Latest |
| **Styling** | Tailwind CSS | 3.x |
| **Utilities** | Tailwind CSS Merge | Latest |
| **Build Tool** | Vite | 8.0.0 |
| **Email Service** | EmailJS | Latest |
| **Parallax Effects** | react-parallax-tilt | Latest |
| **Timeline** | react-vertical-timeline-component | Latest |
| **Linting** | ESLint | Latest |
| **Code Formatting** | Prettier | Latest |
| **Deployment** | Vercel / Netlify | - |

---

## 📁 Project Structure

```
DevVerse-portfolio/
├── public/
│   ├── desktop_pc/                 # 3D PC model (GLTF + textures)
│   ├── planet/                     # 3D Earth model (GLTF + textures)
│   ├── resume.pdf                  # Your resume (replace with yours)
│   └── logo.svg                    # Brand logo
│
├── src/
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # React entry point
│   ├── index.css                   # Global styles
│   │
│   ├── assets/                     # Images, icons, logos
│   │   ├── index.ts
│   │   ├── logo.svg
│   │   ├── github.png
│   │   ├── linkedin.png
│   │   └── ... (company & tech logos)
│   │
│   ├── components/
│   │   ├── atoms/                  # Small reusable UI pieces
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── canvas/                 # All Three.js / WebGL components
│   │   │   ├── Ball.tsx            # Rotating tech skill balls
│   │   │   ├── Computers.tsx       # 3D desktop scene
│   │   │   ├── Earth.tsx           # 3D rotating Earth
│   │   │   ├── Stars.tsx           # Star field background
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navigation + resume button
│   │   │   ├── Loader.tsx          # Canvas loader
│   │   │   └── index.ts
│   │   │
│   │   ├── sections/               # Main portfolio sections
│   │   │   ├── Hero.tsx            # Landing section with 3D PC
│   │   │   ├── About.tsx           # About me + services
│   │   │   ├── Experience.tsx      # Work experience timeline
│   │   │   ├── Education.tsx       # Education timeline ✨ NEW
│   │   │   ├── Tech.tsx            # Tech skills carousel
│   │   │   ├── Works.tsx           # Projects showcase
│   │   │   ├── Feedbacks.tsx       # Testimonials
│   │   │   ├── Contact.tsx         # Contact form + Earth
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts
│   │
│   ├── constants/
│   │   ├── config.ts               # Site configuration & social links
│   │   ├── index.ts                # Data (experiences, projects, etc)
│   │   ├── styles.ts               # Tailwind utility classes
│   │   └── colors.ts               # Color palette
│   │
│   ├── hoc/
│   │   ├── SectionWrapper.tsx      # Section animation HOC
│   │   └── index.ts
│   │
│   ├── utils/
│   │   ├── motion.ts               # Framer Motion animation variants
│   │   └── index.ts
│   │
│   ├── types/
│   │   └── index.d.ts              # Global TypeScript definitions
│   │
│   └── hooks/                       # Custom React hooks (if any)
│
├── .env.example                    # Environment variables template
├── .env                            # Environment variables (git-ignored)
├── .eslintrc.cjs                   # ESLint configuration
├── .prettierrc                      # Prettier configuration
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Project dependencies
├── package-lock.json               # Locked dependency versions
├── index.html                      # HTML entry point
├── README.md                       # This file
└── LICENSE                         # MIT License
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** `>= 18.0.0` (check with `node --version`)
- **npm** `>= 9.0.0` (check with `npm --version`)
- **Git** (for version control)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/im-vishu/DevVerse-portfolio.git
cd DevVerse-portfolio
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Set Up Environment Variables

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Then fill in your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_ACCESS_TOKEN=your_access_token_here
```

**How to get EmailJS credentials:**
1. Visit [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an Email Service
4. Create an Email Template
5. Copy your Service ID, Template ID, and Public Key
6. Paste them in your `.env` file

#### 4. Start the Development Server

```bash
npm run dev
```

The portfolio will open at `http://localhost:5173/`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Vite HMR |
| `npm run build` | Create production-optimized build in `dist/` |
| `npm run preview` | Preview production build locally before deployment |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Automatically fix ESLint issues |
| `npm run ts:check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

### Example Development Workflow

```bash
# Start dev server
npm run dev

# In another terminal, check for TypeScript errors
npm run ts:check

# Before committing, fix linting issues
npm run lint:fix
```

---

## 🎯 Portfolio Sections

### 1. **Hero Section** 🏠
- Full-screen landing section
- 3D animated desktop PC model
- Your name and headline
- Download resume button ✨
- GitHub & LinkedIn social links ✨
- Smooth scroll indicator

### 2. **About Section** 📝
- Your introduction
- Key skills/services
- Parallax tilt cards
- Responsive grid layout

### 3. **Experience Section** 💼
- Vertical timeline of work experiences
- Company name, role, duration
- Key responsibilities as bullet points
- Smooth animations on scroll

### 4. **Education Section** 🎓 ✨ NEW
- Vertical timeline of education
- School/University name
- Degree and field of study
- Duration and achievements
- Professional formatting

### 5. **Tech Skills Section** 💻
- Rotating 3D skill balls
- Technology logos
- Smooth animations
- Responsive grid

### 6. **Works/Projects Section** 🎨
- Project cards with parallax tilt
- Project image, title, description
- Technology tags with gradient colors
- GitHub links
- Responsive gallery

### 7. **Testimonials Section** ⭐
- Client feedback showcase
- Profile images
- Company and designation
- Smooth carousel animations

### 8. **Contact Section** 📬
- Contact form with validation ✨
- Real-time error messages ✨
- Success confirmation ✨
- Rate limiting to prevent spam ✨
- 3D rotating Earth model
- Direct email link

---

## 🔧 Customization Guide

### Update Your Information

#### 1. **Personal Data** (`src/constants/config.ts`)

```typescript
export const config = {
  html: {
    title: "Your Name — Creative Space",
    fullName: "Your Full Name",
    email: "your.email@gmail.com",
  },
  hero: {
    name: "Your Name",
    p: ["Your headline here", "Your second headline here"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: { span: "Your Name", placeholder: "What's your name?" },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: { span: "Your Message", placeholder: "What do you want to say?" },
    },
  },
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    resumeUrl: "/resume.pdf",
  },
};
```

#### 2. **Education Data** (`src/constants/index.ts`)

Add your education history:

```typescript
const education: TEducation[] = [
  {
    title: "Your University Name",
    company_name: "Institution Name",
    icon: university_icon, // or use any icon from assets
    iconBg: "#383E56",
    date: "Aug 2020 - Jun 2024",
    points: [
      "Bachelor of Technology in Computer Science",
      "CGPA: 8.5/10",
      "Active in coding clubs and hackathons",
      "Published 2 research papers",
    ],
  },
  // Add more education entries...
];
```

#### 3. **Experience Data** (`src/constants/index.ts`)

```typescript
const experiences: TExperience[] = [
  {
    title: "Your Job Title",
    company_name: "Company Name",
    icon: company_icon,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developed and maintained React applications",
      "Collaborated with cross-functional teams",
      "Improved application performance by 40%",
    ],
  },
  // Add more experiences...
];
```

#### 4. **Projects Data** (`src/constants/index.ts`)

```typescript
const projects: TProject[] = [
  {
    name: "Project Name",
    description: "Brief description of your project",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: project_image,
    sourceCodeLink: "https://github.com/username/project",
  },
  // Add more projects...
];
```

#### 5. **Upload Your Resume**

Replace `public/resume.pdf` with your actual resume file:

```bash
# On Mac/Linux
cp ~/Downloads/your-resume.pdf public/resume.pdf

# On Windows (PowerShell)
Copy-Item "C:\Users\YourUsername\Downloads\your-resume.pdf" "public\resume.pdf"
```

#### 6. **Update Social Links**

The social links are automatically picked up from `config.ts`:

```typescript
socialLinks: {
  github: "https://github.com/im-vishu",      // ✅ Update this
  linkedin: "https://linkedin.com/in/vishant", // ✅ Update this
  resumeUrl: "/resume.pdf",                    // ✅ Your resume path
}
```

---

## ☁️ Deployment

### Deploy to Vercel (Recommended)

**One-click deployment:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fim-vishu%2FDevVerse-portfolio)

**Or manually:**

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Add environment variables from your `.env` file
6. Click "Deploy"

### Deploy to Netlify

**One-click deployment:**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/im-vishu/DevVerse-portfolio)

**Or manually:**

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Add environment variables
8. Click "Deploy"

### Environment Variables for Deployment

Make sure to set these in your hosting platform's dashboard:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_ACCESS_TOKEN=your_access_token
```

---

## 💎 Acknowledgements

This portfolio stands on the shoulders of incredible open-source projects:

| Tool | Role |
|---|---|
| **Three.js** | 3D rendering engine |
| **@react-three/fiber** | React renderer for Three.js |
| **@react-three/drei** | Useful Three.js helpers |
| **Framer Motion** | Animation library |
| **Tailwind CSS** | Utility-first CSS framework |
| **Vite** | Lightning-fast build tool |
| **EmailJS** | Backend-free email service |
| **React Vertical Timeline** | Timeline component |
| **React Parallax Tilt** | Parallax tilt effect |
| **TypeScript** | Type safety |
| **ESLint** | Code quality |
| **Prettier** | Code formatting |

Special thanks to the React and web development communities for the inspiration and guidance.

---

## 📬 Contact

<div align="center">

**Have a project in mind? Let's build something amazing together!**

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-im--vishu-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/im-vishu)
&nbsp;&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vishant%20Chaudhary-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vishant-chaudhary)
&nbsp;&nbsp;
[![Email](https://img.shields.io/badge/Email-vishantchaudharyy@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vishantchaudharyy@gmail.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute this code for personal and commercial projects.

See the [LICENSE](https://github.com/im-vishu/DevVerse-portfolio/blob/main/LICENSE) file for more details.

---

## 🌟 Support

If this project helped you, please consider:

- ⭐ **Star this repository** — it means the world!
- 🔗 **Share it with others** — help fellow developers discover it
- 🤝 **Contribute improvements** — open pull requests for enhancements
- 💬 **Provide feedback** — suggestions make this project better

---

<div align="center">

### Crafted with ❤️ by **Vishant Chaudhary**

Built with passion, code, and lots of ☕

[🔝 Back to Top](#)

</div>