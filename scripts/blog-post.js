document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const container = document.getElementById('post-content');

    if (!id || !window.blogArticles) {
        container.innerHTML = '<p>Article not found. <a href="blog.html">Go back to Blog</a></p>';
        return;
    }

    const article = window.blogArticles.find(a => a.id === id);

    if (!article) {
        container.innerHTML = '<p>Article not found. <a href="blog.html">Go back to Blog</a></p>';
        return;
    }

    document.title = `${article.title} — Iftekhar Hasan`;

    container.innerHTML = `
        <div class="post-header">
            <span class="blog-category">${article.category}</span>
            <h1 class="post-title">${article.title}</h1>
            <span class="blog-date">${article.date}</span>
        </div>
        <div class="post-body">
            ${article.content}
        </div>
        <div class="post-footer">
            <a href="blog.html" class="btn btn-primary">← Back to Blog</a>
        </div>
    `;
});