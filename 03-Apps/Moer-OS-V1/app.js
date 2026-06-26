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
  ordersSeededV1: "moerOS.ordersSeededV1",
  customersSeededV2: "moerOS.customersSeededV2"
};

const orderStatusOptions = ["New Inquiry", "Quoting", "Waiting Supplier", "Waiting Customer", "Order Confirmed", "In Production", "Inspection", "In Warehouse", "Shipping", "Delivered", "On Hold"];
const orderPriorityOptions = ["Normal", "High", "Urgent", "Low"];
const customerStatusOptions = ["Lead", "Active", "Waiting Reply", "Follow Up", "Paused"];
const customerPriorityOptions = ["Normal", "High", "Urgent", "Low"];
const customerTypeOptions = ["Importer", "Wholesaler", "Distributor", "Retailer", "Amazon Seller", "E-commerce Seller", "Supermarket Buyer"];

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
      { title: "Stationery supplier", type: "Supplier", description: "Mock supplier record for school and office products.", page: "order-center" },
      { title: "Daily-use products supplier", type: "Supplier", description: "Mock supplier record for mixed container sourcing.", page: "order-center" },
      { title: "Packaging factory", type: "Supplier", description: "Mock supplier record for private label and packaging support.", page: "order-center" }
    ]
  },
  {
    name: "Quotations",
    items: [
      { title: "Mixed container quotation", type: "Quote", description: "Mock quotation for multiple product categories in one shipment.", page: "order-center" },
      { title: "Sample cost quotation", type: "Quote", description: "Mock quotation for sample arrangement and courier fee.", page: "order-center" },
      { title: "Inspection service quotation", type: "Quote", description: "Mock quotation for product checking before shipment.", page: "order-center" }
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
  selectOrder(order.id);
  refreshSelectedCustomerDetail();
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
  refreshSelectedCustomerDetail();
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
  loadOrders();
  setupEditableLists();
  setupOrderCenter();
  setupCustomerCenter();
  setupPortalCards();
  setupCommandPalette();
  renderAllEditableLists();
  renderCustomerDashboard();
  renderCustomerFilters();
  renderCustomerFollowups();
  renderCustomers();
  renderOrderCustomerOptions();
  renderOrderDashboard();
  renderOrderFilters();
  renderOrders();
  clearOrderForm();

  if (orders.length) {
    selectOrder(orders[0].id);
  }

  if (customers.length) {
    selectCustomer(customers[0].id);
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
