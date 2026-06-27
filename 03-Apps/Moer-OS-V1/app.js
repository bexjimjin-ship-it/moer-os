const storageKeys = {
  userName: "moerOS.userName",
  companyName: "moerOS.companyName",
  themeOption: "moerOS.themeOption",
  focusTasks: "moerOS.focusTasks",
  peopleWaiting: "moerOS.peopleWaiting",
  urgentItems: "moerOS.urgentItems",
  contentPlan: "moerOS.contentPlan",
  dinnerPlan: "moerOS.dinnerPlan",
  sonSleep: "moerOS.sonSleep",
  sonExercise: "moerOS.sonExercise",
  sonMeal: "moerOS.sonMeal",
  mealPlanner: "moerOS.mealPlanner",
  orders: "moerOS.orders",
  customers: "moerOS.customers",
  suppliers: "moerOS.suppliers",
  quotations: "moerOS.quotations",
  shipments: "moerOS.shipments",
  products: "moerOS.products",
  financeRecords: "moerOS.financeRecords",
  ordersSeededV1: "moerOS.ordersSeededV1",
  customersSeededV2: "moerOS.customersSeededV2",
  suppliersSeededV1: "moerOS.suppliersSeededV1",
  quotationsSeededV1: "moerOS.quotationsSeededV1",
  shipmentsSeededV1: "moerOS.shipmentsSeededV1",
  productsSeededV1: "moerOS.productsSeededV1",
  financeRecordsSeededV1: "moerOS.financeRecordsSeededV1"
};

const orderStatusOptions = ["New Inquiry", "Quoting", "Waiting Supplier", "Waiting Customer", "Order Confirmed", "In Production", "Inspection", "In Warehouse", "Shipping", "Delivered", "On Hold"];
const orderPriorityOptions = ["Normal", "High", "Urgent", "Low"];
const customerStatusOptions = ["Lead", "Active", "Waiting Reply", "Follow Up", "Paused"];
const customerPriorityOptions = ["Normal", "High", "Urgent", "Low"];
const customerTypeOptions = ["Importer", "Wholesaler", "Distributor", "Retailer", "Amazon Seller", "E-commerce Seller", "Supermarket Buyer"];
const supplierReliabilityOptions = ["Unknown", "Reliable", "Needs Follow-up", "Risky"];
const supplierStatusOptions = ["New", "Active", "Preferred", "Backup", "Paused"];
const supplierPriorityOptions = ["Normal", "High", "Urgent", "Low"];
const quotationStatusOptions = ["Draft", "Sent", "Waiting Customer", "Approved", "Rejected", "Expired"];
const shipmentStatusOptions = ["Preparing", "Booked", "In Transit", "Arrived", "Delivered", "Delayed", "On Hold"];
const shipmentDocumentStatusOptions = ["Not Started", "Pending", "Partial", "Ready", "Sent"];
const shipmentDocumentNames = ["Commercial Invoice", "Packing List", "Bill of Lading", "Certificate of Origin", "Other documents"];
const productCategoryOptions = ["Stationery", "Christmas Items", "Daily-use Products", "Toys", "Packaging", "Household", "Kitchenware", "Gift Items", "Bags", "Personal Care"];
const financeTypeOptions = ["Customer Payment", "Supplier Payment", "Expense", "Refund"];
const financePaymentStatusOptions = ["Waiting", "Partial", "Paid", "Overdue", "Cancelled"];
const financeCurrencyOptions = ["USD", "CNY", "EUR", "GBP"];

const customerSeedData = [
  {
    id: "customer-001",
    customerName: "Nicholas",
    companyName: "Nicholas Trading",
    country: "Trinidad and Tobago",
    contactPerson: "Nicholas",
    whatsapp: "",
    email: "",
    website: "",
    customerType: "Importer",
    status: "Active",
    priority: "High",
    mainProductInterest: "Mixed containers, daily-use products, stationery",
    lastContactDate: "2026-06-25",
    nextFollowUpDate: "2026-06-28",
    notes: "Relationship-oriented customer. Prefers clear WhatsApp updates and practical product options.",
    followUpNotes: "Follow up with supplier options and carton estimate for next mixed container.",
    nextAction: "Send updated product options",
    createdAt: "2026-06-20T09:00:00",
    updatedAt: "2026-06-25T10:00:00",
    timeline: [
      {
        id: "customer-timeline-001-a",
        date: "2026-06-20",
        eventType: "First contact",
        title: "Relationship started",
        description: "Nicholas discussed mixed container sourcing for Trinidad and Tobago.",
        relatedOrderId: "MOER-2026-001",
        nextAction: "Prepare mixed container product options",
        status: "Done"
      },
      {
        id: "customer-timeline-001-b",
        date: "2026-06-25",
        eventType: "Order confirmed",
        title: "Trinidad container project confirmed",
        description: "Customer confirmed the container project and asked for carton planning.",
        relatedOrderId: "MOER-2026-001",
        nextAction: "Confirm carton details with suppliers",
        status: "Open"
      }
    ]
  },
  {
    id: "customer-002",
    customerName: "Eddie",
    companyName: "Eddie Imports",
    country: "UK",
    contactPerson: "Eddie",
    whatsapp: "",
    email: "",
    website: "",
    customerType: "Wholesaler",
    status: "Follow Up",
    priority: "Normal",
    mainProductInterest: "Christmas items",
    lastContactDate: "2026-06-24",
    nextFollowUpDate: "2026-06-30",
    notes: "Seasonal product buyer. Needs early planning for Christmas items and packaging details.",
    followUpNotes: "Ask which Christmas categories are priority this year.",
    nextAction: "Prepare Christmas product list",
    createdAt: "2026-06-21T11:30:00",
    updatedAt: "2026-06-24T16:20:00",
    timeline: [
      {
        id: "customer-timeline-002-a",
        date: "2026-06-21",
        eventType: "Inquiry received",
        title: "Christmas item request",
        description: "Eddie asked for Christmas decorations and seasonal product options for the UK.",
        relatedOrderId: "MOER-2026-002",
        nextAction: "Collect supplier quotes",
        status: "Waiting"
      },
      {
        id: "customer-timeline-002-b",
        date: "2026-06-24",
        eventType: "Follow-up",
        title: "Asked for priority categories",
        description: "Need to confirm which Christmas categories are most important this year.",
        relatedOrderId: "MOER-2026-002",
        nextAction: "Send first product shortlist",
        status: "Open"
      }
    ]
  },
  {
    id: "customer-003",
    customerName: "Graham",
    companyName: "Graham Supplies",
    country: "Barbados",
    contactPerson: "Graham",
    whatsapp: "",
    email: "",
    website: "",
    customerType: "Distributor",
    status: "Waiting Reply",
    priority: "Normal",
    mainProductInterest: "Stationery",
    lastContactDate: "2026-06-23",
    nextFollowUpDate: "2026-06-27",
    notes: "Interested in stationery and school products. Values quick replies and stable quality.",
    followUpNotes: "Waiting for confirmation on notebook quantity and cover designs.",
    nextAction: "Follow up on notebook quantity",
    createdAt: "2026-06-22T15:15:00",
    updatedAt: "2026-06-23T18:10:00",
    timeline: [
      {
        id: "customer-timeline-003-a",
        date: "2026-06-22",
        eventType: "Inquiry received",
        title: "Stationery inquiry received",
        description: "Graham shared a school stationery list for Barbados.",
        relatedOrderId: "MOER-2026-003",
        nextAction: "Confirm notebook designs",
        status: "Waiting"
      },
      {
        id: "customer-timeline-003-b",
        date: "2026-06-23",
        eventType: "Quotation sent",
        title: "Stationery options shared",
        description: "Sent initial stationery supplier options and requested customer confirmation.",
        relatedOrderId: "MOER-2026-003",
        nextAction: "Follow up on quantity and cover design",
        status: "Open"
      }
    ]
  }
];

const supplierSeedData = [
  {
    id: "supplier-001",
    supplierName: "Yiwu Toy Supplier",
    contactPerson: "Ms. Chen",
    phone: "+86 138 0000 1001",
    wechat: "yiwu-toy-chen",
    email: "",
    city: "Yiwu",
    marketFactory: "Yiwu Market District 1",
    productCategory: "Toys",
    mainProducts: "Educational toys, plush toys, small gifts, party toys",
    priceLevel: "Medium",
    qualityLevel: "Standard",
    deliverySpeed: "Normal",
    reliabilityRating: "Reliable",
    status: "Active",
    priority: "Normal",
    nextAction: "Ask for updated toy catalog and carton sizes",
    notes: "Good communication and practical MOQ. Need to confirm EN71 testing before EU orders.",
    createdAt: "2026-06-18T10:00:00",
    updatedAt: "2026-06-24T15:00:00",
    timeline: [
      {
        id: "supplier-timeline-001-a",
        date: "2026-06-18",
        eventType: "First contact",
        title: "Met toy supplier in Yiwu Market",
        description: "Supplier can provide educational toys and small gifts with flexible MOQ.",
        relatedOrderId: "",
        status: "Done",
        nextAction: "Request catalog"
      }
    ]
  },
  {
    id: "supplier-002",
    supplierName: "Yiwu Stationery Supplier",
    contactPerson: "Mr. Liu",
    phone: "+86 138 0000 1002",
    wechat: "stationery-liu",
    email: "",
    city: "Yiwu",
    marketFactory: "Yiwu Market District 3",
    productCategory: "Stationery",
    mainProducts: "Notebooks, pens, pencil cases, school sets",
    priceLevel: "Low",
    qualityLevel: "Good",
    deliverySpeed: "Fast",
    reliabilityRating: "Reliable",
    status: "Preferred",
    priority: "High",
    nextAction: "Confirm notebook cover designs for Graham",
    notes: "Stable stationery supplier. Good for school season orders and mixed stationery cartons.",
    createdAt: "2026-06-17T09:30:00",
    updatedAt: "2026-06-26T11:20:00",
    timeline: [
      {
        id: "supplier-timeline-002-a",
        date: "2026-06-22",
        eventType: "Quotation received",
        title: "Stationery quote received",
        description: "Received notebook and pen quotation for Barbados stationery project.",
        relatedOrderId: "MOER-2026-003",
        status: "Open",
        nextAction: "Confirm cover designs"
      }
    ]
  },
  {
    id: "supplier-003",
    supplierName: "Christmas Decoration Factory",
    contactPerson: "Ms. Wang",
    phone: "+86 138 0000 1003",
    wechat: "xmas-wang",
    email: "",
    city: "Jinhua",
    marketFactory: "Factory",
    productCategory: "Christmas Items",
    mainProducts: "Christmas ornaments, gift bags, hanging decorations, display items",
    priceLevel: "Medium",
    qualityLevel: "Standard",
    deliverySpeed: "Normal",
    reliabilityRating: "Needs Follow-up",
    status: "Active",
    priority: "High",
    nextAction: "Follow up Eddie UK Christmas quotation",
    notes: "Seasonal factory. Need early confirmation because production schedule fills quickly.",
    createdAt: "2026-06-21T14:00:00",
    updatedAt: "2026-06-25T16:20:00",
    timeline: [
      {
        id: "supplier-timeline-003-a",
        date: "2026-06-24",
        eventType: "Quotation received",
        title: "Christmas item quote started",
        description: "Factory started checking prices and MOQ for Eddie's UK Christmas list.",
        relatedOrderId: "MOER-2026-002",
        status: "Waiting",
        nextAction: "Push factory for full quotation"
      }
    ]
  },
  {
    id: "supplier-004",
    supplierName: "Packaging Supplier",
    contactPerson: "Mr. Zhang",
    phone: "+86 138 0000 1004",
    wechat: "packaging-zhang",
    email: "",
    city: "Yiwu",
    marketFactory: "Yiwu Packaging Market",
    productCategory: "Packaging",
    mainProducts: "Gift boxes, cartons, labels, poly bags, paper bags",
    priceLevel: "Medium",
    qualityLevel: "Good",
    deliverySpeed: "Fast",
    reliabilityRating: "Reliable",
    status: "Backup",
    priority: "Normal",
    nextAction: "Request packaging quote when private label order starts",
    notes: "Useful backup supplier for packaging and label support.",
    createdAt: "2026-06-19T16:00:00",
    updatedAt: "2026-06-24T09:45:00",
    timeline: [
      {
        id: "supplier-timeline-004-a",
        date: "2026-06-19",
        eventType: "First contact",
        title: "Packaging supplier added",
        description: "Supplier can support gift boxes, labels, and carton packaging.",
        relatedOrderId: "",
        status: "Done",
        nextAction: "Keep as packaging backup"
      }
    ]
  }
];

const orderSeedData = [
  {
    id: "order-001",
    orderCode: "MOER-2026-001",
    orderName: "Nicholas Trinidad container project",
    customerName: "Nicholas",
    country: "Trinidad and Tobago",
    status: "In Production",
    priority: "High",
    productsSummary: "Mixed container with stationery, daily-use products, and household items",
    quantity: "1x40HQ mixed container",
    supplierName: "Yiwu Mixed Goods Supplier A",
    orderValue: "USD 18,600",
    depositStatus: "Paid",
    balanceStatus: "Not Due",
    productionStatus: "In Progress",
    qcStatus: "Planned",
    warehouseStatus: "Not Arrived",
    shippingStatus: "Planning",
    etd: "2026-07-18",
    eta: "2026-08-19",
    nextAction: "Confirm final carton details and supplier delivery dates",
    dueDate: "2026-07-08",
    notes: "Customer wants practical products for back-to-school season. Watch carton volume for mixed container planning.",
    createdAt: "2026-06-20T09:15:00",
    updatedAt: "2026-06-26T10:30:00",
    timeline: [
      {
        id: "timeline-001-a",
        date: "2026-06-20",
        title: "Order created",
        description: "Nicholas confirmed the Trinidad mixed container project.",
        status: "Customer Update"
      },
      {
        id: "timeline-001-b",
        date: "2026-06-26",
        title: "Production started",
        description: "Main supplier started production. Packing details still need confirmation.",
        status: "Production"
      }
    ]
  },
  {
    id: "order-002",
    orderCode: "MOER-2026-002",
    orderName: "Eddie UK Christmas items",
    customerName: "Eddie",
    country: "UK",
    status: "Waiting Supplier",
    priority: "Normal",
    productsSummary: "Christmas decorations, ornaments, gift bags, seasonal display items",
    quantity: "Assorted SKUs, quantity pending",
    supplierName: "Yiwu Christmas Supplier B",
    orderValue: "Pending quote",
    depositStatus: "Not Requested",
    balanceStatus: "Not Due",
    productionStatus: "Not Started",
    qcStatus: "Not Needed",
    warehouseStatus: "Not Arrived",
    shippingStatus: "Not Planned",
    etd: "2026-08-05",
    eta: "2026-09-08",
    nextAction: "Collect supplier quotes and MOQ options",
    dueDate: "2026-07-03",
    notes: "Seasonal timing is important. Need clear photos, packaging details, and early shipping plan.",
    createdAt: "2026-06-24T14:20:00",
    updatedAt: "2026-06-25T16:00:00",
    timeline: [
      {
        id: "timeline-002-a",
        date: "2026-06-24",
        title: "Inquiry received",
        description: "Eddie asked for Christmas item options for the UK market.",
        status: "Customer Update"
      }
    ]
  },
  {
    id: "order-003",
    orderCode: "MOER-2026-003",
    orderName: "Graham Barbados stationery",
    customerName: "Graham",
    country: "Barbados",
    status: "Waiting Customer",
    priority: "Normal",
    productsSummary: "Notebooks, pens, pencil cases, rulers, school sets",
    quantity: "8,000 pcs mixed stationery",
    supplierName: "Yiwu Stationery Supplier C",
    orderValue: "USD 6,200",
    depositStatus: "Requested",
    balanceStatus: "Not Due",
    productionStatus: "Not Started",
    qcStatus: "Planned",
    warehouseStatus: "Not Arrived",
    shippingStatus: "Planning",
    etd: "2026-07-28",
    eta: "2026-08-24",
    nextAction: "Wait for customer confirmation on notebook designs",
    dueDate: "2026-06-28",
    notes: "Customer is focused on school season timing and stable quality.",
    createdAt: "2026-06-22T15:15:00",
    updatedAt: "2026-06-26T11:00:00",
    timeline: [
      {
        id: "timeline-003-a",
        date: "2026-06-22",
        title: "Stationery project added",
        description: "Graham shared the first school stationery list.",
        status: "Customer Update"
      },
      {
        id: "timeline-003-b",
        date: "2026-06-26",
        title: "Design confirmation pending",
        description: "Need customer confirmation before supplier can hold price.",
        status: "Payment"
      }
    ]
  }
];

const quotationSeedData = [
  {
    id: "quotation-001",
    quotationCode: "QT-2026-001",
    customerName: "Nicholas",
    country: "Trinidad and Tobago",
    productSummary: "Mixed container with stationery, household items, and daily-use products",
    supplierName: "Yiwu Stationery Supplier",
    quantity: "1x40HQ mixed container",
    unitPrice: "Mixed by item",
    totalAmount: "18600",
    currency: "USD",
    status: "Sent",
    validUntil: "2026-07-05",
    nextAction: "Confirm carton volume and selected SKUs",
    notes: "Keep the quotation practical. Nicholas needs clear options for mixed container planning.",
    createdAt: "2026-06-25T09:00:00",
    updatedAt: "2026-06-25T11:30:00"
  },
  {
    id: "quotation-002",
    quotationCode: "QT-2026-002",
    customerName: "Eddie",
    country: "UK",
    productSummary: "Christmas decorations, ornaments, gift bags, and seasonal display items",
    supplierName: "Christmas Decoration Factory",
    quantity: "Assorted SKUs",
    unitPrice: "Pending by SKU",
    totalAmount: "9800",
    currency: "USD",
    status: "Draft",
    validUntil: "2026-07-10",
    nextAction: "Wait for factory MOQ and packing details",
    notes: "Seasonal timing matters. Send only clear products with photos, MOQ, packing, and lead time.",
    createdAt: "2026-06-24T14:00:00",
    updatedAt: "2026-06-26T10:20:00"
  },
  {
    id: "quotation-003",
    quotationCode: "QT-2026-003",
    customerName: "Graham",
    country: "Barbados",
    productSummary: "Notebooks, pens, pencil cases, rulers, and school stationery sets",
    supplierName: "Yiwu Stationery Supplier",
    quantity: "8,000 pcs mixed stationery",
    unitPrice: "0.78 average",
    totalAmount: "6200",
    currency: "USD",
    status: "Waiting Customer",
    validUntil: "2026-07-03",
    nextAction: "Follow up on notebook cover design confirmation",
    notes: "Customer is focused on school season timing and stable quality.",
    createdAt: "2026-06-23T16:00:00",
    updatedAt: "2026-06-26T11:05:00"
  }
];

const shipmentSeedData = [
  {
    id: "shipment-001",
    shipmentCode: "SHP-2026-001",
    customerName: "Nicholas",
    country: "Trinidad and Tobago",
    relatedOrder: "MOER-2026-001",
    forwarder: "Ningbo Ocean Forwarding",
    containerType: "40HQ",
    containerNumber: "MSCU1234567",
    pol: "Ningbo",
    pod: "Port of Spain",
    etd: "2026-07-18",
    eta: "2026-08-19",
    vessel: "COSCO Pacific",
    status: "Preparing",
    documentsStatus: "Pending",
    nextAction: "Confirm final carton details before booking",
    notes: "Mixed container for Trinidad. Watch CBM and keep Nicholas updated on loading plan.",
    documents: {
      "Commercial Invoice": true,
      "Packing List": false,
      "Bill of Lading": false,
      "Certificate of Origin": false,
      "Other documents": false
    },
    timeline: [
      {
        id: "shipment-timeline-001-a",
        date: "2026-06-26",
        title: "Shipment planning started",
        description: "Container plan created for Nicholas Trinidad project.",
        status: "Preparing"
      }
    ],
    createdAt: "2026-06-26T12:00:00",
    updatedAt: "2026-06-26T12:00:00"
  },
  {
    id: "shipment-002",
    shipmentCode: "SHP-2026-002",
    customerName: "Eddie",
    country: "UK",
    relatedOrder: "MOER-2026-002",
    forwarder: "Shanghai UK Consolidation",
    containerType: "LCL",
    containerNumber: "",
    pol: "Shanghai",
    pod: "Felixstowe",
    etd: "2026-08-05",
    eta: "2026-09-08",
    vessel: "Pending booking",
    status: "Booked",
    documentsStatus: "Partial",
    nextAction: "Confirm Christmas item packing list with supplier",
    notes: "Seasonal shipment. Keep an eye on production timing and UK arrival window.",
    documents: {
      "Commercial Invoice": true,
      "Packing List": true,
      "Bill of Lading": false,
      "Certificate of Origin": false,
      "Other documents": false
    },
    timeline: [
      {
        id: "shipment-timeline-002-a",
        date: "2026-06-26",
        title: "Forwarder contacted",
        description: "Asked forwarder for UK LCL sailing schedule.",
        status: "Booked"
      }
    ],
    createdAt: "2026-06-26T13:00:00",
    updatedAt: "2026-06-26T13:00:00"
  },
  {
    id: "shipment-003",
    shipmentCode: "SHP-2026-003",
    customerName: "Graham",
    country: "Barbados",
    relatedOrder: "MOER-2026-003",
    forwarder: "Caribbean Sea Freight Partner",
    containerType: "20GP",
    containerNumber: "TGHU7654321",
    pol: "Ningbo",
    pod: "Bridgetown",
    etd: "2026-07-28",
    eta: "2026-08-24",
    vessel: "Maersk Horizon",
    status: "In Transit",
    documentsStatus: "Ready",
    nextAction: "Send document copy to Graham",
    notes: "Stationery shipment for school season. Documents should be kept very clear.",
    documents: {
      "Commercial Invoice": true,
      "Packing List": true,
      "Bill of Lading": true,
      "Certificate of Origin": true,
      "Other documents": false
    },
    timeline: [
      {
        id: "shipment-timeline-003-a",
        date: "2026-06-25",
        title: "Documents prepared",
        description: "Commercial invoice, packing list, and draft B/L prepared.",
        status: "Documents"
      },
      {
        id: "shipment-timeline-003-b",
        date: "2026-06-26",
        title: "Shipment moved to transit",
        description: "Shipment status updated for Barbados stationery project.",
        status: "In Transit"
      }
    ],
    createdAt: "2026-06-24T15:00:00",
    updatedAt: "2026-06-26T14:00:00"
  }
];

const productSeedData = [
  {
    id: "product-001",
    productName: "School Notebook Set",
    category: "Stationery",
    keywords: "notebook, school, stationery, back to school",
    supplierName: "Yiwu Stationery Supplier",
    customerInterested: "Graham",
    moq: "3,000",
    unit: "sets",
    price: "USD 0.78",
    photosPlaceholder: "Notebook cover, inside pages, packing photo",
    notes: "Good fit for Barbados school season. Confirm cover designs and paper GSM.",
    createdAt: "2026-06-20T09:00:00",
    updatedAt: "2026-06-26T09:00:00",
    timeline: [
      {
        id: "product-timeline-001-a",
        date: "2026-06-23",
        title: "Added from Graham stationery request",
        description: "Notebook set added after customer asked for school stationery options.",
        status: "Customer Interest"
      }
    ]
  },
  {
    id: "product-002",
    productName: "Ball Pen Mixed Pack",
    category: "Stationery",
    keywords: "pen, stationery, school, office",
    supplierName: "Yiwu Stationery Supplier",
    customerInterested: "Graham",
    moq: "10,000",
    unit: "pcs",
    price: "USD 0.09",
    photosPlaceholder: "Pen body, ink test, carton packing",
    notes: "Check ink quality and color mix before confirming.",
    createdAt: "2026-06-21T10:00:00",
    updatedAt: "2026-06-26T09:15:00",
    timeline: []
  },
  {
    id: "product-003",
    productName: "Christmas Hanging Ornament",
    category: "Christmas Items",
    keywords: "christmas, ornament, decoration, seasonal",
    supplierName: "Christmas Decoration Factory",
    customerInterested: "Eddie",
    moq: "2,000",
    unit: "pcs",
    price: "USD 0.42",
    photosPlaceholder: "Front photo, size photo, packaging photo",
    notes: "Seasonal item. Confirm production lead time early for UK shipment.",
    createdAt: "2026-06-22T11:00:00",
    updatedAt: "2026-06-26T09:30:00",
    timeline: [
      {
        id: "product-timeline-003-a",
        date: "2026-06-24",
        title: "Included in Eddie Christmas quote",
        description: "Added to draft quotation for UK Christmas items.",
        status: "Quotation"
      }
    ]
  },
  {
    id: "product-004",
    productName: "Christmas Gift Bag",
    category: "Christmas Items",
    keywords: "christmas, gift bag, packaging, seasonal",
    supplierName: "Christmas Decoration Factory",
    customerInterested: "Eddie",
    moq: "5,000",
    unit: "pcs",
    price: "USD 0.18",
    photosPlaceholder: "Design options, handle detail, carton photo",
    notes: "Useful add-on product. Confirm paper thickness and print quality.",
    createdAt: "2026-06-22T11:30:00",
    updatedAt: "2026-06-26T09:45:00",
    timeline: []
  },
  {
    id: "product-005",
    productName: "Household Storage Basket",
    category: "Household",
    keywords: "storage, basket, household, plastic",
    supplierName: "Yiwu Mixed Goods Supplier A",
    customerInterested: "Nicholas",
    moq: "1,200",
    unit: "pcs",
    price: "USD 1.35",
    photosPlaceholder: "Product size, material, stack view",
    notes: "Good mixed container item for Caribbean market. Watch carton volume.",
    createdAt: "2026-06-23T10:00:00",
    updatedAt: "2026-06-26T10:00:00",
    timeline: []
  },
  {
    id: "product-006",
    productName: "Kitchen Sponge Pack",
    category: "Daily-use Products",
    keywords: "sponge, kitchen, cleaning, daily-use",
    supplierName: "Yiwu Mixed Goods Supplier A",
    customerInterested: "Nicholas",
    moq: "3,000",
    unit: "packs",
    price: "USD 0.32",
    photosPlaceholder: "Pack photo, material close-up, carton mark",
    notes: "Low price daily-use product. Good for mixed container filler.",
    createdAt: "2026-06-23T10:30:00",
    updatedAt: "2026-06-26T10:15:00",
    timeline: []
  },
  {
    id: "product-007",
    productName: "Educational Puzzle Toy",
    category: "Toys",
    keywords: "toy, puzzle, educational, kids",
    supplierName: "Yiwu Toy Supplier",
    customerInterested: "Nicholas",
    moq: "1,000",
    unit: "pcs",
    price: "USD 1.10",
    photosPlaceholder: "Product photo, age label, packaging photo",
    notes: "Check safety labeling before EU or UK customers.",
    createdAt: "2026-06-24T10:00:00",
    updatedAt: "2026-06-26T10:30:00",
    timeline: []
  },
  {
    id: "product-008",
    productName: "Gift Box Set",
    category: "Packaging",
    keywords: "gift box, packaging, paper box, private label",
    supplierName: "Packaging Supplier",
    customerInterested: "Eddie",
    moq: "2,000",
    unit: "sets",
    price: "USD 0.65",
    photosPlaceholder: "Open box, closed box, print sample",
    notes: "Useful for seasonal gift packaging. Confirm print files and paper thickness.",
    createdAt: "2026-06-24T11:00:00",
    updatedAt: "2026-06-26T10:45:00",
    timeline: []
  },
  {
    id: "product-009",
    productName: "Reusable Shopping Bag",
    category: "Bags",
    keywords: "shopping bag, reusable, non woven, supermarket",
    supplierName: "Packaging Supplier",
    customerInterested: "Nicholas",
    moq: "3,000",
    unit: "pcs",
    price: "USD 0.38",
    photosPlaceholder: "Bag size, handle strength, print area",
    notes: "Good for supermarket buyers. Check handle strength and printing cost.",
    createdAt: "2026-06-25T09:00:00",
    updatedAt: "2026-06-26T11:00:00",
    timeline: []
  },
  {
    id: "product-010",
    productName: "Personal Care Travel Bottle Set",
    category: "Personal Care",
    keywords: "travel bottle, personal care, toiletry, bottle set",
    supplierName: "Yiwu Mixed Goods Supplier A",
    customerInterested: "Nicholas",
    moq: "2,000",
    unit: "sets",
    price: "USD 0.95",
    photosPlaceholder: "Bottle set, capacity label, bag packing",
    notes: "Check material, leakage, and packaging before recommending.",
    createdAt: "2026-06-25T10:00:00",
    updatedAt: "2026-06-26T11:15:00",
    timeline: []
  }
];

