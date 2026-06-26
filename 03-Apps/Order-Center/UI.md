# Order Center UI

## UI Goal

The UI should make complex sourcing work feel calm and controllable.

Jim should be able to open Order Center and quickly understand:

- Which orders need attention
- Which suppliers are late
- Which products are ready
- Which goods are in warehouse
- Which shipments are waiting
- Which customers need updates

## Design Principles

- Clear before clever
- Calm visual design
- Large readable text
- Fast status scanning
- Minimal clicks for daily work
- Mobile-friendly for quick checks
- Desktop-friendly for detailed operation
- Built for repeated daily use

## Main Navigation

Recommended sections:

- Dashboard
- Inquiries
- Orders
- Products
- Suppliers
- Production
- Inspection
- Warehouse
- Consolidation
- Shipments
- Payments
- Documents
- Timeline
- Notes

## Screen 1: Dashboard

### Purpose

Shows the operational overview.

### Main Blocks

- Orders needing attention
- New inquiries
- Waiting supplier quotes
- Production delays
- Inspection issues
- Goods arriving today
- Shipments ready
- Customer updates needed
- Payment reminders

### Key Filters

- Customer
- Status
- Urgency
- Assigned person
- Date range
- Country

## Screen 2: Inquiry List

### Purpose

Shows all customer inquiries.

### Columns

- Inquiry date
- Customer
- Product summary
- Country
- Urgency
- Status
- Missing information
- Next action

### Actions

- Create inquiry
- Add product
- Add note
- Convert to order project
- Create quotation

## Screen 3: Inquiry Detail

### Purpose

Shows the complete customer request.

### Sections

- Customer information
- Original request
- Product list
- Missing information
- Supplier search status
- Sample status
- Quotation status
- Notes
- Timeline

## Screen 4: Order Project List

### Purpose

Shows active and completed order projects.

### Columns

- Order project
- Customer
- Product count
- Supplier count
- Current stage
- Next action
- Deadline
- Risk level
- Last update

### Views

- Active
- Delayed
- Waiting customer
- Waiting supplier
- Ready to ship
- Completed

## Screen 5: Order Project Detail

### Purpose

The main working screen for one customer order.

### Header

- Customer
- Order project name
- Current status
- Risk level
- Next action
- Owner

### Tabs

- Overview
- Products
- Suppliers
- Quotations
- Purchase Orders
- Production
- Inspection
- Warehouse
- Consolidation
- Shipment
- Payments
- Documents
- Timeline
- Notes

## Screen 6: Product Detail

### Purpose

Shows all information for one product.

### Sections

- Product description
- Photos and links
- Customer requirements
- Supplier options
- Sample records
- Quotation history
- Purchase order history
- Inspection history
- Warehouse status
- Shipment status

## Screen 7: Supplier Detail

### Purpose

Shows supplier profile and performance.

### Sections

- Supplier contact
- Product categories
- Active quotations
- Active purchase orders
- Production performance
- Inspection history
- Payment terms
- Reliability notes
- Risk notes

## Screen 8: Quotation Builder

### Purpose

Helps compare supplier quotes and prepare customer quotations.

### Sections

- Product list
- Supplier quote comparison
- Recommended supplier
- Customer price
- MOQ
- Lead time
- Packaging
- Service fee
- Shipping note
- Quote status

## Screen 9: Production Board

### Purpose

Shows production progress across suppliers.

### Columns

- Not started
- In production
- Waiting update
- Delayed
- Ready for inspection
- Completed

### Cards

Each card should show:

- Supplier
- Customer
- Product
- Purchase order
- Expected finish date
- Last update
- Next action

## Screen 10: Inspection Screen

### Purpose

Manages product checking before shipment.

### Sections

- Inspection queue
- Inspection checklist
- Photos
- Videos
- Defect notes
- Result
- Customer decision
- Inspection report

## Screen 11: Warehouse Screen

### Purpose

Tracks received goods.

### Sections

- Expected arrivals
- Goods received today
- Missing goods
- Damaged goods
- Carton summary
- Weight and volume summary
- Storage location

## Screen 12: Consolidation Screen

### Purpose

Groups goods from multiple suppliers for one shipment.

### Sections

- Customer shipment group
- Ready goods
- Waiting goods
- Missing goods
- Carton count
- Volume
- Weight
- Packing list
- Ready to ship decision

## Screen 13: Shipment Screen

### Purpose

Tracks shipping from China to destination.

### Sections

- Shipping method
- Forwarder
- Destination
- ETD
- ETA
- Tracking
- Container details
- Documents
- Customer updates

## Screen 14: Payment Screen

### Purpose

Tracks customer and supplier payments.

### Sections

- Customer deposit
- Customer balance
- Supplier deposit
- Supplier balance
- Shipping payment
- Service fee
- Payment proof
- Overdue payments

## Screen 15: Timeline Screen

### Purpose

Shows the full history of the order.

### Timeline Events

- Inquiry received
- Product clarified
- Supplier quote received
- Sample requested
- Sample approved
- Quotation sent
- Order confirmed
- Purchase order sent
- Deposit paid
- Production started
- Inspection completed
- Goods received
- Consolidation completed
- Shipment arranged
- Goods delivered

## Screen 16: Notes Screen

### Purpose

Stores useful context that does not belong in a structured field.

### Note Types

- Customer note
- Supplier note
- Product note
- Risk note
- Follow-up note
- Internal note

## Mobile UI

Mobile should focus on quick actions.

Recommended mobile priorities:

- Check dashboard
- Add note
- Update status
- Add supplier reply
- View next action
- Upload photo
- Search order
- Send customer update

Desktop should handle detailed editing.

Mobile should handle daily updates.

## Future AI UI

AI should appear as a helper panel.

Recommended AI panel actions:

- Summarize this order
- What needs attention?
- Draft customer update
- Draft supplier follow-up
- Compare supplier quotes
- Explain delay risk
- Find missing documents
- Create inspection checklist

## UI Principle

Every screen should make the next action obvious.
