# Portfolio

A modern portfolio website built with React, TypeScript, and Vite. This portfolio features a VS Code-inspired dark theme interface with tabs, sidebar navigation, and multiple sections.

## Features

- 🎨 VS Code-inspired dark theme UI
- 📱 Responsive design
- ⚡ Fast development with Vite
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📦 Modern React with Hooks

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

Build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

Preview the production build:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── App.tsx          # Main application component
│   │   └── components/      # React components
│   │       ├── About.tsx
│   │       ├── Education.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Certifications.tsx
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       ├── Tabs.tsx
│   │       ├── StatusBar.tsx
│   │       └── ui/          # UI component library
│   ├── styles/              # Global styles
│   └── main.tsx             # Application entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Customization

To personalize this portfolio:

1. Update your information in the component files:
   - `src/app/components/About.tsx` - Personal information and skills
   - `src/app/components/Education.tsx` - Education details
   - `src/app/components/Experience.tsx` - Work experience
   - `src/app/components/Projects.tsx` - Projects showcase
   - `src/app/components/Certifications.tsx` - Certifications

2. Update the header title in `src/app/components/Header.tsx`

3. Modify colors and styling in the component files or `src/styles/` directory

## Technologies Used

- React 18.3.1
- TypeScript
- Vite 6.3.5
- Tailwind CSS 4.1.12
- Lucide React (Icons)
- Radix UI (UI Components)

## License

This project is private and personal.

