const categories = [
  "Business",
  "Suppliers",
  "Customers",
  "Products",
  "Shipping",
  "Inspection",
  "Negotiation",
  "Marketing",
  "SEO",
  "Website",
  "Social Media",
  "AI Prompts",
  "SOP",
  "Personal",
  "Family",
  "Health",
  "Meal Planning"
];

const seedArticles = [
  {
    id: "kc-001",
    title: "Moer Sourcing Service Overview",
    category: "Business",
    tags: ["moer", "services", "sourcing", "yiwu"],
    summary: "Core explanation of Moer Sourcing as a Yiwu-based sourcing and purchasing agent.",
    content: "Moer Sourcing helps overseas customers find products, communicate with suppliers, arrange samples, follow orders, inspect goods, consolidate products, and arrange shipping from China. The company is a sourcing and purchasing agent, not a factory or online store.",
    relatedArticles: ["China Sourcing Workflow", "Quality Inspection Basics"],
    attachments: [],
    favorite: true,
    createdAt: "2026-06-20",
    updatedAt: "2026-06-24",
    lastViewedAt: "2026-06-25T09:00:00",
    revisionHistory: [
      { date: "2026-06-20", note: "Initial article created." },
      { date: "2026-06-24", note: "Added service scope." }
    ],
    ai: {
      sourceType: "company knowledge",
      audience: "internal",
      confidence: "high",
      retrievalKeywords: ["China sourcing agent", "Yiwu sourcing agent", "product sourcing", "shipping from China"],
      businessUse: "Use when explaining what Moer Sourcing does."
    }
  },
  {
    id: "kc-002",
    title: "China Sourcing Workflow",
    category: "SOP",
    tags: ["workflow", "inquiry", "quotation", "order"],
    summary: "High-level workflow from customer inquiry to shipment delivery.",
    content: "The sourcing workflow starts with customer inquiry, product clarification, supplier search, supplier communication, samples, quotation, purchase order, production follow-up, inspection, warehouse receiving, consolidation, shipment, and delivery follow-up.",
    relatedArticles: ["Moer Sourcing Service Overview", "Supplier Verification Checklist"],
    attachments: [],
    favorite: true,
    createdAt: "2026-06-21",
    updatedAt: "2026-06-26",
    lastViewedAt: "2026-06-26T08:30:00",
    revisionHistory: [
      { date: "2026-06-21", note: "Workflow draft." },
      { date: "2026-06-26", note: "Added delivery follow-up." }
    ],
    ai: {
      sourceType: "SOP",
      audience: "internal",
      confidence: "high",
      retrievalKeywords: ["sourcing workflow", "order follow up", "quality inspection", "consolidation"],
      businessUse: "Use when building systems or explaining sourcing steps."
    }
  },
  {
    id: "kc-003",
    title: "Supplier Verification Checklist",
    category: "Suppliers",
    tags: ["supplier", "verification", "risk", "quality"],
    summary: "Checklist for checking supplier reliability before recommending options to customers.",
    content: "Check supplier product category, MOQ, price consistency, delivery ability, communication speed, sample quality, business license when needed, production capacity, packaging details, payment terms, and previous cooperation notes.",
    relatedArticles: ["China Sourcing Workflow", "Negotiation Principles"],
    attachments: [],
    favorite: false,
    createdAt: "2026-06-22",
    updatedAt: "2026-06-25",
    lastViewedAt: "2026-06-25T14:10:00",
    revisionHistory: [{ date: "2026-06-22", note: "Initial checklist." }],
    ai: {
      sourceType: "SOP",
      audience: "internal",
      confidence: "medium",
      retrievalKeywords: ["supplier verification", "supplier risk", "MOQ", "supplier quality"],
      businessUse: "Use before saving supplier records or comparing supplier options."
    }
  },
  {
    id: "kc-004",
    title: "Quality Inspection Basics",
    category: "Inspection",
    tags: ["inspection", "quality", "photos", "shipment"],
    summary: "Basic inspection points before goods leave China.",
    content: "Before shipment, check quantity, product appearance, function, color, size, packaging, labels, carton marks, damage, and customer-specific requirements. Send clear photos or videos when required.",
    relatedArticles: ["China Sourcing Workflow"],
    attachments: [],
    favorite: false,
    createdAt: "2026-06-22",
    updatedAt: "2026-06-23",
    lastViewedAt: "",
    revisionHistory: [{ date: "2026-06-22", note: "Inspection article created." }],
    ai: {
      sourceType: "SOP",
      audience: "internal",
      confidence: "high",
      retrievalKeywords: ["quality inspection", "carton marks", "packing", "inspection report"],
      businessUse: "Use when creating inspection tasks or customer updates."
    }
  },
  {
    id: "kc-005",
    title: "Website SEO Topic Map",
    category: "SEO",
    tags: ["SEO", "website", "content", "inquiries"],
    summary: "Core SEO themes for generating qualified sourcing inquiries.",
    content: "Main SEO themes include China sourcing agent, Yiwu sourcing agent, importing from China, supplier sourcing, quality inspection, shipping from China, Yiwu market guide, and country-specific sourcing topics.",
    relatedArticles: ["Moer Sourcing Service Overview"],
    attachments: [],
    favorite: true,
    createdAt: "2026-06-23",
    updatedAt: "2026-06-25",
    lastViewedAt: "2026-06-26T10:00:00",
    revisionHistory: [{ date: "2026-06-23", note: "SEO map created." }],
    ai: {
      sourceType: "marketing knowledge",
      audience: "internal",
      confidence: "high",
      retrievalKeywords: ["China sourcing SEO", "Yiwu sourcing", "qualified inquiries", "website content"],
      businessUse: "Use when planning website pages and blog topics."
    }
  }
];

