# Moer OS V1

Moer OS V1 is a simple static web app for Jim to manage business, family, knowledge, and future AI tools from one calm portal.

## What Is Included

- Today home page
- Business page
- Family page
- Knowledge page
- Core Engines page
- Settings page
- Module cards for Knowledge Center, Order Center, Timeline Engine, Family Meal Planner, and Focus Center
- Desktop sidebar navigation
- Mobile bottom navigation
- Universal Search command palette with Cmd + K or Ctrl + K
- Editable Today lists for focus tasks, people waiting, and urgent items
- Basic localStorage for Today data and settings

## Universal Search

Open search with `Cmd + K` on Mac or `Ctrl + K` on Windows.

The search uses mock module data and current Today notes from localStorage. It does not connect to any database or external service.

## Tech

- HTML
- CSS
- JavaScript
- No backend
- No login
- No database
- No external APIs

## How To Open Locally

Open this file directly in your browser:

`/Users/mac/Documents/Codex Workspace/Moer-OS/03-Apps/Moer-OS-V1/index.html`

You can also double-click `index.html` in Finder.

## Connected Modules

Clickable prototypes:

- Knowledge Center: `../Knowledge-Center/index.html`
- Timeline Engine: `../../Core/Timeline/index.html`

Architecture documents:

- Order Center: `../Order-Center/README.md`
- Focus Center: `../Focus-Center/README.md`

Planned inside the shell:

- Family Meal Planner

## How To Publish To GitHub Pages

1. Create a GitHub repository for `Moer-OS`.
2. Push the `Moer-OS` folder to GitHub.
3. In GitHub, open the repository settings.
4. Go to `Pages`.
5. Choose the branch you want to publish, usually `main`.
6. Choose the folder that contains the site.
7. If GitHub Pages cannot publish from this subfolder directly, move the contents of `03-Apps/Moer-OS-V1` to the repository root or use a `/docs` folder.
8. Save the Pages settings.

GitHub will give you a public website link after publishing.

## Notes

This is only V1. It is designed to stay simple and easy to expand later.
