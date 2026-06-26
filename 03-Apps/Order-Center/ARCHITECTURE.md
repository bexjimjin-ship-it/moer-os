# Order Center Architecture

## Architecture Goal

Order Center should become the central operating system for sourcing work.

It should connect customer requests, supplier work, product details, production progress, quality inspection, warehouse receiving, consolidation, shipping, payments, documents, timeline, and notes.

The architecture should be modular.

Each module should be useful alone, but stronger when connected.

## Core Concept

The central object is an Order Project.

An Order Project begins when a customer sends an inquiry.

It may include one product or many products.

It may involve one supplier or many suppliers.

It may become one quotation, several quotations, one purchase order, several purchase orders, one shipment, or several shipments.

## Main Modules

### 1. Customer Module

Stores customer identity, contact information, market, relationship history, preferences, and communication notes.

### 2. Inquiry Module

Captures the customer's original request.

Includes product needs, target price, quantity, packaging, delivery expectations, destination, and urgency.

### 3. Product Module

Stores product-level details.

Each inquiry can have multiple products.

Each product can be quoted by multiple suppliers.

### 4. Supplier Module

Stores supplier profiles, contact details, product categories, reliability notes, quotation history, production performance, and inspection results.

### 5. Sample Module

Tracks sample requests, sample cost, sample photos, approval status, delivery status, and customer feedback.

### 6. Quotation Module

Manages supplier quotations and customer quotations.

Supports comparison between suppliers before sending a final quote to the customer.

### 7. Purchase Order Module

Tracks confirmed purchase orders with suppliers.

Includes product quantities, pricing, payment terms, delivery date, supplier confirmation, and order status.

### 8. Production Module

Tracks production progress, expected completion date, delays, supplier updates, and risk signals.

### 9. Quality Inspection Module

Tracks inspection plans, inspection results, photos, videos, defect notes, pass or fail status, and customer approval.

### 10. Warehouse Module

Tracks goods received in the warehouse.

Includes supplier delivery, received quantity, cartons, measurements, weight, storage location, and missing goods.

### 11. Consolidation Module

Tracks how products from different suppliers are grouped for shipment.

This is important for mixed containers and customers buying many product categories together.

### 12. Container Module

Tracks container-level planning.

Includes container type, loading date, loading list, volume, weight, and loading photos.

### 13. Shipment Module

Tracks shipping method, destination, forwarder, vessel or flight details, tracking number, ETD, ETA, and delivery status.

### 14. Payment Module

Tracks customer payments, supplier payments, balances, payment deadlines, and payment status.

### 15. Documents Module

Stores important files and document records.

Examples include invoices, packing lists, inspection reports, shipping documents, photos, videos, and customer confirmations.

### 16. Timeline Module

Creates a chronological record of all important events.

The timeline should make it easy to answer:

"What happened with this order?"

### 17. Notes Module

Stores internal notes, customer notes, supplier notes, risk notes, and follow-up notes.

## Entity Relationship Overview

### Customer

- Has many inquiries
- Has many quotations
- Has many order projects
- Has many shipments
- Has many payments
- Has many notes

### Inquiry

- Belongs to one customer
- Has many products
- Can lead to samples
- Can lead to quotations
- Can become an order project

### Product

- Belongs to an inquiry or order project
- Can have many supplier options
- Can have samples
- Can appear in quotations
- Can appear in purchase orders
- Can be inspected
- Can be received into warehouse
- Can be included in consolidation and shipment

### Supplier

- Can quote many products
- Can receive many purchase orders
- Can produce many products
- Can deliver goods to warehouse
- Can have inspection results
- Can have performance notes

### Sample

- Belongs to a product
- Usually comes from a supplier
- May need customer approval
- Can influence the final quotation or purchase order

### Quotation

- Belongs to a customer
- Includes one or many products
- Can be based on one or many supplier quotations
- Can become a purchase order after approval

### Purchase Order

- Belongs to one supplier
- Can include one or many products
- Connects to production, payment, inspection, and warehouse receiving

### Production

- Belongs to a purchase order
- Tracks progress for products under production
- Can trigger inspection
- Can create delay alerts

### Quality Inspection

- Belongs to a product or purchase order
- Happens before shipment or before final approval
- Creates inspection reports, photos, videos, and decisions

### Warehouse

- Receives goods from suppliers
- Connects goods to purchase orders and products
- Tracks cartons, volume, weight, and storage

### Consolidation

- Groups warehouse goods for shipment
- Can include goods from many suppliers
- Can belong to one customer shipment

### Container

- Can include one or many consolidations
- Tracks loading details
- Connects to shipment

### Shipment

- Belongs to a customer
- Can include one or many containers
- Can include one or many consolidated product groups
- Connects to documents and delivery tracking

### Payment

- Can belong to a customer quotation, supplier purchase order, shipment, or service fee
- Tracks paid amount, balance, due date, and status

### Documents

- Can attach to any major entity
- Should always include document type, related entity, date, owner, and notes

### Timeline

- Connects to the order project
- Can also reference customer, product, supplier, quotation, purchase order, inspection, warehouse, shipment, or payment

### Notes

- Can attach to any entity
- Should be searchable and easy to filter by type

## Key System Rules

- One customer can have many order projects.
- One order project can include many products.
- One product can have many supplier options.
- One order project can create many supplier purchase orders.
- One shipment can include products from many suppliers.
- Inspection should happen before shipment when required.
- Warehouse records should connect physical goods to purchase orders.
- Timeline should record important changes automatically in the future.
- Notes should remain simple, fast, and searchable.

## Future AI Architecture

AI should not replace the operational data.

AI should use structured data to help Jim work faster.

Future AI capabilities should include:

- Summarize order status
- Detect delayed production
- Detect missing supplier updates
- Draft customer progress updates
- Draft supplier follow-up messages
- Summarize WhatsApp conversations
- Extract inquiry details from messages
- Compare supplier quotations
- Identify risky suppliers
- Generate inspection summaries
- Prepare shipment checklists
- Find missing documents
- Suggest next actions

## Architecture Principle

Start with simple structured records.

Then add automation.

Good AI depends on clean data.
