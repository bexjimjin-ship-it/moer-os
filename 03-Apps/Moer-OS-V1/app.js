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
  ordersSeededV1: "moerOS.ordersSeededV1",
  customersSeededV2: "moerOS.customersSeededV2",
  suppliersSeededV1: "moerOS.suppliersSeededV1",
  quotationsSeededV1: "moerOS.quotationsSeededV1"
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
const greeting = document.querySelector("#greeting");
const searchTrigger = document.querySelector("#searchTrigger");
const mobileSearchTrigger = document.querySelector("#mobileSearchTrigger");
const commandOverlay = document.querySelector("#commandOverlay");
const commandSearchInput = document.querySelector("#commandSearchInput");
const commandResults = document.querySelector("#commandResults");
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
  selectOrder(order.id);
  refreshSelectedCustomerDetail();
  refreshSelectedSupplierDetail();
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
  refreshSelectedCustomerDetail();
  refreshSelectedSupplierDetail();
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
  renderQuotationFilters();
  selectCustomer(customer.id);
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
  renderQuotationFilters();
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
  selectSupplier(supplier.id);
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
  const names = [...new Set([...suppliers.map((supplier) => supplier.supplierName), ...existingOrderSupplierNames, ...existingQuotationSupplierNames])].sort();
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
    items: [...module.items]
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
  const orderModule = moduleRecords.find((module) => module.name === "Moer OS Modules");
  if (!orderModule) {
    return;
  }

  orders.forEach((order) => {
    orderModule.items.push({
      title: `${order.orderCode} ${order.orderName}`,
      type: "Order",
      description: `${order.customerName} · ${order.supplierName || "No supplier"} · ${order.status} · ${order.nextAction || "No next action"}`,
      page: "order-center"
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
      page: "customer-center"
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
      page: "supplier-center"
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
      page: "quotation-center"
    });
  });
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
  appendOrderSearchRecords(records);
  appendCustomerSearchRecords(records);
  appendSupplierSearchRecords(records);
  appendQuotationSearchRecords(records);

  return records.map((module) => {
    const results = module.items
      .map((item) => {
        const searchText = `${module.name} ${item.title} ${item.type} ${item.description}`;
        return {
          ...item,
          score: scoreFuzzyMatch(query, searchText)
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

function renderSearchResults(query) {
  const groupedResults = searchItems(query);

  if (!groupedResults.length) {
    commandResults.innerHTML = '<p class="no-results">No results found.</p>';
    return;
  }

  commandResults.innerHTML = groupedResults.map((group) => `
    <section class="result-group">
      <p class="result-group-title">${escapeHtml(group.name)}</p>
      <div class="result-list">
        ${group.results.map((item) => `
          <button class="result-item" type="button" ${item.href ? `data-result-href="${item.href}"` : `data-result-page="${item.page}"`}>
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

function setupCommandPalette() {
  searchTrigger.addEventListener("click", openCommandPalette);
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

    if (result.dataset.resultHref) {
      window.location.href = result.dataset.resultHref;
    } else {
      showPage(result.dataset.resultPage);
    }
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

function init() {
  buildCards();
  renderPortalModules();
  loadEditableLists();
  loadCustomers();
  loadSuppliers();
  loadOrders();
  loadQuotations();
  setupEditableLists();
  setupOrderCenter();
  setupCustomerCenter();
  setupSupplierCenter();
  setupQuotationCenter();
  setupPortalCards();
  setupCommandPalette();
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
  renderOrderDashboard();
  renderOrderFilters();
  renderOrders();
  clearOrderForm();
  clearQuotationForm();

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

  restoreField(userName, storageKeys.userName);
  restoreField(companyName, storageKeys.companyName);
  restoreField(themeOption, storageKeys.themeOption);
  restoreField(contentPlan, storageKeys.contentPlan);
  restoreField(dinnerPlan, storageKeys.dinnerPlan);
  restoreField(sonSleep, storageKeys.sonSleep);
  restoreField(sonExercise, storageKeys.sonExercise);
  restoreField(sonMeal, storageKeys.sonMeal);

  saveField(userName, storageKeys.userName, setGreeting);
  saveField(companyName, storageKeys.companyName);
  saveField(themeOption, storageKeys.themeOption);
  saveField(contentPlan, storageKeys.contentPlan);
  saveField(dinnerPlan, storageKeys.dinnerPlan);
  saveField(sonSleep, storageKeys.sonSleep);
  saveField(sonExercise, storageKeys.sonExercise);
  saveField(sonMeal, storageKeys.sonMeal);

  pageButtons.forEach((button) => {
    button.addEventListener("click", () => showPage(button.dataset.page));
  });

  setDate();
  setGreeting();
}

init();
