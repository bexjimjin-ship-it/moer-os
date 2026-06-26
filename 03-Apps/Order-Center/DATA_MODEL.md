# Order Center Data Model

## Data Model Principle

The data model should describe real sourcing work in a simple and structured way.

Every entity should answer:

- What is this?
- Who owns it?
- What status is it in?
- What is the next action?
- What is it connected to?

## Entity: Customer

### Purpose

Stores the buyer or company Moer Sourcing serves.

### Key Fields

- Customer ID
- Name
- Company
- Country
- Market region
- Contact person
- WhatsApp
- Email
- Phone
- Preferred communication channel
- Customer type
- Main product interests
- Trust level
- Payment habits
- Shipping preference
- Notes
- Created date
- Last contact date

### Relationships

- Has many inquiries
- Has many quotations
- Has many order projects
- Has many shipments
- Has many payments
- Has many notes

## Entity: Inquiry

### Purpose

Stores the original customer request.

### Key Fields

- Inquiry ID
- Customer ID
- Source channel
- Inquiry date
- Product request summary
- Target quantity
- Target price
- Destination
- Deadline
- Urgency
- Status
- Missing information
- Assigned person
- Notes

### Relationships

- Belongs to one customer
- Has many products
- Can create samples
- Can create quotations
- Can become an order project

## Entity: Product

### Purpose

Stores one requested or ordered product.

### Key Fields

- Product ID
- Inquiry ID
- Order project ID
- Product name
- Category
- Description
- Photos
- Reference links
- Size
- Material
- Color
- Packaging
- Private label requirement
- Quantity
- MOQ
- Target price
- Approved price
- Status
- Notes

### Relationships

- Belongs to an inquiry or order project
- Has many supplier options
- Has many samples
- Appears in quotations
- Appears in purchase orders
- Can have inspections
- Can be received into warehouse
- Can be included in consolidation and shipment

## Entity: Supplier

### Purpose

Stores supplier information and performance history.

### Key Fields

- Supplier ID
- Supplier name
- Contact person
- Phone
- WeChat
- Address
- Product categories
- Factory or trading company
- Yiwu market booth
- MOQ style
- Payment terms
- Delivery speed
- Quality rating
- Communication rating
- Reliability rating
- Risk notes
- Relationship notes

### Relationships

- Quotes many products
- Receives many purchase orders
- Produces many products
- Delivers goods to warehouse
- Has inspection history
- Has performance notes

## Entity: Sample

### Purpose

Tracks sample requests and customer approval.

### Key Fields

- Sample ID
- Product ID
- Supplier ID
- Request date
- Sample cost
- Courier cost
- Sample status
- Photos
- Videos
- Customer feedback
- Approval status
- Approval date
- Notes

### Relationships

- Belongs to one product
- Usually belongs to one supplier
- Can influence quotation and purchase order

## Entity: Quotation

### Purpose

Tracks supplier quotations and customer quotations.

### Key Fields

- Quotation ID
- Customer ID
- Inquiry ID
- Quotation type
- Quotation date
- Valid until
- Currency
- Products
- Unit prices
- MOQ
- Lead time
- Packaging
- Shipping estimate
- Service fee
- Total amount
- Status
- Notes

### Relationships

- Belongs to one customer
- Can include many products
- Can reference many supplier quotes
- Can become purchase orders

## Entity: Purchase Order

### Purpose

Tracks confirmed orders placed with suppliers.

### Key Fields

- Purchase Order ID
- Supplier ID
- Customer ID
- Order project ID
- PO date
- Products
- Quantities
- Unit prices
- Total amount
- Deposit amount
- Balance amount
- Payment terms
- Expected delivery date
- Status
- Supplier confirmation
- Notes

### Relationships

- Belongs to one supplier
- Belongs to one order project
- Has production records
- Has payment records
- Has inspection records
- Has warehouse receiving records

## Entity: Production

### Purpose

Tracks supplier production progress.

### Key Fields

- Production ID
- Purchase Order ID
- Supplier ID
- Start date
- Expected finish date
- Current progress
- Delay risk
- Last supplier update
- Next follow-up date
- Photos
- Videos
- Status
- Notes

### Relationships

- Belongs to one purchase order
- Can trigger inspection
- Can create timeline events

## Entity: Quality Inspection

### Purpose

Tracks checking before shipment.

### Key Fields

- Inspection ID
- Product ID
- Purchase Order ID
- Supplier ID
- Inspection date
- Inspector
- Quantity checked
- Defects found
- Packaging result
- Label result
- Photo links
- Video links
- Inspection status
- Customer decision
- Notes

### Relationships

- Belongs to product or purchase order
- Can create documents
- Can block warehouse release or shipment

## Entity: Warehouse

### Purpose

Tracks goods received and stored.

### Key Fields

- Warehouse Record ID
- Purchase Order ID
- Supplier ID
- Product ID
- Received date
- Received quantity
- Carton count
- Gross weight
- Net weight
- Volume
- Storage location
- Damage notes
- Missing quantity
- Status
- Photos

### Relationships

- Belongs to purchase order
- Connects to consolidation
- Connects to shipment

## Entity: Consolidation

### Purpose

Groups goods from multiple suppliers for one customer shipment.

### Key Fields

- Consolidation ID
- Customer ID
- Order project ID
- Warehouse records
- Product list
- Total cartons
- Total volume
- Total weight
- Missing items
- Ready status
- Notes

### Relationships

- Has many warehouse records
- Can connect to one shipment
- Can connect to one container

## Entity: Container

### Purpose

Tracks container planning and loading.

### Key Fields

- Container ID
- Shipment ID
- Container type
- Container number
- Seal number
- Loading date
- Loading location
- Carton count
- Total volume
- Total weight
- Loading photos
- Loading videos
- Status
- Notes

### Relationships

- Belongs to shipment
- Contains consolidated goods

## Entity: Shipment

### Purpose

Tracks goods moving from China to customer destination.

### Key Fields

- Shipment ID
- Customer ID
- Order project ID
- Shipping method
- Forwarder
- Destination port or address
- ETD
- ETA
- Tracking number
- Vessel or flight
- Shipment status
- Shipping cost
- Documents
- Notes

### Relationships

- Belongs to customer
- Can include containers
- Can include consolidations
- Has documents
- Has payments

## Entity: Payment

### Purpose

Tracks money due and paid.

### Key Fields

- Payment ID
- Related entity type
- Related entity ID
- Payer
- Receiver
- Amount
- Currency
- Due date
- Paid date
- Payment method
- Status
- Proof document
- Notes

### Relationships

- Can belong to customer, supplier, purchase order, shipment, quotation, or service fee

## Entity: Documents

### Purpose

Stores records of important files.

### Key Fields

- Document ID
- Document type
- Related entity type
- Related entity ID
- File name
- File location
- Uploaded by
- Uploaded date
- Version
- Notes

### Relationships

- Can attach to any major entity

## Entity: Timeline

### Purpose

Records important events in chronological order.

### Key Fields

- Timeline ID
- Order project ID
- Related entity type
- Related entity ID
- Event type
- Event title
- Event detail
- Event date
- Created by

### Relationships

- Belongs to order project
- Can reference any major entity

## Entity: Notes

### Purpose

Stores simple human notes.

### Key Fields

- Note ID
- Related entity type
- Related entity ID
- Note type
- Note text
- Created by
- Created date
- Follow-up date
- Visibility

### Relationships

- Can attach to any entity

## Future Data Model Needs

- Audit history
- Permissions
- AI summaries
- Message extraction
- Document OCR
- Supplier scoring
- Customer scoring
- Profit tracking
- Multi-currency support
- Multi-language notes
