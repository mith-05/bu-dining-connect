# BU Dining Connect

A browser-only React + TypeScript app built with Vite, React Router, and styled-components. There is no backend, database, API server, or Next.js dependency.

## Run locally

Use Node.js 24 LTS (recommended), or a version supported by the package.json engines field.

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal (normally http://localhost:5173).

```sh
npm run lint
npm run build
npm run preview
```

The build creates a static site in dist. The preview command serves that build locally.

## Project structure

- src/main.tsx: browser entry point
- src/App.tsx: shared navigation and routes
- src/pages: Home, Menu, Vote, Requests, and Staff pages
- src/components: reusable cards, navigation, and rating controls
- src/data/menus.ts: sample menu data
- src/styles/globals.css: global styles
- public/images: dining hall photos

Dining hall links select the correct hall through the menu URL. Dish ratings are saved in this browser's local storage and survive refreshes. They are not shared between users or devices. Voting, club requests, and staff dashboard remain the existing placeholder pages.

## Existing teammates: switch to this version

Stop any running Next.js development server with Ctrl+C. Save your work in a commit before switching branches.

```sh
git fetch origin
git switch --track origin/feature/react-frontend
npm ci
npm run dev
```

If you already have the migration branch locally, use git switch feature/react-frontend followed by git pull --ff-only instead. After the migration is merged, switch to main and pull before creating your next feature branch. See CONTRIBUTING.md for the team workflow.

## Static hosting

Publish the dist folder. Configure the host to serve index.html for unknown paths so direct visits to /menu, /vote, /requests, and /staff work with browser routing. No credentials or environment variables are required.
