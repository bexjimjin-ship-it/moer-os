# Order Center

## Working App

Order Center V1 is now a working local prototype.

Open it here:

`/Users/mac/Documents/Codex Workspace/Moer-OS/03-Apps/Order-Center/index.html`

## V1 Features

- Desktop and mobile responsive interface
- Left sidebar navigation for Dashboard, Orders, Customers, Suppliers, Shipments, Calendar, and Search
- Dashboard metrics for today's orders, waiting supplier, waiting customer, production, QC today, and shipment this week
- Create, edit, delete, search, and filter orders
- Order fields for status, supplier, customer, shipment date, priority, next action, notes, QC date, and destination country
- Per-order timeline generated from saved changes
- Customer and supplier pages generated from real order data
- Shipment and calendar views generated from saved dates
- All data saved in localStorage
- No backend, no login, no database

## Purpose

Order Center is the operational heart of Moer OS.

It is designed for Moer Sourcing to manage the complete sourcing journey from customer inquiry to final delivery.

The goal is not only to track orders.

The goal is to make every order clear, organized, transparent, and easier to manage.

Order Center should help Jim and the Moer team see:

- What the customer requested
- Which suppliers are involved
- What products are being sourced
- What has been quoted
- What has been ordered
- What is in production
- What needs inspection
- What is in the warehouse
- What is ready for consolidation
- What is shipped
- What still needs follow-up

## Product Principle

Order Center should support Moer Sourcing's real business model.

Moer Sourcing is a sourcing and purchasing agent in China.

It is not a factory.

It is not an online store.

The system should focus on service, communication, quality control, consolidation, and shipment coordination.

## User Goals

The main user goals are:

- Capture customer inquiries clearly
- Avoid losing product details in WhatsApp or email
- Compare supplier options
- Track samples and approvals
- Create clear quotations
- Manage purchase orders
- Follow production progress
- Record quality inspection results
- Track warehouse receiving
- Consolidate goods from multiple suppliers
- Prepare container and shipment information
- Track payments and documents
- Keep a timeline of all important events
- Reduce repeated manual checking
- Build a reusable operational record for future orders

## Main Users

### Jim

Needs a clear daily view of customer orders, supplier updates, urgent issues, and next actions.

### Operations Team

Needs to track products, suppliers, production, inspection, warehouse, and shipping tasks.

### Future AI Assistant

Needs structured order data to summarize progress, detect risks, draft updates, and support decision making.

## Core Documents

- `ARCHITECTURE.md` explains the system structure and entity relationships.
- `WORKFLOW.md` explains the full sourcing workflow from inquiry to delivery.
- `DATA_MODEL.md` defines all major entities and their fields.
- `UI.md` defines the screen structure and user experience.
- `ROADMAP.md` defines future phases and expansion ideas.

## V1 Scope Recommendation

The first version should be simple.

It should focus on:

- Customers
- Inquiries
- Products
- Suppliers
- Quotations
- Purchase orders
- Production status
- Inspection status
- Warehouse status
- Shipment status
- Timeline and notes

Advanced automation can come later.

The system should first make the work visible and organized.
