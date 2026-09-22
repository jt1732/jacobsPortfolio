interface Job {
    title: string;
    company: string;
    location?: string;
    dates: string;
    bullets: string[];
}

export const experience: Job[] = [
    {
        title: "Website Contractor",
        company: "Wainui RV",
        dates: "February 2026 - July 2026",
        bullets: [
            "Designed and built the full architecture of a Next.js 16 monolith with Payload CMS 3 embedded as the headless backend, deployed on Vercel",
            "Designed and implemented a database schema in MongoDB via six Payload collections with relationship fields and role-based access control",
            "Technologies used: TypeScript, Next.js, React, Payload CMS, MongoDB, CSS, Vercel, Tailwind, Shadcn, Vercel",
        ],
    },
    {
        title: "IT Commercial Intern",
        company: "OceanaGold",
        location: "Waihi, Waikato",
        dates: "November 2025 - February 2026",
        bullets: [
            "Developed and maintained scripts to automate plant server operations using PowerShell and Batch.",
            "Created and maintained scripts for documentation processes using PowerShell and Active Directory.",
            "Researched and implemented methodologies for application deployment using JavaScript and REST APIs.",
        ],
    },
    {
        title: "Professional Sales Assistant",
        company: "Elite Fitness",
        location: "Wairau Valley, Auckland",
        dates: "April 2025 - November 2025",
        bullets: [
            "Provided friendly and professional customer service by assisting with queries and ensuring a positive in-store experience",
            "Resolved customer issues promptly and effectively, maintaining a high standard of professionalism",
            "Assisted in assembling and delivering purchased products, ensuring high-quality and efficient service",
        ],
    },
    {
        title: "General Hand",
        company: "Claymark Limited",
        location: "Katikati, Bay Of Plenty",
        dates: "2022 - 2025",
        bullets: [
            "Assisted in the manufacturing and production of Claymark clear pine",
            "Operated production machines and hand tools",
            "Performed grading processes to assess product quality and meet company standards",
            "Engaged in physical labor and teamwork to enhance production efficiency",
        ],
    },
    {
        title: "Shop Hand",
        company: "Wilson Road Fish Shop",
        location: "Waihi Beach, Bay Of Plenty",
        dates: "2021 - 2023",
        bullets: [
            "Processed customer orders efficiently while delivering excellent customer service",
            "Prepared and cooked food to meet quality and safety standards",
            "Packaged food and ensured cleanliness and organization in both the kitchen and store",
        ],
    },
];
