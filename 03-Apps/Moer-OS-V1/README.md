# Moer OS V1

Moer OS V1 is a simple static web app for Jim to manage business, family, knowledge, and future AI tools from one calm portal.

Version 0.1 connects the main Moer OS areas into one clickable local shell.

## What Is Included

- Today page
- Order Center page
- Customer Center page
- Supplier Center page
- Quotation Center page
- Knowledge Center page
- Timeline Engine page
- Family Meal Planner page
- Settings page
- Module cards for Today, Customer Center, Knowledge Center, Order Center, Timeline Engine, Family Meal Planner, and Focus Center
- Desktop sidebar navigation
- Mobile bottom navigation
- Universal Search command palette with Cmd + K or Ctrl + K
- Editable Today lists for focus tasks, people waiting, and urgent items
- Real Order Center V1 inside this shell with dashboard cards, local order list, create/edit/delete form, filters, detail view, status progress, and manual timeline events
- Customer Center V2 with dashboard cards, searchable customer memory, filters, follow-up system, related orders, and manual timeline events
- Supplier Center V1 with dashboard cards, supplier memory, filters, reliability notes, related orders, and manual timeline events
- Quotation Center V1 with dashboard cards, searchable quotation list, filters, create/edit/delete form, customer and supplier links, and detail view
- Order customer selection from saved Customer Center records
- Order supplier suggestions from saved Supplier Center records
- Quotation customer selection from saved Customer Center records
- Quotation supplier suggestions from saved Supplier Center records
- Editable local meal planner
- Basic localStorage for Today data, customers, orders, meal ideas, and settings

## Universal Search

Open search with `Cmd + K` on Mac or `Ctrl + K` on Windows.

The search uses mock module data plus current Today notes, customers, suppliers, quotations, and orders from localStorage. It does not connect to any database or external service.

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

- Order Center: inside this shell
- Customer Center: inside this shell
- Supplier Center: inside this shell
- Quotation Center: inside this shell
- Knowledge Center: `../Knowledge-Center/index.html`
- Timeline Engine: `../../Core/Timeline/index.html`
- Family Meal Planner: inside this shell

Architecture documents:

- Order Center documents: `../Order-Center/README.md`
- Focus Center: `../Focus-Center/README.md`

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
