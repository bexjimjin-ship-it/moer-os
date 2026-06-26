class MoerTimelineEngine {
  constructor(options) {
    this.root = options.root;
    this.events = Array.isArray(options.events) ? options.events : [];
    this.filteredEvents = [...this.events];
    this.onEventClick = options.onEventClick || null;
    this.filters = {
      order: "",
      customer: "",
      supplier: "",
      date: "",
      module: "",
      status: ""
    };

    this.iconMap = {
      alert: "!",
      check: "✓",
      factory: "P",
      file: "D",
      image: "I",
      message: "M",
      quote: "Q",
      search: "S",
      send: "→",
      ship: "T"
    };
  }

  init() {
    this.render();
    this.bindEvents();
  }

  setEvents(events) {
    this.events = Array.isArray(events) ? events : [];
    this.applyFilters();
  }

  addEvent(event) {
    const normalizedEvent = this.normalizeEvent(event);
    this.events.push(normalizedEvent);
    this.applyFilters();
  }

  applyFilters() {
    this.filteredEvents = this.getSortedEvents(this.events).filter((event) => {
      return this.matchesFilter(event.relatedOrderId, this.filters.order)
        && this.matchesFilter(event.relatedCustomer, this.filters.customer)
        && this.matchesFilter(event.relatedSupplier, this.filters.supplier)
        && this.matchesFilter(event.date, this.filters.date)
        && this.matchesFilter(event.relatedModule, this.filters.module)
        && this.matchesFilter(event.status, this.filters.status);
    });

    this.renderList();
    this.renderCount();
  }

  getSortedEvents(events) {
    return [...events].sort((first, second) => {
      const firstTime = new Date(`${first.date}T${first.time || "00:00"}`).getTime();
      const secondTime = new Date(`${second.date}T${second.time || "00:00"}`).getTime();
      return firstTime - secondTime;
    });
  }

  matchesFilter(value, filterValue) {
    if (!filterValue) {
      return true;
    }

    return String(value || "").toLowerCase().includes(filterValue.toLowerCase());
  }

  normalizeEvent(event) {
    return {
      id: event.id || `evt-${Date.now()}`,
      date: event.date || new Date().toISOString().slice(0, 10),
      time: event.time || new Date().toTimeString().slice(0, 5),
      eventType: event.eventType || "Note",
      title: event.title || "Untitled event",
      description: event.description || "",
      relatedModule: event.relatedModule || "Order Center",
      relatedOrderId: event.relatedOrderId || "",
      relatedCustomer: event.relatedCustomer || "",
      relatedSupplier: event.relatedSupplier || "",
      status: event.status || "Open",
      icon: event.icon || "message"
    };
  }

  render() {
    this.root.innerHTML = `
      <section class="moer-timeline">
        <header class="timeline-hero">
          <div>
            <p class="timeline-kicker">Moer OS Core</p>
            <h1>Timeline Engine</h1>
            <p class="timeline-intro">Reusable event history for orders, customers, suppliers, quotations, and shipments.</p>
          </div>
          <button class="timeline-add-button" data-action="add-mock-event" type="button">Add Mock Event</button>
        </header>

        <section class="timeline-panel">
          <div class="timeline-filters" aria-label="Timeline filters">
            ${this.renderFilter("order", "Order", "MO-2026-001")}
            ${this.renderFilter("customer", "Customer", "Caribbean")}
            ${this.renderFilter("supplier", "Supplier", "Yiwu")}
            ${this.renderFilter("date", "Date", "2026-06-26", "date")}
            ${this.renderFilter("module", "Module", "Order Center")}
            ${this.renderFilter("status", "Status", "Open")}
          </div>
        </section>

        <div class="timeline-summary">
          <p><span data-count-total>0</span> events</p>
          <p><span data-count-visible>0</span> visible</p>
        </div>

        <section class="timeline-list" data-timeline-list></section>
      </section>
    `;

    this.applyFilters();
  }

  renderFilter(name, label, placeholder, type = "text") {
    return `
      <label class="timeline-filter">
        <span>${label}</span>
        <input data-filter="${name}" type="${type}" placeholder="${placeholder}">
      </label>
    `;
  }

  renderList() {
    const list = this.root.querySelector("[data-timeline-list]");

    if (!this.filteredEvents.length) {
      list.innerHTML = '<p class="timeline-empty">No events match these filters.</p>';
      return;
    }

    list.innerHTML = this.filteredEvents.map((event) => `
      <article class="timeline-event" data-event-id="${this.escapeHtml(event.id)}">
        <div class="event-marker" aria-hidden="true">${this.getIcon(event.icon)}</div>
        <div class="event-card">
          <div class="event-topline">
            <span>${this.formatDate(event.date)} at ${this.escapeHtml(event.time)}</span>
            <span class="event-status">${this.escapeHtml(event.status)}</span>
          </div>
          <h2>${this.escapeHtml(event.title)}</h2>
          <p class="event-description">${this.escapeHtml(event.description)}</p>
          <dl class="event-meta">
            <div>
              <dt>Type</dt>
              <dd>${this.escapeHtml(event.eventType)}</dd>
            </div>
            <div>
              <dt>Module</dt>
              <dd>${this.escapeHtml(event.relatedModule)}</dd>
            </div>
            <div>
              <dt>Order</dt>
              <dd>${this.escapeHtml(event.relatedOrderId || "Not linked")}</dd>
            </div>
            <div>
              <dt>Customer</dt>
              <dd>${this.escapeHtml(event.relatedCustomer || "Not linked")}</dd>
            </div>
            <div>
              <dt>Supplier</dt>
              <dd>${this.escapeHtml(event.relatedSupplier || "Not linked")}</dd>
            </div>
          </dl>
        </div>
      </article>
    `).join("");
  }

  renderCount() {
    const total = this.root.querySelector("[data-count-total]");
    const visible = this.root.querySelector("[data-count-visible]");

    if (total) {
      total.textContent = this.events.length;
    }

    if (visible) {
      visible.textContent = this.filteredEvents.length;
    }
  }

  bindEvents() {
    this.root.addEventListener("input", (event) => {
      const filterName = event.target.dataset.filter;
      if (!filterName) {
        return;
      }

      this.filters[filterName] = event.target.value;
      this.applyFilters();
    });

    this.root.addEventListener("click", (event) => {
      const addButton = event.target.closest("[data-action='add-mock-event']");
      if (addButton) {
        this.addEvent(this.createMockEvent());
        return;
      }

      const eventCard = event.target.closest("[data-event-id]");
      if (eventCard && this.onEventClick) {
        const selectedEvent = this.events.find((item) => item.id === eventCard.dataset.eventId);
        this.onEventClick(selectedEvent);
      }
    });
  }

  createMockEvent() {
    const now = new Date();
    const mockEvents = [
      {
        eventType: "Warehouse",
        title: "Goods received in warehouse",
        description: "Warehouse team received cartons and recorded quantity, CBM, and photos.",
        relatedModule: "Order Center",
        status: "Completed",
        icon: "check"
      },
      {
        eventType: "Supplier Follow-Up",
        title: "Supplier follow-up needed",
        description: "Supplier has not confirmed final packing details yet.",
        relatedModule: "Supplier Center",
        status: "Open",
        icon: "alert"
      },
      {
        eventType: "Shipping",
        title: "Shipment planning updated",
        description: "Forwarder updated estimated sailing date and requested final packing list.",
        relatedModule: "Shipping Center",
        status: "Needs Info",
        icon: "ship"
      }
    ];
    const selected = mockEvents[this.events.length % mockEvents.length];

    return {
      ...selected,
      id: `evt-${Date.now()}`,
      date: now.toISOString().slice(0, 10),
      time: now.toTimeString().slice(0, 5),
      relatedOrderId: "MO-2026-001",
      relatedCustomer: "Caribbean Wholesale Ltd",
      relatedSupplier: selected.relatedModule === "Supplier Center" ? "Yiwu Stationery Supplier A" : ""
    };
  }

  getIcon(icon) {
    return this.iconMap[icon] || this.iconMap.message;
  }

  formatDate(date) {
    const parsedDate = new Date(`${date}T00:00`);
    return parsedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
}

window.MoerTimelineEngine = MoerTimelineEngine;
