
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('id');

  const articles = window.blogArticles || [];

  const article = articles.find(
    item => String(item.id) === articleId
  );

  const meta = document.getElementById('article-meta');
  const title = document.getElementById('article-title');
  const body = document.getElementById('article-body');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (!article) {
    document.title = 'Article Not Found — Iftekhar Hasan';

    title.textContent = 'Article not found';
    body.textContent = 'This article does not exist or is no longer available.';

    return;
  }

  // Update the browser tab title
  document.title = `${article.title} — Iftekhar Hasan`;

  // Display article metadata
  meta.textContent = `${article.category} / ${article.date}`;

  // Display article heading
  title.textContent = article.title;

  // Display the complete article content
  // Content comes from your own blog-data.js file
  body.innerHTML = article.content || '';

});
