# Knowledge Center V1

Knowledge Center V1 is a local knowledge management system for Moer Sourcing.

It is not a general note-taking app.

It is designed to become the company's long-term knowledge brain.

## Purpose

The Knowledge Center stores business knowledge, supplier knowledge, customer knowledge, SOPs, product information, SEO ideas, AI prompts, and personal/family knowledge that supports Jim's work and life.

## Tech

- HTML
- CSS
- JavaScript
- localStorage
- JSON-style article records
- No backend
- No database
- No login
- No external APIs

## Files

- `index.html` is the responsive prototype.
- `styles.css` contains the UI design.
- `app.js` contains local article storage, search, filters, and editing behavior.
- `data/seed-articles.json` documents the seed article structure.
- `docs/ARCHITECTURE.md` explains the system architecture.
- `docs/DATA_MODEL.md` explains the article schema.

## Pages

- Dashboard
- Categories
- Knowledge Article
- Global Search
- AI Ready

## Local Storage

Articles are saved in the browser under:

`moerOS.knowledgeCenter.articles`

## Open Locally

Open this file directly in your browser:

`/Users/mac/Documents/Codex Workspace/Moer-OS/03-Apps/Knowledge-Center/index.html`

## Important Principle

Knowledge Center should help Moer Sourcing build reusable long-term knowledge assets.

It should support future AI retrieval, but it should stay simple and practical in V1.
