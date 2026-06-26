# Knowledge Center Architecture

## Purpose

Knowledge Center is the long-term knowledge brain of Moer OS.

It stores structured knowledge that can help Jim, the Moer team, and future AI systems.

The goal is to make knowledge reusable.

## What It Is

Knowledge Center is:

- A company knowledge base
- A SOP library
- A sourcing knowledge system
- A supplier and customer learning archive
- A marketing and SEO knowledge center
- A prompt library
- A future AI retrieval source

## What It Is Not

Knowledge Center is not:

- A casual note-taking app
- A chat app
- A database server
- A document storage system
- A public website

## V1 Architecture

V1 is a static local app.

It uses:

- `index.html` for structure
- `styles.css` for responsive UI
- `app.js` for article state, localStorage, filtering, and editing
- JSON-style article records
- localStorage as temporary local persistence

## Core Modules

### Dashboard

Shows total articles, recently updated articles, favorites, and recently viewed articles.

### Categories

Groups knowledge into business areas.

### Knowledge Article

Allows one structured article to be viewed and edited.

### Global Search

Searches title, category, tags, summary, content, related articles, and AI metadata.

### AI Ready

Explains the metadata foundation for future retrieval.

## Categories

V1 includes:

- Business
- Suppliers
- Customers
- Products
- Shipping
- Inspection
- Negotiation
- Marketing
- SEO
- Website
- Social Media
- AI Prompts
- SOP
- Personal
- Family
- Health
- Meal Planning

## Storage Strategy

All articles are stored as a JSON array in localStorage.

This makes V1 easy to test without backend complexity.

Future versions can move the same schema into a database.

## Future AI Strategy

Every article includes AI metadata.

This makes future retrieval easier.

Important metadata includes:

- Source type
- Audience
- Confidence
- Retrieval keywords
- Business use
- Updated date
- Category
- Tags
- Summary

## Expansion Path

Future versions can add:

- Import from Markdown files
- Export to JSON or Markdown
- File attachments
- Version comparison
- AI search
- Semantic retrieval
- Permissions
- Team collaboration
- Connection to Order Center and Supplier Center

## Architecture Principle

Keep the knowledge structure clean.

Good AI depends on good knowledge records.
