# Mohammad Mazhum — Portfolio

A dark, terminal/IDE-themed personal portfolio built with React + Tailwind CSS.

## Features
- Typewriter-style terminal hero intro
- Skills, projects, experience, education, and certifications sections
- Hover-triggered live preview mockups on each project card
- Fully responsive, dark theme throughout
- Profile photo embedded directly in the component (also included as `src/profile.jpg`)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build will be output to the `dist/` folder — you can deploy
this to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
mazhum-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx        # React entry point
    ├── Portfolio.jsx   # Main portfolio component
    ├── profile.jpg     # Profile photo (also embedded as base64 in Portfolio.jsx)
    └── index.css       # Tailwind imports
```

## Customizing
All content (skills, projects, experience, education) lives in plain
JS arrays/objects near the top of `src/Portfolio.jsx` — edit those to update
the site.
