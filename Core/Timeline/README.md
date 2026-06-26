# Moer OS Timeline Engine

## Purpose

The Timeline Engine is a reusable Moer OS core component.

It records and displays the history of important business events.

It is designed to be embedded later into:

- Order Center
- Customer Center
- Supplier Center
- Quotation Center
- Shipping Center

The first version uses JSON mock data only.

There is no database connection.

## Files

- `index.html` is a standalone demo page.
- `timeline.js` contains the reusable JavaScript timeline component.
- `timeline.css` contains the responsive timeline UI.
- `mock-events.json` contains example timeline data.
- `README.md` documents how to use and extend the engine.

## Event Schema

Every timeline event should include these fields:

```json
{
  "id": "evt-001",
  "date": "2026-06-26",
  "time": "10:30",
  "eventType": "Supplier Note",
  "title": "Packaging detail needs confirmation",
  "description": "Supplier asked whether customer needs neutral packing or private label packing.",
  "relatedModule": "Supplier Center",
  "relatedOrderId": "MO-2026-001",
  "relatedCustomer": "Caribbean Wholesale Ltd",
  "relatedSupplier": "Yiwu Stationery Supplier A",
  "status": "Open",
  "icon": "alert"
}
```

## Required Fields

- `date`
- `time`
- `eventType`
- `title`
- `description`
- `relatedModule`
- `relatedOrderId`
- `relatedCustomer`
- `relatedSupplier`
- `status`
- `icon`

## Supported Filters

The current engine supports filtering by:

- Order
- Customer
- Supplier
- Date
- Module
- Status

Filters update instantly.

## Chronological Order

Events are displayed in chronological order by `date` and `time`.

Oldest events appear first.

## Add Mock Events

The demo includes an `Add Mock Event` button.

This adds a temporary mock event in the browser.

The new event is not saved to a database.

## How To Open Locally

Open this file directly in a browser:

`/Users/mac/Documents/Codex Workspace/Moer-OS/Core/Timeline/index.html`

## How To Embed In A Future Module

Add the CSS and JavaScript files to the module page:

```html
<link rel="stylesheet" href="../../Core/Timeline/timeline.css">
<script src="../../Core/Timeline/timeline.js"></script>
```

Create a root element:

```html
<div id="timelineRoot"></div>
```

Initialize the timeline:

```html
<script>
  const timeline = new MoerTimelineEngine({
    root: document.querySelector("#timelineRoot"),
    events: eventsFromModule
  });

  timeline.init();
</script>
```

## Component API

### `new MoerTimelineEngine(options)`

Creates a new timeline instance.

Options:

- `root`: DOM element where the timeline should render
- `events`: array of timeline events
- `onEventClick`: optional callback when an event is clicked

### `timeline.init()`

Renders the timeline and binds filter and button events.

### `timeline.setEvents(events)`

Replaces the event list and re-renders the timeline.

### `timeline.addEvent(event)`

Adds a new event and re-renders the timeline.

## Future Integration Plan

In future Moer OS modules, timeline events can be created when:

- A customer sends an inquiry
- A supplier quote is received
- A quotation is sent
- A purchase order is confirmed
- Production starts
- Inspection is completed
- Goods arrive in warehouse
- A shipment is arranged
- A customer update is sent
- A payment is received
- A document is uploaded
- A risk note is added

## Design Principle

The Timeline Engine should remain independent.

It should not know the internal logic of Order Center, Customer Center, Supplier Center, Quotation Center, or Shipping Center.

Each module should pass timeline events into the engine.

The engine should only display, filter, and organize those events.
