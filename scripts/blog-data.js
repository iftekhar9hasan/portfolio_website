// ===== BLOG ARTICLES =====
const blogArticles = [
    {
        id: 1,
        title: "How I Built a Stock Price Predictor Using LSTM Neural Networks",
        category: "Machine Learning",
        date: "March 15, 2025",
        summary: "A walkthrough of my experience training a two-layer LSTM model on yfinance data, handling overfitting, and deploying it with Flask.",
        content: `
            <p>When I started building my stock price predictor, I had no idea how deep the rabbit hole would go. What started as a class project turned into one of the most educational experiences of my CS degree.</p>
            <h2>The Problem</h2>
            <p>Predicting stock prices is notoriously difficult. Markets are influenced by everything from earnings reports to tweets. My goal wasn't to build a perfect predictor — it was to understand how LSTM networks handle sequential time-series data.</p>
            <h2>The Architecture</h2>
            <p>I used a two-layer LSTM model built with TensorFlow. The input was 60 days of closing prices, and the output was the next day's predicted price. I used a sliding window approach to generate training samples from historical data pulled via the yfinance library.</p>
            <h2>The Challenges</h2>
            <p>Overfitting was my biggest enemy. My model would perform great on training data but fall apart on validation. I solved this with dropout layers and early stopping. Getting the data normalization right was also tricky — I used MinMaxScaler and had to be careful to scale test data using the training set's parameters.</p>
            <h2>Deployment</h2>
            <p>Deploying with Flask was surprisingly smooth. The model is loaded once at startup and serves predictions via a REST endpoint. The frontend sends a stock ticker symbol, the backend fetches recent data, runs it through the model, and returns a prediction.</p>
            <h2>What I Learned</h2>
            <p>The gap between a working Jupyter notebook and a production-ready web app is massive. But bridging that gap taught me more than any course could.</p>
        `,
        featured: true
    },
    {
        id: 2,
        title: "Building a Multi-Page Portfolio Without Any Framework",
        category: "Web Dev",
        date: "February 10, 2025",
        summary: "What I learned designing and coding a multi-page portfolio from scratch using only HTML, CSS, and vanilla JavaScript — no React, no Vue, no shortcuts.",
        content: `
            <p>Most tutorials tell you to use React for everything. I decided to build my entire portfolio in vanilla HTML, CSS, and JavaScript. Here's what I discovered.</p>
            <h2>Why No Framework?</h2>
            <p>I wanted to understand the fundamentals deeply. If I can't build it without a framework, I don't truly understand it. This portfolio was my chance to prove that to myself.</p>
            <h2>The Hardest Parts</h2>
            <p>Managing state across pages was the biggest challenge. Without React's component state, I had to be intentional about localStorage, URL parameters, and how data flows between pages. The blog system was particularly interesting — I built a dynamic rendering system using plain JavaScript that reads from a data file and generates HTML on the fly.</p>
            <h2>CSS Architecture</h2>
            <p>I split styles into main.css for global styles and responsive.css for breakpoints. Using CSS custom properties (variables) throughout made theme switching trivially easy — just swap a handful of color values on the root element.</p>
            <h2>Performance</h2>
            <p>Without a framework adding overhead, the site is extremely fast. No bundle to parse, no virtual DOM, no hydration. Just HTML that the browser renders immediately.</p>
        `,
        featured: false
    },
    {
        id: 3,
        title: "My Journey as a CS Graduate — What I Wish I Knew Earlier",
        category: "Career",
        date: "January 5, 2025",
        summary: "Honest reflections on four years of Computer Science at Wayne State University, the projects that mattered, and how I prepared for the job market.",
        content: `
            <p>I graduated with a 3.72 GPA. I built projects I'm proud of. I also made a lot of mistakes I wish I could go back and fix. Here's what I wish someone had told me on day one.</p>
            <h2>Start Building Things Early</h2>
            <p>Your first semester, not your last. I wasted two years doing only coursework. The projects that got me interviews were all personal projects I built because I was curious, not because a professor assigned them.</p>
            <h2>GPA Matters Less Than You Think</h2>
            <p>Past a certain threshold, nobody cares. What they care about is: can you build things? Can you solve problems? Can you communicate? Your GitHub profile is worth more than your transcript to most tech employers.</p>
            <h2>Learn to Talk About Your Work</h2>
            <p>The hardest skill nobody teaches you is explaining what you built to a non-technical person. Practice this constantly. If you can't explain your project simply, you don't understand it well enough.</p>
            <h2>Network Early and Often</h2>
            <p>I was terrified of networking. I thought it felt fake. But it's just talking to people who share your interests. LinkedIn, local meetups, hackathons — these connections matter more than any class you'll take.</p>
        `,
        featured: false
    },
    {
        id: 4,
        title: "Understanding REST APIs — A Practical Guide for CS Students",
        category: "Tutorial",
        date: "December 12, 2024",
        summary: "Everything I wish I understood about REST APIs before I started building web applications. Practical examples with Python and Flask.",
        content: `
            <p>REST APIs are everywhere. Every app you use talks to one. Yet when I started college, I had no idea what they were. This guide is what I wish I'd had.</p>
            <h2>What is a REST API?</h2>
            <p>A REST API is a way for two programs to talk to each other over the internet using HTTP. Think of it like a waiter at a restaurant — you give it a request, it goes to the kitchen (server), and brings back a response (data).</p>
            <h2>The Four Main Methods</h2>
            <p>GET retrieves data. POST creates new data. PUT updates existing data. DELETE removes data. That's it. Most of what you'll ever build uses just these four.</p>
            <h2>Building One with Flask</h2>
            <p>Flask makes building APIs incredibly simple. A basic endpoint is just a Python function with a decorator. Add some logic, return a JSON response, and you have an API.</p>
            <h2>Common Mistakes</h2>
            <p>Not handling errors properly. Returning HTML when the client expects JSON. Forgetting CORS headers when your frontend is on a different domain. These tripped me up for weeks.</p>
        `,
        featured: false
    },
    {
        id: 5,
        title: "Docker for Developers Who Are Scared of Docker",
        category: "Tutorial",
        date: "November 20, 2024",
        summary: "Docker seemed intimidating until I understood what it actually does. A beginner-friendly breakdown with real examples from my own projects.",
        content: `
            <p>I avoided Docker for a year because it seemed complicated. Then I spent a day really learning it and realized I'd been scared of nothing. Here's the explanation I wish I'd had.</p>
            <h2>What Docker Actually Does</h2>
            <p>Docker packages your app and everything it needs to run into a single box called a container. That container runs identically on your laptop, your teammate's laptop, and a cloud server. No more "it works on my machine."</p>
            <h2>Three Concepts You Actually Need</h2>
            <p>Image: a blueprint for your container. Container: a running instance of an image. Dockerfile: instructions for building an image. That's the mental model. Everything else builds on this.</p>
            <h2>A Real Example</h2>
            <p>For my Flask stock predictor, my Dockerfile installs Python, copies my code, installs dependencies from requirements.txt, and starts the Flask server. Four lines. Now anyone can run my app with a single command.</p>
        `,
        featured: false
    }
];

