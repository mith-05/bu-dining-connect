# Working together on BU Dining Connect

## First-time setup

Accept your GitHub invitation, then clone this repository in WebStorm using **Get from Version Control**. Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables are currently required by the app. Keep any future credentials in local environment files and share them privately; never commit them.

## Each feature or fix

Start with an up-to-date main branch and create a branch for your change:

```sh
git switch main
git pull --ff-only
git switch -c feature/short-description
```

Make your changes, then check them:

```sh
npm run lint
npm run build
```

Review the changed files before staging. Commit only the files you intended to share, then push your branch:

```sh
git status
git add path/to/changed-file
git commit -m "Describe the change"
git push -u origin HEAD
```

Open a pull request into main on GitHub and ask a teammate to review it. Merge after review, then update your local main branch before starting the next change. Avoid direct pushes to main and never force-push main.

Coordinate before editing the same files. If Git reports a conflict, resolve it together and check the app before merging.

## Files to keep private or local

Environment files, private keys, node_modules, .next, build output, and WebStorm settings are excluded by .gitignore. The package-lock.json file is shared so everyone installs the same dependency versions.
