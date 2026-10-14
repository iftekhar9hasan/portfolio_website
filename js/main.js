// PROJECT CASE STUDIES

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

    // PROJECT FILTERS

    document.querySelectorAll('.filter[data-filter]').forEach(button => {

      button.onclick = () => {

        document.querySelectorAll('.filter[data-filter]').forEach(item => {

          item.classList.toggle('active', item === button);

          item.setAttribute('aria-pressed', item === button);

        });

        document.querySelectorAll('.project').forEach(project => {

          const hide =

            button.dataset.filter !== 'all' &&

            project.dataset.category !== button.dataset.filter;

          project.classList.toggle('hidden', hide);

        });

      };

    });

    // DIALOGS

    const dialog = document.getElementById('case-dialog');

    document.querySelectorAll('[data-case]').forEach(button => {

      button.onclick = () => {

        const project = cases[button.dataset.case];

        document.getElementById('case-content').innerHTML =

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

    document.querySelector('.close').onclick = () => dialog.close();

    dialog.addEventListener('click', event => {

      if (event.target === dialog) {

        const bounds = dialog.getBoundingClientRect();

        if (

          event.clientX < bounds.left ||

          event.clientX > bounds.right ||

          event.clientY < bounds.top ||

          event.clientY > bounds.bottom

        ) {

          dialog.close();

        }

      }

    });

    // THEME

    let theme = localStorage.getItem('portfolio-theme');

    if (theme === 'dark') {

      document.body.classList.add('dark');

    }

    document.querySelector('.theme').onclick = () => {

      document.body.classList.toggle('dark');

      localStorage.setItem(

        'portfolio-theme',

        document.body.classList.contains('dark') ? 'dark' : 'light'

      );

    };

    document.getElementById('year').textContent = new Date().getFullYear();

    // ANIMATED GLOBE

    const canvas = document.getElementById('globe');

    const ctx = canvas.getContext('2d');

    let angle = 0;

    let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cityIndex = 0;

    const cities = [

      'Detroit — where the capstone began',

      'London — illustrative response marker',

      'Tokyo — illustrative response marker',

      'Sydney — illustrative response marker'

    ];

    const pauseButton = document.getElementById('rotate');

    function updatePause() {

      pauseButton.textContent = paused ? 'Rotate ↔' : 'Pause ↔';

    }

    updatePause();

    pauseButton.onclick = () => {

      paused = !paused;

      updatePause();

    };

    canvas.onclick = () => {

      cityIndex = (cityIndex + 1) % cities.length;

      document.getElementById('city').textContent = cities[cityIndex];

      angle += .7;

    };

    function frame() {

      const width = canvas.clientWidth;

      const height = canvas.clientHeight;

      const ratio = Math.min(devicePixelRatio || 1, 2);

      if (

        canvas.width !== width * ratio ||

        canvas.height !== height * ratio

      ) {

        canvas.width = width * ratio;

        canvas.height = height * ratio;

      }

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      ctx.clearRect(0, 0, width, height);

      const radius = Math.min(width * .34, height * .44);

      const centerX = width / 2;

      const centerY = height / 2;

      const glow = ctx.createRadialGradient(

        centerX - radius * .3,

        centerY - radius * .3,

        10,

        centerX,

        centerY,

        radius

      );

      glow.addColorStop(0, '#405b39');

      glow.addColorStop(1, '#142f28');

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);

      ctx.fill();

      ctx.strokeStyle = '#88a66b80';

      ctx.lineWidth = 1;

      ctx.stroke();

      // Latitude rings

      for (let latitude = -60; latitude <= 60; latitude += 30) {

        const y =

          centerY + radius * Math.sin(latitude * Math.PI / 180);

        const ringRadius =

          radius * Math.cos(latitude * Math.PI / 180);

        ctx.beginPath();

        ctx.ellipse(

          centerX,

          y,

          ringRadius,

          ringRadius * .17,

          0,

          0,

          Math.PI * 2

        );

        ctx.stroke();

      }

      // Rotating longitude rings

      for (let longitude = 0; longitude < 8; longitude++) {

        const rotation = angle + longitude * Math.PI / 8;

        ctx.beginPath();

        ctx.ellipse(

          centerX,

          centerY,

          Math.max(.1, Math.abs(Math.cos(rotation)) * radius),

          radius,

          0,

          0,

          Math.PI * 2

        );

        ctx.stroke();

      }

      // Sample markers

      const points = [

        [.45, -.4],

        [1.8, .1],

        [3.2, -.1],

        [4.8, .6],

        [5.5, -.5]

      ];

      points.forEach(([longitude, latitude], index) => {

        const rotation = longitude + angle;

        const depth = Math.cos(rotation) * Math.cos(latitude);

        if (depth < 0) return;

        const x =

          centerX + radius * Math.sin(rotation) * Math.cos(latitude);

        const y = centerY + radius * Math.sin(latitude);

        ctx.fillStyle = index === cityIndex ? '#efffb5' : '#d1f36b';

        ctx.beginPath();

        ctx.arc(x, y, 4, 0, Math.PI * 2);

        ctx.fill();

        ctx.strokeStyle = '#d1f36b40';

        ctx.beginPath();

        ctx.arc(x, y, 9, 0, Math.PI * 2);

        ctx.stroke();

      });

      if (!paused) angle += .002;

      requestAnimationFrame(frame);

    }

    frame();

    // BLOG AND THOUGHTS

    const writingData = {

      articles: window.blogArticles,

      thoughts: window.blogThoughts

    };

    let writingMode = 'articles';

    const escapeText = value =>

      String(value).replace(/[&<>"']/g, character => ({

        '&': '&amp;',

        '<': '&lt;',

        '>': '&gt;',

        '"': '&quot;',

        "'": '&#39;'

      }[character]));

    function renderWriting() {

      const query = document.getElementById('writing-search')

        .value.toLowerCase().trim();

      const items = writingData[writingMode].filter(item =>

        [

          item.title,

          item.summary,

          item.text,

          item.category,

          item.content

        ]

          .filter(Boolean)

          .join(' ')

          .toLowerCase()

          .includes(query)

      );

      document.getElementById('articles-panel').hidden =

        writingMode !== 'articles';

      document.getElementById('thoughts-panel').hidden =

        writingMode !== 'thoughts';

      document.getElementById('writing-empty').hidden = items.length > 0;

      const panel = document.getElementById(writingMode + '-panel');

      panel.innerHTML = items.map(item =>

        writingMode === 'articles'

          ? '<article class="article-entry">' +

            '<div class="article-meta">' +

            escapeText(item.category) + ' / ' + escapeText(item.date) +

            '</div><h3>' + escapeText(item.title) + '</h3>' +

            '<p>' + escapeText(item.summary) + '</p>' +

            '<button class="case" data-article="' + item.id + '">' +

            'Read the story ↗</button></article>'

          : '<article class="thought-entry">' +

            '<div class="avatar" aria-hidden="true">ih.</div>' +

            '<div><div class="thought-name">Iftekhar Hasan' +

            '<span class="thought-date">' +

            escapeText(item.date) +

            '</span></div><p>' +

            escapeText(item.text) +

            '</p></div></article>'

      ).join('');

      panel.querySelectorAll('[data-article]').forEach(button => {

        button.onclick = () => {

          const article = writingData.articles.find(item =>

            String(item.id) === button.dataset.article

          );

          document.getElementById('case-content').innerHTML =

            '<div class="eyebrow">' +

            escapeText(article.category) + ' / ' +

            escapeText(article.date) +

            '</div><h2>' +

            escapeText(article.title) +

            '</h2><div class="article-body">' +

            article.content +

            '</div>';

          dialog.showModal();

        };

      });

    }

    const writingTabs = [

      ...document.querySelectorAll('[data-writing]')

    ];

    writingTabs.forEach(button => {

      button.onclick = () => {

        writingMode = button.dataset.writing;

        writingTabs.forEach(item => {

          item.classList.toggle('active', item === button);

          item.setAttribute(

            'aria-selected',

            String(item === button)

          );

          item.tabIndex = item === button ? 0 : -1;

        });

        renderWriting();

      };

      button.onkeydown = event => {

        if (

          ['ArrowLeft', 'ArrowRight', 'Home', 'End']

            .includes(event.key)

        ) {

          event.preventDefault();

          const next =

            event.key === 'Home'

              ? writingTabs[0]

              : event.key === 'End'

                ? writingTabs[1]

                : writingTabs[1 - writingTabs.indexOf(button)];

          next.click();

          next.focus();

        }

      };

    });

    document.getElementById('writing-search').oninput = renderWriting;

    renderWriting();
