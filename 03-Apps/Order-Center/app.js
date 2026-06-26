const storageKey = "moerOS.orderCenter.v1.orders";

const statuses = [
  "New",
  "Waiting Supplier",
  "Waiting Customer",
  "Production",
  "QC",
  "Ready To Ship",
  "Shipped",
  "Completed"
];

const priorities = ["Normal", "High", "Urgent", "Low"];

let orders = [];
let selectedOrderId = "";
let activeView = "dashboard";

const viewTitle = document.querySelector("#viewTitle");
const navButtons = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view");
const metricGrid = document.querySelector("#metricGrid");
const todayActionList = document.querySelector("#todayActionList");
const waitingList = document.querySelector("#waitingList");
const globalSearch = document.querySelector("#globalSearch");
const newOrderButton = document.querySelector("#newOrderButton");
const orderSearch = document.querySelector("#orderSearch");
const statusFilter = document.querySelector("#statusFilter");
const priorityFilter = document.querySelector("#priorityFilter");
const ordersList = document.querySelector("#ordersList");
const orderDetail = document.querySelector("#orderDetail");
const customerGrid = document.querySelector("#customerGrid");
const supplierGrid = document.querySelector("#supplierGrid");
const shipmentList = document.querySelector("#shipmentList");
const calendarList = document.querySelector("#calendarList");
const searchPageInput = document.querySelector("#searchPageInput");
const searchResults = document.querySelector("#searchResults");
const orderDialog = document.querySelector("#orderDialog");
const orderForm = document.querySelector("#orderForm");
const formTitle = document.querySelector("#formTitle");
const orderId = document.querySelector("#orderId");
const orderName = document.querySelector("#orderName");
const customerName = document.querySelector("#customerName");
const supplierName = document.querySelector("#supplierName");
const orderStatus = document.querySelector("#orderStatus");
const orderPriority = document.querySelector("#orderPriority");
const shipmentDate = document.querySelector("#shipmentDate");
const qcDate = document.querySelector("#qcDate");
const country = document.querySelector("#country");
const nextAction = document.querySelector("#nextAction");
const notes = document.querySelector("#notes");
const closeDialogButton = document.querySelector("#closeDialogButton");
const cancelFormButton = document.querySelector("#cancelFormButton");

function loadOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    orders = Array.isArray(saved) ? saved : [];
  } catch (error) {
    orders = [];
  }
}

