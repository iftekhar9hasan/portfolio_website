
document.addEventListener("DOMContentLoaded", () => {
  const data = {
    articles: window.blogArticles || [],
    thoughts: window.blogThoughts || []
  };

  const tabs = [...document.querySelectorAll("[data-type]")];
  const search = document.getElementById("blog-search-input");
  const reader = document.getElementById("blog-reader");
  const readerContent = document.getElementById("blog-reader-content");

  let activeType = "articles";

  const escapeHTML = value =>
    String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));

  document.getElementById("blog-articles-count").textContent =
    data.articles.length;

  document.getElementById("blog-thoughts-count").textContent =
    data.thoughts.length;

  document.getElementById("blog-year").textContent =
    new Date().getFullYear();

  function render() {
    const query = search.value.toLowerCase().trim();

    const items = data[activeType].filter(item =>
      [
        item.title,
        item.summary,
        item.text,
        item.category,
        item.content
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query)
    );

    document.getElementById("blog-empty").hidden =
      items.length !== 0;

    document.getElementById("blog-articles-panel").hidden =
      activeType !== "articles";

    document.getElementById("blog-thoughts-panel").hidden =
      activeType !== "thoughts";

    const panel = document.getElementById(
      `blog-${activeType}-panel`
    );

    if (activeType === "articles") {
      panel.innerHTML = items.map(article => `
        <article class="blog-article">
          <div class="blog-meta">
            ${escapeHTML(article.category)} /
            ${escapeHTML(article.date)}
          </div>
          <h2>${escapeHTML(article.title)}</h2>
          <p>${escapeHTML(article.summary)}</p>         
          <a class="blog-read"
            href="article.html?id=${encodeURIComponent(String(article.id))}">
            Read the story ↗
          </a>
        </article>
      `).join("");
    } else {
      panel.innerHTML = items.map(thought => `
        <article class="blog-thought">
          <div class="blog-thought-avatar" aria-hidden="true">
            ih.
          </div>
          <div>
            <div class="blog-thought-name">Iftekhar Hasan</div>
            <span class="blog-thought-date">
              ${escapeHTML(thought.date)}
            </span>
            <p>${escapeHTML(thought.text)}</p>
          </div>
        </article>
      `).join("");
    }
  }

  function selectType(type) {
    activeType = type;

    tabs.forEach(tab => {
      const selected = tab.dataset.type === type;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    render();
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () =>
      selectType(tab.dataset.type)
    );
  });

  search.addEventListener("input", render);

  document.getElementById("blog-articles-panel")
    .addEventListener("click", event => {
      const button = event.target.closest("[data-article-id]");
      if (!button) return;

      const article = data.articles.find(item =>
        String(item.id) === button.dataset.articleId
      );

      if (!article) return;

      readerContent.innerHTML = `
        <div class="blog-meta">
          ${escapeHTML(article.category)} /
          ${escapeHTML(article.date)}
        </div>
        <h2>${escapeHTML(article.title)}</h2>
        <div class="blog-reader-body">
          ${article.content || ""}
        </div>
      `;

      // Article HTML comes from your own trusted blog-data.js.
      reader.showModal();
    });

  document.getElementById("blog-close")
    .addEventListener("click", () => reader.close());

  reader.addEventListener("click", event => {
    if (event.target === reader) reader.close();
  });

  const initialTab =
    new URLSearchParams(location.search).get("tab");

  selectType(initialTab === "thoughts" ? "thoughts" : "articles");
});