const storageKey = "moerOS.knowledgeCenter.articles";
let articles = [];
let selectedArticleId = "";

const viewTitle = document.querySelector("#viewTitle");
const navButtons = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view");
const totalArticles = document.querySelector("#totalArticles");
const recentlyUpdatedCount = document.querySelector("#recentlyUpdatedCount");
const favoriteCount = document.querySelector("#favoriteCount");
const recentlyViewedCount = document.querySelector("#recentlyViewedCount");
const recentlyUpdatedList = document.querySelector("#recentlyUpdatedList");
const favoriteList = document.querySelector("#favoriteList");
const recentlyViewedList = document.querySelector("#recentlyViewedList");
const categoryGrid = document.querySelector("#categoryGrid");
const articleList = document.querySelector("#articleList");
const newArticleButton = document.querySelector("#newArticleButton");
const saveArticleButton = document.querySelector("#saveArticleButton");
const favoriteButton = document.querySelector("#favoriteButton");
const articleTitle = document.querySelector("#articleTitle");
const articleCategory = document.querySelector("#articleCategory");
const articleTags = document.querySelector("#articleTags");
const relatedArticles = document.querySelector("#relatedArticles");
const articleSummary = document.querySelector("#articleSummary");
const articleContent = document.querySelector("#articleContent");
const revisionHistory = document.querySelector("#revisionHistory");
const aiMetadataPreview = document.querySelector("#aiMetadataPreview");
const globalSearchInput = document.querySelector("#globalSearchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const tagFilter = document.querySelector("#tagFilter");
const dateFilter = document.querySelector("#dateFilter");
const favoriteFilter = document.querySelector("#favoriteFilter");
const searchResults = document.querySelector("#searchResults");

function loadArticles() {
  const savedArticles = localStorage.getItem(storageKey);
  if (!savedArticles) {
    articles = seedArticles;
    saveArticles();
    return;
  }

  try {
    const parsedArticles = JSON.parse(savedArticles);
    articles = Array.isArray(parsedArticles) ? parsedArticles : seedArticles;
  } catch (error) {
    articles = seedArticles;
  }
}

function saveArticles() {
  localStorage.setItem(storageKey, JSON.stringify(articles));
}

function showView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  viewTitle.textContent = getViewTitle(viewId);

  if (viewId === "search") {
    renderSearchResults();
    globalSearchInput.focus();
  }
}

function getViewTitle(viewId) {
  const titles = {
    dashboard: "Dashboard",
    categories: "Categories",
    articles: "Knowledge Article",
    search: "Global Search",
    "ai-ready": "AI Ready"
  };
  return titles[viewId] || "Knowledge Center";
}

function renderDashboard() {
  const sortedByUpdated = [...articles].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  const favorites = articles.filter((article) => article.favorite);
  const viewed = articles
    .filter((article) => article.lastViewedAt)
    .sort((a, b) => new Date(b.lastViewedAt) - new Date(a.lastViewedAt));

  totalArticles.textContent = articles.length;
  recentlyUpdatedCount.textContent = sortedByUpdated.slice(0, 5).length;
  favoriteCount.textContent = favorites.length;
  recentlyViewedCount.textContent = viewed.length;

  renderArticleCards(recentlyUpdatedList, sortedByUpdated.slice(0, 5), true);
  renderArticleCards(favoriteList, favorites.slice(0, 5), true);
  renderArticleCards(recentlyViewedList, viewed.slice(0, 5), true);
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category) => {
    const count = articles.filter((article) => article.category === category).length;
    return `
      <article class="category-card">
        <h2>${escapeHtml(category)}</h2>
        <p>${count} article${count === 1 ? "" : "s"}</p>
      </article>
    `;
  }).join("");
}

function renderArticleList() {
  renderArticleCards(articleList, articles, false);
}

function renderArticleCards(container, items, compact) {
  if (!items.length) {
    container.innerHTML = '<p class="empty-state">No articles yet.</p>';
    return;
  }

  container.innerHTML = items.map((article) => `
    <button class="article-card" data-article-id="${article.id}" type="button">
      <h3>${article.favorite ? "★ " : ""}${escapeHtml(article.title)}</h3>
      <p>${escapeHtml(article.summary)}</p>
      <div class="article-meta-line">
        <span class="pill">${escapeHtml(article.category)}</span>
        <span class="pill">Updated ${escapeHtml(article.updatedAt)}</span>
        ${compact ? "" : article.tags.slice(0, 3).map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
      </div>
    </button>
  `).join("");
}