function saveOrders() {
  localStorage.setItem(storageKey, JSON.stringify(orders));
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slug(value) {
  return String(value || "").toLowerCase().replaceAll(" ", "-");
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) {
    return "No date";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function formatDateTime(value) {
  if (!value) {
    return "No date";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function isThisWeek(value) {
  if (!value) {
    return false;
  }

  const date = new Date(`${value}T00:00:00`);
  const today = new Date(`${todayString()}T00:00:00`);
  const end = new Date(today);
  end.setDate(today.getDate() + 7);
  return date >= today && date <= end;
}

function openView(viewId) {
  activeView = viewId;
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  viewTitle.textContent = viewId.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

  if (viewId === "search") {
    searchPageInput.focus();
    renderSearchResults(searchPageInput.value || globalSearch.value);
  }
}

function emptyState(title, body) {
  return `
    <div class="list-row">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

function getOrderFormData() {
  const now = new Date().toISOString();
  const existing = orders.find((order) => order.id === orderId.value);
  const previousTimeline = existing?.timeline || [];
  const timelineText = existing ? "Order updated" : "Order created";

  return {
    id: orderId.value || `order-${Date.now()}`,
    name: orderName.value.trim(),
    customer: customerName.value.trim(),
    supplier: supplierName.value.trim(),
    status: orderStatus.value,
    priority: orderPriority.value,
    shipmentDate: shipmentDate.value,
    qcDate: qcDate.value,
    country: country.value.trim(),
    nextAction: nextAction.value.trim(),
    notes: notes.value.trim(),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    timeline: [
      {
        id: `timeline-${Date.now()}`,
        date: now,
        title: timelineText,
        description: `${orderStatus.value}${nextAction.value ? `: ${nextAction.value.trim()}` : ""}`
      },
      ...previousTimeline
    ].slice(0, 20)
  };
}

function resetForm() {
  orderForm.reset();
  orderId.value = "";
  formTitle.textContent = "Create Order";
  orderStatus.value = "New";
  orderPriority.value = "Normal";
}

function openOrderForm(order = null) {
  resetForm();

  if (order) {
    formTitle.textContent = "Edit Order";
    orderId.value = order.id;
    orderName.value = order.name;
    customerName.value = order.customer;
    supplierName.value = order.supplier;
    orderStatus.value = order.status;
    orderPriority.value = order.priority;
    shipmentDate.value = order.shipmentDate;
    qcDate.value = order.qcDate;
    country.value = order.country;
    nextAction.value = order.nextAction;
    notes.value = order.notes;
  }

  orderDialog.showModal();
  orderName.focus();
}

function closeOrderForm() {
  orderDialog.close();
  resetForm();
}

function saveOrder(event) {
  event.preventDefault();
  const order = getOrderFormData();

  if (!order.name || !order.customer) {
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
  closeOrderForm();
  renderAll();
  openView("orders");
  renderOrderDetail(order);
}

function deleteOrder(id) {
  const order = orders.find((item) => item.id === id);
  if (!order) {
    return;
  }

  const confirmed = window.confirm(`Delete "${order.name}"?`);
  if (!confirmed) {
    return;
  }

  orders = orders.filter((item) => item.id !== id);
  selectedOrderId = orders[0]?.id || "";
  saveOrders();
  renderAll();
}

function getFilteredOrders() {
  const query = (orderSearch.value || globalSearch.value || "").toLowerCase().trim();
  const status = statusFilter.value;
  const priority = priorityFilter.value;

  return orders.filter((order) => {
    const haystack = [
      order.name,
      order.customer,
      order.supplier,
      order.status,
      order.priority,
      order.shipmentDate,
      order.nextAction,
      order.notes,
      order.country
    ].join(" ").toLowerCase();

    return (!query || haystack.includes(query))
      && (!status || order.status === status)
      && (!priority || order.priority === priority);
  });
}

function renderFilters() {
  statusFilter.innerHTML = '<option value="">All status</option>' + statuses.map((status) => (
    `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`
  )).join("");

  priorityFilter.innerHTML = '<option value="">All priority</option>' + priorities.map((priority) => (
    `<option value="${escapeHtml(priority)}">${escapeHtml(priority)}</option>`
  )).join("");

  orderStatus.innerHTML = statuses.map((status) => (
    `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`
  )).join("");

  orderPriority.innerHTML = priorities.map((priority) => (
    `<option value="${escapeHtml(priority)}">${escapeHtml(priority)}</option>`
  )).join("");
}

function renderOrders() {
  const filtered = getFilteredOrders();

  if (!filtered.length) {
    ordersList.innerHTML = emptyState("No orders found", "Create an order or adjust the search filters.");
    if (!orders.length) {
      orderDetail.innerHTML = `
        <p class="eyebrow">Order Detail</p>
        <h2>No orders yet</h2>
        <p>Create the first order to start tracking customer, supplier, shipment, notes, and timeline.</p>
      `;
    }
    return;
  }

  if (!selectedOrderId || !filtered.some((order) => order.id === selectedOrderId)) {
    selectedOrderId = filtered[0].id;
  }

  ordersList.innerHTML = filtered.map((order) => `
    <button class="order-card ${order.id === selectedOrderId ? "active" : ""}" type="button" data-order-id="${order.id}">
      <div class="order-card-top">
        <strong>${escapeHtml(order.name)}</strong>
        <span class="pill ${slug(order.priority)}">${escapeHtml(order.priority)}</span>
      </div>
      <div class="meta-row">
        <span class="pill ${slug(order.status)}">${escapeHtml(order.status)}</span>
        <span class="pill">${escapeHtml(order.shipmentDate ? formatDate(order.shipmentDate) : "No shipment date")}</span>
      </div>
      <p>${escapeHtml(order.customer)}${order.supplier ? ` · ${escapeHtml(order.supplier)}` : ""}</p>
      <p>${escapeHtml(order.nextAction || "No next action set")}</p>
    </button>
  `).join("");

  const selected = orders.find((order) => order.id === selectedOrderId);
  if (selected) {
    renderOrderDetail(selected);
  }
}

function renderDetailField(label, value) {
  return `
    <div class="detail-field">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "Not set")}</strong>
    </div>
  `;
}

function renderOrderDetail(order) {
  selectedOrderId = order.id;
  orderDetail.classList.remove("empty-detail");
  orderDetail.innerHTML = `
    <div>
      <p class="eyebrow">Order Detail</p>
      <h2>${escapeHtml(order.name)}</h2>
    </div>
    <div class="meta-row">
      <span class="pill ${slug(order.status)}">${escapeHtml(order.status)}</span>
      <span class="pill ${slug(order.priority)}">${escapeHtml(order.priority)}</span>
    </div>
    <div class="detail-grid">
      ${renderDetailField("Customer", order.customer)}
      ${renderDetailField("Supplier", order.supplier)}
      ${renderDetailField("Shipment Date", order.shipmentDate ? formatDate(order.shipmentDate) : "")}
      ${renderDetailField("QC Date", order.qcDate ? formatDate(order.qcDate) : "")}
      ${renderDetailField("Country", order.country)}
      ${renderDetailField("Updated", formatDateTime(order.updatedAt))}
    </div>
    <div class="note-box">
      <strong>Next Action</strong>
      <p>${escapeHtml(order.nextAction || "No next action set.")}</p>
    </div>
    <div class="note-box">
      <strong>Notes</strong>
      <p>${escapeHtml(order.notes || "No notes yet.")}</p>
    </div>
    <div class="detail-actions">
      <button class="ghost-button" type="button" data-edit-order="${order.id}">Edit Order</button>
      <button class="danger-button" type="button" data-delete-order="${order.id}">Delete Order</button>
    </div>
    <div>
      <p class="eyebrow">Timeline</p>
      <div class="timeline-list">
        ${order.timeline?.length ? order.timeline.map((item) => `
          <article class="timeline-item">
            <time>${escapeHtml(formatDateTime(item.date))}</time>
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.description)}</p>
            </div>
          </article>
        `).join("") : emptyState("No timeline yet", "Save the order to create the first timeline event.")}
      </div>
    </div>
  `;
}

function renderDashboard() {
  const today = todayString();
  const metrics = [
    ["Today's Orders", orders.filter((order) => order.shipmentDate === today || order.qcDate === today).length],
    ["Orders Waiting Supplier", orders.filter((order) => order.status === "Waiting Supplier").length],
    ["Orders Waiting Customer", orders.filter((order) => order.status === "Waiting Customer").length],
    ["Production", orders.filter((order) => order.status === "Production").length],
    ["QC Today", orders.filter((order) => order.qcDate === today || order.status === "QC").length],
    ["Shipment This Week", orders.filter((order) => isThisWeek(order.shipmentDate)).length]
  ];

  metricGrid.innerHTML = metrics.map(([label, value]) => `
    <article class="metric-card">
      <span>${escapeHtml(label)}</span>
      <strong>${value}</strong>
    </article>
  `).join("");

  const actionOrders = orders
    .filter((order) => order.nextAction)
    .sort((a, b) => (a.shipmentDate || "9999").localeCompare(b.shipmentDate || "9999"))
    .slice(0, 8);

  todayActionList.innerHTML = actionOrders.length ? actionOrders.map(renderListOrder).join("") : emptyState("No next actions", "Create orders and add next actions to see today clearly.");

  const waitingOrders = orders
    .filter((order) => ["Waiting Supplier", "Waiting Customer"].includes(order.status))
    .slice(0, 8);

  waitingList.innerHTML = waitingOrders.length ? waitingOrders.map(renderListOrder).join("") : emptyState("No waiting items", "Orders waiting for customer or supplier replies will appear here.");
}

function renderListOrder(order) {
  return `
    <button class="list-row" type="button" data-open-order="${order.id}">
      <strong>${escapeHtml(order.name)}</strong>
      <div class="meta-row">
        <span class="pill ${slug(order.status)}">${escapeHtml(order.status)}</span>
        <span class="pill ${slug(order.priority)}">${escapeHtml(order.priority)}</span>
      </div>
      <p>${escapeHtml(order.customer)}${order.nextAction ? ` · ${escapeHtml(order.nextAction)}` : ""}</p>
    </button>
  `;
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const name = item[key] || "Not set";
    groups[name] = groups[name] || [];
    groups[name].push(item);
    return groups;
  }, {});
}

function renderEntities(target, key, emptyTitle, emptyBody) {
  const groups = groupBy(orders.filter((order) => order[key]), key);
  const names = Object.keys(groups).sort();

  target.innerHTML = names.length ? names.map((name) => {
    const group = groups[name];
    const activeCount = group.filter((order) => !["Completed", "Shipped"].includes(order.status)).length;
    return `
      <article class="entity-card">
        <strong>${escapeHtml(name)}</strong>
        <p>${activeCount} active order${activeCount === 1 ? "" : "s"}</p>
        <div class="meta-row">
          ${group.slice(0, 4).map((order) => `<span class="pill ${slug(order.status)}">${escapeHtml(order.status)}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("") : emptyState(emptyTitle, emptyBody);
}

function renderShipments() {
  const shipmentOrders = orders
    .filter((order) => order.shipmentDate)
    .sort((a, b) => a.shipmentDate.localeCompare(b.shipmentDate));

  shipmentList.innerHTML = shipmentOrders.length ? shipmentOrders.map((order) => `
    <button class="list-row" type="button" data-open-order="${order.id}">
      <strong>${escapeHtml(formatDate(order.shipmentDate))} · ${escapeHtml(order.name)}</strong>
      <p>${escapeHtml(order.customer)} · ${escapeHtml(order.status)}${order.country ? ` · ${escapeHtml(order.country)}` : ""}</p>
    </button>
  `).join("") : emptyState("No shipments", "Orders with shipment dates will appear here.");
}

function renderCalendar() {
  const events = orders.flatMap((order) => {
    const items = [];
    if (order.qcDate) {
      items.push({ date: order.qcDate, title: `QC: ${order.name}`, order });
    }
    if (order.shipmentDate) {
      items.push({ date: order.shipmentDate, title: `Ship: ${order.name}`, order });
    }
    return items;
  }).sort((a, b) => a.date.localeCompare(b.date));

  calendarList.innerHTML = events.length ? events.map((event) => `
    <button class="timeline-item" type="button" data-open-order="${event.order.id}">
      <time>${escapeHtml(formatDate(event.date))}</time>
      <div>
        <strong>${escapeHtml(event.title)}</strong>
        <p>${escapeHtml(event.order.customer)} · ${escapeHtml(event.order.status)}</p>
      </div>
    </button>
  `).join("") : emptyState("No calendar dates", "QC and shipment dates will appear here.");
}

function getSearchMatches(query) {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) {
    return [];
  }

  return orders.filter((order) => [
    order.name,
    order.customer,
    order.supplier,
    order.status,
    order.priority,
    order.country,
    order.nextAction,
    order.notes
  ].join(" ").toLowerCase().includes(cleanQuery));
}

function renderSearchResults(query) {
  const matches = getSearchMatches(query);
  searchResults.innerHTML = matches.length ? matches.map(renderListOrder).join("") : emptyState("No results", "Search by order, customer, supplier, status, country, next action, or notes.");
}

function renderAll() {
  renderDashboard();
  renderOrders();
  renderEntities(customerGrid, "customer", "No customers", "Customers are created automatically when you add orders.");
  renderEntities(supplierGrid, "supplier", "No suppliers", "Suppliers are created automatically when you add orders.");
  renderShipments();
  renderCalendar();
  renderSearchResults(searchPageInput.value || globalSearch.value);
}

function handleOpenOrder(id) {
  const order = orders.find((item) => item.id === id);
  if (!order) {
    return;
  }

  selectedOrderId = id;
  openView("orders");
  renderOrders();
  renderOrderDetail(order);
}

function setupEvents() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => openView(button.dataset.view));
  });

  newOrderButton.addEventListener("click", () => openOrderForm());
  closeDialogButton.addEventListener("click", closeOrderForm);
  cancelFormButton.addEventListener("click", closeOrderForm);
  orderForm.addEventListener("submit", saveOrder);

  orderSearch.addEventListener("input", renderOrders);
  statusFilter.addEventListener("change", renderOrders);
  priorityFilter.addEventListener("change", renderOrders);

  globalSearch.addEventListener("input", () => {
    if (activeView === "orders") {
      orderSearch.value = globalSearch.value;
      renderOrders();
    }

    if (activeView === "search") {
      searchPageInput.value = globalSearch.value;
      renderSearchResults(globalSearch.value);
    }
  });

  searchPageInput.addEventListener("input", () => {
    globalSearch.value = searchPageInput.value;
    renderSearchResults(searchPageInput.value);
  });

  document.addEventListener("click", (event) => {
    const orderButton = event.target.closest("[data-order-id]");
    const openButton = event.target.closest("[data-open-order]");
    const editButton = event.target.closest("[data-edit-order]");
    const deleteButton = event.target.closest("[data-delete-order]");

    if (orderButton) {
      const order = orders.find((item) => item.id === orderButton.dataset.orderId);
      if (order) {
        selectedOrderId = order.id;
        renderOrders();
        renderOrderDetail(order);
      }
    }

    if (openButton) {
      handleOpenOrder(openButton.dataset.openOrder);
    }

    if (editButton) {
      const order = orders.find((item) => item.id === editButton.dataset.editOrder);
      if (order) {
        openOrderForm(order);
      }
    }

    if (deleteButton) {
      deleteOrder(deleteButton.dataset.deleteOrder);
    }
  });
}

function init() {
  renderFilters();
  loadOrders();
  selectedOrderId = orders[0]?.id || "";
  setupEvents();
  renderAll();
}

init();