const financeSeedData = [
  {
    id: "finance-001",
    financeCode: "FIN-2026-001",
    type: "Customer Payment",
    customerName: "Nicholas",
    supplierName: "",
    relatedOrder: "MOER-2026-001",
    amount: "5580",
    currency: "USD",
    paymentStatus: "Paid",
    dueDate: "2026-06-21",
    paidDate: "2026-06-22",
    paymentMethod: "Bank transfer",
    notes: "30% deposit received for Nicholas Trinidad container project.",
    createdAt: "2026-06-21T10:00:00",
    updatedAt: "2026-06-22T10:30:00"
  },
  {
    id: "finance-002",
    financeCode: "FIN-2026-002",
    type: "Customer Payment",
    customerName: "Nicholas",
    supplierName: "",
    relatedOrder: "MOER-2026-001",
    amount: "13020",
    currency: "USD",
    paymentStatus: "Waiting",
    dueDate: "2026-07-15",
    paidDate: "",
    paymentMethod: "Bank transfer",
    notes: "Balance payment to request before shipment release.",
    createdAt: "2026-06-22T11:00:00",
    updatedAt: "2026-06-26T09:00:00"
  },
  {
    id: "finance-003",
    financeCode: "FIN-2026-003",
    type: "Supplier Payment",
    customerName: "Graham",
    supplierName: "Yiwu Stationery Supplier",
    relatedOrder: "MOER-2026-003",
    amount: "3100",
    currency: "USD",
    paymentStatus: "Partial",
    dueDate: "2026-06-30",
    paidDate: "",
    paymentMethod: "Bank transfer",
    notes: "Supplier deposit waiting after Graham confirms notebook designs.",
    createdAt: "2026-06-23T16:20:00",
    updatedAt: "2026-06-26T11:00:00"
  },
  {
    id: "finance-004",
    financeCode: "FIN-2026-004",
    type: "Supplier Payment",
    customerName: "Eddie",
    supplierName: "Christmas Decoration Factory",
    relatedOrder: "MOER-2026-002",
    amount: "2940",
    currency: "USD",
    paymentStatus: "Waiting",
    dueDate: "2026-07-05",
    paidDate: "",
    paymentMethod: "Bank transfer",
    notes: "Supplier deposit can be arranged after Christmas quote is approved.",
    createdAt: "2026-06-24T15:00:00",
    updatedAt: "2026-06-26T10:20:00"
  },
  {
    id: "finance-005",
    financeCode: "FIN-2026-005",
    type: "Expense",
    customerName: "Nicholas",
    supplierName: "",
    relatedOrder: "MOER-2026-001",
    amount: "280",
    currency: "CNY",
    paymentStatus: "Paid",
    dueDate: "2026-06-26",
    paidDate: "2026-06-26",
    paymentMethod: "WeChat Pay",
    notes: "Local warehouse handling expense for mixed container planning.",
    createdAt: "2026-06-26T13:00:00",
    updatedAt: "2026-06-26T13:00:00"
  },
  {
    id: "finance-006",
    financeCode: "FIN-2026-006",
    type: "Refund",
    customerName: "Eddie",
    supplierName: "Christmas Decoration Factory",
    relatedOrder: "MOER-2026-002",
    amount: "120",
    currency: "USD",
    paymentStatus: "Waiting",
    dueDate: "2026-07-02",
    paidDate: "",
    paymentMethod: "Bank transfer",
    notes: "Small refund / price adjustment to confirm after sample cost review.",
    createdAt: "2026-06-26T14:00:00",
    updatedAt: "2026-06-26T14:00:00"
  }
];

const editableLists = {
  focusTasks: [],
  peopleWaiting: [],
  urgentItems: [],
  mealPlanner: []
};

let orders = [];
let selectedOrderId = "";
let customers = [];
let selectedCustomerId = "";
let suppliers = [];
let selectedSupplierId = "";
let quotations = [];
let selectedQuotationId = "";
let shipments = [];
let selectedShipmentId = "";
let products = [];
let selectedProductId = "";
let financeRecords = [];
let selectedFinanceId = "";

const portalModules = [
  {
    id: "today",
    section: "today",
    name: "Today",
    purpose: "Main Moer OS home page for daily focus, reminders, search, and quick access.",
    status: "Ready",
    internalPage: "today"
  },
  {
    id: "knowledge-center",
    section: "knowledge-center",
    name: "Knowledge Center",
    purpose: "Company knowledge brain for SOPs, SEO, prompts, business knowledge, and future AI retrieval.",
    status: "Prototype",
    href: "../Knowledge-Center/index.html"
  },
  {
    id: "order-center",
    section: "today",
    name: "Order Center",
    purpose: "Real V1 foundation for managing sourcing orders, suppliers, customers, shipments, and timelines.",
    status: "Ready",
    internalPage: "order-center"
  },
  {
    id: "customer-center",
    section: "today",
    name: "Customer Center",
    purpose: "Local CRM prototype for customers, follow-ups, related orders, and relationship history.",
    status: "Prototype",
    internalPage: "customer-center"
  },
  {
    id: "supplier-center",
    section: "today",
    name: "Supplier Center",
    purpose: "Supplier memory center for products, reliability, linked orders, timelines, and next actions.",
    status: "Prototype",
    internalPage: "supplier-center"
  },
  {
    id: "quotation-center",
    section: "today",
    name: "Quotation Center",
    purpose: "Local quotation prototype for customer quotes, supplier links, prices, validity, and next actions.",
    status: "Prototype",
    internalPage: "quotation-center"
  },
  {
    id: "shipment-center",
    section: "today",
    name: "Shipment Center",
    purpose: "Shipment and container tracking prototype for bookings, ETD, ETA, documents, and next actions.",
    status: "Prototype",
    internalPage: "shipment-center"
  },
  {
    id: "product-center",
    section: "today",
    name: "Product Center",
    purpose: "Simple product database for categories, keywords, suppliers, interested customers, prices, notes, and related work.",
    status: "Prototype",
    internalPage: "product-center"
  },
  {
    id: "finance-center",
    section: "today",
    name: "Finance Center",
    purpose: "Simple finance tracker for customer payments, supplier payments, expenses, refunds, due dates, and notes.",
    status: "Prototype",
    internalPage: "finance-center"
  },
  {
    id: "ai-command-center",
    section: "today",
    name: "AI Command Center",
    purpose: "Universal local command search across customers, orders, suppliers, products, quotations, shipments, finance, and knowledge.",
    status: "Prototype",
    internalPage: "ai-command-center"
  },
  {
    id: "order-center-docs",
    section: "order-center",
    name: "Order Center Documents",
    purpose: "Long-term architecture documents for the full sourcing management system.",
    status: "Architecture ready",
    href: "../Order-Center/README.md",
    showOnToday: false
  },
  {
    id: "timeline-engine",
    section: "timeline-engine",
    name: "Timeline Engine",
    purpose: "Reusable event history engine for orders, customers, suppliers, quotations, and shipping.",
    status: "Ready",
    href: "../../Core/Timeline/index.html"
  },
  {
    id: "family-meal-planner",
    section: "family-meal-planner",
    name: "Family Meal Planner",
    purpose: "Simple local meal and shopping planner inside the Moer OS shell.",
    status: "Prototype",
    internalPage: "family-meal-planner"
  },
  {
    id: "focus-center",
    section: "today",
    name: "Focus Center",
    purpose: "Architecture documents for focus, planning, and daily work control.",
    status: "Architecture ready",
    href: "../Focus-Center/README.md"
  }
];

const searchModules = [
  {
    name: "Today",
    items: [
      { title: "Today dashboard", type: "Page", description: "Open the daily overview for focus, people waiting, urgent notes, dinner, and family reminders.", page: "today" },
      { title: "People Waiting", type: "Section", description: "Customers, suppliers, and family messages waiting for a reply.", page: "today" },
      { title: "Urgent Items", type: "Section", description: "Important notes for payments, deadlines, shipping issues, and quick decisions.", page: "today" },
      { title: "Content Plan", type: "Section", description: "Today's video idea or practical sourcing post.", page: "today" }
    ]
  },
  {
    name: "Tasks",
    items: [
      { title: "Follow up with customers", type: "Task", description: "Check customers who need a reply today.", page: "today" },
      { title: "Review urgent orders", type: "Task", description: "Look at orders with deadline, payment, or shipment risk.", page: "today" },
      { title: "Plan tomorrow", type: "Task", description: "Choose the next important work before the day ends.", page: "today" },
      { title: "Focus Center", type: "Architecture", description: "Open Focus Center documentation.", href: "../Focus-Center/README.md" }
    ]
  },
  {
    name: "Meal Planner",
    items: [
      { title: "Dinner plan", type: "Family", description: "Save today's dinner idea.", page: "today" },
      { title: "Shopping list", type: "Family", description: "Open the family meal planner.", page: "family-meal-planner" },
      { title: "Weekly meal ideas", type: "Family", description: "Open the family meal planner.", page: "family-meal-planner" }
    ]
  },
  {
    name: "Customers",
    items: [
      { title: "Customer Center", type: "Prototype", description: "Open the local Customer Center prototype.", page: "customer-center" },
      { title: "Customer follow-ups", type: "CRM", description: "Track customer follow-up dates and next actions.", page: "customer-center" },
      { title: "Related customer orders", type: "CRM", description: "View orders connected by customer name.", page: "customer-center" }
    ]
  },
  {
    name: "Suppliers",
    items: [
      { title: "Supplier Center", type: "Prototype", description: "Open the local Supplier Center prototype.", page: "supplier-center" },
      { title: "Supplier reliability", type: "Supplier", description: "Track supplier reliability, quality, delivery speed, and notes.", page: "supplier-center" },
      { title: "Related supplier orders", type: "Supplier", description: "View orders linked by supplier name.", page: "supplier-center" }
    ]
  },
  {
    name: "Quotations",
    items: [
      { title: "Quotation Center", type: "Prototype", description: "Open the local Quotation Center prototype.", page: "quotation-center" },
      { title: "Draft quotations", type: "Quote", description: "Review quotations that still need supplier details or customer pricing.", page: "quotation-center" },
      { title: "Waiting customer quotations", type: "Quote", description: "Track sent quotes waiting for customer confirmation.", page: "quotation-center" }
    ]
  },
  {
    name: "Shipments",
    items: [
      { title: "Shipment Center", type: "Prototype", description: "Open the local Shipment Center prototype.", page: "shipment-center" },
      { title: "Documents pending", type: "Shipment", description: "Review shipments where invoice, packing list, B/L, CO, or other documents still need attention.", page: "shipment-center" },
      { title: "Container tracking", type: "Shipment", description: "Track ETD, ETA, vessel, POL, POD, and container number locally.", page: "shipment-center" }
    ]
  },
  {
    name: "Products",
    items: [
      { title: "Product Center", type: "Prototype", description: "Open the local Product Center prototype.", page: "product-center" },
      { title: "Product categories", type: "Product", description: "Search products by category, supplier, customer interest, and keyword.", page: "product-center" },
      { title: "Product sourcing memory", type: "Product", description: "Track product notes, MOQ, unit, price, photo placeholders, and related work.", page: "product-center" }
    ]
  },
  {
    name: "Finance",
    items: [
      { title: "Finance Center", type: "Prototype", description: "Open the local Finance Center prototype.", page: "finance-center" },
      { title: "Customer payments", type: "Finance", description: "Track customer deposits, balances, due dates, and paid dates.", page: "finance-center" },
      { title: "Supplier payments", type: "Finance", description: "Track supplier payment status, methods, due dates, and notes.", page: "finance-center" }
    ]
  },
  {
    name: "Knowledge",
    items: [
      { title: "China sourcing process", type: "Knowledge", description: "How Moer helps buyers source, inspect, consolidate, and ship products.", page: "knowledge-center" },
      { title: "Yiwu Market guide", type: "Knowledge", description: "Useful notes for buyers visiting Yiwu Market.", page: "knowledge-center" },
      { title: "Quality inspection SOP", type: "Knowledge", description: "Future process page for checking products before shipment.", page: "knowledge-center" },
      { title: "Knowledge Center", type: "Module", description: "Open the Knowledge Center prototype.", href: "../Knowledge-Center/index.html" }
    ]
  },
  {
    name: "Videos",
    items: [
      { title: "Yiwu market visit video", type: "Video", description: "Mock video idea showing real sourcing work in Yiwu.", page: "knowledge-center" },
      { title: "Container loading story", type: "Video", description: "Mock behind-the-scenes video about shipment preparation.", page: "knowledge-center" },
      { title: "Common sourcing mistakes", type: "Video", description: "Mock educational video for first-time importers.", page: "knowledge-center" }
    ]
  },
  {
    name: "Settings",
    items: [
      { title: "User name", type: "Setting", description: "Change the name used in the Moer OS greeting.", page: "settings" },
      { title: "Company name", type: "Setting", description: "Save the company name for this local prototype.", page: "settings" },
      { title: "Data storage note", type: "Setting", description: "Moer OS V1 stores simple data in localStorage only.", page: "settings" }
    ]
  },
  {
    name: "Moer OS Modules",
    items: [
      { title: "Order Center", type: "Prototype", description: "Open the local Order Center prototype.", page: "order-center" },
      { title: "Customer Center", type: "Prototype", description: "Open the local Customer Center prototype.", page: "customer-center" },
      { title: "Supplier Center", type: "Prototype", description: "Open the local Supplier Center prototype.", page: "supplier-center" },
      { title: "Quotation Center", type: "Prototype", description: "Open the local Quotation Center prototype.", page: "quotation-center" },
      { title: "Shipment Center", type: "Prototype", description: "Open the local Shipment Center prototype.", page: "shipment-center" },
      { title: "Product Center", type: "Prototype", description: "Open the local Product Center prototype.", page: "product-center" },
      { title: "Finance Center", type: "Prototype", description: "Open the local Finance Center prototype.", page: "finance-center" },
      { title: "AI Command Center", type: "Prototype", description: "Open the universal local command search page.", page: "ai-command-center" },
      { title: "Order Center Architecture", type: "Architecture", description: "Open Order Center architecture docs.", href: "../Order-Center/README.md" },
      { title: "Timeline Engine", type: "Core Engine", description: "Open reusable Timeline Engine prototype.", href: "../../Core/Timeline/index.html" },
      { title: "Focus Center", type: "Architecture", description: "Open Focus Center documentation.", href: "../Focus-Center/README.md" },
      { title: "Family Meal Planner", type: "Prototype", description: "Open the local meal planner.", page: "family-meal-planner" }
    ]
  }
];

const pageButtons = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");
const todayDate = document.querySelector("#todayDate");
const todayDashboard = document.querySelector("#todayDashboard");
const greeting = document.querySelector("#greeting");
const searchTrigger = document.querySelector("#searchTrigger");
const mobileSearchTrigger = document.querySelector("#mobileSearchTrigger");
const commandOverlay = document.querySelector("#commandOverlay");
const commandSearchInput = document.querySelector("#commandSearchInput");
const commandResults = document.querySelector("#commandResults");
const aiCommandInput = document.querySelector("#aiCommandInput");
const aiCommandResults = document.querySelector("#aiCommandResults");
const userName = document.querySelector("#userName");
const companyName = document.querySelector("#companyName");
const themeOption = document.querySelector("#themeOption");
const contentPlan = document.querySelector("#contentPlan");
const dinnerPlan = document.querySelector("#dinnerPlan");
const sonSleep = document.querySelector("#sonSleep");
const sonExercise = document.querySelector("#sonExercise");
const sonMeal = document.querySelector("#sonMeal");
const mealForm = document.querySelector("#mealForm");
const mealInput = document.querySelector("#mealInput");
const mealList = document.querySelector("#mealList");
const orderForm = document.querySelector("#orderForm");
const orderFormTitle = document.querySelector("#orderFormTitle");
const orderId = document.querySelector("#orderId");
const orderCode = document.querySelector("#orderCode");
const orderName = document.querySelector("#orderName");
const orderCustomer = document.querySelector("#orderCustomer");
const orderCountry = document.querySelector("#orderCountry");
const orderSupplier = document.querySelector("#orderSupplier");
const orderStatus = document.querySelector("#orderStatus");
const orderPriority = document.querySelector("#orderPriority");
const orderValue = document.querySelector("#orderValue");
const orderQuantity = document.querySelector("#orderQuantity");
const orderDueDate = document.querySelector("#orderDueDate");
const depositStatus = document.querySelector("#depositStatus");
const balanceStatus = document.querySelector("#balanceStatus");
const productionStatus = document.querySelector("#productionStatus");
const qcStatus = document.querySelector("#qcStatus");
const warehouseStatus = document.querySelector("#warehouseStatus");
const shippingStatus = document.querySelector("#shippingStatus");
const orderEtd = document.querySelector("#orderEtd");
const orderEta = document.querySelector("#orderEta");
const productsSummary = document.querySelector("#productsSummary");
const nextAction = document.querySelector("#nextAction");
const orderNotes = document.querySelector("#orderNotes");
const resetOrderForm = document.querySelector("#resetOrderForm");
const orderDashboard = document.querySelector("#orderDashboard");
const orderSearchInput = document.querySelector("#orderSearchInput");
const orderStatusFilter = document.querySelector("#orderStatusFilter");
const orderPriorityFilter = document.querySelector("#orderPriorityFilter");
const orderCustomerFilter = document.querySelector("#orderCustomerFilter");
const orderSupplierFilter = document.querySelector("#orderSupplierFilter");
const orderList = document.querySelector("#orderList");
const orderDetailTitle = document.querySelector("#orderDetailTitle");
const orderDetail = document.querySelector("#orderDetail");
const orderTimeline = document.querySelector("#orderTimeline");
const timelineForm = document.querySelector("#timelineForm");
const timelineOrderId = document.querySelector("#timelineOrderId");
const timelineDate = document.querySelector("#timelineDate");
const timelineStatus = document.querySelector("#timelineStatus");
const timelineTitle = document.querySelector("#timelineTitle");
const timelineDescription = document.querySelector("#timelineDescription");
const customerForm = document.querySelector("#customerForm");
const customerFormTitle = document.querySelector("#customerFormTitle");
const customerId = document.querySelector("#customerId");
const customerName = document.querySelector("#customerName");
const customerCompany = document.querySelector("#customerCompany");
const customerCountry = document.querySelector("#customerCountry");
const customerContactPerson = document.querySelector("#customerContactPerson");
const customerWhatsapp = document.querySelector("#customerWhatsapp");
const customerEmail = document.querySelector("#customerEmail");
const customerWebsite = document.querySelector("#customerWebsite");
const customerType = document.querySelector("#customerType");
const customerStatus = document.querySelector("#customerStatus");
const customerPriority = document.querySelector("#customerPriority");
const mainProductInterest = document.querySelector("#mainProductInterest");
const lastContactDate = document.querySelector("#lastContactDate");
const nextFollowUpDate = document.querySelector("#nextFollowUpDate");
const customerNotes = document.querySelector("#customerNotes");
const customerFollowUpNotes = document.querySelector("#customerFollowUpNotes");
const customerNextAction = document.querySelector("#customerNextAction");
const resetCustomerForm = document.querySelector("#resetCustomerForm");
const customerDashboard = document.querySelector("#customerDashboard");
const followupDueToday = document.querySelector("#followupDueToday");
const followupOverdue = document.querySelector("#followupOverdue");
const customerSearchInput = document.querySelector("#customerSearchInput");
const customerCountryFilter = document.querySelector("#customerCountryFilter");
const customerStatusFilter = document.querySelector("#customerStatusFilter");
const customerPriorityFilter = document.querySelector("#customerPriorityFilter");
const customerTypeFilter = document.querySelector("#customerTypeFilter");
const customerInterestFilter = document.querySelector("#customerInterestFilter");
const customerList = document.querySelector("#customerList");
const customerDetailTitle = document.querySelector("#customerDetailTitle");
const customerDetail = document.querySelector("#customerDetail");
const customerRelatedOrders = document.querySelector("#customerRelatedOrders");
const customerFollowupForm = document.querySelector("#customerFollowupForm");
const customerFollowupId = document.querySelector("#customerFollowupId");
const customerFollowupDate = document.querySelector("#customerFollowupDate");
const customerFollowupNote = document.querySelector("#customerFollowupNote");
const customerTimelineForm = document.querySelector("#customerTimelineForm");
const customerTimelineCustomerId = document.querySelector("#customerTimelineCustomerId");
const customerTimelineDate = document.querySelector("#customerTimelineDate");
const customerTimelineEventType = document.querySelector("#customerTimelineEventType");
const customerTimelineTitle = document.querySelector("#customerTimelineTitle");
const customerTimelineOrderId = document.querySelector("#customerTimelineOrderId");
const customerTimelineDescription = document.querySelector("#customerTimelineDescription");
const customerTimelineNextAction = document.querySelector("#customerTimelineNextAction");
const customerTimelineStatus = document.querySelector("#customerTimelineStatus");
const customerTimeline = document.querySelector("#customerTimeline");
const supplierForm = document.querySelector("#supplierForm");
const supplierFormTitle = document.querySelector("#supplierFormTitle");
const supplierId = document.querySelector("#supplierId");
const supplierName = document.querySelector("#supplierName");
const supplierContactPerson = document.querySelector("#supplierContactPerson");
const supplierPhone = document.querySelector("#supplierPhone");
const supplierWechat = document.querySelector("#supplierWechat");
const supplierEmail = document.querySelector("#supplierEmail");
const supplierCity = document.querySelector("#supplierCity");
const supplierMarketFactory = document.querySelector("#supplierMarketFactory");
const supplierProductCategory = document.querySelector("#supplierProductCategory");
const supplierMainProducts = document.querySelector("#supplierMainProducts");
const supplierPriceLevel = document.querySelector("#supplierPriceLevel");
const supplierQualityLevel = document.querySelector("#supplierQualityLevel");
const supplierDeliverySpeed = document.querySelector("#supplierDeliverySpeed");
const supplierReliabilityRating = document.querySelector("#supplierReliabilityRating");
const supplierStatus = document.querySelector("#supplierStatus");
const supplierPriority = document.querySelector("#supplierPriority");
const supplierNextAction = document.querySelector("#supplierNextAction");
const supplierNotes = document.querySelector("#supplierNotes");
const resetSupplierForm = document.querySelector("#resetSupplierForm");
const supplierDashboard = document.querySelector("#supplierDashboard");
const supplierSearchInput = document.querySelector("#supplierSearchInput");
const supplierCategoryFilter = document.querySelector("#supplierCategoryFilter");
const supplierCityFilter = document.querySelector("#supplierCityFilter");
const supplierReliabilityFilter = document.querySelector("#supplierReliabilityFilter");
const supplierStatusFilter = document.querySelector("#supplierStatusFilter");
const supplierPriorityFilter = document.querySelector("#supplierPriorityFilter");
const supplierList = document.querySelector("#supplierList");
const supplierDetailTitle = document.querySelector("#supplierDetailTitle");
const supplierDetail = document.querySelector("#supplierDetail");
const supplierRelatedOrders = document.querySelector("#supplierRelatedOrders");
const supplierTimelineForm = document.querySelector("#supplierTimelineForm");
const supplierTimelineSupplierId = document.querySelector("#supplierTimelineSupplierId");
const supplierTimelineDate = document.querySelector("#supplierTimelineDate");
const supplierTimelineEventType = document.querySelector("#supplierTimelineEventType");
const supplierTimelineTitle = document.querySelector("#supplierTimelineTitle");
const supplierTimelineOrderId = document.querySelector("#supplierTimelineOrderId");
const supplierTimelineDescription = document.querySelector("#supplierTimelineDescription");
const supplierTimelineStatus = document.querySelector("#supplierTimelineStatus");
const supplierTimelineNextAction = document.querySelector("#supplierTimelineNextAction");
const supplierTimeline = document.querySelector("#supplierTimeline");
const supplierOptions = document.querySelector("#supplierOptions");
const quotationForm = document.querySelector("#quotationForm");
const quotationFormTitle = document.querySelector("#quotationFormTitle");
const quotationId = document.querySelector("#quotationId");
const quotationCode = document.querySelector("#quotationCode");
const quotationCustomer = document.querySelector("#quotationCustomer");
const quotationCountry = document.querySelector("#quotationCountry");
const quotationProductSummary = document.querySelector("#quotationProductSummary");
const quotationSupplier = document.querySelector("#quotationSupplier");
const quotationQuantity = document.querySelector("#quotationQuantity");
const quotationUnitPrice = document.querySelector("#quotationUnitPrice");
const quotationTotalAmount = document.querySelector("#quotationTotalAmount");
const quotationCurrency = document.querySelector("#quotationCurrency");
const quotationStatus = document.querySelector("#quotationStatus");
const quotationValidUntil = document.querySelector("#quotationValidUntil");
const quotationNextAction = document.querySelector("#quotationNextAction");
const quotationNotes = document.querySelector("#quotationNotes");
const resetQuotationForm = document.querySelector("#resetQuotationForm");
const quotationDashboard = document.querySelector("#quotationDashboard");
const quotationSearchInput = document.querySelector("#quotationSearchInput");
const quotationStatusFilter = document.querySelector("#quotationStatusFilter");
const quotationCustomerFilter = document.querySelector("#quotationCustomerFilter");
const quotationSupplierFilter = document.querySelector("#quotationSupplierFilter");
const quotationList = document.querySelector("#quotationList");
const quotationDetailTitle = document.querySelector("#quotationDetailTitle");
const quotationDetail = document.querySelector("#quotationDetail");
const shipmentForm = document.querySelector("#shipmentForm");
const shipmentFormTitle = document.querySelector("#shipmentFormTitle");
const shipmentId = document.querySelector("#shipmentId");
const shipmentCode = document.querySelector("#shipmentCode");
const shipmentCustomer = document.querySelector("#shipmentCustomer");
const shipmentCountry = document.querySelector("#shipmentCountry");
const shipmentRelatedOrder = document.querySelector("#shipmentRelatedOrder");
const shipmentForwarder = document.querySelector("#shipmentForwarder");
const shipmentContainerType = document.querySelector("#shipmentContainerType");
const shipmentContainerNumber = document.querySelector("#shipmentContainerNumber");
const shipmentPol = document.querySelector("#shipmentPol");
const shipmentPod = document.querySelector("#shipmentPod");
const shipmentEtd = document.querySelector("#shipmentEtd");
const shipmentEta = document.querySelector("#shipmentEta");
const shipmentVessel = document.querySelector("#shipmentVessel");
const shipmentStatus = document.querySelector("#shipmentStatus");
const shipmentDocumentsStatus = document.querySelector("#shipmentDocumentsStatus");
const shipmentDocCommercialInvoice = document.querySelector("#shipmentDocCommercialInvoice");
const shipmentDocPackingList = document.querySelector("#shipmentDocPackingList");
const shipmentDocBillOfLading = document.querySelector("#shipmentDocBillOfLading");
const shipmentDocCertificateOrigin = document.querySelector("#shipmentDocCertificateOrigin");
const shipmentDocOther = document.querySelector("#shipmentDocOther");
const shipmentNextAction = document.querySelector("#shipmentNextAction");
const shipmentNotes = document.querySelector("#shipmentNotes");
const resetShipmentForm = document.querySelector("#resetShipmentForm");
const shipmentDashboard = document.querySelector("#shipmentDashboard");
const shipmentSearchInput = document.querySelector("#shipmentSearchInput");
const shipmentStatusFilter = document.querySelector("#shipmentStatusFilter");
const shipmentCustomerFilter = document.querySelector("#shipmentCustomerFilter");
const shipmentDocumentsFilter = document.querySelector("#shipmentDocumentsFilter");
const shipmentList = document.querySelector("#shipmentList");
const shipmentDetailTitle = document.querySelector("#shipmentDetailTitle");
const shipmentDetail = document.querySelector("#shipmentDetail");
const shipmentTimeline = document.querySelector("#shipmentTimeline");
const productForm = document.querySelector("#productForm");
const productFormTitle = document.querySelector("#productFormTitle");
const productId = document.querySelector("#productId");
const productName = document.querySelector("#productName");
const productCategory = document.querySelector("#productCategory");
const productKeywords = document.querySelector("#productKeywords");
const productSupplier = document.querySelector("#productSupplier");
const productCustomer = document.querySelector("#productCustomer");
const productMoq = document.querySelector("#productMoq");
const productUnit = document.querySelector("#productUnit");
const productPrice = document.querySelector("#productPrice");
const productPhotos = document.querySelector("#productPhotos");
const productNotes = document.querySelector("#productNotes");
const resetProductForm = document.querySelector("#resetProductForm");
const productDashboard = document.querySelector("#productDashboard");
const productSearchInput = document.querySelector("#productSearchInput");
const productCategoryFilter = document.querySelector("#productCategoryFilter");
const productSupplierFilter = document.querySelector("#productSupplierFilter");
const productCustomerFilter = document.querySelector("#productCustomerFilter");
const productList = document.querySelector("#productList");
const productDetailTitle = document.querySelector("#productDetailTitle");
const productDetail = document.querySelector("#productDetail");
const productCategoryOptionsList = document.querySelector("#productCategoryOptions");
const financeForm = document.querySelector("#financeForm");
const financeFormTitle = document.querySelector("#financeFormTitle");
const financeId = document.querySelector("#financeId");
const financeCode = document.querySelector("#financeCode");
const financeType = document.querySelector("#financeType");
const financeCustomer = document.querySelector("#financeCustomer");
const financeSupplier = document.querySelector("#financeSupplier");
const financeRelatedOrder = document.querySelector("#financeRelatedOrder");
const financeAmount = document.querySelector("#financeAmount");
const financeCurrency = document.querySelector("#financeCurrency");
const financePaymentStatus = document.querySelector("#financePaymentStatus");
const financeDueDate = document.querySelector("#financeDueDate");
const financePaidDate = document.querySelector("#financePaidDate");
const financePaymentMethod = document.querySelector("#financePaymentMethod");
const financeNotes = document.querySelector("#financeNotes");
const resetFinanceForm = document.querySelector("#resetFinanceForm");
const financeDashboard = document.querySelector("#financeDashboard");
const financeSearchInput = document.querySelector("#financeSearchInput");
const financeTypeFilter = document.querySelector("#financeTypeFilter");
const financeStatusFilter = document.querySelector("#financeStatusFilter");
const financeCustomerFilter = document.querySelector("#financeCustomerFilter");
const financeSupplierFilter = document.querySelector("#financeSupplierFilter");
const financeList = document.querySelector("#financeList");
const financeDetailTitle = document.querySelector("#financeDetailTitle");
const financeDetail = document.querySelector("#financeDetail");

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  pageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });
}

