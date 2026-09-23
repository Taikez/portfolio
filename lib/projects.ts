export interface ProjectLink {
  label: string;
  url: string;
  type: "live" | "github" | "docs" | "other";
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-sentence problem/result description used for homepage & index cards */
  tagline: string;
  featured: boolean;
  technologies: string[];

  // Case Study Sections
  overview: string;
  problem: string;
  constraints?: string[];
  role: string;
  approach: string;
  keyDecisions?: string[];
  outcome: string;
  lessonsLearned?: string[];

  links?: ProjectLink[];
  images?: ProjectImage[];
  date: string; // Format: YYYY-MM
}

/**
 * Static project repository.
 * Update placeholders with your real work and metrics.
 */
export const PROJECTS: Project[] = [
  {
    slug: "vitademy-web",
    title: "Vitademy Web",
    tagline:
      "An assessment platform that turns learning and thinking patterns into personalized recommendations.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    date: "2025-12",

    // Case Study Detail Fields
    overview:
      "Vitademy is an online assessment platform designed to help people better understand how they learn and think. Users complete structured assessments, receive insights based on their responses, and get personalized learning recommendations tailored to their individual patterns.",

    problem:
      "Learning is highly individual, but people are often given the same learning methods regardless of how they process information. Vitademy was built to make assessment results easier to understand and turn them into practical, personalized recommendations instead of leaving users with raw scores or generic feedback.",

    constraints: [
      "Present assessment questions and results in a way that feels simple and approachable despite the complexity behind the evaluation.",
      "Maintain a clear and responsive user experience across mobile, tablet, and desktop devices.",
      "Structure assessment data and user responses so they can be reliably stored, processed, and used to generate personalized results.",
    ],

    role: "Full-Stack Developer",

    approach:
      "I built Vitademy as a full-stack Next.js application, using TypeScript to keep the application logic predictable and maintainable, Tailwind CSS for the responsive interface, and PostgreSQL for persistent assessment data. I focused on breaking the assessment experience into clear steps so users could move through the process without being overwhelmed, while keeping the underlying components and data flow reusable as the platform grows.",

    keyDecisions: [
      "Structured the assessment experience as a step-by-step flow to reduce cognitive load and make progress easy to understand.",
      "Separated assessment content, user responses, and result data so the system could evolve without tightly coupling the interface to the underlying data structure.",
      "Designed reusable UI components for questions, navigation, progress states, and results to keep the experience consistent throughout the application.",
      "Used PostgreSQL for persistent structured data, providing a foundation for storing assessments, responses, and future platform features.",
    ],

    outcome:
      "The result is a responsive assessment platform that guides users from answering questions to understanding their learning and thinking patterns through a clear, structured experience. The project also established a foundation that can support additional assessments, richer recommendations, and future learning features.",

    lessonsLearned: [
      "I learned that assessment-heavy interfaces benefit from progressive disclosure — showing users only the information and actions they need at each stage instead of presenting everything at once.",
      "I gained more experience designing application state and data structures around multi-step user flows, where responses from earlier steps need to remain consistent and accessible throughout the experience.",
      "I learned to think beyond individual pages and design reusable components and data models that can support additional assessment types as the product grows.",
      "If I were expanding the project further, I would continue separating assessment logic from presentation so new assessment formats and recommendation strategies could be introduced with minimal changes to the UI.",
    ],

    links: [
      {
        label: "Live Demo",
        url: "https://vitademy.space",
        type: "live",
      },
      {
        label: "Source Code",
        url: "https://github.com/yourusername/project-one",
        type: "github",
      },
    ],

    images: [
      {
        src: "/images/projects/vitademy-web.png",
        alt: "Vitademy online assessment platform interface",
        caption:
          "The Vitademy assessment experience, designed around a clear and structured user flow.",
      },
    ],
  },
  {
    slug: "birocepat-web",
    title: "Birocepat Web",
    tagline:
      "A modern company website that makes services clear, accessible, and easy to navigate.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2026-01",

    // Case Study Detail Fields
    overview:
      "Birocepat Web is a company profile website for an Indonesian service bureau. The site was designed to clearly communicate the company’s services, build trust with potential customers, and make it easier for visitors to understand what the business offers before getting in touch.",

    problem:
      "Service-based businesses often rely on customers quickly understanding what they offer and how to contact them. The challenge was to present Birocepat’s services in a way that felt professional and trustworthy without overwhelming visitors with too much information or unnecessary complexity.",

    constraints: [
      "The website needed to remain simple and easy to understand for visitors with different levels of technical familiarity.",
      "The layout had to work consistently across mobile phones, tablets, laptops, and larger desktop screens.",
      "The design needed to communicate professionalism while keeping the interface lightweight and straightforward.",
    ],

    role: "Frontend Developer",

    approach:
      "I built the website with Next.js, TypeScript, and Tailwind CSS, focusing on a clean information hierarchy and reusable components. The content was organized around the questions a potential customer would naturally have: what the company does, what services are available, and how to get in touch. I kept the visual system intentionally simple so the content and calls to action remained the main focus.",

    keyDecisions: [
      "Prioritized a clear content hierarchy so visitors could quickly understand the company and its services without navigating through unnecessary pages.",
      "Used reusable layout and content components to keep the visual language consistent across the website.",
      "Designed the interface with a mobile-first approach so important information and calls to action remained easy to access on smaller screens.",
      "Kept interactions and dependencies lightweight to avoid adding complexity that did not provide meaningful value to the user.",
    ],

    outcome:
      "The result is a responsive and straightforward company website that gives Birocepat a clearer digital presence. Visitors can quickly understand the services being offered, navigate the site comfortably across different devices, and find the information they need to take the next step.",

    lessonsLearned: [
      "I learned that company websites benefit more from strong information hierarchy and clear communication than from adding unnecessary visual complexity.",
      "I gained more experience designing responsive layouts around real business content rather than treating mobile responsiveness as an afterthought.",
      "This project reinforced the importance of reusable components and consistent spacing, typography, and interaction patterns when building a professional interface.",
      "If I were extending the project further, I would focus on improving content management and analytics so the business could better understand which services and pages attract the most interest.",
    ],

    links: [
      {
        label: "Live Demo",
        url: "https://birocepat-web.vercel.app",
        type: "live",
      },
      {
        label: "Source Code",
        url: "https://github.com/yourusername/project-one",
        type: "github",
      },
    ],

    images: [
      {
        src: "/images/projects/birocepat-web.png",
        alt: "Birocepat company website showing its services and business information",
        caption:
          "A clean, responsive company website focused on clear service information and easy navigation.",
      },
    ],
  },
  {
    slug: "velora-pack",
    title: "Velora Pack",
    tagline:
      "A modern website for a packaging company serving logistics and distribution needs.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    date: "2026-03",

    // Case Study Detail Fields
    overview:
      "Velora Pack is a public-facing website for a packaging business, designed to present the company, its products, and its services in a clear and professional way. The site helps potential customers understand what Velora Pack offers and provides a straightforward path to explore solutions and make inquiries.",

    problem:
      "Packaging businesses often need to communicate a wide range of products and services without making the website feel dense or difficult to navigate. The challenge was to organize the company’s offerings into a simple digital experience that could build trust, explain the available solutions, and make it easy for potential customers to take the next step.",

    constraints: [
      "The website needed to present multiple products and services without overwhelming visitors with too much information at once.",
      "The interface had to remain responsive and easy to navigate across mobile, tablet, laptop, and larger desktop screens.",
      "The design needed to feel professional and business-oriented while keeping the overall experience simple and lightweight.",
      "The structure needed to remain flexible enough to support additional products, services, and business content as the company grows.",
    ],

    role: "Full-Stack Developer",

    approach:
      "I built Velora Pack using Next.js, TypeScript, Tailwind CSS, and PostgreSQL, with a focus on clear information architecture and reusable components. I organized the website around the company’s core offerings so visitors could quickly understand the available products and services. The interface was designed to keep navigation simple, highlight important business information, and provide clear calls to action for potential customers.",

    keyDecisions: [
      "Separated company information, products, services, and inquiry-related content into clear sections to make the website easier to understand and navigate.",
      "Built reusable components for product and service presentation so new content could be added without duplicating layout logic.",
      "Used a responsive, mobile-first layout to keep important business information and calls to action accessible across different screen sizes.",
      "Kept the visual design intentionally simple so the company’s products and services remained the primary focus.",
      "Structured the application so the public-facing website could remain separate from the internal operational dashboard while still supporting the broader Velora Pack ecosystem.",
    ],

    outcome:
      "The result is a responsive and professional company website that gives Velora Pack a clearer digital presence. Visitors can quickly understand the company’s offerings, explore relevant packaging solutions, and find the information needed to make an inquiry or continue a business conversation.",

    lessonsLearned: [
      "I learned that business websites benefit from clear information architecture more than visual complexity, especially when the main goal is helping customers understand products and services quickly.",
      "I gained more experience designing reusable content structures that can support a growing catalog of business offerings without making the codebase harder to maintain.",
      "This project reinforced the importance of separating public-facing customer experiences from internal operational systems, even when both belong to the same business.",
      "If I were extending the project further, I would improve the content management flow so business users could update products, services, and company information without requiring code changes.",
    ],

    links: [
      {
        label: "Live Demo",
        url: "https://velora-pack.vercel.app",
        type: "live",
      },
      {
        label: "Source Code",
        url: "https://github.com/yourusername/project-one",
        type: "github",
      },
    ],

    images: [
      {
        src: "/images/projects/velora-pack-profile.png",
        alt: "Velora Pack business website showcasing packaging products and services",
        caption:
          "A responsive business website focused on presenting Velora Pack’s products, services, and company information clearly.",
      },
    ],
  },
  {
    slug: "velora-pack-dashboard",
    title: "Velora Pack Internal Dashboard",
    tagline:
      "A role-based internal dashboard for managing customers, leads, inquiries, and orders across the business.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    date: "2026-03",

    // Case Study Detail Fields
    overview:
      "Velora Pack Internal Dashboard is an internal business application built to help the owner, admin, and sales team manage day-to-day operations from a centralized system. The dashboard brings together customer data, leads, inquiries, and orders so each role can access the information and workflows relevant to their responsibilities.",

    problem:
      "As business operations grow, managing customers, leads, inquiries, and orders across separate tools or manual processes can make information harder to track and workflows less consistent. The dashboard was built to centralize these activities, give each team member clearer visibility into their work, and reduce the friction of managing operational data across the business.",

    constraints: [
      "Different user roles needed access to different parts of the system based on their responsibilities.",
      "The dashboard had to support multiple connected business workflows without making the interface difficult to understand.",
      "Business data needed to remain structured and consistent across customers, leads, inquiries, and orders.",
      "The interface needed to remain usable across different screen sizes while prioritizing desktop workflows for internal users.",
    ],

    role: "Full-Stack Developer",

    approach:
      "I designed the dashboard around Velora Pack’s internal workflows rather than treating it as a generic admin panel. Using Next.js, TypeScript, Tailwind CSS, and PostgreSQL, I structured the application into clear business domains such as customers, leads, inquiries, and orders. I also designed role-based experiences so owners, admins, and sales users could focus on the information and actions relevant to them without exposing unnecessary functionality.",

    keyDecisions: [
      "Implemented role-based access patterns so owners, admins, and sales users could interact with the system according to their responsibilities.",
      "Separated customers, leads, inquiries, and orders into distinct but connected data domains to keep business logic easier to understand and maintain.",
      "Designed reusable dashboard components for tables, forms, status indicators, filters, and common actions to keep workflows consistent across modules.",
      "Used PostgreSQL to maintain structured relationships between operational data and provide a reliable foundation for future reporting and automation.",
      "Prioritized clear workflows and information hierarchy over adding unnecessary dashboard complexity or visual features.",
    ],

    outcome:
      "The result is a centralized internal system that gives the Velora Pack team a clearer way to manage customer relationships and operational workflows. Owners, admins, and sales users can work from the same source of business data while still having role-appropriate access to the tools they need.",

    lessonsLearned: [
      "I learned that internal tools need to reflect real business workflows closely; a technically clean interface is not useful if it does not match how the team actually works.",
      "I gained more experience designing role-based systems where authorization affects both the data a user can access and the actions available in the interface.",
      "This project strengthened my understanding of relational data modeling across connected business entities such as customers, leads, inquiries, and orders.",
      "I learned the importance of creating reusable patterns for tables, forms, filters, and status management when building dashboards with multiple operational modules.",
      "If I were expanding the system further, I would focus on reporting, audit history, notifications, and workflow automation to give the business better visibility into its operations.",
    ],

    links: [
      {
        label: "Live Demo",
        url: "https://velora-pack.vercel.app",
        type: "live",
      },
      {
        label: "Source Code",
        url: "https://github.com/yourusername/project-one",
        type: "github",
      },
    ],

    images: [
      {
        src: "/images/projects/velora-pack-dashboard.png",
        alt: "Velora Pack internal dashboard for managing customers, leads, inquiries, and orders",
        caption:
          "A role-based internal dashboard that centralizes Velora Pack’s customer and operational workflows.",
      },
    ],
  },
  {
    slug: "hellobake-web",
    title: "HelloBake Web",
    tagline:
      "A modern e-commerce website for a local bakery to showcase products and make online ordering simple.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    date: "2026-06",

    // Case Study Detail Fields
    overview:
      "HelloBake Web is an e-commerce platform built for a local bakery to showcase its products, provide customers with clear product information, and simplify the online ordering experience. The goal was to create a warm, approachable storefront that feels easy to browse on any device.",

    problem:
      "Local businesses often rely heavily on messaging apps or social media to handle product inquiries and orders, which can make the customer experience inconsistent and difficult to manage. HelloBake was built to give customers a clearer way to discover available products, understand their options, and place orders through a structured digital experience.",

    constraints: [
      "The experience needed to remain simple enough for customers of different ages and levels of technical familiarity.",
      "Product browsing and ordering had to work smoothly across mobile phones, tablets, laptops, and larger desktop screens.",
      "The interface needed to feel visually appealing and friendly without making the purchasing flow unnecessarily complex.",
      "Product and order data needed to be structured in a way that could support future additions such as availability, categories, and order management.",
    ],

    role: "Full-Stack Developer",

    approach:
      "I built HelloBake using Next.js, TypeScript, Tailwind CSS, and PostgreSQL, with a focus on creating a straightforward storefront and ordering flow. I organized the interface around product discovery, product details, and clear calls to action so customers could move through the experience without confusion. I also structured the application and data model to make future e-commerce features easier to expand.",

    keyDecisions: [
      "Prioritized a mobile-first layout because customers are likely to browse and order bakery products directly from their phones.",
      "Designed reusable product components so items could be presented consistently across listings, categories, and detail views.",
      "Kept the ordering flow intentionally simple to reduce friction between product discovery and purchase intent.",
      "Used PostgreSQL to provide a structured foundation for storing products, categories, customer information, and order-related data.",
      "Focused on visual hierarchy, readable product information, and clear calls to action instead of adding unnecessary e-commerce complexity.",
    ],

    outcome:
      "The result is a responsive and approachable online storefront that gives HelloBake a more structured digital presence. Customers can browse products more easily, understand what is available, and move toward placing an order through a clearer and more consistent experience.",

    lessonsLearned: [
      "I learned that e-commerce interfaces benefit heavily from reducing friction and making the next action obvious at every step of the user journey.",
      "I gained more experience designing mobile-first product experiences where content hierarchy and touch-friendly interactions are especially important.",
      "This project reinforced the importance of reusable product components and consistent data structures when building an application that may grow over time.",
      "I learned to balance visual branding with usability so the site can feel distinctive without making the shopping experience harder to understand.",
      "If I were expanding the project further, I would focus on order tracking, inventory management, payment integration, and an administrative interface for managing products and orders.",
    ],

    links: [
      {
        label: "Live Demo",
        url: "https://hellobake-web.vercel.app",
        type: "live",
      },
      {
        label: "Source Code",
        url: "https://github.com/yourusername/project-one",
        type: "github",
      },
    ],

    images: [
      {
        src: "/images/projects/hello-bake.png",
        alt: "HelloBake bakery e-commerce website showcasing products and online ordering",
        caption:
          "A responsive bakery storefront focused on simple product discovery and an accessible ordering experience.",
      },
    ],
  },
  {
    slug: "3-years-wrapped",
    title: "3 Years Wrapped",
    tagline:
      "A Spotify Wrapped-inspired experience that turns three years of memories into an interactive story.",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2026-08",

    // Case Study Detail Fields
    overview:
      "3 Years Wrapped is a personal interactive web experience inspired by Spotify Wrapped, created to celebrate three years of shared memories through a sequence of story-driven screens. The project combines visual storytelling, transitions, and interactive progression to turn a collection of moments into a more engaging digital experience.",

    problem:
      "A traditional photo gallery or static anniversary page would not capture the sense of progression and storytelling I wanted. The challenge was to create an experience that felt more immersive and intentional, where each screen contributed to a larger narrative while still remaining simple to navigate.",

    constraints: [
      "The experience needed to feel smooth and sequential without making navigation confusing.",
      "Shared progression state had to remain consistent across multiple interactive sections and components.",
      "Transitions, timing, and UI effects needed to feel polished without making the application difficult to maintain.",
      "The experience had to remain responsive across mobile devices, tablets, laptops, and larger screens.",
    ],

    role: "Frontend Developer",

    approach:
      "I built the experience with Next.js, TypeScript, and Tailwind CSS, structuring the application around a sequence of reusable story sections. I used React state, effects, and shared hooks to coordinate progression between screens, manage interactive behavior, and keep components focused on presentation. The overall architecture was designed to separate UI content from navigation and interaction logic so the experience could remain easier to extend and maintain.",

    keyDecisions: [
      "Modeled the experience as a sequence of story states instead of treating each section as an independent page.",
      "Used shared and reusable hooks to coordinate progression and interaction logic across multiple components.",
      "Separated presentation components from state and navigation logic to reduce unnecessary coupling between sections.",
      "Used effects carefully for transition timing, screen progression, and other lifecycle-driven interactions.",
      "Designed the experience mobile-first so the story remained comfortable to navigate on smaller screens while still scaling well to larger displays.",
    ],

    outcome:
      "The result is an interactive, story-driven experience that presents personal memories in a more engaging way than a traditional gallery or static page. Beyond the visual outcome, the project gave me practical experience managing shared state, coordinating effects, and structuring reusable logic across a highly interactive frontend.",

    lessonsLearned: [
      "I gained a stronger understanding of how state should be structured when multiple components depend on the same progression logic.",
      "I learned that effects are most useful when they are tied to clear lifecycle or synchronization needs, rather than being used as a general solution for application logic.",
      "I gained more experience extracting shared behavior into reusable hooks to reduce prop drilling and keep components easier to reason about.",
      "This project reinforced the importance of separating presentation, state management, and interaction logic when building highly interactive interfaces.",
      "If I were rebuilding the project, I would further formalize the story flow as a state machine or configuration-driven system to make adding and reordering sections even easier.",
    ],

    links: [
      {
        label: "Live Demo",
        url: "https://3-years-wrapped.vercel.app",
        type: "live",
      },
      {
        label: "Source Code",
        url: "https://github.com/yourusername/project-one",
        type: "github",
      },
    ],

    images: [
      {
        src: "/images/projects/3-years-wrapped.png",
        alt: "3 Years Wrapped interactive anniversary experience inspired by Spotify Wrapped",
        caption:
          "A story-driven interactive experience built around shared state, reusable hooks, and sequential navigation.",
      },
    ],
  },
];

/**
 * Utility queries for server components
 */
export function getAllProjects(): Project[] {
  return PROJECTS.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map((project) => project.slug);
}
