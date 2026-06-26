# Order Center Workflow

## Workflow Purpose

This document defines the complete sourcing workflow from inquiry to delivery.

It should help future development teams understand how Moer Sourcing actually works.

## Stage 1: Customer Inquiry

### Goal

Capture the customer's request clearly before sourcing begins.

### Inputs

- Customer name
- Company name
- Country or market
- Contact channel
- Product name
- Product photos or links
- Quantity
- Target price
- Packaging requirements
- Branding requirements
- Destination
- Shipping preference
- Deadline
- Special notes

### Output

A structured inquiry record.

### Key Questions

- What does the customer want to buy?
- What quantity do they need?
- Is this a sample request or bulk order?
- Is the customer experienced or first-time importer?
- Is the request urgent?
- What information is missing?

## Stage 2: Product Clarification

### Goal

Make the product request specific enough to source accurately.

### Actions

- Clarify size, material, color, design, function, packaging, and quality level
- Confirm target market
- Confirm quantity and MOQ expectations
- Confirm whether private label is needed
- Confirm sample expectations

### Output

One or more product records connected to the inquiry.

## Stage 3: Supplier Search

### Goal

Find suitable supplier options.

### Actions

- Search Yiwu Market, known suppliers, factories, and supplier databases
- Compare supplier capability
- Check MOQ, price, quality, packaging, and delivery time
- Record supplier notes
- Save product photos and supplier quotes

### Output

Supplier options connected to each product.

## Stage 4: Supplier Communication

### Goal

Confirm real product details and avoid misunderstanding.

### Actions

- Ask supplier for price
- Confirm MOQ
- Confirm packing details
- Confirm production time
- Confirm sample availability
- Confirm payment terms
- Confirm delivery location
- Record all important supplier replies

### Output

Supplier quotation records.

## Stage 5: Sample Management

### Goal

Manage samples before order confirmation when needed.

### Actions

- Request sample from supplier
- Record sample cost
- Record sample delivery status
- Check sample quality
- Take photos or videos
- Send sample or sample media to customer
- Record customer approval or rejection

### Output

Sample record with approval status.

## Stage 6: Customer Quotation

### Goal

Send the customer a clear quotation.

### Actions

- Compare supplier options
- Choose recommended option
- Add service fee if needed
- Include product price, MOQ, packaging, lead time, and shipping notes
- Explain important risks or limitations
- Send quotation to customer
- Track customer response

### Output

Customer quotation record.

## Stage 7: Customer Approval

### Goal

Confirm whether the customer wants to proceed.

### Actions

- Record approval status
- Confirm product details
- Confirm quantity
- Confirm packaging and private label
- Confirm payment terms
- Confirm shipping plan
- Confirm deadline

### Output

Approved order project.

## Stage 8: Purchase Order Creation

### Goal

Create clear purchase orders for suppliers.

### Actions

- Create one purchase order per supplier
- Add product details
- Add quantity
- Add unit price
- Add delivery time
- Add payment terms
- Add packaging requirements
- Add inspection requirements
- Confirm order with supplier

### Output

Supplier purchase order records.

## Stage 9: Supplier Payment

### Goal

Track payments needed to begin or continue production.

### Actions

- Record deposit amount
- Record balance amount
- Record payment due date
- Record payment status
- Attach payment proof if needed

### Output

Payment record connected to supplier purchase order.

## Stage 10: Production Follow-Up

### Goal

Monitor production and avoid late surprises.

### Actions

- Track production start date
- Track expected completion date
- Request supplier progress updates
- Record delay risks
- Save product photos or videos during production
- Update customer when needed

### Output

Production status record and timeline updates.

## Stage 11: Quality Inspection

### Goal

Check goods before shipment.

### Actions

- Schedule inspection
- Confirm inspection checklist
- Check quantity
- Check product quality
- Check packaging
- Check labels and branding
- Check carton marks
- Take photos and videos
- Record defects
- Mark pass, conditional pass, or fail
- Ask customer for decision if needed

### Output

Inspection report and customer decision.

## Stage 12: Warehouse Receiving

### Goal

Track goods after supplier delivery to warehouse.

### Actions

- Record arrival date
- Count cartons
- Check received quantity
- Record weight and volume
- Record warehouse location
- Record missing or damaged goods
- Attach receiving photos

### Output

Warehouse receiving record.

## Stage 13: Consolidation

### Goal

Combine goods from multiple suppliers for one customer shipment.

### Actions

- Group goods by customer
- Check which purchase orders are ready
- Confirm cartons, volume, and weight
- Identify missing goods
- Prepare packing list
- Prepare loading plan

### Output

Consolidation record.

## Stage 14: Container Planning

### Goal

Prepare goods for container loading when shipping by sea.

### Actions

- Choose container type
- Confirm loading date
- Confirm warehouse loading plan
- Confirm forwarder details
- Track loading photos and videos
- Record container number and seal number

### Output

Container record connected to shipment.

## Stage 15: Shipment Arrangement

### Goal

Move goods from China to the customer destination.

### Actions

- Confirm shipping method
- Confirm destination port or address
- Confirm freight forwarder
- Record ETD and ETA
- Record tracking number
- Attach shipping documents
- Update customer

### Output

Shipment record.

## Stage 16: Customer Payment and Balance

### Goal

Make sure payments are complete before shipment or document release.

### Actions

- Track customer deposit
- Track product balance
- Track shipping cost
- Track service fee
- Track payment proof
- Confirm final balance

### Output

Customer payment record.

## Stage 17: Documents

### Goal

Keep all order documents organized.

### Common Documents

- Customer quotation
- Supplier purchase order
- Proforma invoice
- Commercial invoice
- Packing list
- Inspection report
- Payment proof
- Container loading photos
- Bill of lading
- Tracking documents
- Customer approvals

### Output

Document records attached to the order project.

## Stage 18: Delivery Follow-Up

### Goal

Confirm that the customer received the goods and capture feedback.

### Actions

- Track shipment arrival
- Ask customer for delivery confirmation
- Record complaints or issues
- Record positive feedback
- Save lessons learned
- Create follow-up reminder for next order

### Output

Completed order project and customer relationship notes.

## Stage 19: Review and Learning

### Goal

Improve future orders.

### Actions

- Review supplier performance
- Review product quality
- Review profit and cost accuracy
- Review shipping timing
- Review customer satisfaction
- Save reusable notes

### Output

Supplier notes, customer notes, product notes, and process improvements.

## Workflow Statuses

Recommended high-level statuses:

- New Inquiry
- Clarifying Details
- Sourcing Suppliers
- Waiting for Supplier Quote
- Sample Requested
- Sample Approved
- Quotation Sent
- Waiting for Customer Approval
- Order Confirmed
- Purchase Order Sent
- In Production
- Ready for Inspection
- Inspection Passed
- Inspection Issue
- Waiting for Warehouse Arrival
- In Warehouse
- Ready for Consolidation
- Ready for Shipment
- Shipped
- Delivered
- Completed
- On Hold
- Cancelled

## Workflow Principle

Every stage should answer one question:

"What is the next action?"
