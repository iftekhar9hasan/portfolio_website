// Projects data for the portfolio
const projectsData = [
    {
        id: 1,
        title: "Employee Management System",
        description: "A user-friendly platform for employers and employees featuring secure logins, dual authentication, registration, messaging, and job management to improve efficiency for Crosscut Landscaping.",
        image: "assets/Employe_Management.png",
        technologies: ["Python", "CustomTkinter", "Pillow", "AWS S3", "JSON"],
        category: "desktop-application",
        links: {
            github: "https://github.com/Sadman988/Group-Project-3---Employee-Management-System",
            demo: null
        },
        featured: true,
        status: "completed",
        date: "2024"
    },
    {
        id: 2,
        title: "Stock Price Prediction",
        description: "Full-stack web app predicting stock prices using Flask and an interactive frontend. Trained a two-layer LSTM model on yfinance data with a 60-day window, MSE loss, and Adam optimizer.",
        image: "assets/Stock_Price.png",
        technologies: ["Python", "Flask", "TensorFlow", "HTML", "CSS", "JavaScript"],
        category: "machine-learning",
        links: {
            github: "https://github.com/iftekhar9hasan/stock-price-prediction",
            demo: null
        },
        featured: true,
        status: "completed",
        date: "2024"
    },
    {
        id: 3,
        title: "Detroit Tech Innovators Web App",
        description: "A central digital hub promoting tech education, collaboration, and events in Detroit, showcasing innovation challenges, programs, startup resources, and networking opportunities.",
        image: "assets/Detroit_Tech_Innov.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "web-development",
        links: {
            github: "https://github.com/iftekhar9hasan/detroit-tech-innovators",
            demo: "https://promodoro-enhancer.netlify.app/"
        },
        featured: true,
        status: "completed",
        date: "2024"
    },
    {
        id: 4,
        title: "Pomodoro Web Application",
        description: "A web-based timer using the Pomodoro Technique to boost productivity. Features customizable settings, background music, and a user-friendly interface. Demonstrates HTML, CSS, and JS skills.",
        image: "assets/Pomodoro_screen_01.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "web-development",
        links: {
            github: "https://github.com/iftekhar9hasan/Pomodoro-Times",
            demo: "https://promodoro-enhancer.netlify.app/"
        },
        featured: false,
        status: "completed",
        date: "2023"
    },
    {
        id: 5,
        title: "Discrete Logic Puzzle Game",
        description: "Developed a logic puzzle game using Python's Tkinter library and discrete math concepts. Features puzzle generation, row checking, interactive display, input validation, and error handling.",
        image: "assets/Discrete.Puzzle.01.png",
        technologies: ["Python", "Tkinter"],
        category: "desktop-application",
        links: {
            github: "https://github.com/iftekhar9hasan/Interactive-Discreate-Logic-Puzzle-Game-",
            demo: null
        },
        featured: false,
        status: "completed",
        date: "2023"
    },
    {
        id: 6,
        title: "Snake Game",
        description: "Classic Snake Game developed using Java Swing. Features snake movement on a grid, fruit consumption for growth, arrow key controls, score tracking, collision detection, and game-over state.",
        image: "assets/Snake_Game_01.png",
        technologies: ["Java", "Swing"],
        category: "desktop-application",
        links: {
            github: "https://github.com/iftekhar9hasan/SnakeGame",
            demo: null
        },
        featured: false,
        status: "completed",
        date: "2022"
    },
    {
        id: 7,
        title: "Exploratory Data Analysis",
        description: "Analyzed an auto dataset using Python libraries (matplotlib, statistics, csv) for data cleaning and statistical analysis. Managed outliers, generated correlation plots, and performed Pearson correlation.",
        image: "assets/exploratory.jpg",
        technologies: ["Python", "Matplotlib", "Pandas", "NumPy"],
        category: "data-analysis",
        links: {
            github: "https://github.com/iftekhar9hasan/Exploratory-Data-Analysis-for-Auto-Dataset",
            demo: null
        },
        featured: false,
        status: "completed",
        date: "2023"
    }
];

// Technology icons mapping
const techIcons = {
    "Python": "assets/python.svg",
    "JavaScript": "assets/javascript.svg",
    "Java": "assets/java.svg",
    "HTML": "assets/html-5.svg",
    "CSS": "assets/css-3.svg",
    "Flask": "assets/flask.svg",
    "React": "assets/react.svg",
    "Node.js": "assets/nodejs.svg",
    "TensorFlow": "assets/tensorflow.svg",
    "SQLite": "assets/sqlite.svg",
    "Tkinter": "assets/python.svg", 
    "Swing": "assets/java.svg", 
    "Matplotlib": "assets/python.svg",
    "Pandas": "assets/python.svg",
    "NumPy": "assets/python.svg"
};

// Category filters
const categoryFilters = {
    "all": "All Projects",
    "web-development": "Web Development",
    "machine-learning": "Machine Learning",
    "mobile-development": "Mobile Development",
    "data-analysis": "Data Analysis",
    "desktop-application": "Desktop Applications"
};

// Make data available globally
window.projectsData = projectsData;
window.techIcons = techIcons;
window.categoryFilters = categoryFilters;

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, techIcons, categoryFilters };
}

