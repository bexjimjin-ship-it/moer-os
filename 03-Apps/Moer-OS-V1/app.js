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
  mealPlanner: "moerOS.mealPlanner"
};

const editableLists = {
  focusTasks: [],
  peopleWaiting: [],
  urgentItems: [],
  mealPlanner: []
};

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
    section: "order-center",
    name: "Order Center",
    purpose: "Operational architecture for sourcing orders from inquiry to delivery.",
    status: "Architecture ready",
    href: "../Order-Center/README.md"
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
      { title: "Caribbean importer follow-up", type: "Customer", description: "Mock customer record for relationship-based sourcing support.", page: "order-center" },
      { title: "African wholesaler inquiry", type: "Customer", description: "Mock customer record for price-sensitive mixed container sourcing.", page: "order-center" },
      { title: "Amazon seller product request", type: "Customer", description: "Mock customer record for product sourcing and inspection.", page: "order-center" }
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
      { title: "Order Center", type: "Architecture", description: "Open Order Center architecture docs.", href: "../Order-Center/README.md" },
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
  return value
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
  return getSearchRecords().map((module) => {
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
    const modules = portalModules.filter((module) => module.section === section || (section === "today" && module.id !== "today"));
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
  setupEditableLists();
  setupPortalCards();
  setupCommandPalette();
  renderAllEditableLists();

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
