interface Project {
    title: string;
    tech: string;
    year: string;
    bullets: string[];
}

export const projects: Project[] = [
    {
        title: "Heart Risk Predictor",
        tech: "Python",
        year: "2025",
        bullets: [
            "Designed and implemented a machine learning application to assess potential heart disease risk based on user-submitted survey data. Users receive a personalized, easy-to-understand analysis generated using GPT",
            "Technologies Used: Python, Scikit-Learn, Pandas, Matplotlib, Imblearn, Tkinter, OpenAI GPT API",
        ],
    },
    {
        title: "Personal Portfolio",
        tech: "Next.js | Portfolio Web Application",
        year: "2025",
        bullets: [
            "Developed and deployed a responsive personal portfolio website showcasing projects, skills, and experience using Next.js, TypeScript, and Tailwind CSS.",
            "Designed a clean, modern UI with reusable components and optimized performance for fast load times and accessibility across devices.",
            "Technologies Used: HTML, TypeScript, React, Next.js, Vercel, GitHub, Tailwind CSS",
        ],
    },
];
