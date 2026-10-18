
'use strict';

// ==========================================
// PROJECT CASE STUDIES
// ==========================================

const cases = {
  nps: {
    label: 'CLIENT CAPSTONE / URBAN SCIENCE',
    title: 'NPS Survey Platform',
    intro: 'A team-built platform for creating surveys, emailing recipients, and exploring feedback by location.',
    role: 'Front-end lead and documentation lead. My core contributions included survey creation and sending, email delivery, and the interactive 3D globe.',
    challenge: 'Make incoming feedback easy to notice and explore without forcing admins to navigate a long static list.',
    approach: 'Used React and Tailwind CSS for the interface and Mapbox GL JS for the globe. Responses appeared as color-coded markers; clicking a marker exposed its city, score, and response. New responses could bring the globe to the relevant location.',
    learning: 'Real-time interfaces need careful coordination between incoming data, component readiness, and rendering. Clear documentation also helped the team stay aligned.',
    links: []
  },

  stock: {
    label: 'INDEPENDENT PROJECT / MACHINE LEARNING',
    title: 'Stock Price Prediction',
    intro: 'A full-stack project exploring how sequence models can connect to a usable web interface.',
    role: 'Built a Python and Flask backend around a two-layer LSTM, alongside an interactive chart interface.',
    challenge: 'Transform historical prices into correctly shaped training sequences while keeping the prediction workflow understandable.',
    approach: 'Used a 60-day sliding window, Adam optimization, and mean squared error loss. The frontend accepted a ticker and displayed predictions alongside historical prices.',
    learning: 'Data preparation and chronological evaluation are central to time-series modeling. This project explores predictions; it does not establish reliable investment performance.',
    links: [
      [
        'Source code',
        'https://github.com/iftekhar9hasan/stock-price-prediction'
      ]
    ]
  },

  timer: {
    label: 'INDEPENDENT PROJECT / WEB APPLICATION',
    title: 'Pomodoro Enhancer',
    intro: 'A browser-based focus timer with customizable settings and background music.',
    role: 'Built the interface and timer experience using HTML, CSS, and JavaScript.',
    challenge: 'Keep a productivity tool simple enough to use without distracting from the task at hand.',
    approach: 'Organized the experience around the timer, with settings and music supporting the focus session.',
    learning: 'Small applications are a useful place to practice clear state transitions and intuitive controls.',
    links: [
      [
        'Live project',
        'https://promodoro-enhancer.netlify.app/'
      ],
      [
        'Source code',
        'https://github.com/iftekhar9hasan/Pomodoro-Times'
      ]
    ]
  }
};

// ==========================================
// CASE STUDY DIALOG
// ==========================================

const dialog = document.getElementById('case-dialog');
const caseContent = document.getElementById('case-content');

document.querySelectorAll('[data-case]').forEach(button => {
  button.onclick = () => {
    const project = cases[button.dataset.case];

    if (!project || !dialog || !caseContent) return;

    caseContent.innerHTML =
      '<div class="eyebrow">' + project.label + '</div>' +
      '<h2>' + project.title + '</h2>' +
      '<p>' + project.intro + '</p>' +
      [
        ['My contribution', project.role],
        ['The challenge', project.challenge],
        ['The approach', project.approach],
        ['What I learned', project.learning]
      ].map(([heading, text]) =>
        '<h3>' + heading + '</h3><p>' + text + '</p>'
      ).join('') +
      '<div class="actions">' +
      project.links.map(([text, url]) =>
        '<a class="btn" target="_blank" rel="noopener" href="' +
        url + '">' + text + ' ↗</a>'
      ).join('') +
      '</div>';

    dialog.showModal();
  };
});

if (dialog) {
  const closeButton = dialog.querySelector('.close');

  if (closeButton) {
    closeButton.onclick = () => dialog.close();
  }

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;

    const bounds = dialog.getBoundingClientRect();

    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      dialog.close();
    }
  });
}