function openInternalPage(pageId) {
  showPage(pageId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCommandPalette() {
  commandOverlay.classList.add("open");
  commandOverlay.setAttribute("aria-hidden", "false");
  commandSearchInput.value = "";
  renderSearchResults("");
  window.setTimeout(() => commandSearchInput.focus(), 0);
}

function closeCommandPalette() {
  commandOverlay.classList.remove("open");
  commandOverlay.setAttribute("aria-hidden", "true");
}

function setDate() {
  const now = new Date();
  todayDate.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function setGreeting() {
  const name = userName.value || "Jim";
  greeting.textContent = `Good Morning, ${name}`;
}

function saveField(field, key, afterSave) {
  field.addEventListener("input", () => {
    localStorage.setItem(key, field.value);
    if (afterSave) {
      afterSave();
    }
  });
}

function restoreField(field, key) {
  const savedValue = localStorage.getItem(key);
  if (savedValue !== null) {
    field.value = savedValue;
  }
}

function getListStorageKey(listName) {
  return storageKeys[listName];
}

function loadEditableLists() {
  Object.keys(editableLists).forEach((listName) => {
    const savedValue = localStorage.getItem(getListStorageKey(listName));
    try {
      const parsedValue = savedValue ? JSON.parse(savedValue) : [];
      editableLists[listName] = Array.isArray(parsedValue) ? parsedValue : [];
    } catch (error) {
      editableLists[listName] = [];
    }
  });
}

function saveEditableList(listName) {
  localStorage.setItem(getListStorageKey(listName), JSON.stringify(editableLists[listName]));
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function renderEditableList(listName) {
  const listElement = document.querySelector(`[data-list="${listName}"]`);
  const items = editableLists[listName];

  if (!items.length) {
    listElement.innerHTML = '<p class="empty-state">Nothing added yet.</p>';
    return;
  }

  listElement.innerHTML = items.map((item) => `
    <div class="editable-item" data-item-id="${item.id}">
      <p class="item-text">${escapeHtml(item.text)}</p>
      <div class="item-actions">
        <button type="button" data-action="edit" data-list-name="${listName}" data-id="${item.id}">Edit</button>
        <button type="button" data-action="delete" data-list-name="${listName}" data-id="${item.id}">Delete</button>
      </div>
    </div>
  `).join("");
}

function renderAllEditableLists() {
  Object.keys(editableLists).forEach(renderEditableList);
}

function addListItem(listName, text) {
  editableLists[listName].push({
    id: makeId(),
    text
  });
  saveEditableList(listName);
  renderEditableList(listName);
}

function editListItem(listName, id) {
  const item = editableLists[listName].find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  const newText = window.prompt("Edit item", item.text);
  if (newText === null || !newText.trim()) {
    return;
  }

  item.text = newText.trim();
  saveEditableList(listName);
  renderEditableList(listName);
}

function deleteListItem(listName, id) {
  editableLists[listName] = editableLists[listName].filter((item) => item.id !== id);
  saveEditableList(listName);
  renderEditableList(listName);
}

function getTodayValue() {
  return new Date().toISOString().slice(0, 10);
}

function getDateOffsetValue(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function isDateInRange(value, start, end) {
  return Boolean(value && value >= start && value <= end);
}

function getSortedByDate(records, fieldName) {
  return [...records].sort((first, second) => String(second[fieldName] || "").localeCompare(String(first[fieldName] || "")));
}

function renderTodayDashboardItem(item) {
  return `
    <button class="today-overview-item" type="button" data-page="${escapeHtml(item.page)}">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.meta || "Open")}</span>
    </button>
  `;
}

function renderTodayDashboardCard(card) {
  return `
    <article class="today-overview-card">
      <div class="today-overview-card-header">
        <p class="card-label">${escapeHtml(card.module)}</p>
        <h3>${escapeHtml(card.title)}</h3>
        <strong>${card.items.length}</strong>
      </div>
      <div class="today-overview-list">
        ${card.items.length ? card.items.slice(0, 3).map(renderTodayDashboardItem).join("") : `<p class="empty-state">${escapeHtml(card.empty)}</p>`}
      </div>
    </article>
  `;
}

function renderTodayDashboard() {
  if (!todayDashboard) {
    return;
  }

  const today = getTodayValue();
  const weekEnd = getDateOffsetValue(7);
  const attentionStatuses = ["Waiting Supplier", "Waiting Customer", "Inspection", "On Hold"];
  const ordersNeedingAttention = orders.filter((order) => {
    return attentionStatuses.includes(order.status)
      || order.productionStatus === "Delayed"
      || order.qcStatus === "Issue Found"
      || isDateInRange(order.dueDate, today, weekEnd);
  });
  const ordersWithNextAction = orders.filter((order) => order.nextAction);
  const ordersDueSoon = orders.filter((order) => isDateInRange(order.dueDate, today, weekEnd));
  const customersNeedingFollowup = customers.filter((customer) => customer.nextFollowUpDate && customer.nextFollowUpDate <= today);
  const highPriorityCustomers = customers.filter((customer) => ["High", "Urgent"].includes(customer.priority));
  const suppliersNeedingFollowup = suppliers.filter((supplier) => supplier.reliabilityRating === "Needs Follow-up" || supplier.nextAction);
  const activeSupplierIssues = suppliers.filter((supplier) => {
    const hasIssueEvent = (supplier.timeline || []).some((event) => ["Delay", "Quality issue"].includes(event.eventType) || ["Delay", "Issue"].includes(event.status));
    return supplier.reliabilityRating === "Risky" || supplier.reliabilityRating === "Needs Follow-up" || hasIssueEvent;
  });
  const quotationsWaitingCustomer = quotations.filter((quotation) => quotation.status === "Waiting Customer");
  const approvedQuotations = quotations.filter((quotation) => quotation.status === "Approved");
  const shipmentsThisWeek = shipments.filter((shipment) => isDateInRange(shipment.etd, today, weekEnd) || isDateInRange(shipment.eta, today, weekEnd));
  const documentsPending = shipments.filter((shipment) => ["Not Started", "Pending", "Partial"].includes(shipment.documentsStatus));
  const paymentWaiting = financeRecords.filter((record) => ["Waiting", "Partial", "Overdue"].includes(record.paymentStatus));
  const balancePaymentsDue = financeRecords.filter((record) => {
    return record.type === "Customer Payment"
      && record.notes.toLowerCase().includes("balance")
      && ["Waiting", "Partial", "Overdue"].includes(record.paymentStatus);
  });
  const recentProducts = getSortedByDate(products, "updatedAt").slice(0, 6);
  const highInterestProducts = products.filter((product) => product.customerInterested);
  const familyItems = [
    dinnerPlan.value ? { title: dinnerPlan.value, meta: "Dinner", page: "today" } : null,
    sonSleep.value ? { title: sonSleep.value, meta: "Sleep", page: "today" } : null,
    sonExercise.value ? { title: sonExercise.value, meta: "Exercise", page: "today" } : null,
    sonMeal.value ? { title: sonMeal.value, meta: "Meal", page: "today" } : null
  ].filter(Boolean);

  const cards = [
    {
      module: "Orders",
      title: "Needs Attention",
      items: ordersNeedingAttention.map((order) => ({ title: order.orderName, meta: `${order.status} · ${order.dueDate || order.nextAction || "No due date"}`, page: "order-center" })),
      empty: "No urgent order attention needed."
    },
    {
      module: "Orders",
      title: "Next Actions",
      items: ordersWithNextAction.map((order) => ({ title: order.nextAction, meta: `${order.orderCode} · ${order.customerName}`, page: "order-center" })),
      empty: "No order next actions yet."
    },
    {
      module: "Orders",
      title: "Due Soon",
      items: ordersDueSoon.map((order) => ({ title: order.orderName, meta: `Due ${order.dueDate} · ${order.status}`, page: "order-center" })),
      empty: "No orders due in the next 7 days."
    },
    {
      module: "Customers",
      title: "Need Follow-up",
      items: customersNeedingFollowup.map((customer) => ({ title: customer.customerName, meta: `${customer.nextFollowUpDate} · ${customer.nextAction || customer.followUpNotes || "Follow up"}`, page: "customer-center" })),
      empty: "No customer follow-ups due today."
    },
    {
      module: "Customers",
      title: "High Priority",
      items: highPriorityCustomers.map((customer) => ({ title: customer.customerName, meta: `${customer.priority} · ${customer.country || "No country"}`, page: "customer-center" })),
      empty: "No high priority customers."
    },
    {
      module: "Suppliers",
      title: "Need Follow-up",
      items: suppliersNeedingFollowup.map((supplier) => ({ title: supplier.supplierName, meta: `${supplier.reliabilityRating} · ${supplier.nextAction || "Review supplier"}`, page: "supplier-center" })),
      empty: "No supplier follow-ups."
    },
    {
      module: "Suppliers",
      title: "Active Issues",
      items: activeSupplierIssues.map((supplier) => ({ title: supplier.supplierName, meta: `${supplier.reliabilityRating} · ${supplier.productCategory || "No category"}`, page: "supplier-center" })),
      empty: "No active supplier issues."
    },
    {
      module: "Quotations",
      title: "Waiting Customer",
      items: quotationsWaitingCustomer.map((quotation) => ({ title: quotation.quotationCode, meta: `${quotation.customerName} · ${quotation.productSummary || "No product summary"}`, page: "quotation-center" })),
      empty: "No quotations waiting customer."
    },
    {
      module: "Quotations",
      title: "Approved",
      items: approvedQuotations.map((quotation) => ({ title: quotation.quotationCode, meta: `${quotation.customerName} · ${quotation.currency} ${quotation.totalAmount || "0"}`, page: "quotation-center" })),
      empty: "No approved quotations yet."
    },
    {
      module: "Shipments",
      title: "This Week",
      items: shipmentsThisWeek.map((shipment) => ({ title: shipment.shipmentCode, meta: `${shipment.status} · ETD ${shipment.etd || "not set"} · ETA ${shipment.eta || "not set"}`, page: "shipment-center" })),
      empty: "No shipments this week."
    },
    {
      module: "Shipments",
      title: "Documents Pending",
      items: documentsPending.map((shipment) => ({ title: shipment.shipmentCode, meta: `${shipment.documentsStatus} · ${shipment.customerName}`, page: "shipment-center" })),
      empty: "No pending shipment documents."
    },
    {
      module: "Finance",
      title: "Payment Waiting",
      items: paymentWaiting.map((record) => ({ title: record.financeCode, meta: `${record.type} · ${formatFinanceMoney(record)} · ${record.dueDate || "No due date"}`, page: "finance-center" })),
      empty: "No waiting payments."
    },
    {
      module: "Finance",
      title: "Balance Due",
      items: balancePaymentsDue.map((record) => ({ title: record.financeCode, meta: `${record.customerName || "No customer"} · ${formatFinanceMoney(record)} · ${record.dueDate || "No due date"}`, page: "finance-center" })),
      empty: "No balance payments due."
    },
    {
      module: "Products",
      title: "Recent Products",
      items: recentProducts.map((product) => ({ title: product.productName, meta: `${product.category} · ${product.price || "No price"}`, page: "product-center" })),
      empty: "No products yet."
    },
    {
      module: "Products",
      title: "High Interest",
      items: highInterestProducts.map((product) => ({ title: product.productName, meta: `${product.customerInterested} · ${product.category}`, page: "product-center" })),
      empty: "No customer product interest yet."
    },
    {
      module: "Family",
      title: "Today",
      items: familyItems,
      empty: "No dinner or son reminder saved yet."
    }
  ];

  todayDashboard.innerHTML = cards.map(renderTodayDashboardCard).join("");
}

function loadOrders() {
  const savedOrders = localStorage.getItem(storageKeys.orders);
  if (!savedOrders) {
    orders = orderSeedData.map(normalizeOrder);
    saveOrders();
    localStorage.setItem(storageKeys.ordersSeededV1, "true");
    return;
  }

  try {
    const parsedOrders = JSON.parse(savedOrders);
    orders = Array.isArray(parsedOrders) ? parsedOrders.map(normalizeOrder) : orderSeedData.map(normalizeOrder);
  } catch (error) {
    orders = orderSeedData.map(normalizeOrder);
  }

  if (localStorage.getItem(storageKeys.ordersSeededV1) !== "true") {
    const existingIds = new Set(orders.map((order) => order.id));
    const missingSamples = orderSeedData.filter((order) => !existingIds.has(order.id)).map(normalizeOrder);
    orders = [...missingSamples, ...orders];
    localStorage.setItem(storageKeys.ordersSeededV1, "true");
    saveOrders();
  }
}

function saveOrders() {
  localStorage.setItem(storageKeys.orders, JSON.stringify(orders));
}

function normalizeOrder(order) {
  const now = new Date().toISOString();
  return {
    id: order.id || `order-${Date.now()}`,
    orderCode: order.orderCode || order.id || `MOER-${new Date().getFullYear()}-${Math.floor(Math.random() * 900 + 100)}`,
    orderName: order.orderName || "",
    customerName: order.customerName || "",
    country: order.country || "",
    status: order.status || "New Inquiry",
    priority: order.priority || "Normal",
    productsSummary: order.productsSummary || "",
    quantity: order.quantity || "",
    supplierName: order.supplierName || "",
    orderValue: order.orderValue || "",
    depositStatus: order.depositStatus || "Not Requested",
    balanceStatus: order.balanceStatus || (order.paymentStatus === "Balance Due" ? "Waiting" : "Not Due"),
    productionStatus: order.productionStatus || "Not Started",
    qcStatus: order.qcStatus || order.inspectionStatus || "Not Needed",
    warehouseStatus: order.warehouseStatus || "Not Arrived",
    shippingStatus: order.shippingStatus || "Not Planned",
    etd: order.etd || "",
    eta: order.eta || "",
    nextAction: order.nextAction || "",
    dueDate: order.dueDate || "",
    notes: order.notes || "",
    createdAt: order.createdAt || now,
    updatedAt: order.updatedAt || now,
    timeline: Array.isArray(order.timeline) ? order.timeline : []
  };
}

function getOrderFormData() {
  const now = new Date().toISOString();
  const existingOrder = orders.find((order) => order.id === orderId.value);

  return {
    id: orderId.value || `order-${Date.now()}`,
    orderCode: orderCode.value.trim(),
    orderName: orderName.value.trim(),
    customerName: orderCustomer.value.trim(),
    country: orderCountry.value.trim(),
    status: orderStatus.value,
    priority: orderPriority.value,
    productsSummary: productsSummary.value.trim(),
    quantity: orderQuantity.value.trim(),
    supplierName: orderSupplier.value.trim(),
    orderValue: orderValue.value.trim(),
    depositStatus: depositStatus.value,
    balanceStatus: balanceStatus.value,
    productionStatus: productionStatus.value,
    qcStatus: qcStatus.value,
    warehouseStatus: warehouseStatus.value,
    shippingStatus: shippingStatus.value,
    etd: orderEtd.value,
    eta: orderEta.value,
    nextAction: nextAction.value.trim(),
    dueDate: orderDueDate.value,
    notes: orderNotes.value.trim(),
    createdAt: existingOrder ? existingOrder.createdAt : now,
    updatedAt: now,
    timeline: existingOrder ? existingOrder.timeline : [{
      id: `timeline-${Date.now()}`,
      date: now.slice(0, 10),
      title: "Order created",
      description: "Order was created in Moer OS Order Center.",
      status: "Note"
    }]
  };
}

function saveOrderFromForm(event) {
  event.preventDefault();
  const order = getOrderFormData();

  if (!order.orderName || !order.customerName) {
    return;
  }

  const existingIndex = orders.findIndex((item) => item.id === order.id);
  if (existingIndex >= 0) {
    orders[existingIndex] = order;
  } else {
    orders.unshift(order);
  }

  selectedOrderId = order.id;
  saveOrders();
  renderOrderDashboard();
  renderOrderFilters();
  renderOrders();
  renderOrderSupplierOptions(order.supplierName);
  renderShipmentOrderOptions();
  renderFinanceOrderOptions();
  selectOrder(order.id);
  refreshSelectedCustomerDetail();
  refreshSelectedSupplierDetail();
  renderTodayDashboard();
  clearOrderForm();
}

function clearOrderForm() {
  orderForm.reset();
  orderId.value = "";
  orderCode.value = `MOER-${new Date().getFullYear()}-${String(orders.length + 1).padStart(3, "0")}`;
  renderOrderCustomerOptions();
  orderFormTitle.textContent = "New Order";
}

function getOrderFilterValues() {
  return {
    query: orderSearchInput.value.trim().toLowerCase(),
    status: orderStatusFilter.value,
    priority: orderPriorityFilter.value,
    customer: orderCustomerFilter.value,
    supplier: orderSupplierFilter.value
  };
}

function getFilteredOrders() {
  const filters = getOrderFilterValues();
  return orders.filter((order) => {
    const haystack = [
      order.orderCode,
      order.orderName,
      order.customerName,
      order.supplierName,
      order.country,
      order.productsSummary,
      order.nextAction,
      order.notes,
      order.status,
      order.priority
    ].join(" ").toLowerCase();

    return (!filters.query || haystack.includes(filters.query))
      && (!filters.status || order.status === filters.status)
      && (!filters.priority || order.priority === filters.priority)
      && (!filters.customer || order.customerName === filters.customer)
      && (!filters.supplier || order.supplierName === filters.supplier);
  });
}

function renderOrderFilters() {
  const selected = {
    status: orderStatusFilter.value,
    priority: orderPriorityFilter.value,
    customer: orderCustomerFilter.value,
    supplier: orderSupplierFilter.value
  };
  const customerNames = [...new Set(orders.map((order) => order.customerName).filter(Boolean))].sort();
  const supplierNames = [...new Set(orders.map((order) => order.supplierName).filter(Boolean))].sort();

  orderStatusFilter.innerHTML = '<option value="">All status</option>' + orderStatusOptions.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
  orderPriorityFilter.innerHTML = '<option value="">All priority</option>' + orderPriorityOptions.map((priority) => `<option value="${escapeHtml(priority)}">${escapeHtml(priority)}</option>`).join("");
  orderCustomerFilter.innerHTML = '<option value="">All customers</option>' + customerNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  orderSupplierFilter.innerHTML = '<option value="">All suppliers</option>' + supplierNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");

  orderStatusFilter.value = selected.status;
  orderPriorityFilter.value = selected.priority;
  orderCustomerFilter.value = selected.customer;
  orderSupplierFilter.value = selected.supplier;
}

function renderOrderDashboard() {
  const today = new Date().toISOString().slice(0, 10);
  const weekEnd = new Date();
  weekEnd.setDate(weekEnd.getDate() + 7);
  const weekEndValue = weekEnd.toISOString().slice(0, 10);
  const metrics = [
    { label: "Total Orders", value: orders.length },
    { label: "Waiting Supplier", value: orders.filter((order) => order.status === "Waiting Supplier").length },
    { label: "Waiting Customer", value: orders.filter((order) => order.status === "Waiting Customer").length },
    { label: "In Production", value: orders.filter((order) => order.status === "In Production" || order.productionStatus === "In Progress").length },
    { label: "QC Today", value: orders.filter((order) => order.qcStatus === "Today" || order.dueDate === today).length },
    { label: "Shipping This Week", value: orders.filter((order) => order.etd && order.etd >= today && order.etd <= weekEndValue).length },
    { label: "Payment Waiting", value: orders.filter((order) => ["Requested", "Partial"].includes(order.depositStatus) || ["Waiting", "Requested"].includes(order.balanceStatus)).length }
  ];

  orderDashboard.innerHTML = metrics.map((metric) => `
    <article class="order-metric-card">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${metric.value}</strong>
    </article>
  `).join("");
}

function renderOrders() {
  const filteredOrders = getFilteredOrders();

  if (!filteredOrders.length) {
    orderList.innerHTML = '<p class="empty-state">No orders found.</p>';
    orderDetailTitle.textContent = "Select an order";
    orderDetail.innerHTML = '<p class="empty-state">Create an order or adjust the search filters.</p>';
    timelineForm.classList.add("hidden");
    orderTimeline.innerHTML = "";
    return;
  }

  if (!selectedOrderId || !filteredOrders.some((order) => order.id === selectedOrderId)) {
    selectedOrderId = filteredOrders[0].id;
  }

  orderList.innerHTML = filteredOrders.map((order) => `
    <button class="order-list-card ${order.id === selectedOrderId ? "active" : ""}" type="button" data-order-id="${order.id}">
      <h3>${escapeHtml(order.orderName)}</h3>
      <p>${escapeHtml(order.orderCode)}</p>
      <p>${escapeHtml(order.customerName)}${order.country ? ` · ${escapeHtml(order.country)}` : ""}</p>
      <div class="order-list-meta">
        <span class="order-pill">${escapeHtml(order.status)}</span>
        <span class="order-pill priority-${escapeHtml(order.priority.toLowerCase())}">${escapeHtml(order.priority)}</span>
        <span class="order-pill">${escapeHtml(order.supplierName || "No supplier")}</span>
        <span class="order-pill">${escapeHtml(order.etd || "No ETD")}</span>
      </div>
    </button>
  `).join("");
}

function selectOrder(id) {
  const order = orders.find((item) => item.id === id);
  if (!order) {
    return;
  }

  selectedOrderId = id;
  renderOrders();
  renderOrderDetail(order);
}

function editOrder(id) {
  const order = orders.find((item) => item.id === id);
  if (!order) {
    return;
  }

  orderId.value = order.id;
  orderCode.value = order.orderCode;
  orderName.value = order.orderName;
  renderOrderCustomerOptions(order.customerName);
  orderCustomer.value = order.customerName;
  orderCountry.value = order.country;
  orderSupplier.value = order.supplierName;
  orderStatus.value = order.status;
  orderPriority.value = order.priority;
  orderValue.value = order.orderValue;
  orderQuantity.value = order.quantity;
  orderDueDate.value = order.dueDate;
  depositStatus.value = order.depositStatus;
  balanceStatus.value = order.balanceStatus;
  productionStatus.value = order.productionStatus;
  qcStatus.value = order.qcStatus;
  warehouseStatus.value = order.warehouseStatus;
  shippingStatus.value = order.shippingStatus;
  orderEtd.value = order.etd;
  orderEta.value = order.eta;
  productsSummary.value = order.productsSummary;
  nextAction.value = order.nextAction;
  orderNotes.value = order.notes;
  orderFormTitle.textContent = "Edit Order";
  orderName.focus();
}

function deleteOrder(id) {
  const order = orders.find((item) => item.id === id);
  if (!order) {
    return;
  }

  const confirmed = window.confirm(`Delete order "${order.orderName}"?`);
  if (!confirmed) {
    return;
  }

  orders = orders.filter((item) => item.id !== id);
  selectedOrderId = orders[0]?.id || "";
  saveOrders();
  renderOrderDashboard();
  renderOrderFilters();
  renderOrders();
  renderOrderSupplierOptions();
  renderShipmentOrderOptions();
  renderFinanceOrderOptions();
  refreshSelectedCustomerDetail();
  refreshSelectedSupplierDetail();
  renderTodayDashboard();
  clearOrderForm();

  if (selectedOrderId) {
    selectOrder(selectedOrderId);
  } else {
    orderDetailTitle.textContent = "Select an order";
    orderDetail.innerHTML = '<p class="empty-state">Create an order to view details.</p>';
    timelineForm.classList.add("hidden");
    orderTimeline.innerHTML = "";
  }
}

function refreshSelectedCustomerDetail() {
  renderCustomerDashboard();
  renderCustomerFollowups();
  if (!selectedCustomerId) {
    return;
  }

  const customer = customers.find((item) => item.id === selectedCustomerId);
  if (customer) {
    renderCustomerDetail(customer);
  }
}

function renderOrderDetail(order) {
  orderDetailTitle.textContent = order.orderName;
  timelineForm.classList.remove("hidden");
  timelineOrderId.value = order.id;
  timelineDate.value = new Date().toISOString().slice(0, 10);
  orderDetail.innerHTML = `
    <div class="order-status-row">
      <span class="order-pill">${escapeHtml(order.status)}</span>
      <span class="order-pill priority-${escapeHtml(order.priority.toLowerCase())}">${escapeHtml(order.priority)}</span>
      <span class="order-pill status-${escapeHtml(order.depositStatus.toLowerCase().replaceAll(" ", "-"))}">${escapeHtml(order.depositStatus)}</span>
      <span class="order-pill status-${escapeHtml(order.balanceStatus.toLowerCase().replaceAll(" ", "-"))}">${escapeHtml(order.balanceStatus)}</span>
    </div>
    <div class="status-progress">
      ${["Order Confirmed", "In Production", "Inspection", "In Warehouse", "Shipping", "Delivered"].map((step) => `
        <span class="${getProgressClass(order, step)}">${escapeHtml(step)}</span>
      `).join("")}
    </div>
    <dl class="order-detail-grid">
      ${renderDetailField("Order ID", order.orderCode)}
      ${renderDetailField("Customer", order.customerName)}
      ${renderDetailField("Country", order.country)}
      ${renderDetailField("Supplier", order.supplierName)}
      ${renderDetailField("Order Value", order.orderValue)}
      ${renderDetailField("Quantity", order.quantity)}
      ${renderDetailField("Deposit", order.depositStatus)}
      ${renderDetailField("Balance", order.balanceStatus)}
      ${renderDetailField("Production", order.productionStatus)}
      ${renderDetailField("QC", order.qcStatus)}
      ${renderDetailField("Warehouse", order.warehouseStatus)}
      ${renderDetailField("Shipping", order.shippingStatus)}
      ${renderDetailField("ETD", order.etd)}
      ${renderDetailField("ETA", order.eta)}
      ${renderDetailField("Due Date", order.dueDate)}
    </dl>
    <div class="detail-text-block">
      <strong>Products</strong>
      <p>${escapeHtml(order.productsSummary || "No product summary yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Next Action</strong>
      <p>${escapeHtml(order.nextAction || "No next action set.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Notes</strong>
      <p>${escapeHtml(order.notes || "No notes yet.")}</p>
    </div>
    <div class="order-detail-actions">
      <button class="open-link secondary" type="button" data-order-edit="${order.id}">Edit</button>
      <button class="danger-button" type="button" data-order-delete="${order.id}">Delete</button>
    </div>
  `;
  renderOrderTimeline(order);
}

function getProgressClass(order, step) {
  const orderIndex = orderStatusOptions.indexOf(order.status);
  const stepIndex = orderStatusOptions.indexOf(step);
  return stepIndex <= orderIndex ? "active" : "";
}

function renderDetailField(label, value) {
  return `
    <div class="detail-field">
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(value || "Not set")}</dd>
    </div>
  `;
}

function renderOrderTimeline(order) {
  const timelineItems = buildOrderTimeline(order);
  orderTimeline.innerHTML = `
    <p class="card-label">Timeline</p>
    ${timelineItems.map((item) => `
      <article class="order-timeline-item">
        <span>${escapeHtml(item.date)}</span>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.status || "Note")}</small>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </article>
    `).join("")}
  `;
}

function buildOrderTimeline(order) {
  const systemItems = [
    {
      date: formatDateOnly(order.createdAt),
      title: "Order created",
      description: `${order.customerName} order was added to Order Center.`,
      status: "Note"
    },
    {
      date: formatDateOnly(order.updatedAt),
      title: `Current status: ${order.status}`,
      description: order.nextAction || "No next action has been set yet.",
      status: order.status
    },
    {
      date: order.dueDate || "No due date",
      title: "Due date",
      description: order.dueDate ? "Target date for the next major order milestone." : "Add a due date when the next milestone is confirmed.",
      status: "Due Date"
    }
  ];

  return [...(order.timeline || []), ...systemItems].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function formatDateOnly(value) {
  if (!value) {
    return "No date";
  }

  return value.slice(0, 10);
}

function setupOrderCenter() {
  orderForm.addEventListener("submit", saveOrderFromForm);
  resetOrderForm.addEventListener("click", clearOrderForm);
  [orderSearchInput, orderStatusFilter, orderPriorityFilter, orderCustomerFilter, orderSupplierFilter].forEach((field) => {
    field.addEventListener("input", renderOrders);
    field.addEventListener("change", renderOrders);
  });

  orderList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-order-id]");
    if (!card) {
      return;
    }

    selectOrder(card.dataset.orderId);
  });

  orderDetail.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-order-edit]");
    const deleteButton = event.target.closest("[data-order-delete]");

    if (editButton) {
      editOrder(editButton.dataset.orderEdit);
    }

    if (deleteButton) {
      deleteOrder(deleteButton.dataset.orderDelete);
    }
  });

  timelineForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTimelineEvent();
  });
}

