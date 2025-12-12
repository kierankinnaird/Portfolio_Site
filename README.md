# Portfolio Site

Personal portfolio website showcasing my projects, skills, and experience as a Computer Science student and developer.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kierankinnaird/Portfolio_Site.git
cd Portfolio_Site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── SiteNav.tsx      # Navigation component
│   ├── ProjectCard.tsx  # Project card component
│   ├── Section.tsx      # Section wrapper component
│   └── Footer.tsx       # Footer component
├── data/
│   └── projects.ts      # Projects data
├── App.tsx              # Main application component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## ✨ Features

- **Modern Design** - Dark theme with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Layout** - Works on all device sizes
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Project Showcase** - Data-driven project display
- **Skills Section** - Organized by Frontend, Backend, and Tools
- **Contact Links** - GitHub, LinkedIn, and WhatsApp

## 📝 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **Projects** - Showcase of featured projects
3. **About/Skills** - Personal introduction and technical skills
4. **Contact** - Social media and contact links
5. **Footer** - Credits and copyright

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["React", "TypeScript"],
  github: "https://github.com/username/project",
  learned: ["What you learned"],
  featured: true
}
```

### Updating Contact Links

Edit the contact section in `src/App.tsx` to update your social media links.

## 📄 License

ISC

---

Built by **Kieran Kinnaird** — [kinnaird.dev](https://kinnaird.dev)
