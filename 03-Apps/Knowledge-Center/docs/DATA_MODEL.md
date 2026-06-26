# Knowledge Center Data Model

## Article Entity

Each article is stored as a JSON object.

## Fields

### `id`

Stable article ID.

Example:

`kc-001`

### `title`

Article title.

### `category`

Main category.

Examples:

- Business
- Suppliers
- SOP
- SEO

### `tags`

Array of tags for search and retrieval.

### `summary`

Short article summary.

This is important for dashboard scanning and future AI retrieval.

### `content`

Main article body.

### `relatedArticles`

Array of related article titles or IDs.

### `attachments`

Placeholder array for future file references.

### `favorite`

Boolean value.

Used to show important articles on the dashboard.

### `createdAt`

Date article was created.

### `updatedAt`

Date article was last updated.

### `lastViewedAt`

Date and time article was last opened.

### `revisionHistory`

Array of saved changes.

Each revision includes:

- Date
- Note

### `ai`

Metadata for future AI retrieval.

Fields:

- `sourceType`
- `audience`
- `confidence`
- `retrievalKeywords`
- `businessUse`

## Example

```json
{
  "id": "kc-001",
  "title": "Moer Sourcing Service Overview",
  "category": "Business",
  "tags": ["moer", "services", "sourcing"],
  "summary": "Core explanation of Moer Sourcing services.",
  "content": "Moer Sourcing helps overseas buyers source products from China.",
  "relatedArticles": ["China Sourcing Workflow"],
  "attachments": [],
  "favorite": true,
  "createdAt": "2026-06-20",
  "updatedAt": "2026-06-24",
  "lastViewedAt": "2026-06-25T09:00:00",
  "revisionHistory": [
    {
      "date": "2026-06-20",
      "note": "Initial article created."
    }
  ],
  "ai": {
    "sourceType": "company knowledge",
    "audience": "internal",
    "confidence": "high",
    "retrievalKeywords": ["China sourcing", "Yiwu sourcing"],
    "businessUse": "Use when explaining what Moer Sourcing does."
  }
}
```

## Future Data Model Additions

- Author
- Owner
- Review status
- Approved by
- Public/private flag
- Source file path
- Attachment file paths
- Embedding ID
- Semantic search vector ID
- Linked customer IDs
- Linked supplier IDs
- Linked order IDs
- Linked product categories