function addTimelineEvent() {
  const order = orders.find((item) => item.id === timelineOrderId.value);
  if (!order || !timelineTitle.value.trim()) {
    return;
  }

  order.timeline = order.timeline || [];
  order.timeline.unshift({
    id: `timeline-${Date.now()}`,
    date: timelineDate.value || new Date().toISOString().slice(0, 10),
    title: timelineTitle.value.trim(),
    description: timelineDescription.value.trim(),
    status: timelineStatus.value
  });
  order.updatedAt = new Date().toISOString();
  saveOrders();
  renderOrders();
  renderOrderDetail(order);
  refreshSelectedCustomerDetail();
  renderTodayDashboard();
  timelineTitle.value = "";
  timelineDescription.value = "";
  timelineStatus.value = "Note";
}

function loadCustomers() {
  const savedCustomers = localStorage.getItem(storageKeys.customers);
  if (!savedCustomers) {
    customers = customerSeedData.map(normalizeCustomer);
    saveCustomers();
    localStorage.setItem(storageKeys.customersSeededV2, "true");
    return;
  }

  try {
    const parsedCustomers = JSON.parse(savedCustomers);
    customers = Array.isArray(parsedCustomers) ? parsedCustomers.map(normalizeCustomer) : customerSeedData.map(normalizeCustomer);
  } catch (error) {
    customers = customerSeedData.map(normalizeCustomer);
  }

  if (localStorage.getItem(storageKeys.customersSeededV2) !== "true") {
    const existingNames = new Set(customers.map((customer) => customer.customerName.toLowerCase()));
    const missingSamples = customerSeedData
      .filter((customer) => !existingNames.has(customer.customerName.toLowerCase()))
      .map(normalizeCustomer);
    customers = [...missingSamples, ...customers.map(enrichCustomerTimeline)];
    localStorage.setItem(storageKeys.customersSeededV2, "true");
    saveCustomers();
  }
}

function saveCustomers() {
  localStorage.setItem(storageKeys.customers, JSON.stringify(customers));
}

function normalizeCustomer(customer) {
  const now = new Date().toISOString();
  return {
    id: customer.id || `customer-${Date.now()}`,
    customerName: customer.customerName || "",
    companyName: customer.companyName || "",
    country: customer.country || "",
    contactPerson: customer.contactPerson || customer.customerName || "",
    whatsapp: customer.whatsapp || "",
    email: customer.email || "",
    website: customer.website || "",
    customerType: customer.customerType || "Importer",
    status: customer.status || "Lead",
    priority: customer.priority || "Normal",
    mainProductInterest: customer.mainProductInterest || "",
    lastContactDate: customer.lastContactDate || "",
    nextFollowUpDate: customer.nextFollowUpDate || "",
    notes: customer.notes || "",
    followUpNotes: customer.followUpNotes || "",
    nextAction: customer.nextAction || "",
    createdAt: customer.createdAt || now,
    updatedAt: customer.updatedAt || now,
    timeline: Array.isArray(customer.timeline) ? customer.timeline : []
  };
}

function enrichCustomerTimeline(customer) {
  const normalizedCustomer = normalizeCustomer(customer);
  const sample = customerSeedData.find((item) => item.customerName.toLowerCase() === normalizedCustomer.customerName.toLowerCase());
  if (sample && !normalizedCustomer.timeline.length) {
    normalizedCustomer.timeline = sample.timeline;
  }
  return normalizedCustomer;
}

function getCustomerFormData() {
  const now = new Date().toISOString();
  const existingCustomer = customers.find((customer) => customer.id === customerId.value);

  return {
    id: customerId.value || `customer-${Date.now()}`,
    customerName: customerName.value.trim(),
    companyName: customerCompany.value.trim(),
    country: customerCountry.value.trim(),
    contactPerson: customerContactPerson.value.trim(),
    whatsapp: customerWhatsapp.value.trim(),
    email: customerEmail.value.trim(),
    website: customerWebsite.value.trim(),
    customerType: customerType.value,
    status: customerStatus.value,
    priority: customerPriority.value,
    mainProductInterest: mainProductInterest.value.trim(),
    lastContactDate: lastContactDate.value,
    nextFollowUpDate: nextFollowUpDate.value,
    notes: customerNotes.value.trim(),
    followUpNotes: customerFollowUpNotes.value.trim(),
    nextAction: customerNextAction.value.trim(),
    createdAt: existingCustomer ? existingCustomer.createdAt : now,
    updatedAt: now,
    timeline: existingCustomer ? existingCustomer.timeline : [{
      id: `customer-timeline-${Date.now()}`,
      date: now.slice(0, 10),
      eventType: "First contact",
      title: "Customer created",
      description: "Customer was added to Customer Center.",
      relatedOrderId: "",
      nextAction: customerNextAction.value.trim(),
      status: "Open"
    }]
  };
}

function saveCustomerFromForm(event) {
  event.preventDefault();
  const customer = getCustomerFormData();

  if (!customer.customerName) {
    return;
  }

  const existingIndex = customers.findIndex((item) => item.id === customer.id);
  if (existingIndex >= 0) {
    customers[existingIndex] = customer;
  } else {
    customers.unshift(customer);
  }

  selectedCustomerId = customer.id;
  saveCustomers();
  renderCustomerDashboard();
  renderCustomerFilters();
  renderCustomerFollowups();
  renderCustomers();
  renderOrderCustomerOptions(customer.customerName);
  renderQuotationCustomerOptions(customer.customerName);
  renderShipmentCustomerOptions(customer.customerName);
  renderProductCustomerOptions(customer.customerName);
  renderFinanceCustomerOptions(customer.customerName);
  renderQuotationFilters();
  renderShipmentFilters();
  renderProductFilters();
  renderFinanceFilters();
  selectCustomer(customer.id);
  renderTodayDashboard();
  clearCustomerForm();
}

function clearCustomerForm() {
  customerForm.reset();
  customerId.value = "";
  customerFormTitle.textContent = "New Customer";
}

function getCustomerFilterValues() {
  return {
    query: customerSearchInput.value.trim().toLowerCase(),
    country: customerCountryFilter.value,
    status: customerStatusFilter.value,
    priority: customerPriorityFilter.value,
    type: customerTypeFilter.value,
    interest: customerInterestFilter.value
  };
}

function getFilteredCustomers() {
  const filters = getCustomerFilterValues();
  return customers.filter((customer) => {
    const haystack = [
      customer.customerName,
      customer.companyName,
      customer.country,
      customer.contactPerson,
      customer.whatsapp,
      customer.email,
      customer.website,
      customer.customerType,
      customer.status,
      customer.priority,
      customer.mainProductInterest,
      customer.followUpNotes,
      customer.nextAction,
      customer.notes
    ].join(" ").toLowerCase();

    return (!filters.query || haystack.includes(filters.query))
      && (!filters.country || customer.country === filters.country)
      && (!filters.status || customer.status === filters.status)
      && (!filters.priority || customer.priority === filters.priority)
      && (!filters.type || customer.customerType === filters.type)
      && (!filters.interest || customer.mainProductInterest === filters.interest);
  });
}

function renderCustomerFilters() {
  const selected = {
    country: customerCountryFilter.value,
    status: customerStatusFilter.value,
    priority: customerPriorityFilter.value,
    type: customerTypeFilter.value,
    interest: customerInterestFilter.value
  };
  const countries = [...new Set(customers.map((customer) => customer.country).filter(Boolean))].sort();
  const interests = [...new Set(customers.map((customer) => customer.mainProductInterest).filter(Boolean))].sort();

  customerCountryFilter.innerHTML = '<option value="">All countries</option>' + countries.map((country) => `<option value="${escapeHtml(country)}">${escapeHtml(country)}</option>`).join("");
  customerStatusFilter.innerHTML = '<option value="">All status</option>' + customerStatusOptions.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
  customerPriorityFilter.innerHTML = '<option value="">All priority</option>' + customerPriorityOptions.map((priority) => `<option value="${escapeHtml(priority)}">${escapeHtml(priority)}</option>`).join("");
  customerTypeFilter.innerHTML = '<option value="">All types</option>' + customerTypeOptions.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join("");
  customerInterestFilter.innerHTML = '<option value="">All interests</option>' + interests.map((interest) => `<option value="${escapeHtml(interest)}">${escapeHtml(interest)}</option>`).join("");

  customerCountryFilter.value = selected.country;
  customerStatusFilter.value = selected.status;
  customerPriorityFilter.value = selected.priority;
  customerTypeFilter.value = selected.type;
  customerInterestFilter.value = selected.interest;
}

function renderCustomerDashboard() {
  const today = new Date().toISOString().slice(0, 10);
  const monthPrefix = today.slice(0, 7);
  const activeOrderCustomers = new Set(
    orders
      .filter((order) => !["Delivered", "Completed"].includes(order.status))
      .map((order) => order.customerName.toLowerCase())
  );
  const metrics = [
    { label: "Total Customers", value: customers.length },
    { label: "Customers Waiting Follow-up", value: customers.filter((customer) => customer.nextFollowUpDate && customer.nextFollowUpDate <= today).length },
    { label: "High Priority Customers", value: customers.filter((customer) => ["High", "Urgent"].includes(customer.priority)).length },
    { label: "Active Order Customers", value: customers.filter((customer) => activeOrderCustomers.has(customer.customerName.toLowerCase())).length },
    { label: "New Customers This Month", value: customers.filter((customer) => formatDateOnly(customer.createdAt).startsWith(monthPrefix)).length }
  ];

  customerDashboard.innerHTML = metrics.map((metric) => `
    <article class="order-metric-card">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${metric.value}</strong>
    </article>
  `).join("");
}

function renderCustomerFollowups() {
  const today = new Date().toISOString().slice(0, 10);
  const dueToday = customers.filter((customer) => customer.nextFollowUpDate === today);
  const overdue = customers.filter((customer) => customer.nextFollowUpDate && customer.nextFollowUpDate < today);
  followupDueToday.innerHTML = renderCustomerMiniList(dueToday, "No follow-ups due today.");
  followupOverdue.innerHTML = renderCustomerMiniList(overdue, "No overdue follow-ups.");
}

function renderCustomerMiniList(items, emptyText) {
  if (!items.length) {
    return `<p class="empty-state">${escapeHtml(emptyText)}</p>`;
  }

  return items.map((customer) => `
    <button class="customer-mini-card" type="button" data-customer-id="${customer.id}">
      <strong>${escapeHtml(customer.customerName)}</strong>
      <span>${escapeHtml(customer.nextFollowUpDate)} · ${escapeHtml(customer.nextAction || "No next action")}</span>
    </button>
  `).join("");
}

function renderCustomers() {
  const filteredCustomers = getFilteredCustomers();

  if (!filteredCustomers.length) {
    customerList.innerHTML = '<p class="empty-state">No customers found.</p>';
    customerDetailTitle.textContent = "Select a customer";
    customerDetail.innerHTML = '<p class="empty-state">Create a customer or adjust the filters.</p>';
    customerFollowupForm.classList.add("hidden");
    customerRelatedOrders.innerHTML = "";
    customerTimelineForm.classList.add("hidden");
    customerTimeline.innerHTML = "";
    return;
  }

  if (!selectedCustomerId || !filteredCustomers.some((customer) => customer.id === selectedCustomerId)) {
    selectedCustomerId = filteredCustomers[0].id;
  }

  customerList.innerHTML = filteredCustomers.map((customer) => `
    <button class="customer-list-card ${customer.id === selectedCustomerId ? "active" : ""}" type="button" data-customer-id="${customer.id}">
      <h3>${escapeHtml(customer.customerName)}</h3>
      <p>${escapeHtml(customer.companyName || "No company")}${customer.country ? ` · ${escapeHtml(customer.country)}` : ""}</p>
      <div class="order-list-meta">
        <span class="order-pill">${escapeHtml(customer.customerType)}</span>
        <span class="order-pill">${escapeHtml(customer.status)}</span>
        <span class="order-pill priority-${escapeHtml(customer.priority.toLowerCase())}">${escapeHtml(customer.priority)}</span>
        <span class="order-pill">${escapeHtml(customer.nextFollowUpDate || "No follow-up")}</span>
      </div>
    </button>
  `).join("");
}

function selectCustomer(id) {
  const customer = customers.find((item) => item.id === id);
  if (!customer) {
    return;
  }

  selectedCustomerId = id;
  renderCustomers();
  renderCustomerDetail(customer);
}

function editCustomer(id) {
  const customer = customers.find((item) => item.id === id);
  if (!customer) {
    return;
  }

  customerId.value = customer.id;
  customerName.value = customer.customerName;
  customerCompany.value = customer.companyName;
  customerCountry.value = customer.country;
  customerContactPerson.value = customer.contactPerson;
  customerWhatsapp.value = customer.whatsapp;
  customerEmail.value = customer.email;
  customerWebsite.value = customer.website;
  customerType.value = customer.customerType;
  customerStatus.value = customer.status;
  customerPriority.value = customer.priority;
  mainProductInterest.value = customer.mainProductInterest;
  lastContactDate.value = customer.lastContactDate;
  nextFollowUpDate.value = customer.nextFollowUpDate;
  customerNotes.value = customer.notes;
  customerFollowUpNotes.value = customer.followUpNotes;
  customerNextAction.value = customer.nextAction;
  customerFormTitle.textContent = "Edit Customer";
  customerName.focus();
}

function deleteCustomer(id) {
  const customer = customers.find((item) => item.id === id);
  if (!customer) {
    return;
  }

  const confirmed = window.confirm(`Delete customer "${customer.customerName}"? Related orders will stay safe.`);
  if (!confirmed) {
    return;
  }

  customers = customers.filter((item) => item.id !== id);
  selectedCustomerId = customers[0]?.id || "";
  saveCustomers();
  renderCustomerDashboard();
  renderCustomerFilters();
  renderCustomerFollowups();
  renderCustomers();
  renderOrderCustomerOptions();
  renderQuotationCustomerOptions();
  renderShipmentCustomerOptions();
  renderProductCustomerOptions();
  renderFinanceCustomerOptions();
  renderQuotationFilters();
  renderShipmentFilters();
  renderProductFilters();
  renderFinanceFilters();
  renderTodayDashboard();
  clearCustomerForm();

  if (selectedCustomerId) {
    selectCustomer(selectedCustomerId);
  } else {
    customerDetailTitle.textContent = "Select a customer";
    customerDetail.innerHTML = '<p class="empty-state">Create a customer to view details.</p>';
    customerFollowupForm.classList.add("hidden");
    customerRelatedOrders.innerHTML = "";
    customerTimelineForm.classList.add("hidden");
    customerTimeline.innerHTML = "";
  }
}

function renderCustomerDetail(customer) {
  const relatedOrders = getRelatedOrders(customer.customerName);
  const activeOrders = relatedOrders.filter((order) => !["Delivered", "Completed"].includes(order.status));
  customerDetailTitle.textContent = customer.customerName;
  customerFollowupForm.classList.remove("hidden");
  customerTimelineForm.classList.remove("hidden");
  customerFollowupId.value = customer.id;
  customerFollowupDate.value = customer.nextFollowUpDate;
  customerFollowupNote.value = customer.followUpNotes;
  customerTimelineCustomerId.value = customer.id;
  customerTimelineDate.value = new Date().toISOString().slice(0, 10);
  customerDetail.innerHTML = `
    <div class="order-status-row">
      <span class="order-pill">${escapeHtml(customer.status)}</span>
      <span class="order-pill priority-${escapeHtml(customer.priority.toLowerCase())}">${escapeHtml(customer.priority)}</span>
      <span class="order-pill">${escapeHtml(customer.customerType)}</span>
      <span class="order-pill">${escapeHtml(activeOrders.length)} active order${activeOrders.length === 1 ? "" : "s"}</span>
    </div>
    <dl class="order-detail-grid">
      ${renderDetailField("Customer", customer.customerName)}
      ${renderDetailField("Company", customer.companyName)}
      ${renderDetailField("Country", customer.country)}
      ${renderDetailField("Relationship Status", customer.status)}
      ${renderDetailField("Customer Type", customer.customerType)}
      ${renderDetailField("Priority", customer.priority)}
      ${renderDetailField("Contact Person", customer.contactPerson)}
      ${renderDetailField("WhatsApp", customer.whatsapp)}
      ${renderDetailField("Email", customer.email)}
      ${renderDetailField("Website", customer.website)}
      ${renderDetailField("Last Contact", customer.lastContactDate)}
      ${renderDetailField("Next Follow-Up", customer.nextFollowUpDate)}
    </dl>
    <div class="detail-text-block">
      <strong>Main Product Interests</strong>
      <p>${escapeHtml(customer.mainProductInterest || "No product interest yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Next Action</strong>
      <p>${escapeHtml(customer.nextAction || "No next action set.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Follow-Up Note</strong>
      <p>${escapeHtml(customer.followUpNotes || "No follow-up notes yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Notes</strong>
      <p>${escapeHtml(customer.notes || "No notes yet.")}</p>
    </div>
    <div class="order-detail-actions">
      <button class="open-link secondary" type="button" data-customer-edit="${customer.id}">Edit</button>
      <button class="danger-button" type="button" data-customer-delete="${customer.id}">Delete</button>
    </div>
  `;
  renderCustomerRelatedOrders(relatedOrders);
  renderCustomerTimeline(customer, relatedOrders);
}

function getRelatedOrders(customerNameValue) {
  return orders.filter((order) => order.customerName.toLowerCase() === customerNameValue.toLowerCase());
}

function renderCustomerRelatedOrders(relatedOrders) {
  customerRelatedOrders.innerHTML = `
    <p class="card-label">Related Orders</p>
    ${relatedOrders.length ? relatedOrders.map((order) => `
      <button class="related-order-card" type="button" data-open-order="${order.id}">
        <strong>${escapeHtml(order.orderCode || order.id)} · ${escapeHtml(order.orderName)}</strong>
        <span>${escapeHtml(order.status)} · ${escapeHtml(order.productsSummary || "No products")} · ${escapeHtml(order.nextAction || "No next action")}</span>
      </button>
    `).join("") : '<p class="empty-state">No related orders yet.</p>'}
  `;
}

function renderCustomerTimeline(customer, relatedOrders) {
  const timelineItems = [
    ...(customer.timeline || []),
    ...relatedOrders.map((order) => ({
      date: formatDateOnly(order.updatedAt),
      eventType: "Related order",
      title: `Related order: ${order.orderName}`,
      description: `${order.status}. ${order.nextAction || "No next action"}`,
      relatedOrderId: order.orderCode || order.id,
      nextAction: order.nextAction,
      status: order.status
    }))
  ].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  customerTimeline.innerHTML = `
    <p class="card-label">Timeline</p>
    ${timelineItems.map((item) => `
      <article class="order-timeline-item">
        <span>${escapeHtml(item.date)}</span>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.eventType || "Note")}${item.relatedOrderId ? ` · ${escapeHtml(item.relatedOrderId)}` : ""}${item.status ? ` · ${escapeHtml(item.status)}` : ""}</small>
          <p>${escapeHtml(item.description)}</p>
          ${item.nextAction ? `<p>${escapeHtml(item.nextAction)}</p>` : ""}
        </div>
      </article>
    `).join("") || '<p class="empty-state">No customer timeline yet.</p>'}
  `;
}

function renderOrderCustomerOptions(selectedValue = "") {
  const existingOrderCustomerNames = orders.map((order) => order.customerName).filter(Boolean);
  const names = [...new Set([...customers.map((customer) => customer.customerName), ...existingOrderCustomerNames])];
  const selectedCustomerName = selectedValue || orderCustomer.value;
  orderCustomer.innerHTML = '<option value="">Select customer</option>' + names.map((name) => `
    <option value="${escapeHtml(name)}">${escapeHtml(name)}</option>
  `).join("");

  if (selectedCustomerName && names.includes(selectedCustomerName)) {
    orderCustomer.value = selectedCustomerName;
  }
}

function setupCustomerCenter() {
  customerForm.addEventListener("submit", saveCustomerFromForm);
  resetCustomerForm.addEventListener("click", clearCustomerForm);
  [customerSearchInput, customerCountryFilter, customerStatusFilter, customerPriorityFilter, customerTypeFilter, customerInterestFilter].forEach((field) => {
    field.addEventListener("input", renderCustomers);
    field.addEventListener("change", renderCustomers);
  });

  customerList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-customer-id]");
    if (!card) {
      return;
    }

    selectCustomer(card.dataset.customerId);
  });

  [followupDueToday, followupOverdue].forEach((list) => {
    list.addEventListener("click", (event) => {
      const card = event.target.closest("[data-customer-id]");
      if (!card) {
        return;
      }

      selectCustomer(card.dataset.customerId);
    });
  });

  customerDetail.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-customer-edit]");
    const deleteButton = event.target.closest("[data-customer-delete]");

    if (editButton) {
      editCustomer(editButton.dataset.customerEdit);
    }

    if (deleteButton) {
      deleteCustomer(deleteButton.dataset.customerDelete);
    }
  });

  customerFollowupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCustomerFollowup();
  });

  customerTimelineForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomerTimelineEvent();
  });

  customerRelatedOrders.addEventListener("click", (event) => {
    const orderButton = event.target.closest("[data-open-order]");
    if (!orderButton) {
      return;
    }

    openInternalPage("order-center");
    selectOrder(orderButton.dataset.openOrder);
  });
}

function saveCustomerFollowup() {
  const customer = customers.find((item) => item.id === customerFollowupId.value);
  if (!customer) {
    return;
  }

  customer.nextFollowUpDate = customerFollowupDate.value;
  customer.followUpNotes = customerFollowupNote.value.trim();
  customer.nextAction = customerFollowupNote.value.trim() || customer.nextAction;
  customer.updatedAt = new Date().toISOString();
  customer.timeline = customer.timeline || [];
  customer.timeline.unshift({
    id: `customer-timeline-${Date.now()}`,
    date: new Date().toISOString().slice(0, 10),
    eventType: "Follow-up",
    title: "Follow-up updated",
    description: customer.followUpNotes || "Follow-up date was updated.",
    relatedOrderId: "",
    nextAction: customer.nextAction,
    status: "Open"
  });

  saveCustomers();
  renderCustomerDashboard();
  renderCustomerFilters();
  renderCustomerFollowups();
  renderCustomers();
  renderCustomerDetail(customer);
  renderTodayDashboard();
}