function selectArticle(articleId) {
  const article = articles.find((item) => item.id === articleId);
  if (!article) {
    return;
  }

  selectedArticleId = article.id;
  article.lastViewedAt = new Date().toISOString();
  saveArticles();

  articleTitle.value = article.title;
  articleCategory.value = article.category;
  articleTags.value = article.tags.join(", ");
  relatedArticles.value = article.relatedArticles.join(", ");
  articleSummary.value = article.summary;
  articleContent.value = article.content;
  favoriteButton.textContent = article.favorite ? "Remove Favorite" : "Favorite";
  revisionHistory.innerHTML = renderRevisionHistory(article);
  aiMetadataPreview.textContent = JSON.stringify(article.ai, null, 2);

  renderAll();
  showView("articles");
}

function renderRevisionHistory(article) {
  if (!article.revisionHistory.length) {
    return '<p class="empty-state">No revisions yet.</p>';
  }

  return `
    <ul class="revision-list">
      ${article.revisionHistory.map((revision) => `<li>${escapeHtml(revision.date)}: ${escapeHtml(revision.note)}</li>`).join("")}
    </ul>
  `;
}

function createArticle() {
  const today = new Date().toISOString().slice(0, 10);
  const article = {
    id: `kc-${Date.now()}`,
    title: "Untitled Knowledge Article",
    category: "Business",
    tags: [],
    summary: "",
    content: "",
    relatedArticles: [],
    attachments: [],
    favorite: false,
    createdAt: today,
    updatedAt: today,
    lastViewedAt: new Date().toISOString(),
    revisionHistory: [{ date: today, note: "Article created." }],
    ai: {
      sourceType: "company knowledge",
      audience: "internal",
      confidence: "draft",
      retrievalKeywords: [],
      businessUse: "Define how this article should help Moer Sourcing."
    }
  };

  articles.unshift(article);
  selectedArticleId = article.id;
  saveArticles();
  renderAll();
  selectArticle(article.id);
}

function saveCurrentArticle() {
  const article = articles.find((item) => item.id === selectedArticleId);
  if (!article) {
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  article.title = articleTitle.value.trim() || "Untitled Knowledge Article";
  article.category = articleCategory.value;
  article.tags = splitList(articleTags.value);
  article.relatedArticles = splitList(relatedArticles.value);
  article.summary = articleSummary.value.trim();
  article.content = articleContent.value.trim();
  article.updatedAt = today;
  article.revisionHistory.unshift({ date: today, note: "Article saved." });
  article.ai.retrievalKeywords = [...new Set([...article.tags, article.category, article.title])];
  article.ai.businessUse = article.summary || article.ai.businessUse;

  saveArticles();
  renderAll();
  selectArticle(article.id);
}

function toggleFavorite() {
  const article = articles.find((item) => item.id === selectedArticleId);
  if (!article) {
    return;
  }

  article.favorite = !article.favorite;
  article.updatedAt = new Date().toISOString().slice(0, 10);
  saveArticles();
  selectArticle(article.id);
}

function renderSearchControls() {
  const categoryOptions = ['<option value="">All categories</option>']
    .concat(categories.map((category) => `<option value="${category}">${category}</option>`));
  categoryFilter.innerHTML = categoryOptions.join("");
}

function renderCategoryOptions() {
  articleCategory.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function renderSearchResults() {
  const query = globalSearchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedTag = tagFilter.value.trim().toLowerCase();
  const selectedDate = dateFilter.value;
  const favoritesOnly = favoriteFilter.checked;

  const results = articles.filter((article) => {
    const searchableText = [
      article.title,
      article.category,
      article.summary,
      article.content,
      article.tags.join(" "),
      article.relatedArticles.join(" "),
      JSON.stringify(article.ai)
    ].join(" ").toLowerCase();

    const matchesQuery = !query || searchableText.includes(query);
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesTag = !selectedTag || article.tags.some((tag) => tag.toLowerCase().includes(selectedTag));
    const matchesDate = !selectedDate || article.updatedAt >= selectedDate;
    const matchesFavorite = !favoritesOnly || article.favorite;

    return matchesQuery && matchesCategory && matchesTag && matchesDate && matchesFavorite;
  });

  renderArticleCards(searchResults, results, false);
}

function splitList(value) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function renderAll() {
  renderDashboard();
  renderCategories();
  renderArticleList();
  renderSearchResults();
}

function bindEvents() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-article-id]");
    if (card) {
      selectArticle(card.dataset.articleId);
    }
  });

  newArticleButton.addEventListener("click", createArticle);
  saveArticleButton.addEventListener("click", saveCurrentArticle);
  favoriteButton.addEventListener("click", toggleFavorite);

  [globalSearchInput, categoryFilter, tagFilter, dateFilter, favoriteFilter].forEach((control) => {
    control.addEventListener("input", renderSearchResults);
    control.addEventListener("change", renderSearchResults);
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

function init() {
  loadArticles();
  renderCategoryOptions();
  renderSearchControls();
  bindEvents();
  renderAll();

  if (articles.length) {
    selectArticle(articles[0].id);
    showView("dashboard");
  }
}

init();
