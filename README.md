# Muhammad Mehroz Arif - 3D Portfolio

A high-end, interactive 3D portfolio built with Next.js 16, Tailwind CSS v4, and React Three Fiber.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + Glassmorphism
- **Animations:** Framer Motion
- **3D Graphics:** React Three Fiber (Three.js) & Drei
- **Deployment:** Vercel (Ready)

## Features

- **Immersive Hero Section:** Interactive 3D geometric core that reacts to cursor movement.
- **Glassmorphism UI:** Modern dark mode aesthetic with blurred glass effects and vibrant neon accents.
- **Bento Grid:** Modular layout for Skills and Experience.
- **Project Showcase:** Horizontal scroll gallery with hover reveals.
- **Performance:** Optimized 3D assets and static generation.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it.

3.  **Build for production:**
    ```bash
    npm run build
    npm run start
    ```

## Customization

- **Content:** Edit sections in `src/components/sections/`.
- **Colors:** Adjust variables in `src/app/globals.css`.
- **3D Model:** Modify `src/components/3d/GeometricCore.tsx`.