function addCustomerTimelineEvent() {
  const customer = customers.find((item) => item.id === customerTimelineCustomerId.value);
  if (!customer || !customerTimelineTitle.value.trim()) {
    return;
  }

  customer.timeline = customer.timeline || [];
  customer.timeline.unshift({
    id: `customer-timeline-${Date.now()}`,
    date: customerTimelineDate.value || new Date().toISOString().slice(0, 10),
    eventType: customerTimelineEventType.value,
    title: customerTimelineTitle.value.trim(),
    description: customerTimelineDescription.value.trim(),
    relatedOrderId: customerTimelineOrderId.value.trim(),
    nextAction: customerTimelineNextAction.value.trim(),
    status: customerTimelineStatus.value
  });
  customer.nextAction = customerTimelineNextAction.value.trim() || customer.nextAction;
  customer.lastContactDate = customerTimelineDate.value || customer.lastContactDate;
  customer.updatedAt = new Date().toISOString();
  saveCustomers();
  renderCustomerDashboard();
  renderCustomerFilters();
  renderCustomerFollowups();
  renderCustomers();
  renderCustomerDetail(customer);
  renderTodayDashboard();
  customerTimelineTitle.value = "";
  customerTimelineDescription.value = "";
  customerTimelineOrderId.value = "";
  customerTimelineNextAction.value = "";
  customerTimelineEventType.value = "First contact";
  customerTimelineStatus.value = "Open";
}

function loadSuppliers() {
  const savedSuppliers = localStorage.getItem(storageKeys.suppliers);
  if (!savedSuppliers) {
    suppliers = supplierSeedData.map(normalizeSupplier);
    saveSuppliers();
    localStorage.setItem(storageKeys.suppliersSeededV1, "true");
    return;
  }

  try {
    const parsedSuppliers = JSON.parse(savedSuppliers);
    suppliers = Array.isArray(parsedSuppliers) ? parsedSuppliers.map(normalizeSupplier) : supplierSeedData.map(normalizeSupplier);
  } catch (error) {
    suppliers = supplierSeedData.map(normalizeSupplier);
  }

  if (localStorage.getItem(storageKeys.suppliersSeededV1) !== "true") {
    const existingNames = new Set(suppliers.map((supplier) => supplier.supplierName.toLowerCase()));
    const missingSamples = supplierSeedData
      .filter((supplier) => !existingNames.has(supplier.supplierName.toLowerCase()))
      .map(normalizeSupplier);
    suppliers = [...missingSamples, ...suppliers.map(enrichSupplierTimeline)];
    localStorage.setItem(storageKeys.suppliersSeededV1, "true");
    saveSuppliers();
  }
}

function saveSuppliers() {
  localStorage.setItem(storageKeys.suppliers, JSON.stringify(suppliers));
}

function normalizeSupplier(supplier) {
  const now = new Date().toISOString();
  return {
    id: supplier.id || `supplier-${Date.now()}`,
    supplierName: supplier.supplierName || "",
    contactPerson: supplier.contactPerson || "",
    phone: supplier.phone || "",
    wechat: supplier.wechat || "",
    email: supplier.email || "",
    city: supplier.city || "",
    marketFactory: supplier.marketFactory || "",
    productCategory: supplier.productCategory || "",
    mainProducts: supplier.mainProducts || "",
    priceLevel: supplier.priceLevel || "Medium",
    qualityLevel: supplier.qualityLevel || "Standard",
    deliverySpeed: supplier.deliverySpeed || "Normal",
    reliabilityRating: supplier.reliabilityRating || "Unknown",
    status: supplier.status || "New",
    priority: supplier.priority || "Normal",
    nextAction: supplier.nextAction || "",
    notes: supplier.notes || "",
    createdAt: supplier.createdAt || now,
    updatedAt: supplier.updatedAt || now,
    timeline: Array.isArray(supplier.timeline) ? supplier.timeline : []
  };
}

function enrichSupplierTimeline(supplier) {
  const normalizedSupplier = normalizeSupplier(supplier);
  const sample = supplierSeedData.find((item) => item.supplierName.toLowerCase() === normalizedSupplier.supplierName.toLowerCase());
  if (sample && !normalizedSupplier.timeline.length) {
    normalizedSupplier.timeline = sample.timeline;
  }
  return normalizedSupplier;
}

function getSupplierFormData() {
  const now = new Date().toISOString();
  const existingSupplier = suppliers.find((supplier) => supplier.id === supplierId.value);

  return {
    id: supplierId.value || `supplier-${Date.now()}`,
    supplierName: supplierName.value.trim(),
    contactPerson: supplierContactPerson.value.trim(),
    phone: supplierPhone.value.trim(),
    wechat: supplierWechat.value.trim(),
    email: supplierEmail.value.trim(),
    city: supplierCity.value.trim(),
    marketFactory: supplierMarketFactory.value.trim(),
    productCategory: supplierProductCategory.value.trim(),
    mainProducts: supplierMainProducts.value.trim(),
    priceLevel: supplierPriceLevel.value,
    qualityLevel: supplierQualityLevel.value,
    deliverySpeed: supplierDeliverySpeed.value,
    reliabilityRating: supplierReliabilityRating.value,
    status: supplierStatus.value,
    priority: supplierPriority.value,
    nextAction: supplierNextAction.value.trim(),
    notes: supplierNotes.value.trim(),
    createdAt: existingSupplier ? existingSupplier.createdAt : now,
    updatedAt: now,
    timeline: existingSupplier ? existingSupplier.timeline : [{
      id: `supplier-timeline-${Date.now()}`,
      date: now.slice(0, 10),
      eventType: "First contact",
      title: "Supplier created",
      description: "Supplier was added to Supplier Center.",
      relatedOrderId: "",
      status: "Open",
      nextAction: supplierNextAction.value.trim()
    }]
  };
}

function saveSupplierFromForm(event) {
  event.preventDefault();
  const supplier = getSupplierFormData();
  if (!supplier.supplierName) {
    return;
  }

  const existingIndex = suppliers.findIndex((item) => item.id === supplier.id);
  if (existingIndex >= 0) {
    suppliers[existingIndex] = supplier;
  } else {
    suppliers.unshift(supplier);
  }

  selectedSupplierId = supplier.id;
  saveSuppliers();
  renderSupplierDashboard();
  renderSupplierFilters();
  renderSuppliers();
  renderOrderSupplierOptions(supplier.supplierName);
  renderQuotationFilters();
  renderProductFilters();
  selectSupplier(supplier.id);
  renderTodayDashboard();
  clearSupplierForm();
}

function clearSupplierForm() {
  supplierForm.reset();
  supplierId.value = "";
  supplierFormTitle.textContent = "New Supplier";
}

function getSupplierFilterValues() {
  return {
    query: supplierSearchInput.value.trim().toLowerCase(),
    category: supplierCategoryFilter.value,
    city: supplierCityFilter.value,
    reliability: supplierReliabilityFilter.value,
    status: supplierStatusFilter.value,
    priority: supplierPriorityFilter.value
  };
}

function getFilteredSuppliers() {
  const filters = getSupplierFilterValues();
  return suppliers.filter((supplier) => {
    const haystack = [
      supplier.supplierName,
      supplier.contactPerson,
      supplier.phone,
      supplier.wechat,
      supplier.email,
      supplier.city,
      supplier.marketFactory,
      supplier.productCategory,
      supplier.mainProducts,
      supplier.reliabilityRating,
      supplier.status,
      supplier.priority,
      supplier.notes,
      supplier.nextAction
    ].join(" ").toLowerCase();

    return (!filters.query || haystack.includes(filters.query))
      && (!filters.category || supplier.productCategory === filters.category)
      && (!filters.city || supplier.city === filters.city)
      && (!filters.reliability || supplier.reliabilityRating === filters.reliability)
      && (!filters.status || supplier.status === filters.status)
      && (!filters.priority || supplier.priority === filters.priority);
  });
}

function renderSupplierFilters() {
  const selected = {
    category: supplierCategoryFilter.value,
    city: supplierCityFilter.value,
    reliability: supplierReliabilityFilter.value,
    status: supplierStatusFilter.value,
    priority: supplierPriorityFilter.value
  };
  const categories = [...new Set(suppliers.map((supplier) => supplier.productCategory).filter(Boolean))].sort();
  const cities = [...new Set(suppliers.map((supplier) => supplier.city).filter(Boolean))].sort();
  supplierCategoryFilter.innerHTML = '<option value="">All categories</option>' + categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  supplierCityFilter.innerHTML = '<option value="">All cities</option>' + cities.map((city) => `<option value="${escapeHtml(city)}">${escapeHtml(city)}</option>`).join("");
  supplierReliabilityFilter.innerHTML = '<option value="">All reliability</option>' + supplierReliabilityOptions.map((reliability) => `<option value="${escapeHtml(reliability)}">${escapeHtml(reliability)}</option>`).join("");
  supplierStatusFilter.innerHTML = '<option value="">All status</option>' + supplierStatusOptions.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
  supplierPriorityFilter.innerHTML = '<option value="">All priority</option>' + supplierPriorityOptions.map((priority) => `<option value="${escapeHtml(priority)}">${escapeHtml(priority)}</option>`).join("");
  supplierCategoryFilter.value = selected.category;
  supplierCityFilter.value = selected.city;
  supplierReliabilityFilter.value = selected.reliability;
  supplierStatusFilter.value = selected.status;
  supplierPriorityFilter.value = selected.priority;
}

function renderSupplierDashboard() {
  const today = new Date().toISOString().slice(0, 10);
  const monthPrefix = today.slice(0, 7);
  const activeOrderSuppliers = new Set(
    orders
      .filter((order) => !["Delivered", "Completed"].includes(order.status))
      .map((order) => (order.supplierName || "").toLowerCase())
      .filter(Boolean)
  );
  const metrics = [
    { label: "Total Suppliers", value: suppliers.length },
    { label: "Reliable Suppliers", value: suppliers.filter((supplier) => supplier.reliabilityRating === "Reliable").length },
    { label: "Suppliers Needing Follow-up", value: suppliers.filter((supplier) => supplier.reliabilityRating === "Needs Follow-up" || supplier.nextAction).length },
    { label: "Active Order Suppliers", value: suppliers.filter((supplier) => activeOrderSuppliers.has(supplier.supplierName.toLowerCase())).length },
    { label: "New Suppliers This Month", value: suppliers.filter((supplier) => formatDateOnly(supplier.createdAt).startsWith(monthPrefix)).length }
  ];

  supplierDashboard.innerHTML = metrics.map((metric) => `
    <article class="order-metric-card">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${metric.value}</strong>
    </article>
  `).join("");
}

function renderSuppliers() {
  const filteredSuppliers = getFilteredSuppliers();

  if (!filteredSuppliers.length) {
    supplierList.innerHTML = '<p class="empty-state">No suppliers found.</p>';
    supplierDetailTitle.textContent = "Select a supplier";
    supplierDetail.innerHTML = '<p class="empty-state">Create a supplier or adjust the filters.</p>';
    supplierRelatedOrders.innerHTML = "";
    supplierTimelineForm.classList.add("hidden");
    supplierTimeline.innerHTML = "";
    return;
  }

  if (!selectedSupplierId || !filteredSuppliers.some((supplier) => supplier.id === selectedSupplierId)) {
    selectedSupplierId = filteredSuppliers[0].id;
  }

  supplierList.innerHTML = filteredSuppliers.map((supplier) => `
    <button class="supplier-list-card ${supplier.id === selectedSupplierId ? "active" : ""}" type="button" data-supplier-id="${supplier.id}">
      <h3>${escapeHtml(supplier.supplierName)}</h3>
      <p>${escapeHtml(supplier.productCategory || "No category")}${supplier.city ? ` · ${escapeHtml(supplier.city)}` : ""}</p>
      <div class="order-list-meta">
        <span class="order-pill">${escapeHtml(supplier.reliabilityRating)}</span>
        <span class="order-pill">${escapeHtml(supplier.status)}</span>
        <span class="order-pill priority-${escapeHtml(supplier.priority.toLowerCase())}">${escapeHtml(supplier.priority)}</span>
      </div>
    </button>
  `).join("");
}

function selectSupplier(id) {
  const supplier = suppliers.find((item) => item.id === id);
  if (!supplier) {
    return;
  }

  selectedSupplierId = id;
  renderSuppliers();
  renderSupplierDetail(supplier);
}

function editSupplier(id) {
  const supplier = suppliers.find((item) => item.id === id);
  if (!supplier) {
    return;
  }

  supplierId.value = supplier.id;
  supplierName.value = supplier.supplierName;
  supplierContactPerson.value = supplier.contactPerson;
  supplierPhone.value = supplier.phone;
  supplierWechat.value = supplier.wechat;
  supplierEmail.value = supplier.email;
  supplierCity.value = supplier.city;
  supplierMarketFactory.value = supplier.marketFactory;
  supplierProductCategory.value = supplier.productCategory;
  supplierMainProducts.value = supplier.mainProducts;
  supplierPriceLevel.value = supplier.priceLevel;
  supplierQualityLevel.value = supplier.qualityLevel;
  supplierDeliverySpeed.value = supplier.deliverySpeed;
  supplierReliabilityRating.value = supplier.reliabilityRating;
  supplierStatus.value = supplier.status;
  supplierPriority.value = supplier.priority;
  supplierNextAction.value = supplier.nextAction;
  supplierNotes.value = supplier.notes;
  supplierFormTitle.textContent = "Edit Supplier";
  supplierName.focus();
}

function deleteSupplier(id) {
  const supplier = suppliers.find((item) => item.id === id);
  if (!supplier) {
    return;
  }

  const confirmed = window.confirm(`Delete supplier "${supplier.supplierName}"? Related orders will stay safe.`);
  if (!confirmed) {
    return;
  }

  suppliers = suppliers.filter((item) => item.id !== id);
  selectedSupplierId = suppliers[0]?.id || "";
  saveSuppliers();
  renderSupplierDashboard();
  renderSupplierFilters();
  renderSuppliers();
  renderOrderSupplierOptions();
  renderQuotationFilters();
  renderProductFilters();
  renderTodayDashboard();
  clearSupplierForm();

  if (selectedSupplierId) {
    selectSupplier(selectedSupplierId);
  } else {
    supplierDetailTitle.textContent = "Select a supplier";
    supplierDetail.innerHTML = '<p class="empty-state">Create a supplier to view details.</p>';
    supplierRelatedOrders.innerHTML = "";
    supplierTimelineForm.classList.add("hidden");
    supplierTimeline.innerHTML = "";
  }
}

function getRelatedSupplierOrders(supplierNameValue) {
  return orders.filter((order) => (order.supplierName || "").toLowerCase() === supplierNameValue.toLowerCase());
}

function renderSupplierDetail(supplier) {
  const relatedOrders = getRelatedSupplierOrders(supplier.supplierName);
  const activeOrders = relatedOrders.filter((order) => !["Delivered", "Completed"].includes(order.status));
  supplierDetailTitle.textContent = supplier.supplierName;
  supplierTimelineForm.classList.remove("hidden");
  supplierTimelineSupplierId.value = supplier.id;
  supplierTimelineDate.value = new Date().toISOString().slice(0, 10);
  supplierDetail.innerHTML = `
    <div class="order-status-row">
      <span class="order-pill">${escapeHtml(supplier.reliabilityRating)}</span>
      <span class="order-pill">${escapeHtml(supplier.status)}</span>
      <span class="order-pill priority-${escapeHtml(supplier.priority.toLowerCase())}">${escapeHtml(supplier.priority)}</span>
      <span class="order-pill">${escapeHtml(activeOrders.length)} active order${activeOrders.length === 1 ? "" : "s"}</span>
    </div>
    <dl class="order-detail-grid">
      ${renderDetailField("Supplier", supplier.supplierName)}
      ${renderDetailField("Contact", supplier.contactPerson)}
      ${renderDetailField("Phone / WhatsApp", supplier.phone)}
      ${renderDetailField("WeChat", supplier.wechat)}
      ${renderDetailField("Email", supplier.email)}
      ${renderDetailField("City", supplier.city)}
      ${renderDetailField("Market / Factory", supplier.marketFactory)}
      ${renderDetailField("Product Category", supplier.productCategory)}
      ${renderDetailField("Price Level", supplier.priceLevel)}
      ${renderDetailField("Quality Level", supplier.qualityLevel)}
      ${renderDetailField("Delivery Speed", supplier.deliverySpeed)}
      ${renderDetailField("Reliability", supplier.reliabilityRating)}
    </dl>
    <div class="detail-text-block">
      <strong>Main Products</strong>
      <p>${escapeHtml(supplier.mainProducts || "No main products yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Next Action</strong>
      <p>${escapeHtml(supplier.nextAction || "No next action set.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Reliability Notes</strong>
      <p>${escapeHtml(supplier.notes || "No reliability notes yet.")}</p>
    </div>
    <div class="order-detail-actions">
      <button class="open-link secondary" type="button" data-supplier-edit="${supplier.id}">Edit</button>
      <button class="danger-button" type="button" data-supplier-delete="${supplier.id}">Delete</button>
    </div>
  `;
  renderSupplierRelatedOrders(relatedOrders);
  renderSupplierTimeline(supplier, relatedOrders);
}

function renderSupplierRelatedOrders(relatedOrders) {
  supplierRelatedOrders.innerHTML = `
    <p class="card-label">Related Orders</p>
    ${relatedOrders.length ? relatedOrders.map((order) => `
      <button class="related-order-card" type="button" data-open-order="${order.id}">
        <strong>${escapeHtml(order.orderCode || order.id)} · ${escapeHtml(order.orderName)}</strong>
        <span>${escapeHtml(order.customerName)} · ${escapeHtml(order.status)} · ${escapeHtml(order.nextAction || "No next action")}</span>
      </button>
    `).join("") : '<p class="empty-state">No related orders yet.</p>'}
  `;
}

function renderSupplierTimeline(supplier, relatedOrders) {
  const timelineItems = [
    ...(supplier.timeline || []),
    ...relatedOrders.map((order) => ({
      date: formatDateOnly(order.updatedAt),
      eventType: "Related order",
      title: `Related order: ${order.orderName}`,
      description: `${order.status}. ${order.nextAction || "No next action"}`,
      relatedOrderId: order.orderCode || order.id,
      status: order.status,
      nextAction: order.nextAction
    }))
  ].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  supplierTimeline.innerHTML = `
    <p class="card-label">Supplier Timeline</p>
    ${timelineItems.map((item) => `
      <article class="order-timeline-item">
        <span>${escapeHtml(item.date)}</span>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.eventType || "Note")}${item.relatedOrderId ? ` · ${escapeHtml(item.relatedOrderId)}` : ""}${item.status ? ` · ${escapeHtml(item.status)}` : ""}</small>
          <p>${escapeHtml(item.description)}</p>
          ${item.nextAction ? `<p>${escapeHtml(item.nextAction)}</p>` : ""}
        </div>
      </article>
    `).join("") || '<p class="empty-state">No supplier timeline yet.</p>'}
  `;
}

function renderOrderSupplierOptions(selectedValue = "") {
  const existingOrderSupplierNames = orders.map((order) => order.supplierName).filter(Boolean);
  const existingQuotationSupplierNames = quotations.map((quotation) => quotation.supplierName).filter(Boolean);
  const existingProductSupplierNames = products.map((product) => product.supplierName).filter(Boolean);
  const names = [...new Set([...suppliers.map((supplier) => supplier.supplierName), ...existingOrderSupplierNames, ...existingQuotationSupplierNames, ...existingProductSupplierNames])].sort();
  supplierOptions.innerHTML = names.map((name) => `<option value="${escapeHtml(name)}"></option>`).join("");
  if (selectedValue) {
    orderSupplier.value = selectedValue;
  }
}

function refreshSelectedSupplierDetail() {
  renderSupplierDashboard();
  if (!selectedSupplierId) {
    return;
  }

  const supplier = suppliers.find((item) => item.id === selectedSupplierId);
  if (supplier) {
    renderSupplierDetail(supplier);
  }
}

function setupSupplierCenter() {
  supplierForm.addEventListener("submit", saveSupplierFromForm);
  resetSupplierForm.addEventListener("click", clearSupplierForm);
  [supplierSearchInput, supplierCategoryFilter, supplierCityFilter, supplierReliabilityFilter, supplierStatusFilter, supplierPriorityFilter].forEach((field) => {
    field.addEventListener("input", renderSuppliers);
    field.addEventListener("change", renderSuppliers);
  });

  supplierList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-supplier-id]");
    if (!card) {
      return;
    }

    selectSupplier(card.dataset.supplierId);
  });

  supplierDetail.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-supplier-edit]");
    const deleteButton = event.target.closest("[data-supplier-delete]");

    if (editButton) {
      editSupplier(editButton.dataset.supplierEdit);
    }

    if (deleteButton) {
      deleteSupplier(deleteButton.dataset.supplierDelete);
    }
  });

  supplierRelatedOrders.addEventListener("click", (event) => {
    const orderButton = event.target.closest("[data-open-order]");
    if (!orderButton) {
      return;
    }

    openInternalPage("order-center");
    selectOrder(orderButton.dataset.openOrder);
  });

  supplierTimelineForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addSupplierTimelineEvent();
  });
}

function addSupplierTimelineEvent() {
  const supplier = suppliers.find((item) => item.id === supplierTimelineSupplierId.value);
  if (!supplier || !supplierTimelineTitle.value.trim()) {
    return;
  }

  supplier.timeline = supplier.timeline || [];
  supplier.timeline.unshift({
    id: `supplier-timeline-${Date.now()}`,
    date: supplierTimelineDate.value || new Date().toISOString().slice(0, 10),
    eventType: supplierTimelineEventType.value,
    title: supplierTimelineTitle.value.trim(),
    description: supplierTimelineDescription.value.trim(),
    relatedOrderId: supplierTimelineOrderId.value.trim(),
    status: supplierTimelineStatus.value,
    nextAction: supplierTimelineNextAction.value.trim()
  });
  supplier.nextAction = supplierTimelineNextAction.value.trim() || supplier.nextAction;
  supplier.updatedAt = new Date().toISOString();
  saveSuppliers();
  renderSupplierDashboard();
  renderSupplierFilters();
  renderSuppliers();
  renderSupplierDetail(supplier);
  renderTodayDashboard();
  supplierTimelineTitle.value = "";
  supplierTimelineDescription.value = "";
  supplierTimelineOrderId.value = "";
  supplierTimelineNextAction.value = "";
  supplierTimelineEventType.value = "First contact";
  supplierTimelineStatus.value = "Open";
}

function loadQuotations() {
  const savedQuotations = localStorage.getItem(storageKeys.quotations);
  if (!savedQuotations) {
    quotations = quotationSeedData.map(normalizeQuotation);
    saveQuotations();
    localStorage.setItem(storageKeys.quotationsSeededV1, "true");
    return;
  }

  try {
    const parsedQuotations = JSON.parse(savedQuotations);
    quotations = Array.isArray(parsedQuotations) ? parsedQuotations.map(normalizeQuotation) : quotationSeedData.map(normalizeQuotation);
  } catch (error) {
    quotations = quotationSeedData.map(normalizeQuotation);
  }

  if (localStorage.getItem(storageKeys.quotationsSeededV1) !== "true") {
    const existingCodes = new Set(quotations.map((quotation) => quotation.quotationCode.toLowerCase()));
    const missingSamples = quotationSeedData
      .filter((quotation) => !existingCodes.has(quotation.quotationCode.toLowerCase()))
      .map(normalizeQuotation);
    quotations = [...missingSamples, ...quotations];
    localStorage.setItem(storageKeys.quotationsSeededV1, "true");
    saveQuotations();
  }
}

function saveQuotations() {
  localStorage.setItem(storageKeys.quotations, JSON.stringify(quotations));
}

function normalizeQuotation(quotation) {
  const now = new Date().toISOString();
  return {
    id: quotation.id || `quotation-${Date.now()}`,
    quotationCode: quotation.quotationCode || `QT-${new Date().getFullYear()}-${Math.floor(Math.random() * 900 + 100)}`,
    customerName: quotation.customerName || "",
    country: quotation.country || "",
    productSummary: quotation.productSummary || "",
    supplierName: quotation.supplierName || "",
    quantity: quotation.quantity || "",
    unitPrice: quotation.unitPrice || "",
    totalAmount: quotation.totalAmount || "",
    currency: quotation.currency || "USD",
    status: quotation.status || "Draft",
    validUntil: quotation.validUntil || "",
    nextAction: quotation.nextAction || "",
    notes: quotation.notes || "",
    createdAt: quotation.createdAt || now,
    updatedAt: quotation.updatedAt || now
  };
}

function getQuotationFormData() {
  const now = new Date().toISOString();
  const existingQuotation = quotations.find((quotation) => quotation.id === quotationId.value);

  return {
    id: quotationId.value || `quotation-${Date.now()}`,
    quotationCode: quotationCode.value.trim(),
    customerName: quotationCustomer.value.trim(),
    country: quotationCountry.value.trim(),
    productSummary: quotationProductSummary.value.trim(),
    supplierName: quotationSupplier.value.trim(),
    quantity: quotationQuantity.value.trim(),
    unitPrice: quotationUnitPrice.value.trim(),
    totalAmount: quotationTotalAmount.value.trim(),
    currency: quotationCurrency.value,
    status: quotationStatus.value,
    validUntil: quotationValidUntil.value,
    nextAction: quotationNextAction.value.trim(),
    notes: quotationNotes.value.trim(),
    createdAt: existingQuotation ? existingQuotation.createdAt : now,
    updatedAt: now
  };
}

function saveQuotationFromForm(event) {
  event.preventDefault();
  const quotation = getQuotationFormData();
  if (!quotation.quotationCode || !quotation.customerName) {
    return;
  }

  const existingIndex = quotations.findIndex((item) => item.id === quotation.id);
  if (existingIndex >= 0) {
    quotations[existingIndex] = quotation;
  } else {
    quotations.unshift(quotation);
  }

  selectedQuotationId = quotation.id;
  saveQuotations();
  renderQuotationDashboard();
  renderQuotationFilters();
  renderQuotations();
  renderOrderSupplierOptions(quotation.supplierName);
  selectQuotation(quotation.id);
  renderTodayDashboard();
  clearQuotationForm();
}

function clearQuotationForm() {
  quotationForm.reset();
  quotationId.value = "";
  quotationCode.value = `QT-${new Date().getFullYear()}-${String(quotations.length + 1).padStart(3, "0")}`;
  renderQuotationCustomerOptions();
  quotationFormTitle.textContent = "New Quotation";
}

function getQuotationFilterValues() {
  return {
    query: quotationSearchInput.value.trim().toLowerCase(),
    status: quotationStatusFilter.value,
    customer: quotationCustomerFilter.value,
    supplier: quotationSupplierFilter.value
  };
}

