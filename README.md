# Rose Cosmetics

A modern, family-run beauty and cosmetology web app built with Next.js, React, and Tailwind CSS. Rose Cosmetics offers beauty products, hair services, and educational content for young individuals who would like to learn.

## Features
- Product catalog with categories and search
- Online booking for hair and beauty services
- Family and team showcase
- Testimonials and community stories
- Responsive, glassmorphic UI
- Light/dark theme support (via next-themes)
- Built with modern React (v19), Next.js (v15), and Bun

## Tech Stack
- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Bun](https://bun.sh/) (package manager & runtime)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) (theme switching)
- [Radix UI](https://www.radix-ui.com/) (UI primitives)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed globally

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd rose-cosmetics
   ```
2. Install dependencies:
   ```sh
   bun install
   ```

### Running the Development Server
```sh
bun run dev
```
- The app will be available at [http://localhost:3000](http://localhost:3000)

#### Debug Mode
To run with Node.js inspector for debugging:
```sh
bun run dev
```
This will start Next.js with `NODE_OPTIONS='--inspect'` enabled.

## Project Structure
```
rose-cosmetics/
  app/           # Next.js app directory (pages, layouts, routes)
  components/    # Reusable UI and feature components
  hooks/         # Custom React hooks
  lib/           # Utility functions
  public/        # Static assets (images, icons)
  styles/        # Global and Tailwind CSS
```

## Notes
- Theme switching is handled by `next-themes` and works best when the `ThemeProvider` wraps the `<html>` tag in `app/layout.tsx`.
- If you encounter hydration errors, ensure you are not using browser-only APIs (like `window`, `localStorage`) during SSR, and follow Next.js/React best practices for SSR/CSR consistency.
- For more info on updating dependencies or troubleshooting, see the official docs for [Next.js](https://nextjs.org/docs), [Bun](https://bun.sh/docs), and [Tailwind CSS](https://tailwindcss.com/docs).

## License
MIT 