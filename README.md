# bitencourte.github.io

Personal portfolio site for Gabriel Bitencourte, built with [Astro](https://astro.build) — static HTML/CSS/JS, no CMS, bilingual (PT/EN).

## Editing content

All real content lives in two data files — edit these to update the site without touching any markup:

- `src/content/site.ts` — hero, about, experience, education, contact
- `src/content/projects.ts` — the case-study projects (metadata, body text, images)

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the production build locally         |

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it via GitHub Pages. In the repo settings, **Pages > Source** must be set to **GitHub Actions**.
