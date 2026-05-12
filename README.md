# Website1

A sample static site built with [Astro](https://astro.build), pre-configured for **GitHub Pages** deployment.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── blog/
│           └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command         | Action                                      |
| --------------- | ------------------------------------------- |
| `npm install`   | Install dependencies                        |
| `npm run dev`   | Start dev server at `localhost:4321`         |
| `npm run build` | Build production site to `./dist/`           |
| `npm run preview` | Preview the build locally                 |

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically builds and deploys to GitHub Pages on every push to `main`.

### Setup

1. Go to your repo **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site will deploy automatically

### Configuration

Update `astro.config.mjs` with your actual GitHub username and repo name:

```js
export default defineConfig({
  site: 'https://<YOUR_USERNAME>.github.io',
  base: '/<YOUR_REPO_NAME>',
});
```