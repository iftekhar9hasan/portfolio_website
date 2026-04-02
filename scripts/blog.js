document.addEventListener('DOMContentLoaded', function () {

    // ===== TABS =====
    const tabs = document.querySelectorAll('.blog-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        });
    });

    // ===== RENDER ARTICLES =====
    function renderArticles(filter = 'all') {
        const grid = document.getElementById('articles-grid');
        if (!grid || !window.blogArticles) return;

        const filtered = filter === 'all'
            ? window.blogArticles
            : window.blogArticles.filter(a => a.category === filter);

        grid.innerHTML = '';

        filtered.forEach((article, index) => {
            const isFeatured = article.featured && filter === 'all' && index === 0;
            const card = document.createElement('div');
            card.className = isFeatured ? 'blog-card blog-card-featured' : 'blog-card';

            card.innerHTML = `
                <div class="blog-card-body">
                    ${isFeatured ? '<span class="featured-badge">Featured</span>' : ''}
                    <span class="blog-category">${article.category}</span>
                    <h3 class="blog-card-title">${article.title}</h3>
                    <p class="blog-card-summary">${article.summary}</p>
                    <div class="blog-card-footer">
                        <span class="blog-date">${article.date}</span>
                        <a href="blog-post.html?id=${article.id}" class="blog-read-more">Read More →</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // ===== ARTICLE FILTERS =====
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderArticles(this.dataset.filter);
        });
    });

    // ===== RENDER THOUGHTS =====
    function renderThoughts() {
        const list = document.getElementById('thoughts-list');
        if (!list || !window.blogThoughts) return;

        list.innerHTML = '';

        window.blogThoughts.forEach(thought => {
            const item = document.createElement('div');
            item.className = 'thought-card';

            const text = thought.text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');

            item.innerHTML = `
                <div class="thought-header">
                    <div class="thought-avatar">IH</div>
                    <div class="thought-meta">
                        <span class="thought-name">Iftekhar Hasan</span>
                        <span class="thought-handle">@iftekharhasan</span>
                    </div>
                    <span class="thought-date">${thought.date}</span>
                </div>
                <p class="thought-text">${text}</p>
            `;
            list.appendChild(item);
        });
    }

    renderArticles();
    renderThoughts();
});