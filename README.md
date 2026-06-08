# HealthPath

A patient-facing healthcare platform for managing chronic conditions — featuring personalized meal planning, a provider network directory, and a health resource library. Built as a responsive SPA with light and dark modes.

**Live:** [dillguill.github.io/healthpath](https://dillguill.github.io/healthpath/)

---

## Features

- **Meal Planner** — Quick mode generates a 7-day plan from a single health goal. Advanced mode filters by condition (CKD, hypertension, diabetes, heart disease), dietary preference, nutrients to limit, and allergens. 88+ meals across all categories.
- **Dashboard** — Activity feed, health stats, quick actions, and personalized tips.
- **Auth** — Sign up, log in, and log out with role selection (patient, provider, caregiver). Session persists across page refreshes.
- **Light / Dark mode** — Sage Clinical theme: sage sidebar, warm white panels. Persisted to localStorage with flash prevention.
- **Responsive** — Mobile drawer (slides from right), desktop fixed sidebar, adaptive topbar.

## Tech

- React 18 + Vite
- Tailwind CSS v3 with CSS custom property theming
- React Router v6 (`basename` for GitHub Pages subpath)
- localStorage auth (demo — no backend)

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173/healthpath/`.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to the `gh-pages` branch. Served via GitHub Pages at the live link above.
