import { 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Wrench,
  Bot
} from 'lucide-react';

export const portfolioData = {
  profile: {
    fullName: "Nguyễn Phú Cường",
    role: "Full-stack Developer / Software Engineering Student",
    email: "cuongnguyenphu2005@gmail.com",
    phone: "0367558385",
    location: "Ho Chi Minh City, Vietnam",
    bio: "Software Engineering student at FPT University with a product-centric mindset and proven system design capabilities in Java and AI-driven environments. Dedicated to engineering scalable systems and mastering professional production workflows.",
    socials: {
      github: "https://github.com/cuongnp10",
      linkedin: "https://linkedin.com/in/cuongnpfpt",
      upwork: "https://www.upwork.com"
    }
  },
  experience: [
    {
      id: "fpt-software",
      organization: "FPT Software Ho Chi Minh",
      period: "06/2026 - 09/2026",
      role: "IT Business Analyst Intern",
      achievements: [
        "Enterprise DMS Modernization: Analyzed and synchronized technical documentation with live systems; authored user manuals, technical onboarding decks, and executed UAT testing across complex distribution flows.",
        "F&B Management Platform (Greenfield): Built responsive layouts and interactive HTML prototypes using AI workflows (Cursor); engineered core architecture specifications and SRS database schemas for data migration."
      ]
    },
    {
      id: "fpt-university",
      organization: "FPT University Ho Chi Minh City",
      period: "11/2023 - Present",
      role: "Software Engineering Student",
      achievements: [
        "Focused on Software Engineering, mastering OOP, data structures, and advanced system design.",
        "Collaborated on multiple team projects, taking leadership roles in developing full-stack applications."
      ]
    }
  ],
  projects: [
    {
      id: "cho-xe-dap",
      title: "Chợ Xe Đạp - E-commerce Marketplace for Bicycles",
      role: "Team Leader & Full-stack Developer",
      period: "01/2026 - 04/2026",
      category: "Full-stack",
      description: "A comprehensive e-commerce marketplace for bicycles featuring automated workflows and real-time updates.",
      features: [
        "VietQR (SePay) instant deposit workflow",
        "Automated multimodal AI moderation via Google Gemini API",
        "Decoupled microservices architecture with real-time notification engine (SignalR)",
        "Cloudflare CDN/WAF security layer"
      ],
      stack: ["Java Spring Boot", ".NET Core", "React", "SQL Server", "GCP", "Cloudflare", "Heroku", "SignalR"],
      githubUrl: "https://github.com/choxedap"
    },
    {
      id: "rider-volt",
      title: "Rider Volt - E-commerce Platform for Electric Bikes",
      role: "Team Leader & Backend Developer",
      period: "09/2025 - 12/2025",
      category: "Backend",
      description: "A robust e-commerce platform specifically designed for electric bikes with a focus on scalable backend architecture.",
      features: [
        "RESTful architecture documented with OpenAPI (Swagger)",
        "Google OAuth2 social login integration",
        "Optimized query handling using Java Streams",
        "Cloudflare DNS and automated media pipelines via Cloudinary"
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL", "Swagger", "Cloudflare", "Heroku", "Cloudinary"],
      githubUrl: "https://github.com/Rider-Volt"
    },
    {
      id: "qa-frameworks",
      title: "QA & Automated Testing Frameworks",
      role: "QA Automation Engineer",
      period: "2025",
      category: "Testing/AI",
      description: "Suite of automated testing frameworks focusing on AI-assisted testing and REST API validation.",
      features: [
        "CodeceptJS AI Testing automation",
        "Comprehensive REST API Testing suites",
        "Integration with Playwright for robust browser automation"
      ],
      stack: ["JavaScript", "CodeceptJS", "Playwright"],
      githubUrl: "https://github.com/cuongnp10?tab=repositories" // Placeholder as precise repo was noted but no link
    }
  ],
  skills: [
    {
      category: "Backend",
      icon: Server,
      items: ["Java (Core, OOP)", "Spring Boot", "Spring Security", "Spring Data JPA", ".NET Core", "RESTful APIs", "Microservices"]
    },
    {
      category: "Database",
      icon: Database,
      items: ["PostgreSQL", "SQL Server", "SQL"]
    },
    {
      category: "Frontend",
      icon: Layout,
      items: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "Vite", "HTML/CSS"]
    },
    {
      category: "Cloud & DevOps",
      icon: Globe,
      items: ["Heroku", "Google Cloud Platform (GCP)", "Cloudflare (DNS, WAF, CDN, Turnstile)", "Git", "GitHub"]
    },
    {
      category: "AI & Automation",
      icon: Bot,
      items: ["Prompt Engineering", "Google Gemini API", "GitHub Copilot", "Cursor", "Model Context Protocol (MCP)", "Gemini CLI"]
    },
    {
      category: "Tools & Testing",
      icon: Wrench,
      items: ["Swagger/OpenAPI", "Playwright", "Jira", "Confluence"]
    }
  ],
  stats: {
    githubContributions: "1,100+",
    flagshipPlatforms: "2+"
  }
};
