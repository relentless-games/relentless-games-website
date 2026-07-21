# Relentless Games Website

Landing page for **Relentless Games** — a game studio building for Meta Quest.

Built with React, Vite, GSAP (ScrollTrigger), and react-player.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at **http://localhost:5173/**.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

## Deployment

### GitHub Pages (primary)

Pushing to `master` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

**Prerequisites for initial setup:**
1. In your GitHub repo, go to **Settings > Pages** and set the source to **GitHub Actions**
2. Add your custom domain in **Settings > Pages > Custom domain** (e.g. `relentless.games`)
3. Create a DNS `CNAME` record pointing your domain to `<user>.github.io`
4. Update `public/CNAME` with your actual domain name

### Azure Static Web Apps (alternative)

The `staticwebapp.config.json` handles SPA routing fallback and security headers for Azure SWA.