// ==========================================
// COPYRIGHT YEAR
// ==========================================

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// INTERACTIVE AI NETWORK
// ==========================================

(() => {
  const canvas = document.getElementById('ai-network');
  const stage = document.getElementById('network-stage');
  const pauseButton = document.getElementById('rotate');

  if (!canvas || !stage || !pauseButton) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const tooltip = document.getElementById('network-tooltip');
  const tooltipType = document.getElementById('network-tooltip-type');
  const tooltipTitle = document.getElementById('network-tooltip-title');
  const tooltipDescription = document.getElementById(
    'network-tooltip-description'
  );

  const networkTitle = document.getElementById('network-title');
  const networkDescription = document.getElementById(
    'network-description'
  );

  const defaultTitle = networkTitle
    ? networkTitle.textContent
    : '';

  const defaultDescription = networkDescription
    ? networkDescription.textContent
    : '';

  const motionPreference = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  let paused = motionPreference.matches;
  let visible = true;
  let width = 0;
  let height = 0;
  let animationId = null;
  let lastTime = 0;
  let elapsed = 0;
  let hoveredNode = null;
  let selectedNode = null;

  const pointer = {
    x: -1000,
    y: -1000,
    active: false
  };

  // Real skills and projects represented by
  // the eight highlighted network nodes.

  const featuredNodes = [
    {
      x: 0.18,
      y: 0.22,
      label: 'React',
      type: 'Frontend',
      description: 'Building interactive web interfaces.',
      color: '#d1f36b',
      radius: 5.5
    },
    {
      x: 0.77,
      y: 0.19,
      label: 'Python',
      type: 'Programming',
      description: 'Software development, automation, and machine learning.',
      color: '#b9e994',
      radius: 6
    },
    {
      x: 0.86,
      y: 0.49,
      label: 'AI Evaluation',
      type: 'AI Quality',
      description: 'Model evaluation, structured rubrics, and Python tests.',
      color: '#e6ff9c',
      radius: 7
    },
    {
      x: 0.75,
      y: 0.80,
      label: 'Stock Prediction',
      type: 'Machine Learning',
      description: 'A Flask application powered by a two-layer LSTM.',
      color: '#b5d9ff',
      radius: 6
    },
    {
      x: 0.23,
      y: 0.79,
      label: 'Urban Science',
      type: 'Featured Project',
      description: 'Survey platform with an interactive 3D globe.',
      color: '#d1f36b',
      radius: 7
    },
    {
      x: 0.12,
      y: 0.49,
      label: 'JavaScript',
      type: 'Programming',
      description: 'Building responsive and interactive web applications.',
      color: '#b9e994',
      radius: 5.5
    },
    {
      x: 0.47,
      y: 0.12,
      label: 'Firebase',
      type: 'Applications',
      description: 'Authentication and real-time synchronization.',
      color: '#d1f36b',
      radius: 5
    },
    {
      x: 0.52,
      y: 0.88,
      label: 'Testing',
      type: 'Quality Engineering',
      description: 'Automated tests and reliable software behavior.',
      color: '#e6ff9c',
      radius: 5.5
    }
  ];

  const nodes = [];

  // Seeded randomness produces the same
  // network layout after each refresh.

  let seed = 247;

  function random() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  }

  function createNodes() {
    nodes.length = 0;

    featuredNodes.forEach((node, index) => {
      nodes.push({
        ...node,
        id: index,
        featured: true,
        phase: random() * Math.PI * 2,
        speed: 0.6 + random() * 0.7,
        offset: 2 + random() * 4,
        px: 0,
        py: 0
      });
    });

    // Decorative nodes connect the network.

    for (let i = 0; i < 30; i++) {
      nodes.push({
        id: featuredNodes.length + i,
        x: 0.06 + random() * 0.88,
        y: 0.08 + random() * 0.84,
        featured: false,
        radius: 1.4 + random() * 1.7,
        phase: random() * Math.PI * 2,
        speed: 0.4 + random() * 0.9,
        offset: 3 + random() * 6,
        color: '#8fb89b',
        px: 0,
        py: 0
      });
    }
  }

  createNodes();

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();

    width = rect.width;
    height = rect.height;

    if (!width || !height) return;

    const ratio = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    updatePositions();
    draw();
  }

  function updatePositions() {
    const mobile = width < 360;

    nodes.forEach(node => {
      const scale = mobile ? 0.6 : 1;

      const dx = paused
        ? 0
        : Math.sin(
            elapsed * node.speed + node.phase
          ) * node.offset * scale;

      const dy = paused
        ? 0
        : Math.cos(
            elapsed * node.speed * 0.8 + node.phase
          ) * node.offset * scale;

      node.px = node.x * width + dx;
      node.py = node.y * height + dy;
    });
  }

  function distance(a, b) {
    return Math.hypot(
      a.px - b.px,
      a.py - b.py
    );
  }

  function drawBackground() {
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      10,
      width / 2,
      height / 2,
      width * 0.65
    );

    gradient.addColorStop(
      0,
      'rgba(110, 156, 90, 0.11)'
    );

    gradient.addColorStop(
      1,
      'rgba(25, 54, 45, 0)'
    );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle background grid.

    ctx.strokeStyle = 'rgba(170, 205, 160, 0.035)';
    ctx.lineWidth = 1;

    const gridSize = 28;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  function drawConnections() {
    const maxDistance = Math.min(
      width * 0.31,
      135
    );

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];

        const d = distance(a, b);

        if (d > maxDistance) continue;

        const proximity = 1 - d / maxDistance;

        const highlighted =
          a === hoveredNode ||
          b === hoveredNode ||
          a === selectedNode ||
          b === selectedNode;

        const alpha = highlighted
          ? 0.18 + proximity * 0.55
          : 0.045 + proximity * 0.17;

        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);

        ctx.strokeStyle = highlighted
          ? `rgba(209, 243, 107, ${alpha})`
          : `rgba(157, 205, 159, ${alpha})`;

        ctx.lineWidth = highlighted ? 1.35 : 0.7;
        ctx.stroke();
      }
    }
  }

  function drawCenterConnections() {
    const cx = width / 2;
    const cy = height / 2;

    featuredNodes.forEach((_, index) => {
      const node = nodes[index];

      const alpha =
        node === hoveredNode ||
        node === selectedNode
          ? 0.4
          : 0.09;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(node.px, node.py);

      ctx.strokeStyle =
        `rgba(209, 243, 107, ${alpha})`;

      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }

  function drawPointerConnections() {
    if (!pointer.active) return;

    nodes.forEach(node => {
      const d = Math.hypot(
        node.px - pointer.x,
        node.py - pointer.y
      );

      if (d > 85) return;

      const alpha = (1 - d / 85) * 0.45;

      ctx.beginPath();
      ctx.moveTo(pointer.x, pointer.y);
      ctx.lineTo(node.px, node.py);

      ctx.strokeStyle =
        `rgba(209, 243, 107, ${alpha})`;

      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }

  function drawNode(node) {
    const active =
      node === hoveredNode ||
      node === selectedNode;

    const radius = node.radius + (active ? 2.5 : 0);

    if (node.featured) {
      const glowRadius = active ? 27 : 17;

      const glow = ctx.createRadialGradient(
        node.px,
        node.py,
        0,
        node.px,
        node.py,
        glowRadius
      );

      glow.addColorStop(
        0,
        active
          ? 'rgba(209, 243, 107, 0.28)'
          : 'rgba(209, 243, 107, 0.13)'
      );

      glow.addColorStop(
        1,
        'rgba(209, 243, 107, 0)'
      );

      ctx.fillStyle = glow;

      ctx.beginPath();
      ctx.arc(
        node.px,
        node.py,
        glowRadius,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Outer ring.

      ctx.beginPath();
      ctx.arc(
        node.px,
        node.py,
        radius + 5,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle = active
        ? 'rgba(209, 243, 107, 0.7)'
        : 'rgba(209, 243, 107, 0.25)';

      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Main node.

    ctx.beginPath();
    ctx.arc(
      node.px,
      node.py,
      radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = node.color;
    ctx.fill();

    if (node.featured) {
      ctx.beginPath();
      ctx.arc(
        node.px,
        node.py,
        Math.max(1.5, radius * 0.35),
        0,
        Math.PI * 2
      );

      ctx.fillStyle = '#19362d';
      ctx.fill();
    }

    // Show labels when hovering or selecting.

    if (active && node.featured) {
      ctx.font = '600 11px "DM Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const labelWidth =
        ctx.measureText(node.label).width;

      const labelX = Math.max(
        labelWidth / 2 + 10,
        Math.min(
          width - labelWidth / 2 - 10,
          node.px
        )
      );

      const labelY = node.py > 35
        ? node.py - 23
        : node.py + 24;

      ctx.fillStyle = '#f1f6e8';
      ctx.fillText(
        node.label,
        labelX,
        labelY
      );
    }
  }

  function draw() {
    if (!width || !height) return;

    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    drawBackground();
    drawConnections();
    drawCenterConnections();
    drawPointerConnections();

    nodes.forEach(drawNode);
  }

  // ========================================
  // NODE INTERACTION
  // ========================================

  function findNode(x, y) {
    let closest = null;
    let minDistance = 23;

    nodes.forEach(node => {
      if (!node.featured) return;

      const d = Math.hypot(
        node.px - x,
        node.py - y
      );

      if (d < minDistance) {
        closest = node;
        minDistance = d;
      }
    });

    return closest;
  }

  function positionTooltip(node) {
    if (!node || !tooltip) return;

    const tooltipWidth =
      tooltip.offsetWidth || 205;

    const tooltipHeight =
      tooltip.offsetHeight || 95;

    const left = Math.max(
      4,
      Math.min(
        width - tooltipWidth - 4,
        node.px + 15
      )
    );

    const top = Math.max(
      4,
      Math.min(
        height - tooltipHeight - 4,
        node.py - tooltipHeight - 10
      )
    );

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  function showTooltip(node) {
    if (
      !tooltip ||
      !tooltipType ||
      !tooltipTitle ||
      !tooltipDescription
    ) {
      return;
    }

    if (!node) {
      tooltip.hidden = true;
      return;
    }

    tooltipType.textContent = node.type;
    tooltipTitle.textContent = node.label;
    tooltipDescription.textContent =
      node.description;

    tooltip.hidden = false;

    positionTooltip(node);
  }

  function selectNode(node) {
    selectedNode = node;

    if (node) {
      if (networkTitle) {
        networkTitle.textContent = node.label;
      }

      if (networkDescription) {
        networkDescription.textContent =
          node.description;
      }

      showTooltip(node);
    } else {
      if (networkTitle) {
        networkTitle.textContent = defaultTitle;
      }

      if (networkDescription) {
        networkDescription.textContent =
          defaultDescription;
      }

      showTooltip(null);
    }

    draw();
  }

  function getPointerPosition(event) {
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  canvas.addEventListener(
    'pointermove',
    event => {
      if (event.pointerType === 'touch') return;

      const position = getPointerPosition(event);

      pointer.x = position.x;
      pointer.y = position.y;
      pointer.active = true;

      hoveredNode = findNode(
        position.x,
        position.y
      );

      canvas.style.cursor = hoveredNode
        ? 'pointer'
        : 'crosshair';

      showTooltip(
        hoveredNode || selectedNode
      );

      if (paused) draw();
    }
  );

  canvas.addEventListener(
    'pointerleave',
    () => {
      pointer.active = false;
      hoveredNode = null;

      showTooltip(selectedNode);

      if (paused) draw();
    }
  );

  canvas.addEventListener(
    'click',
    event => {
      const position = getPointerPosition(event);

      const clickedNode = findNode(
        position.x,
        position.y
      );

      if (clickedNode === selectedNode) {
        selectNode(null);
      } else {
        selectNode(clickedNode);
      }
    }
  );

  // ========================================
  // PAUSE / PLAY
  // ========================================

  function updatePauseButton() {
    pauseButton.textContent = paused
      ? 'Play ↔'
      : 'Pause ↔';

    pauseButton.setAttribute(
      'aria-pressed',
      String(paused)
    );
  }

  pauseButton.addEventListener(
    'click',
    () => {
      paused = !paused;

      updatePauseButton();

      if (paused) {
        stopAnimation();
        draw();
      } else {
        lastTime = 0;
        startAnimation();
      }
    }
  );

  // ========================================
  // ANIMATION LOOP
  // ========================================

  function animate(timestamp) {
    animationId = null;

    if (
      paused ||
      !visible ||
      document.hidden
    ) {
      return;
    }

    if (!lastTime) {
      lastTime = timestamp;
    }

    const delta = Math.min(
      (timestamp - lastTime) / 1000,
      0.05
    );

    lastTime = timestamp;
    elapsed += delta * 0.65;

    updatePositions();

    if (hoveredNode) {
      positionTooltip(hoveredNode);
    } else if (selectedNode) {
      positionTooltip(selectedNode);
    }

    draw();

    animationId =
      requestAnimationFrame(animate);
  }

  function startAnimation() {
    if (
      animationId !== null ||
      paused ||
      !visible ||
      document.hidden
    ) {
      return;
    }

    animationId =
      requestAnimationFrame(animate);
  }

  function stopAnimation() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    lastTime = 0;
  }

  // Pause drawing when the network
  // leaves the viewport.

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        visible = entries[0].isIntersecting;

        if (visible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      {
        threshold: 0.05
      }
    );

    observer.observe(stage);
  }

  // Respect reduced-motion settings.

  if (motionPreference.addEventListener) {
    motionPreference.addEventListener(
      'change',
      event => {
        paused = event.matches;

        updatePauseButton();

        if (paused) {
          stopAnimation();
          updatePositions();
          draw();
        } else {
          startAnimation();
        }
      }
    );
  }

  // Stop drawing in background tabs.

  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    }
  );

  // Resize the canvas with its container.

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(
      () => resizeCanvas()
    );

    resizeObserver.observe(stage);
  } else {
    window.addEventListener(
      'resize',
      resizeCanvas
    );
  }

  resizeCanvas();
  updatePauseButton();
  startAnimation();
})();

// ==========================================
// BLOG POSTS AND THOUGHTS
// ==========================================

const writingData = {
  articles: window.blogArticles || [],
  thoughts: window.blogThoughts || []
};

let writingMode = 'articles';

// Escape user-authored plain text before
// inserting it into HTML.

const escapeText = value =>
  String(value ?? '').replace(
    /[&<>"']/g,
    character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[character])
  );

function renderWriting() {
  const items = writingMode === 'thoughts'
  ? [...writingData.thoughts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5)
  : writingData.articles
      .filter(article => article.featured === true)
      .slice(0, 2);

  const articlesPanel =
    document.getElementById('articles-panel');

  const thoughtsPanel =
    document.getElementById('thoughts-panel');

  const emptyMessage =
    document.getElementById('writing-empty');

  if (!articlesPanel || !thoughtsPanel) return;

  articlesPanel.hidden =
    writingMode !== 'articles';

  thoughtsPanel.hidden =
    writingMode !== 'thoughts';

  if (emptyMessage) {
    emptyMessage.hidden = items.length > 0;
  }

  const panel = document.getElementById(
    writingMode + '-panel'
  );

  panel.innerHTML = items.map(item =>
    writingMode === 'articles'
      ? '<article class="article-entry">' +
        '<div class="article-meta">' +
        escapeText(item.category) +
        ' / ' +
        escapeText(item.date) +
        '</div>' +
        '<h3>' +
        escapeText(item.title) +
        '</h3>' +
        '<p>' +
        escapeText(item.summary) +
        '</p>' +
        '<button class="case" data-article="' +
        escapeText(item.id) +
        '">' +
        'Read the story ↗' +
        '</button>' +
        '</article>'
      : '<article class="thought-entry">' +
        '<div class="avatar" aria-hidden="true">' +
        'ih.' +
        '</div>' +
        '<div>' +
        '<div class="thought-name">' +
        'Iftekhar Hasan' +
        '<span class="thought-date">' +
        escapeText(item.date) +
        '</span>' +
        '</div>' +
        '<p>' +
        escapeText(item.text) +
        '</p>' +
        '</div>' +
        '</article>'
  ).join('');

  // Article dialog events.

  panel.querySelectorAll(
    '[data-article]'
  ).forEach(button => {
    button.onclick = () => {
      const article = writingData.articles.find(
        item =>
          String(item.id) ===
          button.dataset.article
      );

      if (!article || !dialog || !caseContent) {
        return;
      }

      caseContent.innerHTML =
        '<div class="eyebrow">' +
        escapeText(article.category) +
        ' / ' +
        escapeText(article.date) +
        '</div>' +
        '<h2>' +
        escapeText(article.title) +
        '</h2>' +
        '<div class="article-body">' +
        article.content +
        '</div>';

      dialog.showModal();
    };
  });
}

// ==========================================
// WRITING TABS
// ==========================================

const writingTabs = [
  ...document.querySelectorAll('[data-writing]')
];

writingTabs.forEach(button => {
  button.onclick = () => {
    writingMode = button.dataset.writing;

    writingTabs.forEach(item => {
      const active = item === button;

      item.classList.toggle(
        'active',
        active
      );

      item.setAttribute(
        'aria-selected',
        String(active)
      );

      item.tabIndex = active ? 0 : -1;
    });

    renderWriting();
  };

  button.onkeydown = event => {
    if (
      ![
        'ArrowLeft',
        'ArrowRight',
        'Home',
        'End'
      ].includes(event.key)
    ) {
      return;
    }

    event.preventDefault();

    const next =
      event.key === 'Home'
        ? writingTabs[0]
        : event.key === 'End'
          ? writingTabs[writingTabs.length - 1]
          : writingTabs[
              event.key === 'ArrowRight'
                ? (
                    writingTabs.indexOf(button) + 1
                  ) % writingTabs.length
                : (
                    writingTabs.indexOf(button) -
                    1 +
                    writingTabs.length
                  ) % writingTabs.length
            ];

    next.click();
    next.focus();
  };
});

// ==========================================
// HOMEPAGE WRITING COUNTS
// ==========================================

const articleCount = document.getElementById('article-count');
const thoughtCount = document.getElementById('thought-count');

if (articleCount) {
  articleCount.textContent = writingData.articles
    .filter(article => article.featured === true)
    .slice(0, 2).length;
}

if (thoughtCount) {
  thoughtCount.textContent = Math.min(writingData.thoughts.length, 5);
}

// ==========================================
// INITIAL RENDER
// ==========================================

renderWriting();


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  function closeMobileMenu() {
    mobileMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute(
      'aria-label',
      'Open navigation menu'
    );
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    mobileMenu.hidden = isOpen;
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Open navigation menu' : 'Close navigation menu'
    );
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) {
      closeMobileMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener('click', event => {
    if (
      !mobileMenu.hidden &&
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  window.matchMedia('(min-width: 801px)').addEventListener(
    'change',
    event => {
      if (event.matches) closeMobileMenu();
    }
  );
}