function getFilteredQuotations() {
  const filters = getQuotationFilterValues();
  return quotations.filter((quotation) => {
    const haystack = [
      quotation.quotationCode,
      quotation.customerName,
      quotation.country,
      quotation.productSummary,
      quotation.supplierName,
      quotation.quantity,
      quotation.unitPrice,
      quotation.totalAmount,
      quotation.currency,
      quotation.status,
      quotation.nextAction,
      quotation.notes
    ].join(" ").toLowerCase();

    return (!filters.query || haystack.includes(filters.query))
      && (!filters.status || quotation.status === filters.status)
      && (!filters.customer || quotation.customerName === filters.customer)
      && (!filters.supplier || quotation.supplierName === filters.supplier);
  });
}

function renderQuotationFilters() {
  const selected = {
    status: quotationStatusFilter.value,
    customer: quotationCustomerFilter.value,
    supplier: quotationSupplierFilter.value
  };
  const customerNames = [...new Set(quotations.map((quotation) => quotation.customerName).filter(Boolean))].sort();
  const supplierNames = [...new Set(quotations.map((quotation) => quotation.supplierName).filter(Boolean))].sort();

  quotationStatusFilter.innerHTML = '<option value="">All status</option>' + quotationStatusOptions.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
  quotationCustomerFilter.innerHTML = '<option value="">All customers</option>' + customerNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  quotationSupplierFilter.innerHTML = '<option value="">All suppliers</option>' + supplierNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");

  quotationStatusFilter.value = selected.status;
  quotationCustomerFilter.value = selected.customer;
  quotationSupplierFilter.value = selected.supplier;
}

function renderQuotationDashboard() {
  const metrics = [
    { label: "Total Quotations", value: quotations.length },
    { label: "Drafts", value: quotations.filter((quotation) => quotation.status === "Draft").length },
    { label: "Sent", value: quotations.filter((quotation) => quotation.status === "Sent").length },
    { label: "Waiting Customer", value: quotations.filter((quotation) => quotation.status === "Waiting Customer").length },
    { label: "Approved", value: quotations.filter((quotation) => quotation.status === "Approved").length }
  ];

  quotationDashboard.innerHTML = metrics.map((metric) => `
    <article class="order-metric-card">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${metric.value}</strong>
    </article>
  `).join("");
}

function renderQuotations() {
  const filteredQuotations = getFilteredQuotations();

  if (!filteredQuotations.length) {
    quotationList.innerHTML = '<p class="empty-state">No quotations found.</p>';
    quotationDetailTitle.textContent = "Select a quotation";
    quotationDetail.innerHTML = '<p class="empty-state">Create a quotation or adjust the filters.</p>';
    return;
  }

  if (!selectedQuotationId || !filteredQuotations.some((quotation) => quotation.id === selectedQuotationId)) {
    selectedQuotationId = filteredQuotations[0].id;
  }

  quotationList.innerHTML = filteredQuotations.map((quotation) => `
    <button class="quotation-list-card ${quotation.id === selectedQuotationId ? "active" : ""}" type="button" data-quotation-id="${quotation.id}">
      <h3>${escapeHtml(quotation.quotationCode)}</h3>
      <p>${escapeHtml(quotation.customerName)}${quotation.country ? ` · ${escapeHtml(quotation.country)}` : ""}</p>
      <p>${escapeHtml(quotation.productSummary || "No product summary")}</p>
      <div class="order-list-meta">
        <span class="order-pill">${escapeHtml(quotation.status)}</span>
        <span class="order-pill">${escapeHtml(quotation.currency)} ${escapeHtml(quotation.totalAmount || "0")}</span>
        <span class="order-pill">${escapeHtml(quotation.supplierName || "No supplier")}</span>
      </div>
    </button>
  `).join("");
}

function selectQuotation(id) {
  const quotation = quotations.find((item) => item.id === id);
  if (!quotation) {
    return;
  }

  selectedQuotationId = id;
  renderQuotations();
  renderQuotationDetail(quotation);
}

function editQuotation(id) {
  const quotation = quotations.find((item) => item.id === id);
  if (!quotation) {
    return;
  }

  quotationId.value = quotation.id;
  quotationCode.value = quotation.quotationCode;
  renderQuotationCustomerOptions(quotation.customerName);
  quotationCustomer.value = quotation.customerName;
  quotationCountry.value = quotation.country;
  quotationProductSummary.value = quotation.productSummary;
  quotationSupplier.value = quotation.supplierName;
  quotationQuantity.value = quotation.quantity;
  quotationUnitPrice.value = quotation.unitPrice;
  quotationTotalAmount.value = quotation.totalAmount;
  quotationCurrency.value = quotation.currency;
  quotationStatus.value = quotation.status;
  quotationValidUntil.value = quotation.validUntil;
  quotationNextAction.value = quotation.nextAction;
  quotationNotes.value = quotation.notes;
  quotationFormTitle.textContent = "Edit Quotation";
  quotationCode.focus();
}

function deleteQuotation(id) {
  const quotation = quotations.find((item) => item.id === id);
  if (!quotation) {
    return;
  }

  const confirmed = window.confirm(`Delete quotation "${quotation.quotationCode}"?`);
  if (!confirmed) {
    return;
  }

  quotations = quotations.filter((item) => item.id !== id);
  selectedQuotationId = quotations[0]?.id || "";
  saveQuotations();
  renderQuotationDashboard();
  renderQuotationFilters();
  renderQuotations();
  renderOrderSupplierOptions();
  renderTodayDashboard();
  clearQuotationForm();

  if (selectedQuotationId) {
    selectQuotation(selectedQuotationId);
  } else {
    quotationDetailTitle.textContent = "Select a quotation";
    quotationDetail.innerHTML = '<p class="empty-state">Create a quotation to view details.</p>';
  }
}

function getRelatedCustomer(customerNameValue) {
  return customers.find((customer) => customer.customerName.toLowerCase() === customerNameValue.toLowerCase());
}

function getRelatedSupplier(supplierNameValue) {
  return suppliers.find((supplier) => supplier.supplierName.toLowerCase() === supplierNameValue.toLowerCase());
}

function renderQuotationDetail(quotation) {
  const relatedCustomer = getRelatedCustomer(quotation.customerName);
  const relatedSupplier = quotation.supplierName ? getRelatedSupplier(quotation.supplierName) : null;
  quotationDetailTitle.textContent = quotation.quotationCode;
  quotationDetail.innerHTML = `
    <div class="order-status-row">
      <span class="order-pill">${escapeHtml(quotation.status)}</span>
      <span class="order-pill">${escapeHtml(quotation.currency)} ${escapeHtml(quotation.totalAmount || "0")}</span>
      <span class="order-pill">${escapeHtml(quotation.validUntil || "No validity date")}</span>
    </div>
    <dl class="order-detail-grid">
      ${renderDetailField("Quotation ID", quotation.quotationCode)}
      ${renderDetailField("Customer", quotation.customerName)}
      ${renderDetailField("Country", quotation.country)}
      ${renderDetailField("Supplier", quotation.supplierName)}
      ${renderDetailField("Quantity", quotation.quantity)}
      ${renderDetailField("Unit Price", quotation.unitPrice)}
      ${renderDetailField("Total Amount", `${quotation.currency} ${quotation.totalAmount}`)}
      ${renderDetailField("Valid Until", quotation.validUntil)}
      ${renderDetailField("Status", quotation.status)}
      ${renderDetailField("Updated", formatDateOnly(quotation.updatedAt))}
    </dl>
    <div class="detail-text-block">
      <strong>Product Items</strong>
      <p>${escapeHtml(quotation.productSummary || "No product items yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Related Customer</strong>
      <p>${escapeHtml(relatedCustomer ? `${relatedCustomer.customerName} · ${relatedCustomer.country || "No country"} · ${relatedCustomer.status}` : "No saved customer match yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Related Supplier</strong>
      <p>${escapeHtml(relatedSupplier ? `${relatedSupplier.supplierName} · ${relatedSupplier.productCategory || "No category"} · ${relatedSupplier.reliabilityRating}` : "No saved supplier match yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Related Order</strong>
      <p>Placeholder for future quote-to-order conversion.</p>
    </div>
    <div class="detail-text-block">
      <strong>Next Action</strong>
      <p>${escapeHtml(quotation.nextAction || "No next action set.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Notes</strong>
      <p>${escapeHtml(quotation.notes || "No notes yet.")}</p>
    </div>
    <div class="order-detail-actions">
      <button class="open-link secondary" type="button" data-quotation-edit="${quotation.id}">Edit</button>
      <button class="danger-button" type="button" data-quotation-delete="${quotation.id}">Delete</button>
    </div>
  `;
}

function renderQuotationCustomerOptions(selectedValue = "") {
  const existingQuotationCustomerNames = quotations.map((quotation) => quotation.customerName).filter(Boolean);
  const names = [...new Set([...customers.map((customer) => customer.customerName), ...existingQuotationCustomerNames])].sort();
  const selectedCustomerName = selectedValue || quotationCustomer.value;
  quotationCustomer.innerHTML = '<option value="">Select customer</option>' + names.map((name) => `
    <option value="${escapeHtml(name)}">${escapeHtml(name)}</option>
  `).join("");

  if (selectedCustomerName && names.includes(selectedCustomerName)) {
    quotationCustomer.value = selectedCustomerName;
  }
}

function setupQuotationCenter() {
  quotationForm.addEventListener("submit", saveQuotationFromForm);
  resetQuotationForm.addEventListener("click", clearQuotationForm);
  quotationCustomer.addEventListener("change", () => {
    const customer = getRelatedCustomer(quotationCustomer.value);
    if (customer && !quotationCountry.value) {
      quotationCountry.value = customer.country;
    }
  });
  [quotationSearchInput, quotationStatusFilter, quotationCustomerFilter, quotationSupplierFilter].forEach((field) => {
    field.addEventListener("input", renderQuotations);
    field.addEventListener("change", renderQuotations);
  });

  quotationList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-quotation-id]");
    if (!card) {
      return;
    }

    selectQuotation(card.dataset.quotationId);
  });

  quotationDetail.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-quotation-edit]");
    const deleteButton = event.target.closest("[data-quotation-delete]");

    if (editButton) {
      editQuotation(editButton.dataset.quotationEdit);
    }

    if (deleteButton) {
      deleteQuotation(deleteButton.dataset.quotationDelete);
    }
  });
}

function loadShipments() {
  const savedShipments = localStorage.getItem(storageKeys.shipments);
  if (!savedShipments) {
    shipments = shipmentSeedData.map(normalizeShipment);
    saveShipments();
    localStorage.setItem(storageKeys.shipmentsSeededV1, "true");
    return;
  }

  try {
    const parsedShipments = JSON.parse(savedShipments);
    shipments = Array.isArray(parsedShipments) ? parsedShipments.map(normalizeShipment) : shipmentSeedData.map(normalizeShipment);
  } catch (error) {
    shipments = shipmentSeedData.map(normalizeShipment);
  }

  if (localStorage.getItem(storageKeys.shipmentsSeededV1) !== "true") {
    const existingCodes = new Set(shipments.map((shipment) => shipment.shipmentCode.toLowerCase()));
    const missingSamples = shipmentSeedData
      .filter((shipment) => !existingCodes.has(shipment.shipmentCode.toLowerCase()))
      .map(normalizeShipment);
    shipments = [...missingSamples, ...shipments];
    localStorage.setItem(storageKeys.shipmentsSeededV1, "true");
    saveShipments();
  }
}

function saveShipments() {
  localStorage.setItem(storageKeys.shipments, JSON.stringify(shipments));
}

function normalizeShipment(shipment) {
  const now = new Date().toISOString();
  return {
    id: shipment.id || `shipment-${Date.now()}`,
    shipmentCode: shipment.shipmentCode || `SHP-${new Date().getFullYear()}-${Math.floor(Math.random() * 900 + 100)}`,
    customerName: shipment.customerName || "",
    country: shipment.country || "",
    relatedOrder: shipment.relatedOrder || "",
    forwarder: shipment.forwarder || "",
    containerType: shipment.containerType || "",
    containerNumber: shipment.containerNumber || "",
    pol: shipment.pol || "",
    pod: shipment.pod || "",
    etd: shipment.etd || "",
    eta: shipment.eta || "",
    vessel: shipment.vessel || "",
    status: shipment.status || "Preparing",
    documentsStatus: shipment.documentsStatus || "Not Started",
    nextAction: shipment.nextAction || "",
    notes: shipment.notes || "",
    documents: normalizeShipmentDocuments(shipment.documents),
    timeline: Array.isArray(shipment.timeline) ? shipment.timeline : [],
    createdAt: shipment.createdAt || now,
    updatedAt: shipment.updatedAt || now
  };
}

function normalizeShipmentDocuments(documents = {}) {
  return shipmentDocumentNames.reduce((accumulator, name) => {
    accumulator[name] = Boolean(documents[name]);
    return accumulator;
  }, {});
}

function getShipmentDocumentsFromForm() {
  return {
    "Commercial Invoice": shipmentDocCommercialInvoice.checked,
    "Packing List": shipmentDocPackingList.checked,
    "Bill of Lading": shipmentDocBillOfLading.checked,
    "Certificate of Origin": shipmentDocCertificateOrigin.checked,
    "Other documents": shipmentDocOther.checked
  };
}

function setShipmentDocumentFields(documents) {
  const normalizedDocuments = normalizeShipmentDocuments(documents);
  shipmentDocCommercialInvoice.checked = normalizedDocuments["Commercial Invoice"];
  shipmentDocPackingList.checked = normalizedDocuments["Packing List"];
  shipmentDocBillOfLading.checked = normalizedDocuments["Bill of Lading"];
  shipmentDocCertificateOrigin.checked = normalizedDocuments["Certificate of Origin"];
  shipmentDocOther.checked = normalizedDocuments["Other documents"];
}

function getShipmentFormData() {
  const now = new Date().toISOString();
  const existingShipment = shipments.find((shipment) => shipment.id === shipmentId.value);
  const documents = getShipmentDocumentsFromForm();

  return {
    id: shipmentId.value || `shipment-${Date.now()}`,
    shipmentCode: shipmentCode.value.trim(),
    customerName: shipmentCustomer.value.trim(),
    country: shipmentCountry.value.trim(),
    relatedOrder: shipmentRelatedOrder.value.trim(),
    forwarder: shipmentForwarder.value.trim(),
    containerType: shipmentContainerType.value.trim(),
    containerNumber: shipmentContainerNumber.value.trim(),
    pol: shipmentPol.value.trim(),
    pod: shipmentPod.value.trim(),
    etd: shipmentEtd.value,
    eta: shipmentEta.value,
    vessel: shipmentVessel.value.trim(),
    status: shipmentStatus.value,
    documentsStatus: shipmentDocumentsStatus.value,
    nextAction: shipmentNextAction.value.trim(),
    notes: shipmentNotes.value.trim(),
    documents,
    timeline: existingShipment ? existingShipment.timeline : [{
      id: `shipment-timeline-${Date.now()}`,
      date: now.slice(0, 10),
      title: "Shipment created",
      description: "Shipment was added to Shipment Center.",
      status: shipmentStatus.value
    }],
    createdAt: existingShipment ? existingShipment.createdAt : now,
    updatedAt: now
  };
}

function saveShipmentFromForm(event) {
  event.preventDefault();
  const shipment = getShipmentFormData();
  if (!shipment.shipmentCode || !shipment.customerName) {
    return;
  }

  const existingIndex = shipments.findIndex((item) => item.id === shipment.id);
  if (existingIndex >= 0) {
    const previousShipment = shipments[existingIndex];
    if (previousShipment.status !== shipment.status) {
      shipment.timeline = [
        {
          id: `shipment-timeline-${Date.now()}`,
          date: new Date().toISOString().slice(0, 10),
          title: `Status changed to ${shipment.status}`,
          description: shipment.nextAction || "Shipment status was updated.",
          status: shipment.status
        },
        ...(shipment.timeline || [])
      ];
    }
    shipments[existingIndex] = shipment;
  } else {
    shipments.unshift(shipment);
  }

  selectedShipmentId = shipment.id;
  saveShipments();
  renderShipmentDashboard();
  renderShipmentFilters();
  renderShipments();
  selectShipment(shipment.id);
  renderTodayDashboard();
  clearShipmentForm();
}

function clearShipmentForm() {
  shipmentForm.reset();
  shipmentId.value = "";
  shipmentCode.value = `SHP-${new Date().getFullYear()}-${String(shipments.length + 1).padStart(3, "0")}`;
  setShipmentDocumentFields({});
  renderShipmentCustomerOptions();
  renderShipmentOrderOptions();
  shipmentFormTitle.textContent = "New Shipment";
}

function getShipmentFilterValues() {
  return {
    query: shipmentSearchInput.value.trim().toLowerCase(),
    status: shipmentStatusFilter.value,
    customer: shipmentCustomerFilter.value,
    documentsStatus: shipmentDocumentsFilter.value
  };
}

function getFilteredShipments() {
  const filters = getShipmentFilterValues();
  return shipments.filter((shipment) => {
    const haystack = [
      shipment.shipmentCode,
      shipment.customerName,
      shipment.country,
      shipment.relatedOrder,
      shipment.forwarder,
      shipment.containerType,
      shipment.containerNumber,
      shipment.pol,
      shipment.pod,
      shipment.vessel,
      shipment.status,
      shipment.documentsStatus,
      shipment.nextAction,
      shipment.notes
    ].join(" ").toLowerCase();

    return (!filters.query || haystack.includes(filters.query))
      && (!filters.status || shipment.status === filters.status)
      && (!filters.customer || shipment.customerName === filters.customer)
      && (!filters.documentsStatus || shipment.documentsStatus === filters.documentsStatus);
  });
}

function renderShipmentDashboard() {
  const metrics = [
    { label: "Total Shipments", value: shipments.length },
    { label: "Preparing", value: shipments.filter((shipment) => shipment.status === "Preparing").length },
    { label: "Booked", value: shipments.filter((shipment) => shipment.status === "Booked").length },
    { label: "In Transit", value: shipments.filter((shipment) => shipment.status === "In Transit").length },
    { label: "Arrived", value: shipments.filter((shipment) => shipment.status === "Arrived").length },
    { label: "Documents Pending", value: shipments.filter((shipment) => ["Not Started", "Pending", "Partial"].includes(shipment.documentsStatus)).length }
  ];

  shipmentDashboard.innerHTML = metrics.map((metric) => `
    <article class="order-metric-card">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${metric.value}</strong>
    </article>
  `).join("");
}

function renderShipmentFilters() {
  const selected = {
    status: shipmentStatusFilter.value,
    customer: shipmentCustomerFilter.value,
    documentsStatus: shipmentDocumentsFilter.value
  };
  const customerNames = [...new Set(shipments.map((shipment) => shipment.customerName).filter(Boolean))].sort();

  shipmentStatusFilter.innerHTML = '<option value="">All status</option>' + shipmentStatusOptions.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
  shipmentCustomerFilter.innerHTML = '<option value="">All customers</option>' + customerNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  shipmentDocumentsFilter.innerHTML = '<option value="">All documents</option>' + shipmentDocumentStatusOptions.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");

  shipmentStatusFilter.value = selected.status;
  shipmentCustomerFilter.value = selected.customer;
  shipmentDocumentsFilter.value = selected.documentsStatus;
}

function renderShipments() {
  const filteredShipments = getFilteredShipments();

  if (!filteredShipments.length) {
    shipmentList.innerHTML = '<p class="empty-state">No shipments found.</p>';
    shipmentDetailTitle.textContent = "Select a shipment";
    shipmentDetail.innerHTML = '<p class="empty-state">Create a shipment or adjust the filters.</p>';
    shipmentTimeline.innerHTML = "";
    return;
  }

  if (!selectedShipmentId || !filteredShipments.some((shipment) => shipment.id === selectedShipmentId)) {
    selectedShipmentId = filteredShipments[0].id;
  }

  shipmentList.innerHTML = filteredShipments.map((shipment) => `
    <button class="shipment-list-card ${shipment.id === selectedShipmentId ? "active" : ""}" type="button" data-shipment-id="${shipment.id}">
      <h3>${escapeHtml(shipment.shipmentCode)}</h3>
      <p>${escapeHtml(shipment.customerName)}${shipment.country ? ` · ${escapeHtml(shipment.country)}` : ""}</p>
      <p>${escapeHtml(shipment.pol || "No POL")} to ${escapeHtml(shipment.pod || "No POD")}</p>
      <div class="order-list-meta">
        <span class="order-pill">${escapeHtml(shipment.status)}</span>
        <span class="order-pill">${escapeHtml(shipment.containerType || "No container")}</span>
        <span class="order-pill">${escapeHtml(shipment.documentsStatus)}</span>
        <span class="order-pill">${escapeHtml(shipment.eta || "No ETA")}</span>
      </div>
    </button>
  `).join("");
}

function selectShipment(id) {
  const shipment = shipments.find((item) => item.id === id);
  if (!shipment) {
    return;
  }

  selectedShipmentId = id;
  renderShipments();
  renderShipmentDetail(shipment);
}

function editShipment(id) {
  const shipment = shipments.find((item) => item.id === id);
  if (!shipment) {
    return;
  }

  shipmentId.value = shipment.id;
  shipmentCode.value = shipment.shipmentCode;
  renderShipmentCustomerOptions(shipment.customerName);
  renderShipmentOrderOptions(shipment.relatedOrder);
  shipmentCustomer.value = shipment.customerName;
  shipmentCountry.value = shipment.country;
  shipmentRelatedOrder.value = shipment.relatedOrder;
  shipmentForwarder.value = shipment.forwarder;
  shipmentContainerType.value = shipment.containerType;
  shipmentContainerNumber.value = shipment.containerNumber;
  shipmentPol.value = shipment.pol;
  shipmentPod.value = shipment.pod;
  shipmentEtd.value = shipment.etd;
  shipmentEta.value = shipment.eta;
  shipmentVessel.value = shipment.vessel;
  shipmentStatus.value = shipment.status;
  shipmentDocumentsStatus.value = shipment.documentsStatus;
  setShipmentDocumentFields(shipment.documents);
  shipmentNextAction.value = shipment.nextAction;
  shipmentNotes.value = shipment.notes;
  shipmentFormTitle.textContent = "Edit Shipment";
  shipmentCode.focus();
}

function deleteShipment(id) {
  const shipment = shipments.find((item) => item.id === id);
  if (!shipment) {
    return;
  }

  const confirmed = window.confirm(`Delete shipment "${shipment.shipmentCode}"? Related orders will stay safe.`);
  if (!confirmed) {
    return;
  }

  shipments = shipments.filter((item) => item.id !== id);
  selectedShipmentId = shipments[0]?.id || "";
  saveShipments();
  renderShipmentDashboard();
  renderShipmentFilters();
  renderShipments();
  renderTodayDashboard();
  clearShipmentForm();

  if (selectedShipmentId) {
    selectShipment(selectedShipmentId);
  } else {
    shipmentDetailTitle.textContent = "Select a shipment";
    shipmentDetail.innerHTML = '<p class="empty-state">Create a shipment to view details.</p>';
    shipmentTimeline.innerHTML = "";
  }
}

function getRelatedShipmentOrder(orderCodeValue) {
  return orders.find((order) => (order.orderCode || order.id).toLowerCase() === orderCodeValue.toLowerCase());
}