// ===== THOUGHTS (Twitter-style) =====
const blogThoughts = [
    {
        id: 4,
        date: "August 15, 2025",
        text: "3.72 GPA. Graduated last week. Already getting ghosted by companies. Job hunting humbles you fast. Keep building, keep applying. #CareerAdvice #CSGraduate"
    },
    {
        id: 2,
        date: "July 28, 2025",
        text: "CSS tip: stop fighting position: fixed inside containers. If a parent has transform, filter, or will-change set — fixed positioning breaks. Spent 2 hours debugging this so you don't have to. #WebDev #CSS #TIL"
    },
    {
        id: 3,
        date: "May 22, 2025",
        text: "Unpopular opinion: Learning vanilla JS before React actually made me a better React developer. Understanding what the framework is doing for you changes everything. #JavaScript #WebDev"
    },
    {
        id: 6,
        date: "May 8, 2025",
        text: "Started learning TypeScript today. Two hours in and I already understand why people love it. Type errors caught at compile time > runtime crashes any day. #TypeScript #JavaScript"
    },
    {
        id: 7,
        date: "February 28, 2025",
        text: "Git tip of the day: commit small, commit often. A commit message that says 'fixed stuff' after 3 days of work is a code smell. Future you will be grateful for atomic commits. #Git #Programming"
    },

];

// Make available globally
window.blogArticles = blogArticles;
window.blogThoughts = blogThoughts;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogArticles, blogThoughts };
}