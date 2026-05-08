# Jay Varshney — Portfolio

A sleek, modern developer portfolio built with React and Vite, featuring smooth animations, a dark glassmorphic design, and fully responsive layouts.

---

## ✨ Features

- **Dark Glassmorphic UI** — Custom design system with glass surfaces, subtle grid backgrounds, and radial gradients
- **Smooth Animations** — Page transitions and scroll-reveal effects powered by Framer Motion
- **Interactive Tech Stack** — Animated skill pills with original brand-colored icons via Simple Icons CDN
- **Project Showcase** — Hover-interactive project cards with live demo and GitHub links
- **Scroll Progress Bar** — Animated top progress indicator that tracks page scroll
- **Active Section Tracking** — Navbar highlights the current section using IntersectionObserver
- **Fully Responsive** — Optimized layouts for desktop, tablet, and mobile screens
- **SEO Optimized** — Semantic HTML, proper heading hierarchy, and meta tags

---

## 🛠️ Tech Stack

| Category   | Technologies                                      |
| ---------- | ------------------------------------------------- |
| Framework  | React 19, Vite 8                                  |
| Styling    | Tailwind CSS v4, custom CSS utilities              |
| Animations | Framer Motion                                     |
| Icons      | Lucide React, Simple Icons CDN                    |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── projects/          # Project screenshot images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation with active section tracking
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Reveal.jsx         # Scroll-reveal animation wrapper
│   │   ├── ScrollProgress.jsx # Top scroll progress bar
│   │   └── SectionHeader.jsx  # Reusable section header component
│   ├── sections/
│   │   ├── Hero.jsx           # Hero section with animated roles
│   │   ├── About.jsx          # About me with stats cards
│   │   ├── Stack.jsx          # Tech stack with brand icons
│   │   ├── Projects.jsx       # Project showcase grid
│   │   ├── Achievements.jsx   # Milestones timeline
│   │   └── Contact.jsx        # Contact form and social links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Design system and custom utilities
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jayvar03/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 📬 Contact

- **GitHub:** [github.com/jayvar03](https://github.com/jayvar03)
- **LinkedIn:** [linkedin.com/in/jayvarshney](https://www.linkedin.com/in/jayvarshney/)

---