function renderShipmentDetail(shipment) {
  const relatedOrder = shipment.relatedOrder ? getRelatedShipmentOrder(shipment.relatedOrder) : null;
  shipmentDetailTitle.textContent = shipment.shipmentCode;
  shipmentDetail.innerHTML = `
    <div class="order-status-row">
      <span class="order-pill">${escapeHtml(shipment.status)}</span>
      <span class="order-pill">${escapeHtml(shipment.documentsStatus)}</span>
      <span class="order-pill">${escapeHtml(shipment.containerType || "No container type")}</span>
    </div>
    <dl class="order-detail-grid">
      ${renderDetailField("Shipment ID", shipment.shipmentCode)}
      ${renderDetailField("Customer", shipment.customerName)}
      ${renderDetailField("Country", shipment.country)}
      ${renderDetailField("Related Order", shipment.relatedOrder)}
      ${renderDetailField("Forwarder", shipment.forwarder)}
      ${renderDetailField("Container Type", shipment.containerType)}
      ${renderDetailField("Container Number", shipment.containerNumber)}
      ${renderDetailField("POL", shipment.pol)}
      ${renderDetailField("POD", shipment.pod)}
      ${renderDetailField("ETD", shipment.etd)}
      ${renderDetailField("ETA", shipment.eta)}
      ${renderDetailField("Vessel", shipment.vessel)}
      ${renderDetailField("Status", shipment.status)}
      ${renderDetailField("Documents", shipment.documentsStatus)}
    </dl>
    <div class="detail-text-block">
      <strong>Related Order</strong>
      <p>${escapeHtml(relatedOrder ? `${relatedOrder.orderCode} · ${relatedOrder.orderName} · ${relatedOrder.status}` : "No saved order match yet.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Documents Checklist</strong>
      <div class="document-checklist">
        ${shipmentDocumentNames.map((name) => `
          <div class="document-checklist-item ${shipment.documents[name] ? "ready" : ""}">
            <span>${shipment.documents[name] ? "Ready" : "Pending"}</span>
            <strong>${escapeHtml(name)}</strong>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="detail-text-block">
      <strong>Next Action</strong>
      <p>${escapeHtml(shipment.nextAction || "No next action set.")}</p>
    </div>
    <div class="detail-text-block">
      <strong>Notes</strong>
      <p>${escapeHtml(shipment.notes || "No notes yet.")}</p>
    </div>
    <div class="order-detail-actions">
      <button class="open-link secondary" type="button" data-shipment-edit="${shipment.id}">Edit</button>
      <button class="danger-button" type="button" data-shipment-delete="${shipment.id}">Delete</button>
    </div>
  `;
  renderShipmentTimeline(shipment);
}

function renderShipmentTimeline(shipment) {
  const timelineItems = [
    ...(shipment.timeline || []),
    {
      date: shipment.etd || "No ETD",
      title: "ETD",
      description: shipment.etd ? `Planned departure from ${shipment.pol || "POL not set"}.` : "Add ETD when booking is confirmed.",
      status: "Schedule"
    },
    {
      date: shipment.eta || "No ETA",
      title: "ETA",
      description: shipment.eta ? `Planned arrival at ${shipment.pod || "POD not set"}.` : "Add ETA when forwarder confirms arrival plan.",
      status: "Schedule"
    },
    {
      date: formatDateOnly(shipment.updatedAt),
      title: `Current status: ${shipment.status}`,
      description: shipment.nextAction || "No next action has been set yet.",
      status: shipment.status
    }
  ].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  shipmentTimeline.innerHTML = `
    <p class="card-label">Timeline</p>
    ${timelineItems.map((item) => `
      <article class="order-timeline-item">
        <span>${escapeHtml(item.date)}</span>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.status || "Note")}</small>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </article>
    `).join("")}
  `;
}

function renderShipmentCustomerOptions(selectedValue = "") {
  const existingShipmentCustomerNames = shipments.map((shipment) => shipment.customerName).filter(Boolean);
  const names = [...new Set([...customers.map((customer) => customer.customerName), ...existingShipmentCustomerNames])].sort();
  const selectedCustomerName = selectedValue || shipmentCustomer.value;
  shipmentCustomer.innerHTML = '<option value="">Select customer</option>' + names.map((name) => `
    <option value="${escapeHtml(name)}">${escapeHtml(name)}</option>
  `).join("");

  if (selectedCustomerName && names.includes(selectedCustomerName)) {
    shipmentCustomer.value = selectedCustomerName;
  }
}

function renderShipmentOrderOptions(selectedValue = "") {
  const orderCodes = [...new Set(orders.map((order) => order.orderCode || order.id).filter(Boolean))].sort();
  const selectedOrderCode = selectedValue || shipmentRelatedOrder.value;
  shipmentRelatedOrder.innerHTML = '<option value="">Select order</option>' + orderCodes.map((code) => {
    const order = orders.find((item) => (item.orderCode || item.id) === code);
    const label = order ? `${code} · ${order.orderName}` : code;
    return `<option value="${escapeHtml(code)}">${escapeHtml(label)}</option>`;
  }).join("");

  if (selectedOrderCode && orderCodes.includes(selectedOrderCode)) {
    shipmentRelatedOrder.value = selectedOrderCode;
  }
}

function setupShipmentCenter() {
  shipmentForm.addEventListener("submit", saveShipmentFromForm);
  resetShipmentForm.addEventListener("click", clearShipmentForm);
  shipmentCustomer.addEventListener("change", () => {
    const customer = getRelatedCustomer(shipmentCustomer.value);
    if (customer && !shipmentCountry.value) {
      shipmentCountry.value = customer.country;
    }
  });
  shipmentRelatedOrder.addEventListener("change", () => {
    const order = getRelatedShipmentOrder(shipmentRelatedOrder.value);
    if (!order) {
      return;
    }
    if (!shipmentCustomer.value) {
      renderShipmentCustomerOptions(order.customerName);
      shipmentCustomer.value = order.customerName;
    }
    if (!shipmentCountry.value) {
      shipmentCountry.value = order.country;
    }
    if (!shipmentEtd.value) {
      shipmentEtd.value = order.etd;
    }
    if (!shipmentEta.value) {
      shipmentEta.value = order.eta;
    }
  });
  [shipmentSearchInput, shipmentStatusFilter, shipmentCustomerFilter, shipmentDocumentsFilter].forEach((field) => {
    field.addEventListener("input", renderShipments);
    field.addEventListener("change", renderShipments);
  });

  shipmentList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-shipment-id]");
    if (!card) {
      return;
    }

    selectShipment(card.dataset.shipmentId);
  });

  shipmentDetail.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-shipment-edit]");
    const deleteButton = event.target.closest("[data-shipment-delete]");

    if (editButton) {
      editShipment(editButton.dataset.shipmentEdit);
    }

    if (deleteButton) {
      deleteShipment(deleteButton.dataset.shipmentDelete);
    }
  });
}

function loadProducts() {
  const savedProducts = localStorage.getItem(storageKeys.products);
  if (!savedProducts) {
    products = productSeedData.map(normalizeProduct);
    saveProducts();
    localStorage.setItem(storageKeys.productsSeededV1, "true");
    return;
  }

  try {
    const parsedProducts = JSON.parse(savedProducts);
    products = Array.isArray(parsedProducts) ? parsedProducts.map(normalizeProduct) : productSeedData.map(normalizeProduct);
  } catch (error) {
    products = productSeedData.map(normalizeProduct);
  }

  if (localStorage.getItem(storageKeys.productsSeededV1) !== "true") {
    const existingNames = new Set(products.map((product) => product.productName.toLowerCase()));
    const missingSamples = productSeedData
      .filter((product) => !existingNames.has(product.productName.toLowerCase()))
      .map(normalizeProduct);
    products = [...missingSamples, ...products];
    localStorage.setItem(storageKeys.productsSeededV1, "true");
    saveProducts();
  }
}

function saveProducts() {
  localStorage.setItem(storageKeys.products, JSON.stringify(products));
}

function normalizeProduct(product) {
  const now = new Date().toISOString();
  return {
    id: product.id || `product-${Date.now()}`,
    productName: product.productName || "",
    category: product.category || "",
    keywords: product.keywords || "",
    supplierName: product.supplierName || "",
    customerInterested: product.customerInterested || "",
    moq: product.moq || "",
    unit: product.unit || "",
    price: product.price || "",
    photosPlaceholder: product.photosPlaceholder || "",
    notes: product.notes || "",
    createdAt: product.createdAt || now,
    updatedAt: product.updatedAt || now,
    timeline: Array.isArray(product.timeline) ? product.timeline : []
  };
}

function getProductFormData() {
  const now = new Date().toISOString();
  const existingProduct = products.find((product) => product.id === productId.value);

  return {
    id: productId.value || `product-${Date.now()}`,
    productName: productName.value.trim(),
    category: productCategory.value.trim(),
    keywords: productKeywords.value.trim(),
    supplierName: productSupplier.value.trim(),
    customerInterested: productCustomer.value.trim(),
    moq: productMoq.value.trim(),
    unit: productUnit.value.trim(),
    price: productPrice.value.trim(),
    photosPlaceholder: productPhotos.value.trim(),
    notes: productNotes.value.trim(),
    createdAt: existingProduct ? existingProduct.createdAt : now,
    updatedAt: now,
    timeline: existingProduct ? existingProduct.timeline : [{
      id: `product-timeline-${Date.now()}`,
      date: now.slice(0, 10),
      title: "Product created",
      description: "Product was added to Product Center.",
      status: "Created"
    }]
  };
}

function saveProductFromForm(event) {
  event.preventDefault();
  const product = getProductFormData();
  if (!product.productName || !product.category) {
    return;
  }

  const existingIndex = products.findIndex((item) => item.id === product.id);
  if (existingIndex >= 0) {
    products[existingIndex] = product;
  } else {
    products.unshift(product);
  }

  selectedProductId = product.id;
  saveProducts();
  renderProductDashboard();
  renderProductFilters();
  renderProductCategoryOptions();
  renderProducts();
  renderOrderSupplierOptions(product.supplierName);
  selectProduct(product.id);
  renderTodayDashboard();
  clearProductForm();
}

function clearProductForm() {
  productForm.reset();
  productId.value = "";
  renderProductCustomerOptions();
  renderProductCategoryOptions();
  productFormTitle.textContent = "New Product";
}

function getProductFilterValues() {
  return {
    query: productSearchInput.value.trim().toLowerCase(),
    category: productCategoryFilter.value,
    supplier: productSupplierFilter.value,
    customer: productCustomerFilter.value
  };
}

function getFilteredProducts() {
  const filters = getProductFilterValues();
  return products.filter((product) => {
    const haystack = [
      product.productName,
      product.category,
      product.keywords,
      product.supplierName,
      product.customerInterested,
      product.moq,
      product.unit,
      product.price,
      product.photosPlaceholder,
      product.notes
    ].join(" ").toLowerCase();

    return (!filters.query || haystack.includes(filters.query))
      && (!filters.category || product.category === filters.category)
      && (!filters.supplier || product.supplierName === filters.supplier)
      && (!filters.customer || product.customerInterested === filters.customer);
  });
}

function renderProductDashboard() {
  const categories = new Set(products.map((product) => product.category).filter(Boolean));
  const suppliersWithProducts = new Set(products.map((product) => product.supplierName).filter(Boolean));
  const customerInterest = products.filter((product) => product.customerInterested).length;
  const quotedProducts = products.filter((product) => getRelatedProductQuotations(product).length).length;
  const orderedProducts = products.filter((product) => getRelatedProductOrders(product).length).length;
  const metrics = [
    { label: "Total Products", value: products.length },
    { label: "Categories", value: categories.size },
    { label: "Supplier Linked", value: suppliersWithProducts.size },
    { label: "Customer Interest", value: customerInterest },
    { label: "Quoted Products", value: quotedProducts },
    { label: "Ordered Products", value: orderedProducts }
  ];

  productDashboard.innerHTML = metrics.map((metric) => `
    <article class="order-metric-card">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${metric.value}</strong>
    </article>
  `).join("");
}

function renderProductFilters() {
  const selected = {
    category: productCategoryFilter.value,
    supplier: productSupplierFilter.value,
    customer: productCustomerFilter.value
  };
  const categories = [...new Set(products.map((product) => product.category).filter(Boolean))].sort();
  const supplierNames = [...new Set(products.map((product) => product.supplierName).filter(Boolean))].sort();
  const customerNames = [...new Set(products.map((product) => product.customerInterested).filter(Boolean))].sort();

  productCategoryFilter.innerHTML = '<option value="">All categories</option>' + categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  productSupplierFilter.innerHTML = '<option value="">All suppliers</option>' + supplierNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  productCustomerFilter.innerHTML = '<option value="">All customers</option>' + customerNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");

  productCategoryFilter.value = selected.category;
  productSupplierFilter.value = selected.supplier;
  productCustomerFilter.value = selected.customer;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    productList.innerHTML = '<p class="empty-state">No products found.</p>';
    productDetailTitle.textContent = "Select a product";
    productDetail.innerHTML = '<p class="empty-state">Create a product or adjust the filters.</p>';
    return;
  }

  if (!selectedProductId || !filteredProducts.some((product) => product.id === selectedProductId)) {
    selectedProductId = filteredProducts[0].id;
  }

  productList.innerHTML = filteredProducts.map((product) => `
    <button class="product-list-card ${product.id === selectedProductId ? "active" : ""}" type="button" data-product-id="${product.id}">
      <h3>${escapeHtml(product.productName)}</h3>
      <p>${escapeHtml(product.category)}${product.supplierName ? ` · ${escapeHtml(product.supplierName)}` : ""}</p>
      <p>${escapeHtml(product.keywords || "No keywords")}</p>
      <div class="order-list-meta">
        <span class="order-pill">${escapeHtml(product.moq || "No MOQ")}</span>
        <span class="order-pill">${escapeHtml(product.unit || "No unit")}</span>
        <span class="order-pill">${escapeHtml(product.price || "No price")}</span>
      </div>
    </button>
  `).join("");
}

function selectProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    return;
  }

  selectedProductId = id;
  renderProducts();
  renderProductDetail(product);
}

function editProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    return;
  }

  productId.value = product.id;
  productName.value = product.productName;
  productCategory.value = product.category;
  productKeywords.value = product.keywords;
  productSupplier.value = product.supplierName;
  renderProductCustomerOptions(product.customerInterested);
  productCustomer.value = product.customerInterested;
  productMoq.value = product.moq;
  productUnit.value = product.unit;
  productPrice.value = product.price;
  productPhotos.value = product.photosPlaceholder;
  productNotes.value = product.notes;
  productFormTitle.textContent = "Edit Product";
  productName.focus();
}

function deleteProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    return;
  }

  const confirmed = window.confirm(`Delete product "${product.productName}"? Related records will stay safe.`);
  if (!confirmed) {
    return;
  }

  products = products.filter((item) => item.id !== id);
  selectedProductId = products[0]?.id || "";
  saveProducts();
  renderProductDashboard();
  renderProductFilters();
  renderProductCategoryOptions();
  renderProducts();
  renderOrderSupplierOptions();
  renderTodayDashboard();
  clearProductForm();

  if (selectedProductId) {
    selectProduct(selectedProductId);
  } else {
    productDetailTitle.textContent = "Select a product";
    productDetail.innerHTML = '<p class="empty-state">Create a product to view details.</p>';
  }
}

function normalizeWords(value) {
  return String(value || "").toLowerCase();
}

function productMatchesText(product, value) {
  const productWords = getSearchWords(`${product.productName} ${product.category} ${product.keywords}`);
  const valueWords = getSearchWords(value);
  return productWords.some((productWord) => {
    return valueWords.some((valueWord) => productWord.includes(valueWord) || valueWord.includes(productWord));
  });
}

function getSearchWords(value) {
  return normalizeWords(value)
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2)
    .map((word) => word.endsWith("s") ? word.slice(0, -1) : word);
}

function getRelatedProductSuppliers(product) {
  return suppliers.filter((supplier) => {
    return supplier.supplierName.toLowerCase() === product.supplierName.toLowerCase()
      || normalizeWords(supplier.productCategory).includes(normalizeWords(product.category))
      || productMatchesText(product, supplier.mainProducts);
  });
}

function getRelatedProductCustomers(product) {
  return customers.filter((customer) => {
    return customer.customerName.toLowerCase() === product.customerInterested.toLowerCase()
      || productMatchesText(product, customer.mainProductInterest);
  });
}

function getRelatedProductQuotations(product) {
  return quotations.filter((quotation) => productMatchesText(product, quotation.productSummary));
}

function getRelatedProductOrders(product) {
  return orders.filter((order) => productMatchesText(product, order.productsSummary));
}

function renderProductDetail(product) {
  const relatedSuppliers = getRelatedProductSuppliers(product);
  const relatedCustomers = getRelatedProductCustomers(product);
  const relatedQuotations = getRelatedProductQuotations(product);
  const relatedOrders = getRelatedProductOrders(product);
  productDetailTitle.textContent = product.productName;
  productDetail.innerHTML = `
    <div class="order-status-row">
      <span class="order-pill">${escapeHtml(product.category)}</span>
      <span class="order-pill">${escapeHtml(product.price || "No price")}</span>
      <span class="order-pill">${escapeHtml(product.moq || "No MOQ")}</span>
    </div>
    <div class="product-photo-placeholder">
      ${escapeHtml(product.photosPlaceholder || "Photos placeholder")}
    </div>
    <dl class="order-detail-grid">
      ${renderDetailField("Product", product.productName)}
      ${renderDetailField("Category", product.category)}
      ${renderDetailField("Keywords", product.keywords)}
      ${renderDetailField("Supplier", product.supplierName)}
      ${renderDetailField("Customer Interested", product.customerInterested)}
      ${renderDetailField("MOQ", product.moq)}
      ${renderDetailField("Unit", product.unit)}
      ${renderDetailField("Price", product.price)}
    </dl>
    <div class="detail-text-block">
      <strong>Notes</strong>
      <p>${escapeHtml(product.notes || "No notes yet.")}</p>
    </div>
    ${renderProductRelatedSection("Related Suppliers", relatedSuppliers.map((supplier) => `${supplier.supplierName} · ${supplier.productCategory || "No category"} · ${supplier.reliabilityRating || "Unknown"}`))}
    ${renderProductRelatedSection("Related Customers", relatedCustomers.map((customer) => `${customer.customerName} · ${customer.country || "No country"} · ${customer.mainProductInterest || "No interest"}`))}
    ${renderProductRelatedSection("Related Quotations", relatedQuotations.map((quotation) => `${quotation.quotationCode} · ${quotation.customerName} · ${quotation.status}`))}
    ${renderProductRelatedSection("Related Orders", relatedOrders.map((order) => `${order.orderCode} · ${order.orderName} · ${order.status}`))}
    <div class="detail-text-block">
      <strong>Timeline</strong>
      <div class="product-related-grid">
        ${renderProductTimeline(product)}
      </div>
    </div>
    <div class="order-detail-actions">
      <button class="open-link secondary" type="button" data-product-edit="${product.id}">Edit</button>
      <button class="danger-button" type="button" data-product-delete="${product.id}">Delete</button>
    </div>
  `;
}

function renderProductRelatedSection(title, items) {
  return `
    <div class="detail-text-block">
      <strong>${escapeHtml(title)}</strong>
      <div class="product-related-grid">
        ${items.length ? items.map((item) => `<p>${escapeHtml(item)}</p>`).join("") : '<p class="empty-state">No related records yet.</p>'}
      </div>
    </div>
  `;
}

function renderProductTimeline(product) {
  const timelineItems = [
    ...(product.timeline || []),
    {
      date: formatDateOnly(product.updatedAt),
      title: "Product updated",
      description: product.notes || "Product record was updated.",
      status: "Updated"
    }
  ].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  return timelineItems.map((item) => `
    <article class="order-timeline-item">
      <span>${escapeHtml(item.date)}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.status || "Note")}</small>
        <p>${escapeHtml(item.description)}</p>
      </div>
    </article>
  `).join("");
}

function renderProductCustomerOptions(selectedValue = "") {
  const existingProductCustomerNames = products.map((product) => product.customerInterested).filter(Boolean);
  const names = [...new Set([...customers.map((customer) => customer.customerName), ...existingProductCustomerNames])].sort();
  const selectedCustomerName = selectedValue || productCustomer.value;
  productCustomer.innerHTML = '<option value="">Select customer</option>' + names.map((name) => `
    <option value="${escapeHtml(name)}">${escapeHtml(name)}</option>
  `).join("");

  if (selectedCustomerName && names.includes(selectedCustomerName)) {
    productCustomer.value = selectedCustomerName;
  }
}

function renderProductCategoryOptions() {
  const categories = [...new Set([...productCategoryOptions, ...products.map((product) => product.category).filter(Boolean)])].sort();
  productCategoryOptionsList.innerHTML = categories.map((category) => `<option value="${escapeHtml(category)}"></option>`).join("");
}

function setupProductCenter() {
  productForm.addEventListener("submit", saveProductFromForm);
  resetProductForm.addEventListener("click", clearProductForm);
  [productSearchInput, productCategoryFilter, productSupplierFilter, productCustomerFilter].forEach((field) => {
    field.addEventListener("input", renderProducts);
    field.addEventListener("change", renderProducts);
  });

  productList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-product-id]");
    if (!card) {
      return;
    }

    selectProduct(card.dataset.productId);
  });

  productDetail.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-product-edit]");
    const deleteButton = event.target.closest("[data-product-delete]");

    if (editButton) {
      editProduct(editButton.dataset.productEdit);
    }

    if (deleteButton) {
      deleteProduct(deleteButton.dataset.productDelete);
    }
  });
}

function loadFinanceRecords() {
  const savedFinanceRecords = localStorage.getItem(storageKeys.financeRecords);
  if (!savedFinanceRecords) {
    financeRecords = financeSeedData.map(normalizeFinanceRecord);
    saveFinanceRecords();
    localStorage.setItem(storageKeys.financeRecordsSeededV1, "true");
    return;
  }

  try {
    const parsedFinanceRecords = JSON.parse(savedFinanceRecords);
    financeRecords = Array.isArray(parsedFinanceRecords) ? parsedFinanceRecords.map(normalizeFinanceRecord) : financeSeedData.map(normalizeFinanceRecord);
  } catch (error) {
    financeRecords = financeSeedData.map(normalizeFinanceRecord);
  }

  if (localStorage.getItem(storageKeys.financeRecordsSeededV1) !== "true") {
    const existingCodes = new Set(financeRecords.map((record) => record.financeCode.toLowerCase()));
    const missingSamples = financeSeedData
      .filter((record) => !existingCodes.has(record.financeCode.toLowerCase()))
      .map(normalizeFinanceRecord);
    financeRecords = [...missingSamples, ...financeRecords];
    localStorage.setItem(storageKeys.financeRecordsSeededV1, "true");
    saveFinanceRecords();
  }
}

function saveFinanceRecords() {
  localStorage.setItem(storageKeys.financeRecords, JSON.stringify(financeRecords));
}

function normalizeFinanceRecord(record) {
  const now = new Date().toISOString();
  return {
    id: record.id || `finance-${Date.now()}`,
    financeCode: record.financeCode || `FIN-${new Date().getFullYear()}-${Math.floor(Math.random() * 900 + 100)}`,
    type: record.type || "Customer Payment",
    customerName: record.customerName || "",
    supplierName: record.supplierName || "",
    relatedOrder: record.relatedOrder || "",
    amount: String(record.amount || ""),
    currency: record.currency || "USD",
    paymentStatus: record.paymentStatus || "Waiting",
    dueDate: record.dueDate || "",
    paidDate: record.paidDate || "",
    paymentMethod: record.paymentMethod || "",
    notes: record.notes || "",
    createdAt: record.createdAt || now,
    updatedAt: record.updatedAt || now,
    timeline: Array.isArray(record.timeline) ? record.timeline : []
  };
}

function getFinanceFormData() {
  const now = new Date().toISOString();
  const existingRecord = financeRecords.find((record) => record.id === financeId.value);

  return {
    id: financeId.value || `finance-${Date.now()}`,
    financeCode: financeCode.value.trim(),
    type: financeType.value,
    customerName: financeCustomer.value,
    supplierName: financeSupplier.value.trim(),
    relatedOrder: financeRelatedOrder.value,
    amount: financeAmount.value.trim(),
    currency: financeCurrency.value,
    paymentStatus: financePaymentStatus.value,
    dueDate: financeDueDate.value,
    paidDate: financePaidDate.value,
    paymentMethod: financePaymentMethod.value.trim(),
    notes: financeNotes.value.trim(),
    createdAt: existingRecord ? existingRecord.createdAt : now,
    updatedAt: now,
    timeline: existingRecord ? existingRecord.timeline : [{
      id: `finance-timeline-${Date.now()}`,
      date: now.slice(0, 10),
      title: "Finance record created",
      description: "Payment record was added to Finance Center.",
      status: "Created"
    }]
  };
}

function saveFinanceFromForm(event) {
  event.preventDefault();
  const record = getFinanceFormData();
  if (!record.financeCode || !record.type) {
    return;
  }

  const existingIndex = financeRecords.findIndex((item) => item.id === record.id);
  if (existingIndex >= 0) {
    financeRecords[existingIndex] = record;
  } else {
    financeRecords.unshift(record);
  }

  selectedFinanceId = record.id;
  saveFinanceRecords();
  renderFinanceDashboard();
  renderFinanceFilters();
  renderFinanceRecords();
  selectFinanceRecord(record.id);
  renderTodayDashboard();
  clearFinanceForm();
}

function clearFinanceForm() {
  financeForm.reset();
  financeId.value = "";
  renderFinanceCustomerOptions();
  renderFinanceOrderOptions();
  financeCurrency.value = "USD";
  financePaymentStatus.value = "Waiting";
  financeFormTitle.textContent = "New Finance Record";
}

function getFinanceFilterValues() {
  return {
    query: financeSearchInput.value.trim().toLowerCase(),
    type: financeTypeFilter.value,
    status: financeStatusFilter.value,
    customer: financeCustomerFilter.value,
    supplier: financeSupplierFilter.value
  };
}

function getFilteredFinanceRecords() {
  const filters = getFinanceFilterValues();
  return financeRecords.filter((record) => {
    const haystack = [
      record.financeCode,
      record.type,
      record.customerName,
      record.supplierName,
      record.relatedOrder,
      record.amount,
      record.currency,
      record.paymentStatus,
      record.dueDate,
      record.paidDate,
      record.paymentMethod,
      record.notes
    ].join(" ").toLowerCase();

    return (!filters.query || haystack.includes(filters.query))
      && (!filters.type || record.type === filters.type)
      && (!filters.status || record.paymentStatus === filters.status)
      && (!filters.customer || record.customerName === filters.customer)
      && (!filters.supplier || record.supplierName === filters.supplier);
  });
}

function getFinanceAmount(record) {
  const amount = Number(String(record.amount || "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(amount) ? amount : 0;
}

function formatFinanceMoney(record) {
  const amount = getFinanceAmount(record);
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  });
  return `${record.currency || "USD"} ${formatted}`;
}

function summarizeFinanceByCurrency(records) {
  const totals = records.reduce((summary, record) => {
    const currency = record.currency || "USD";
    summary[currency] = (summary[currency] || 0) + getFinanceAmount(record);
    return summary;
  }, {});
  const entries = Object.entries(totals);

  if (!entries.length) {
    return "0";
  }

  return entries.map(([currency, amount]) => `${currency} ${amount.toLocaleString("en-US", {
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  })}`).join(" + ");
}

function renderFinanceDashboard() {
  const activeRecords = financeRecords.filter((record) => record.paymentStatus !== "Cancelled");
  const receivables = activeRecords.filter((record) => record.type === "Customer Payment");
  const payables = activeRecords.filter((record) => ["Supplier Payment", "Expense", "Refund"].includes(record.type));
  const waiting = activeRecords.filter((record) => ["Waiting", "Partial", "Overdue"].includes(record.paymentStatus));
  const supplierPayments = activeRecords.filter((record) => record.type === "Supplier Payment");
  const deposits = activeRecords.filter((record) => record.type === "Customer Payment" && record.notes.toLowerCase().includes("deposit"));
  const balances = activeRecords.filter((record) => record.type === "Customer Payment" && record.notes.toLowerCase().includes("balance"));
  const metrics = [
    { label: "Total Receivables", value: summarizeFinanceByCurrency(receivables) },
    { label: "Total Payables", value: summarizeFinanceByCurrency(payables) },
    { label: "Payment Waiting", value: waiting.length },
    { label: "Supplier Payments", value: summarizeFinanceByCurrency(supplierPayments) },
    { label: "Customer Deposits", value: summarizeFinanceByCurrency(deposits) },
    { label: "Balance Payments", value: summarizeFinanceByCurrency(balances) }
  ];

  financeDashboard.innerHTML = metrics.map((metric) => `
    <article class="order-metric-card finance-metric-card">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
    </article>
  `).join("");
}

function renderFinanceFilters() {
  const selected = {
    type: financeTypeFilter.value,
    status: financeStatusFilter.value,
    customer: financeCustomerFilter.value,
    supplier: financeSupplierFilter.value
  };
  const customerNames = [...new Set(financeRecords.map((record) => record.customerName).filter(Boolean))].sort();
  const supplierNames = [...new Set(financeRecords.map((record) => record.supplierName).filter(Boolean))].sort();

  financeTypeFilter.innerHTML = '<option value="">All types</option>' + financeTypeOptions.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join("");
  financeStatusFilter.innerHTML = '<option value="">All statuses</option>' + financePaymentStatusOptions.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
  financeCustomerFilter.innerHTML = '<option value="">All customers</option>' + customerNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  financeSupplierFilter.innerHTML = '<option value="">All suppliers</option>' + supplierNames.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");

  financeTypeFilter.value = selected.type;
  financeStatusFilter.value = selected.status;
  financeCustomerFilter.value = selected.customer;
  financeSupplierFilter.value = selected.supplier;
}

function renderFinanceRecords() {
  const filteredRecords = getFilteredFinanceRecords();

  if (!filteredRecords.length) {
    financeList.innerHTML = '<p class="empty-state">No finance records found.</p>';
    financeDetailTitle.textContent = "Select a finance record";
    financeDetail.innerHTML = '<p class="empty-state">Create a finance record or adjust the filters.</p>';
    return;
  }

  if (!selectedFinanceId || !filteredRecords.some((record) => record.id === selectedFinanceId)) {
    selectedFinanceId = filteredRecords[0].id;
  }

  financeList.innerHTML = filteredRecords.map((record) => `
    <button class="finance-list-card ${record.id === selectedFinanceId ? "active" : ""}" type="button" data-finance-id="${record.id}">
      <h3>${escapeHtml(record.financeCode)}</h3>
      <p>${escapeHtml(record.type)} · ${escapeHtml(record.customerName || "No customer")}</p>
      <p>${escapeHtml(record.relatedOrder || "No order")} · ${escapeHtml(formatFinanceMoney(record))}</p>
      <div class="order-list-meta">
        <span class="order-pill status-${escapeHtml(record.paymentStatus.toLowerCase())}">${escapeHtml(record.paymentStatus)}</span>
        <span class="order-pill">${escapeHtml(record.dueDate || "No due date")}</span>
        <span class="order-pill">${escapeHtml(record.paymentMethod || "No method")}</span>
      </div>
    </button>
  `).join("");
}

function selectFinanceRecord(id) {
  const record = financeRecords.find((item) => item.id === id);
  if (!record) {
    return;
  }

  selectedFinanceId = id;
  renderFinanceRecords();
  renderFinanceDetail(record);
}

function editFinanceRecord(id) {
  const record = financeRecords.find((item) => item.id === id);
  if (!record) {
    return;
  }

  financeId.value = record.id;
  financeCode.value = record.financeCode;
  financeType.value = record.type;
  renderFinanceCustomerOptions(record.customerName);
  financeCustomer.value = record.customerName;
  financeSupplier.value = record.supplierName;
  renderFinanceOrderOptions(record.relatedOrder);
  financeRelatedOrder.value = record.relatedOrder;
  financeAmount.value = record.amount;
  financeCurrency.value = record.currency;
  financePaymentStatus.value = record.paymentStatus;
  financeDueDate.value = record.dueDate;
  financePaidDate.value = record.paidDate;
  financePaymentMethod.value = record.paymentMethod;
  financeNotes.value = record.notes;
  financeFormTitle.textContent = "Edit Finance Record";
  financeCode.focus();
}

function deleteFinanceRecord(id) {
  const record = financeRecords.find((item) => item.id === id);
  if (!record) {
    return;
  }

  const confirmed = window.confirm(`Delete finance record "${record.financeCode}"? Related records will stay safe.`);
  if (!confirmed) {
    return;
  }

  financeRecords = financeRecords.filter((item) => item.id !== id);
  selectedFinanceId = financeRecords[0]?.id || "";
  saveFinanceRecords();
  renderFinanceDashboard();
  renderFinanceFilters();
  renderFinanceRecords();
  renderTodayDashboard();
  clearFinanceForm();

  if (selectedFinanceId) {
    selectFinanceRecord(selectedFinanceId);
  } else {
    financeDetailTitle.textContent = "Select a finance record";
    financeDetail.innerHTML = '<p class="empty-state">Create a finance record to view details.</p>';
  }
}

function getRelatedFinanceOrder(record) {
  return orders.find((order) => order.orderCode === record.relatedOrder || order.id === record.relatedOrder);
}

function renderFinanceDetail(record) {
  const relatedOrder = getRelatedFinanceOrder(record);
  financeDetailTitle.textContent = record.financeCode;
  financeDetail.innerHTML = `
    <div class="order-status-row">
      <span class="order-pill">${escapeHtml(record.type)}</span>
      <span class="order-pill status-${escapeHtml(record.paymentStatus.toLowerCase())}">${escapeHtml(record.paymentStatus)}</span>
      <span class="order-pill">${escapeHtml(formatFinanceMoney(record))}</span>
    </div>
    <dl class="order-detail-grid">
      ${renderDetailField("Record ID", record.financeCode)}
      ${renderDetailField("Type", record.type)}
      ${renderDetailField("Related Customer", record.customerName)}
      ${renderDetailField("Related Supplier", record.supplierName)}
      ${renderDetailField("Related Order", record.relatedOrder)}
      ${renderDetailField("Amount", formatFinanceMoney(record))}
      ${renderDetailField("Payment Status", record.paymentStatus)}
      ${renderDetailField("Due Date", record.dueDate)}
      ${renderDetailField("Paid Date", record.paidDate)}
      ${renderDetailField("Payment Method", record.paymentMethod)}
    </dl>
    <div class="detail-text-block">
      <strong>Related Order</strong>
      ${relatedOrder ? `<p>${escapeHtml(relatedOrder.orderCode)} · ${escapeHtml(relatedOrder.orderName)} · ${escapeHtml(relatedOrder.status)}</p>` : '<p class="empty-state">No related order found yet.</p>'}
    </div>
    <div class="detail-text-block">
      <strong>Timeline</strong>
      <div class="finance-timeline">
        ${renderFinanceTimeline(record)}
      </div>
    </div>
    <div class="detail-text-block">
      <strong>Notes</strong>
      <p>${escapeHtml(record.notes || "No notes yet.")}</p>
    </div>
    <div class="order-detail-actions">
      <button class="open-link secondary" type="button" data-finance-edit="${record.id}">Edit</button>
      <button class="danger-button" type="button" data-finance-delete="${record.id}">Delete</button>
    </div>
  `;
}

function renderFinanceTimeline(record) {
  const timelineItems = [
    ...(record.timeline || []),
    {
      date: formatDateOnly(record.createdAt),
      title: "Record created",
      description: `${record.type} record was added to Finance Center.`,
      status: "Created"
    },
    {
      date: record.dueDate || "No due date",
      title: "Payment due",
      description: record.dueDate ? `${record.financeCode} is due on ${record.dueDate}.` : "No due date has been set.",
      status: "Due"
    },
    {
      date: record.paidDate || formatDateOnly(record.updatedAt),
      title: `Current status: ${record.paymentStatus}`,
      description: record.paidDate ? `Payment marked paid on ${record.paidDate}.` : (record.notes || "No payment note yet."),
      status: record.paymentStatus
    }
  ].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  return timelineItems.map((item) => `
    <article class="order-timeline-item">
      <span>${escapeHtml(item.date)}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.status || "Note")}</small>
        <p>${escapeHtml(item.description)}</p>
      </div>
    </article>
  `).join("");
}

function renderFinanceCustomerOptions(selectedValue = "") {
  const existingFinanceCustomerNames = financeRecords.map((record) => record.customerName).filter(Boolean);
  const names = [...new Set([...customers.map((customer) => customer.customerName), ...existingFinanceCustomerNames])].sort();
  const selectedCustomerName = selectedValue || financeCustomer.value;
  financeCustomer.innerHTML = '<option value="">Select customer</option>' + names.map((name) => `
    <option value="${escapeHtml(name)}">${escapeHtml(name)}</option>
  `).join("");

  if (selectedCustomerName && names.includes(selectedCustomerName)) {
    financeCustomer.value = selectedCustomerName;
  }
}

function renderFinanceOrderOptions(selectedValue = "") {
  const existingFinanceOrders = financeRecords.map((record) => record.relatedOrder).filter(Boolean);
  const orderCodes = [...new Set([...orders.map((order) => order.orderCode), ...existingFinanceOrders])].sort();
  const selectedOrder = selectedValue || financeRelatedOrder.value;
  financeRelatedOrder.innerHTML = '<option value="">Select order</option>' + orderCodes.map((code) => `
    <option value="${escapeHtml(code)}">${escapeHtml(code)}</option>
  `).join("");

  if (selectedOrder && orderCodes.includes(selectedOrder)) {
    financeRelatedOrder.value = selectedOrder;
  }
}

function setupFinanceCenter() {
  financeForm.addEventListener("submit", saveFinanceFromForm);
  resetFinanceForm.addEventListener("click", clearFinanceForm);
  [financeSearchInput, financeTypeFilter, financeStatusFilter, financeCustomerFilter, financeSupplierFilter].forEach((field) => {
    field.addEventListener("input", renderFinanceRecords);
    field.addEventListener("change", renderFinanceRecords);
  });

  financeList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-finance-id]");
    if (!card) {
      return;
    }

    selectFinanceRecord(card.dataset.financeId);
  });

  financeDetail.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-finance-edit]");
    const deleteButton = event.target.closest("[data-finance-delete]");

    if (editButton) {
      editFinanceRecord(editButton.dataset.financeEdit);
    }

    if (deleteButton) {
      deleteFinanceRecord(deleteButton.dataset.financeDelete);
    }
  });
}

function setupEditableLists() {
  document.querySelectorAll("[data-list-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const listName = form.dataset.listForm;
      const input = form.querySelector("input");
      const text = input.value.trim();

      if (!text) {
        return;
      }

      addListItem(listName, text);
      input.value = "";
      input.focus();
    });
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) {
      return;
    }

    const listName = button.dataset.listName;
    const id = button.dataset.id;

    if (button.dataset.action === "edit") {
      editListItem(listName, id);
    }

    if (button.dataset.action === "delete") {
      deleteListItem(listName, id);
    }
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSearchRecords() {
  const moduleRecords = searchModules.map((module) => ({
    name: module.name,
    items: module.items.map((item) => ({ ...item, source: "static" }))
  }));

  const todayModule = moduleRecords.find((module) => module.name === "Today");
  if (todayModule) {
    if (contentPlan.value.trim()) {
      todayModule.items.push({
        title: contentPlan.value.trim(),
        type: "Content Plan",
        description: "Saved as today's video or post idea.",
        page: "today"
      });
    }
    if (dinnerPlan.value.trim()) {
      todayModule.items.push({
        title: dinnerPlan.value.trim(),
        type: "Dinner",
        description: "Saved as today's dinner.",
        page: "today"
      });
    }
    [
      { label: "Sleep Reminder", value: sonSleep.value },
      { label: "Exercise Reminder", value: sonExercise.value },
      { label: "Meal Reminder", value: sonMeal.value }
    ].forEach((reminder) => {
      if (reminder.value.trim()) {
        todayModule.items.push({
          title: reminder.value.trim(),
          type: reminder.label,
          description: "Saved in Son Reminder.",
          page: "today"
        });
      }
    });
    editableLists.focusTasks.forEach((item) => {
      todayModule.items.push({
        title: item.text,
        type: "Focus Task",
        description: "Saved in Today's Focus.",
        page: "today"
      });
    });
    editableLists.peopleWaiting.forEach((item) => {
      todayModule.items.push({
        title: item.text,
        type: "Person Waiting",
        description: "Saved in People Waiting.",
        page: "today"
      });
    });
    editableLists.urgentItems.forEach((item) => {
      todayModule.items.push({
        title: item.text,
        type: "Urgent Note",
        description: "Saved in Urgent Items.",
        page: "today"
      });
    });
  }

  return moduleRecords;
}

function appendOrderSearchRecords(moduleRecords) {
  const orderModule = moduleRecords.find((module) => module.name === "Orders") || moduleRecords.find((module) => module.name === "Moer OS Modules");
  if (!orderModule) {
    return;
  }

  orders.forEach((order) => {
    orderModule.items.push({
      title: `${order.orderCode} ${order.orderName}`,
      type: "Order",
      description: `${order.customerName} · ${order.supplierName || "No supplier"} · ${order.status} · ${order.nextAction || "No next action"}`,
      page: "order-center",
      recordType: "order",
      recordId: order.id
    });
  });
}

function appendCustomerSearchRecords(moduleRecords) {
  const customerModule = moduleRecords.find((module) => module.name === "Customers");
  if (!customerModule) {
    return;
  }

  customers.forEach((customer) => {
    customerModule.items.push({
      title: customer.customerName,
      type: "Customer",
      description: `${customer.country || "No country"} · ${customer.mainProductInterest || "No product interest"} · ${customer.nextAction || "No next action"}`,
      page: "customer-center",
      recordType: "customer",
      recordId: customer.id
    });
  });
}

function appendSupplierSearchRecords(moduleRecords) {
  const supplierModule = moduleRecords.find((module) => module.name === "Suppliers");
  if (!supplierModule) {
    return;
  }

  suppliers.forEach((supplier) => {
    supplierModule.items.push({
      title: supplier.supplierName,
      type: "Supplier",
      description: `${supplier.productCategory || "No category"} · ${supplier.city || "No city"} · ${supplier.reliabilityRating || "Unknown"} · ${supplier.nextAction || "No next action"}`,
      page: "supplier-center",
      recordType: "supplier",
      recordId: supplier.id
    });
  });
}

function appendQuotationSearchRecords(moduleRecords) {
  const quotationModule = moduleRecords.find((module) => module.name === "Quotations");
  if (!quotationModule) {
    return;
  }

  quotations.forEach((quotation) => {
    quotationModule.items.push({
      title: `${quotation.quotationCode} ${quotation.customerName}`,
      type: "Quotation",
      description: `${quotation.productSummary || "No product summary"} · ${quotation.currency} ${quotation.totalAmount || "0"} · ${quotation.status} · ${quotation.nextAction || "No next action"}`,
      page: "quotation-center",
      recordType: "quotation",
      recordId: quotation.id
    });
  });
}

function appendShipmentSearchRecords(moduleRecords) {
  const shipmentModule = moduleRecords.find((module) => module.name === "Shipments");
  if (!shipmentModule) {
    return;
  }

  shipments.forEach((shipment) => {
    shipmentModule.items.push({
      title: `${shipment.shipmentCode} ${shipment.customerName}`,
      type: "Shipment",
      description: `${shipment.pol || "No POL"} to ${shipment.pod || "No POD"} · ${shipment.status} · ${shipment.documentsStatus} · ${shipment.nextAction || "No next action"}`,
      page: "shipment-center",
      recordType: "shipment",
      recordId: shipment.id
    });
  });
}

function appendProductSearchRecords(moduleRecords) {
  const productModule = moduleRecords.find((module) => module.name === "Products");
  if (!productModule) {
    return;
  }

  products.forEach((product) => {
    productModule.items.push({
      title: product.productName,
      type: "Product",
      description: `${product.category || "No category"} · ${product.supplierName || "No supplier"} · ${product.customerInterested || "No customer"} · ${product.price || "No price"}`,
      page: "product-center",
      recordType: "product",
      recordId: product.id
    });
  });
}

function appendFinanceSearchRecords(moduleRecords) {
  const financeModule = moduleRecords.find((module) => module.name === "Finance");
  if (!financeModule) {
    return;
  }

  financeRecords.forEach((record) => {
    financeModule.items.push({
      title: `${record.financeCode} ${record.type}`,
      type: "Finance",
      description: `${record.customerName || "No customer"} · ${record.supplierName || "No supplier"} · ${record.relatedOrder || "No order"} · ${formatFinanceMoney(record)} · ${record.paymentStatus}`,
      page: "finance-center",
      recordType: "finance",
      recordId: record.id
    });
  });
}

function ensureSearchModule(moduleRecords, name) {
  let module = moduleRecords.find((item) => item.name === name);
  if (!module) {
    module = { name, items: [] };
    moduleRecords.push(module);
  }
  return module;
}

function appendKnowledgeSearchRecords(moduleRecords) {
  const knowledgeModule = ensureSearchModule(moduleRecords, "Knowledge");
  [
    { title: "Moer Sourcing services", type: "Knowledge", description: "Product sourcing, supplier communication, samples, order follow-up, inspection, consolidation, shipping, and Yiwu Market guide.", page: "knowledge-center" },
    { title: "Ideal customer profiles", type: "Knowledge", description: "Caribbean, African, North American, European, and first-time importers who need reliable sourcing support.", page: "knowledge-center" },
    { title: "Moer advantages", type: "Knowledge", description: "Yiwu location, practical sourcing experience, transparent communication, one-stop support, and long-term relationships.", page: "knowledge-center" },
    { title: "Content and video strategy", type: "Knowledge", description: "Build trust with practical sourcing education, market visits, supplier visits, container loading, and customer questions.", page: "knowledge-center" },
    { title: "Business goals 2026", type: "Knowledge", description: "SEO, content marketing, customer relationship systems, automation, Africa market development, and personal brand.", page: "knowledge-center" }
  ].forEach((item) => knowledgeModule.items.push(item));
}

function getQuickCommandPage(query) {
  const command = normalizeSearchText(query);
  const commandPages = {
    today: "today",
    orders: "order-center",
    customers: "customer-center",
    shipments: "shipment-center",
    payments: "finance-center",
    products: "product-center",
    suppliers: "supplier-center"
  };
  return commandPages[command] || "";
}

function normalizeSearchText(value) {
  return value.toLowerCase().trim();
}

function scoreFuzzyMatch(query, text) {
  const normalizedQuery = normalizeSearchText(query);
  const normalizedText = normalizeSearchText(text);

  if (!normalizedQuery) {
    return 1;
  }

  if (normalizedText.includes(normalizedQuery)) {
    return 100 - normalizedText.indexOf(normalizedQuery);
  }

  let queryIndex = 0;
  let score = 0;

  for (let textIndex = 0; textIndex < normalizedText.length; textIndex += 1) {
    if (normalizedText[textIndex] === normalizedQuery[queryIndex]) {
      queryIndex += 1;
      score += 5;
    }

    if (queryIndex === normalizedQuery.length) {
      return score;
    }
  }

  return 0;
}

function searchItems(query) {
  const records = getSearchRecords();
  ensureSearchModule(records, "Orders");
  appendOrderSearchRecords(records);
  appendCustomerSearchRecords(records);
  appendSupplierSearchRecords(records);
  appendQuotationSearchRecords(records);
  appendShipmentSearchRecords(records);
  appendProductSearchRecords(records);
  appendFinanceSearchRecords(records);
  appendKnowledgeSearchRecords(records);
  const quickPage = getQuickCommandPage(query);

  return records.map((module) => {
    const results = module.items
      .map((item) => {
        const searchText = `${module.name} ${item.title} ${item.type} ${item.description}`;
        const quickScore = quickPage && item.page === quickPage ? 500 : 0;
        return {
          ...item,
          module: module.name,
          score: quickScore || scoreFuzzyMatch(query, searchText)
        };
      })
      .filter((item) => item.score > 0)
      .sort((first, second) => second.score - first.score);

    return {
      name: module.name,
      results
    };
  }).filter((module) => module.results.length > 0);
}

function getResultButtonAttributes(item) {
  const attributes = [];
  if (item.href) {
    attributes.push(`data-result-href="${escapeHtml(item.href)}"`);
  } else if (item.page) {
    attributes.push(`data-result-page="${escapeHtml(item.page)}"`);
  }
  if (item.recordType) {
    attributes.push(`data-result-record-type="${escapeHtml(item.recordType)}"`);
  }
  if (item.recordId) {
    attributes.push(`data-result-record-id="${escapeHtml(item.recordId)}"`);
  }
  return attributes.join(" ");
}

function renderGroupedSearchResults(query, targetElement, emptyMessage = "No results found.") {
  const groupedResults = searchItems(query);

  if (!groupedResults.length) {
    targetElement.innerHTML = `<p class="no-results">${escapeHtml(emptyMessage)}</p>`;
    return;
  }

  targetElement.innerHTML = groupedResults.map((group) => `
    <section class="result-group">
      <p class="result-group-title">${escapeHtml(group.name)}</p>
      <div class="result-list">
        ${group.results.map((item) => `
          <button class="result-item" type="button" ${getResultButtonAttributes(item)}>
            <p class="result-title">
              <span>${escapeHtml(item.title)}</span>
              <span class="result-type">${escapeHtml(item.type)}</span>
            </p>
            <p class="result-description">${escapeHtml(item.description)}</p>
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderSearchResults(query) {
  renderGroupedSearchResults(query, commandResults);
}

function openSearchResult(result) {
  if (!result) {
    return;
  }

  if (result.dataset.resultHref) {
    window.location.href = result.dataset.resultHref;
    return;
  }

  const page = result.dataset.resultPage;
  const recordType = result.dataset.resultRecordType;
  const recordId = result.dataset.resultRecordId;

  if (page) {
    openInternalPage(page);
  }

  if (!recordType || !recordId) {
    return;
  }

  if (recordType === "order") {
    selectOrder(recordId);
  }
  if (recordType === "customer") {
    selectCustomer(recordId);
  }
  if (recordType === "supplier") {
    selectSupplier(recordId);
  }
  if (recordType === "quotation") {
    selectQuotation(recordId);
  }
  if (recordType === "shipment") {
    selectShipment(recordId);
  }
  if (recordType === "product") {
    selectProduct(recordId);
  }
  if (recordType === "finance") {
    selectFinanceRecord(recordId);
  }
}

function setupCommandPalette() {
  searchTrigger.addEventListener("click", () => {
    openInternalPage("ai-command-center");
    window.setTimeout(() => aiCommandInput.focus(), 0);
  });
  mobileSearchTrigger.addEventListener("click", openCommandPalette);

  commandSearchInput.addEventListener("input", () => {
    renderSearchResults(commandSearchInput.value);
  });

  commandOverlay.addEventListener("click", (event) => {
    if (event.target === commandOverlay) {
      closeCommandPalette();
    }
  });

  commandResults.addEventListener("click", (event) => {
    const result = event.target.closest("[data-result-page], [data-result-href]");
    if (!result) {
      return;
    }

    openSearchResult(result);
    closeCommandPalette();
  });

  document.addEventListener("keydown", (event) => {
    const isSearchShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

    if (isSearchShortcut) {
      event.preventDefault();
      openCommandPalette();
      return;
    }

    if (event.key === "Escape" && commandOverlay.classList.contains("open")) {
      closeCommandPalette();
    }
  });
}

function renderAiCommandResults(query = "") {
  renderGroupedSearchResults(query, aiCommandResults, "No local records found.");
}

function setupAiCommandCenter() {
  aiCommandInput.addEventListener("input", () => {
    renderAiCommandResults(aiCommandInput.value);
  });

  document.querySelectorAll("[data-ai-command]").forEach((button) => {
    button.addEventListener("click", () => {
      aiCommandInput.value = button.dataset.aiCommand;
      renderAiCommandResults(aiCommandInput.value);
      aiCommandInput.focus();
    });
  });

  aiCommandResults.addEventListener("click", (event) => {
    const result = event.target.closest("[data-result-page], [data-result-href]");
    if (!result) {
      return;
    }

    openSearchResult(result);
  });
}

function buildCards() {
  document.querySelectorAll("[data-card-list]").forEach((grid) => {
    const names = grid.dataset.cardList.split(",");
    grid.innerHTML = names.map((name) => `
      <article class="app-card">
        <div>
          <p class="card-label">Module</p>
          <h2>${name.trim()}</h2>
        </div>
        <p class="status-pill">V1 placeholder</p>
      </article>
    `).join("");
  });
}

function getStatusClass(status) {
  const normalized = status.toLowerCase();
  if (normalized === "ready") {
    return "status-ready";
  }
  if (normalized === "prototype") {
    return "status-prototype";
  }
  if (normalized === "planned") {
    return "status-planned";
  }
  return "status-architecture";
}

function renderModuleCard(module) {
  const action = module.href
    ? `<a class="open-link" href="${module.href}">Open</a>`
    : `<button class="open-link secondary" type="button" data-open-page="${module.internalPage}">Open</button>`;

  return `
    <article class="module-card">
      <div class="module-card-header">
        <p class="card-label">Module</p>
        <h2>${escapeHtml(module.name)}</h2>
        <p>${escapeHtml(module.purpose)}</p>
      </div>
      <div class="module-card-footer">
        <span class="status-pill ${getStatusClass(module.status)}">${escapeHtml(module.status)}</span>
        ${action}
      </div>
    </article>
  `;
}

function renderPortalModules() {
  document.querySelectorAll("[data-module-section]").forEach((container) => {
    const section = container.dataset.moduleSection;
    const modules = portalModules.filter((module) => module.section === section || (section === "today" && module.id !== "today" && module.showOnToday !== false));
    container.innerHTML = modules.map(renderModuleCard).join("");
  });
}

function setupPortalCards() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-page]");
    if (!button) {
      return;
    }

    openInternalPage(button.dataset.openPage);
  });
}

function openNewCenterRecord(pageId, resetHandler, focusField) {
  openInternalPage(pageId);
  if (resetHandler) {
    resetHandler();
  }
  if (focusField) {
    window.setTimeout(() => focusField.focus(), 0);
  }
}

function setupTodayDashboardActions() {
  document.addEventListener("click", (event) => {
    const dashboardItem = event.target.closest(".today-overview-item[data-page]");
    if (dashboardItem) {
      openInternalPage(dashboardItem.dataset.page);
      return;
    }

    const actionButton = event.target.closest("[data-quick-action]");
    if (!actionButton) {
      return;
    }

    const action = actionButton.dataset.quickAction;
    if (action === "new-order") {
      openNewCenterRecord("order-center", clearOrderForm, orderName);
    }
    if (action === "new-customer") {
      openNewCenterRecord("customer-center", clearCustomerForm, customerName);
    }
    if (action === "new-supplier") {
      openNewCenterRecord("supplier-center", clearSupplierForm, supplierName);
    }
    if (action === "new-quotation") {
      openNewCenterRecord("quotation-center", clearQuotationForm, quotationCode);
    }
    if (action === "new-shipment") {
      openNewCenterRecord("shipment-center", clearShipmentForm, shipmentCode);
    }
    if (action === "new-finance") {
      openNewCenterRecord("finance-center", clearFinanceForm, financeCode);
    }
    if (action === "search-knowledge") {
      openCommandPalette();
      commandSearchInput.value = "knowledge";
      renderSearchResults("knowledge");
    }
  });
}

function init() {
  buildCards();
  renderPortalModules();
  loadEditableLists();
  loadCustomers();
  loadSuppliers();
  loadOrders();
  loadQuotations();
  loadShipments();
  loadProducts();
  loadFinanceRecords();
  setupEditableLists();
  setupOrderCenter();
  setupCustomerCenter();
  setupSupplierCenter();
  setupQuotationCenter();
  setupShipmentCenter();
  setupProductCenter();
  setupFinanceCenter();
  setupPortalCards();
  setupTodayDashboardActions();
  setupCommandPalette();
  setupAiCommandCenter();
  renderAllEditableLists();
  renderCustomerDashboard();
  renderCustomerFilters();
  renderCustomerFollowups();
  renderCustomers();
  renderOrderCustomerOptions();
  renderSupplierDashboard();
  renderSupplierFilters();
  renderSuppliers();
  renderOrderSupplierOptions();
  renderQuotationDashboard();
  renderQuotationFilters();
  renderQuotations();
  renderQuotationCustomerOptions();
  renderShipmentDashboard();
  renderShipmentFilters();
  renderShipments();
  renderShipmentCustomerOptions();
  renderShipmentOrderOptions();
  renderProductDashboard();
  renderProductFilters();
  renderProducts();
  renderProductCustomerOptions();
  renderProductCategoryOptions();
  renderFinanceDashboard();
  renderFinanceFilters();
  renderFinanceRecords();
  renderFinanceCustomerOptions();
  renderFinanceOrderOptions();
  renderAiCommandResults("");
  renderOrderDashboard();
  renderOrderFilters();
  renderOrders();
  clearOrderForm();
  clearQuotationForm();
  clearShipmentForm();
  clearProductForm();
  clearFinanceForm();

  if (orders.length) {
    selectOrder(orders[0].id);
  }

  if (customers.length) {
    selectCustomer(customers[0].id);
  }

  if (suppliers.length) {
    selectSupplier(suppliers[0].id);
  }

  if (quotations.length) {
    selectQuotation(quotations[0].id);
  }

  if (shipments.length) {
    selectShipment(shipments[0].id);
  }

  if (products.length) {
    selectProduct(products[0].id);
  }

  if (financeRecords.length) {
    selectFinanceRecord(financeRecords[0].id);
  }

  restoreField(userName, storageKeys.userName);
  restoreField(companyName, storageKeys.companyName);
  restoreField(themeOption, storageKeys.themeOption);
  restoreField(contentPlan, storageKeys.contentPlan);
  restoreField(dinnerPlan, storageKeys.dinnerPlan);
  restoreField(sonSleep, storageKeys.sonSleep);
  restoreField(sonExercise, storageKeys.sonExercise);
  restoreField(sonMeal, storageKeys.sonMeal);
  renderTodayDashboard();

  saveField(userName, storageKeys.userName, setGreeting);
  saveField(companyName, storageKeys.companyName);
  saveField(themeOption, storageKeys.themeOption);
  saveField(contentPlan, storageKeys.contentPlan);
  saveField(dinnerPlan, storageKeys.dinnerPlan, renderTodayDashboard);
  saveField(sonSleep, storageKeys.sonSleep, renderTodayDashboard);
  saveField(sonExercise, storageKeys.sonExercise, renderTodayDashboard);
  saveField(sonMeal, storageKeys.sonMeal, renderTodayDashboard);

  pageButtons.forEach((button) => {
    button.addEventListener("click", () => showPage(button.dataset.page));
  });

  setDate();
  setGreeting();
}

init();
