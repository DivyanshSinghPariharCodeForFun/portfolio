import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "simplamo",
    companyName: "Religare Housing Development Finance Corporation",
    companyLogo:
      "https://cdn.prod.website-files.com/66aa3d966bb1e305d3c6daf3/66b44bc8e49ddef1f6d1d76e_logo%20(2).png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Intern | Full Stack Developer",
        employmentPeriod: {
          start: "05.2025",
          end: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed a role-based Entitlement Review System using the MERN stack, adopted by 3+ departments, reducing manual workload by over 60%.
- Integrated LDAP authentication and Excel-based access control with dynamic filters for secure and flexible rights management.
- Automated email notifications using Nodemailer, transitioning from Gmail to Outlook SMTP for production reliability.
- Led production deployment on Ubuntu 22.04 servers and authored complete onboarding documentation for future developers.
- Created technical documentation for backend APIs, database schema, and deployment processes to support team scalability.
`,
        skills: [
          "React JS",
          "MongoDB",
          "Express.js",
          "Node.js",
          "Figma",
          "Nginx",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "Wordpress Developer",
    companyName: "Freelance.",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "WordPress Developer",
        employmentPeriod: {
          start: "03.2021",
          end: "08.2022",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `In-house Project: [Quaric Website](https://quaric.com)
- Designed and developed 10+ WordPress websites across various industries including travel, hospitality, education, and matrimony.
- Built custom solutions for niche platforms, including matrimonial sites (like shaadi.com) and local businesses such as Jungle Park tour booking portals.
- Delivered mobile-responsive, SEO-optimized websites with integrated payment gateways and lead capture systems.`,
        skills: ["WordPress", "Elementor", "No Code"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "",
        title: "Jaypee Insitute Of Information Technology",
        employmentPeriod: {
          start: "06.2023",
          end: "06.2026",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Computer Science Engineering.
- Language Proficiency: English, Hindi.
- Achievements:
  - Final Round — RIDE Hackathon 2023 Developed StudyPal, a peer-matching platform for students.
  - Created an AI-powered slide generator, ThesisOne, used by 100+ users.`,
        skills: [
          "JavaScript",
          "React JS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Figma",
          "Tailwind CSS",
        ],
      },
      {
        id: "",
        title: "Graphic Era Hill University",
        employmentPeriod: {
          start: "06.2020",
          end: "06.2023",
        },
        icon: "education",
        description: `- Completed Diploma in Computer Science Engineering.
        - Chancellor Gold Medalist | Departmental Rank 1.
- [Achieved numerous awards]() at Graphic Era Hill University, including:
  - [3rd Prize]() — Web Development Technovation 2022`,
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Node.js",
          "Pandoc",
          "Self-learning",
        ],
      },
    ],
  },
];
