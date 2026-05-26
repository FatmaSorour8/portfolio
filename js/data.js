// ========== PORTFOLIO DATA CONFIGURATION ==========
// Edit this file to update your portfolio content

const portfolioData = {
  // Personal Info
  personal: {
    name: "Fatma Sorour",
    title: "Full-Stack Developer",
    heroDescription: "Specialized in ASP.NET Core, Angular, MSSQL Server, and enterprise web applications. Passionate about building scalable, secure, and production-ready systems with clean architecture and modern UI/UX.",
    profileImage: "./assets/profile.png",
    cvFile: "./assets/Fatma_Sorour_CV.pdf",
    aboutName: "Fatma Sorour - Full-Stack Developer",
    aboutDescription: [
      "I'm Fatma Mohamed Sorour, a .NET Full-Stack Developer with hands-on experience building enterprise web applications using ASP.NET Core, Angular, MSSQL Server, and Web API technologies. I specialize in developing scalable systems, workflow automation platforms, and management dashboards with clean architecture principles and secure backend integrations.",
      "I have practical experience working on real-world enterprise systems including PMO platforms, workflow management systems, shipping systems, and e-commerce solutions. My development approach focuses on performance, maintainability, SOLID principles, and delivering production-ready applications with excellent user experience."
    ]
  },

  // Social Links
  socialLinks: [
    { platform: "github", url: "https://github.com/FatmaSorour8", icon: "fab fa-github", color: "hover:text-blue-400" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/fatma-mohamed-sorour/", icon: "fab fa-linkedin", color: "hover:text-blue-400" },
    { platform: "whatsapp", url: "https://wa.me/201288427468", icon: "fab fa-whatsapp", color: "hover:text-green-400" }
  ],

  // Contact Info
  contactInfo: {
    address: "Cairo - Egypt",
    email: "fatmaa.sorour86@gmail.com",
    phone: "+20 128 842 7468",
    availability: "Freelance: Available Right Now"
  },

  // Work Experience
  experiences: [
    {
      title: "Software Developer",
      company: "Positive Side Horizons (PSH)",
      location: "Riyadh, KSA",
      period: "Aug 2024 — Present",
      responsibilities: [
        "Developed enterprise-level workflow and management systems.",
        "Built scalable ASP.NET Core APIs and Angular dashboards.",
        "Worked with MSSQL Server, NHibernate, and Entity Framework.",
        "Applied SOLID principles and clean architecture practices."
      ],
      technologies: ["ASP.NET Core", "Angular", "SQL Server", "WebForms", "NHibernate", "Web API"],
      color: "blue"
    },
    {
      title: "Shopify Frontend Developer",
      company: "Freelance / E-Commerce Projects",
      location: "Remote",
      period: "2026 — Present",
      responsibilities: [
        "Customized Shopify themes and storefront UI.",
        "Built responsive e-commerce pages with modern UX.",
        "Integrated third-party apps and payment solutions.",
        "Optimized store performance and mobile responsiveness."
      ],
      technologies: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "purple"
    }
  ],

  // Skills
  skills: {
    frontend: ["Angular", "Responsive Design", "HTML5", "CSS3", "Bootstrap5", "JavaScript", "TypeScript", "React.js", "jQuery", "Shopify", "Liquid", "Shopify CLI", "Theme Customization"],
    backend: ["ASP.NET Core MVC", "ASP.NET Core Web API", "WebForms", "Entity Framework Core", "LINQ", "C#", "JWT Authentication", "REST APIs", "Blazor"],
    database: ["MSSQL Server", "NHibernate", "MongoDB", "SQL"],
    others: ["Git & GitHub", "Docker", "SOLID Principles", "Design Patterns", "Agile"]
  },

  // Education
  education: [
    { period: "2019 – 2023", title: "Bachelor of Computer Science | BFCAI", description: "Graduated with a strong foundation in software engineering, databases, algorithms, and system design." },
    { period: "Oct, 2023 – Jul, 2024", title: "Professional Training Program(9-Month) | ITI", description: ".NET Full-Stack Web Development Scholarship." },
    { period: "Jul, 2023 – Oct, 2023", title: "Full-Stack MEARN Track | ITI", description: "MongoDB, Express, Angular/React, Node.js. Full-stack apps & integration." }
  ],

  // Projects (supports images and live demo links)
  projects: [
    {
      title: "PMOS Enterprise System",
      description: "Enterprise PMO management system following PMI standards with dashboards, reports, and workflow management.",
      technologies: ["WebForms", "NHibernate", "SQL Server"],
      image: null,
      liveDemo: null,
      github: null
    },
    {
      title: "Masarat Workflow System",
      description: "Workflow automation platform for managing repetitive business processes and approvals.",
      technologies: ["ASP.NET Core API", "Angular", "SQL Server"],
      image: null,
      liveDemo: null,
      github: null
    },
    {
      title: "Swift Shipping System",
      description: "Shipping management platform for order processing, delivery tracking, and administration.",
      technologies: ["ASP.NET Core", "Angular", "EF Core", "MSSQL"],
      image: null,
      liveDemo: null,
      github: null
    },
    {
      title: "E-Commerce Platform",
      description: "Secure e-commerce backend with Swagger API documentation and Angular frontend.",
      technologies: ["ASP.NET Core API", "Angular", "Swagger", "Entity Framework"],
      image: null,
      liveDemo: null,
      github: null
    },
    {
      title: "Hotelier Booking System",
      description: "Hotel booking platform with secure authentication and streamlined reservation management.",
      technologies: ["ASP.NET Core MVC", "SQL Server", "LINQ"],
      image: null,
      liveDemo: null,
      github: null
    },
    {
      title: "Online Examination System",
      description: "Automated examination generation system with reporting and question bank management.",
      technologies: ["C#", "EF", "SQL Server", "Windows Forms"],
      image: null,
      liveDemo: null,
      github: null
    },
    {
      title: "MedRecChain - Graduation project",
      description: "Blockchain-based decentralized electronic medical records sharing platform.",
      technologies: ["Ethereum", "Solidity", "React", "IPFS"],
      image: null,
      liveDemo: null,
      github: null
    }
  ]
};