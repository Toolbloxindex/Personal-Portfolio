export const profile = {
  name: "Tomás Correia",
  handle: "tomas-correia",
  title: "Founder & Full-Stack Developer",
  tagline: "Toward a future of abundance.",
  location: "Delft, NL",
  timezone: "UTC+1",
  email: "jfjsc.taba@gmail.com",
  source: "https://github.com/thomascorreia/termfolio",
  linkedin: "https://www.linkedin.com/in/tom%C3%A1s-correia-367810278/",
  socials: [
    {
      id: "github",
      label: "github",
      handle: "@thomascorreia",
      href: "https://github.com/thomascorreia",
      external: true,
    },
    {
      id: "linkedin",
      label: "linkedin",
      handle: "in/tomás-correia-367810278",
      href: "https://www.linkedin.com/in/tom%C3%A1s-correia-367810278/",
      external: true,
    },
    {
      id: "email",
      label: "email",
      handle: "jfjsc.taba@gmail.com",
      href: "mailto:jfjsc.taba@gmail.com",
      external: false,
    },
  ],
};

export const photo = {
  src: "/images/Home/Photo_Tomas.jpeg",
  alt: "Portrait of Tomás Correia",
  width: 3024,
  height: 2715,
};

export const portrait = {
  src: "/images/Home/dot-tomas-portrait.png",
  alt: "Dot art portrait of Tomás Correia",
  width: 2353,
  height: 2713,
};

export const hero = {
  name: "Tomás Correia",
  location: "Delft, NL",
  timezone: "UTC+1",
  tagline: "Toward a future of abundance.",
  motto: "Driven by the pursuit of human progress.",
  bio: "Founder and full-stack developer. Founded a fintech platform at sixteen and a booking product at seventeen; now studying Computer Science at TU Delft.",
};

export const now = [
  { label: "currently", text: "studying Computer Science at TU Delft" },
  { label: "recently", text: "built and launched BookHero, a booking platform for small businesses" },
];

export type ProjectSection = { heading: string; paragraphs: string[] };

export type ProjectImage = {
  src: string;
  caption: string;
  width: number;
  height: number;
};

export type GalleryGroup = {
  label: string;
  framed?: boolean;
  captions?: boolean;
  images: ProjectImage[];
};

export type ProjectVideo = {
  src: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  skills?: string[];
  links: { label: string; href: string; external: boolean }[];
  body: ProjectSection[];
  gallery?: GalleryGroup[];
  videos?: ProjectVideo[];
};

export const projects: Project[] = [
  {
    slug: "bookhero",
    title: "BookHero",
    year: "2026",
    role: "Founder, product, sales & marketing",
    summary: "All-in-one booking platform for small service businesses, built and launched solo.",
    stack: ["Next.js", "Supabase", "Vercel", "WhatsApp Cloud API"],
    links: [
      { label: "live", href: "https://bookhero.app", external: true },
    ],
    body: [
      {
        heading: "Context",
        paragraphs: [
          "Salons, barbershops and nail studios in Lisbon run on phone calls, WhatsApp threads and paper diaries. Their owners are busy with customers, not software.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "Built and launched the platform solo in four months: online booking pages, a multi-professional calendar, WhatsApp and email reminders, checkout with PDF receipts, and a reporting dashboard, all on Next.js, Supabase and the Meta WhatsApp Cloud API.",
          "Then I did the sales myself: high-volume cold calling and in-person meetings, onboarding each business and holding their hand through implementation.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A product that talks to its customers where they already are (WhatsApp), and a playbook for selling to businesses that don't buy software online.",
        ],
      },
    ],
  },
  {
    slug: "veblen",
    title: "Veblen",
    year: "2025",
    role: "Co-founder, product, marketing & sales",
    summary: "Financial intelligence platform: AI-driven stock research, portfolio analytics and investment insights. Founded at sixteen.",
    stack: ["TypeScript", "React Native", "Node.js", "Supabase (PostgreSQL)", "REST APIs", "Data pipelines"],
    skills: [
      "TypeScript",
      "React Native",
      "iOS Development",
      "Android Development",
      "Figma",
      "REST APIs",
      "Data Analysis",
      "User Interface Design",
      "User Experience (UX)",
      "Marketing",
      "Growth Marketing",
      "Start-up Ventures",
    ],
    links: [
      { label: "tryveblen.com", href: "https://tryveblen.com", external: true },
    ],
    body: [
{
        heading: "Context",
        paragraphs: [
          "**AI-powered market insights**, insider trading signals, analyst recommendations, personalized stock recommendations, portfolio analysis and more, all in one elegant app.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "Built a **cross-platform codebase designed for both iOS and Android from a single source**: a **React Native client talking to a Node.js server with a Supabase Postgres database** at the core, data pipelines, APIs and background jobs processing **70,000+ assets** (stocks, ETFs, mutual funds, commodities, forex and crypto) across global markets. Integrated institutional-grade datasets: financial statements, earnings transcripts, analyst estimates, insider trading activity, ETF holdings and decades of historical data, with **caching and real-time data feeds engineered for scale** to reduce API costs and increase efficiency.",
          "Across the app, a feature layer with an AI stock overview (buy rating, health score, risk score, market sentiment and a 1-month forecast), an 'Ask Why' explanation behind every insight, market signals (analyst ratings, price targets, insider trading, fair value, Piotroski score, bankruptcy risk), AI-simplified financials, news, daily hidden gems and daily movers, a 24/7 AI chat assistant, daily AI move recommendations, an AI tools suite (daily positions briefing, market overview, market news summary), OAuth sign-in with a personalized onboarding flow that surfaces **AI stock picks that, on average, outperform 92% of investors historically**, full position tracking and unlimited watchlists.",
          "**Designed the entire product in Figma**, leading UX research, wireframing, prototyping, animations and the design system from concept to production, and led product strategy, software development, marketing and business operations.",
          "Sourced international partnerships and **negotiated data contracts with brokers and exchanges**, from cold outbound emails to setting up meetings and negotiating the best data prices along the way.",
          "Growth rested on organic content: **short videos and slideshow posts** edited in **DaVinci Resolve and Affinity**, plus **UGC-style strategies** built for Instagram, TikTok, Reddit and X.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "**11M+ views, 380k+ likes, 160k+ shares and 13k+ followers** across Instagram, TikTok, Reddit and X, driven by a **predominantly international audience led by the US, Canada, UK, Australia and Singapore**. Commercialization was ultimately constrained by the cost of institutional data licensing and exchange agreements, and I moved on.",
        ],
      },
    ],
    gallery: [
      {
        label: "Screens",
        framed: false,
images: [
          { src: "/images/Veblen/screens/stock-page.png", caption: "Stock Overview", width: 977, height: 2004 },
          { src: "/images/Veblen/screens/ai-analysis.png", caption: "AI Analysis", width: 790, height: 1559 },
          { src: "/images/Veblen/screens/market-signals.png", caption: "Market Signals", width: 1026, height: 1062 },
          { src: "/images/Veblen/screens/stock-page-news.png", caption: "Stock News", width: 976, height: 2010 },
          { src: "/images/Veblen/screens/stock-page-financials.png", caption: "Stock Financials", width: 971, height: 2003 },
          { src: "/images/Veblen/screens/financials-ai.png", caption: "AI Financial Analysis", width: 892, height: 1830 },
          { src: "/images/Veblen/screens/discover.png", caption: "Discover", width: 966, height: 1978 },
          { src: "/images/Veblen/screens/hidden-gem-article.png", caption: "AI Hidden Gem Article", width: 983, height: 2008 },
          { src: "/images/Veblen/screens/chat-page.png", caption: "AI Chat", width: 959, height: 2000 },
          { src: "/images/Veblen/screens/ai-chat.png", caption: "Chat Demo", width: 1032, height: 2085 },
          { src: "/images/Veblen/screens/export.png", caption: "Home", width: 976, height: 2006 },
          { src: "/images/Veblen/screens/ai-move-recommendations.png", caption: "AI Move Recommendations", width: 980, height: 2022 },
          { src: "/images/Veblen/screens/search.png", caption: "Search", width: 961, height: 1983 },
        ],
      },
      {
        label: "App Store",
        captions: false,
        images: [
          { src: "/images/Veblen/app-store/ai-chat.jpg", caption: "AI chat", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/hidden-gems.jpg", caption: "Hidden gems", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/portfolio.jpg", caption: "Portfolio", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/financials.jpg", caption: "Financials", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/analysis-1.jpg", caption: "Analysis 1", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/analysis-2.jpg", caption: "Analysis 2", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/analysis-3.jpg", caption: "Analysis 3", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/ai-1.jpg", caption: "AI 1", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/ai-2.jpg", caption: "AI 2", width: 1284, height: 2778 },
          { src: "/images/Veblen/app-store/news.jpg", caption: "News", width: 1284, height: 2778 },
        ],
      },
    ],
    videos: [
      {
        src: "/videos/Veblen/showoff.mp4",
        caption: "Product walkthrough",
      },
      {
        src: "/videos/Veblen/veblenAd.mp4",
        caption: "Promo ad",
      },
    ],
  },
];

export const aboutSub =
  "Two startups by seventeen, a CS degree in progress at TU Delft, and a habit of building things in public.";

export const projectsSub =
  "A timeline of things I've built, newest first. Earlier work is available on request.";

export const experienceSub =
  "Work, education and skills. The full history lives on LinkedIn.";

export type Role = {
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  project?: string;
  startAge?: string;
  links?: { label: string; href: string }[];
};

export const roles: Role[] = [
  {
    period: "Apr 2026 – Jul 2026",
    title: "Founder",
    company: "BookHero",
    location: "Lisbon, PT",
    project: "bookhero",
    summary:
      "Built and launched an all-in-one booking platform for small service businesses, solo, from product to sales.",
    highlights: [
      "Shipped booking pages, a multi-professional calendar, WhatsApp and email reminders, checkout with PDF receipts, and a reporting dashboard.",
      "Drove early acquisition through cold calling and in-person meetings with salons, barbershops and nail studios.",
      "Onboarded and supported every business end to end, turning a product into relationships.",
    ],
    stack: ["Next.js", "Supabase", "Vercel", "WhatsApp Cloud API"],
  },
  {
    period: "May 2025 – May 2026",
    title: "Co-Founder",
    company: "Veblen",
    location: "Lisbon, PT",
    project: "veblen",
    summary:
      "Founded a fintech startup at sixteen, a financial intelligence platform for stock research, portfolio analytics and AI-driven insights.",
    highlights: [
      "Built the full-stack infrastructure: data pipelines, APIs, databases, backend services, and cross-platform web and mobile apps.",
      "Engineered systems processing 70,000+ assets across global markets, with institutional datasets from financial statements to insider trading.",
      "Designed the entire product in Figma and led strategy, engineering, marketing and operations.",
      "Generated 11M+ views and 13k+ followers across Instagram, TikTok, Reddit and X, mostly in the US, Canada, UK, Australia and Singapore.",
      "Negotiated international partnerships and data contracts with brokers and exchanges.",
    ],
    stack: ["TypeScript", "React Native", "Node.js", "PostgreSQL", "Figma"],
  },
  {
    period: "Sep 2020 – Jan 2022",
    title: "Content Creator",
    company: "Toolblox",
    location: "Lisbon, PT",
    startAge: "11",
    summary:
      "A Roblox YouTube channel that grew to 350k+ views and 1.5k subscribers, with a community of loyal followers.",
    highlights: [
      "Grew the channel to 350k+ views and 1.5k subscribers as a one-person operation.",
      "Built a loyal community around the channel, learning video editing and content creation from the ground up.",
      "Owned the full pipeline: scripting, recording, editing, thumbnails and titles.",
    ],
    stack: ["Video Editing", "Content Creation", "YouTube", "Community Building"],
    links: [{ label: "Watch the channel", href: "https://www.youtube.com/@ToolbloxChannel" }],
  },
  {
    period: "Jan – Dec 2021",
    title: "Freelance GFX Designer",
    company: "Self-employed",
    location: "Lisbon, PT",
    startAge: "12",
    summary:
      "Roblox profile pictures and thumbnails for Game Developers and Content Creators in Blender, Paint.NET and Photoshop 2021.",
    highlights: [
      "Served multiple clients with Roblox avatars, banners and thumbnails.",
      "Earned $200+ across commissions.",
      "Learned the business side of freelancing: pricing, deadlines and client relationships.",
    ],
    stack: ["Blender", "Photoshop 2021", "Paint.NET", "GFX Design"],
  },
];

export const education = [
  {
    period: "2026 – present",
    title: "B.Sc. Computer Science & Engineering",
    company: "TU Delft",
    location: "Delft, NL",
    summary: "Bachelor's degree in progress at one of Europe's leading engineering universities.",
  },
  {
    period: "2013 – 2026",
    title: "Colégio Pedro Arrupe",
    company: "High school",
    location: "Lisbon, PT",
    summary: "Graduated with a 19.44 average, among the best in the year.",
  },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "Java",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "iOS Development",
  "Android Development",
  "REST APIs",
  "Figma",
  "Product Design",
  "UX & UI Design",
  "Web Design",
  "Graphic Design",
  "Branding",
  "DaVinci Resolve",
  "Video Editing",
  "Affinity",
  "Sales",
  "Start-up Ventures",
  "Growth Marketing",
  "Marketing",
  "Partnerships",
  "Data Analysis",
  "Content Creation",
  "Community Building",
];

export const languages = [
  { language: "Portuguese", level: "Native" },
  { language: "English", level: "Full professional proficiency (IELTS 8.0)" },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  skills: string;
  hours?: string;
  credentialId?: string;
  links?: { label: string; href: string }[];
};

export const certifications: Certification[] = [
  {
    name: "Learn Java Course",
    issuer: "Codecademy",
    issued: "Jul 2026",
    hours: "~17 hours",
    skills: "Java",
    credentialId: "d3f89367b558583e361640f778191345",
    links: [
      {
        label: "credential",
        href: "https://www.codecademy.com/profiles/core1710733758/certificates/d3f89367b558583e361640f778191345",
      },
    ],
  },
  {
    name: "TU Delft edX Verified Certificate for Pre-University Calculus",
    issuer: "edX",
    issued: "Feb 2026",
    skills: "Calculus",
    credentialId: "0e84ae5e133d46c893f22a7b952e3c3f",
    links: [
      {
        label: "credential",
        href: "https://courses.edx.org/certificates/0e84ae5e133d46c893f22a7b952e3c3f",
      },
    ],
  },
  {
    name: "IELTS: Overall Score 8.0",
    issuer: "IELTS Official",
    issued: "Dec 2025",
    skills: "English",
    credentialId: "25PT502694DUAT008A",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issued: "Jul 2025",
    hours: "~300 hours",
    skills: "JavaScript, Algorithms",
    credentialId: "toolbloxindex-ljaads",
    links: [
      {
        label: "credential",
        href: "https://www.linkedin.com/in/tom%C3%A1s-correia-367810278/details/certifications/",
      },
      { label: "projects", href: "https://github.com/Toolbloxindex/FCC-Projects" },
    ],
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issued: "Sep 2024",
    hours: "~300 hours",
    skills: "Responsive Web Design, HTML",
    credentialId: "toolbloxindex-rwd",
    links: [
      {
        label: "credential",
        href: "https://www.freecodecamp.org/certification/toolbloxindex/responsive-web-design",
      },
      { label: "projects", href: "https://github.com/Toolbloxindex/FCC-Projects" },
    ],
  },
];

export const bio = [
  "I founded my first company at sixteen: Veblen, a financial intelligence platform covering 70,000+ assets, built end to end: pipelines, APIs, mobile apps, the Figma file and the Instagram account. At seventeen I founded BookHero, a booking platform for small service businesses, where I did everything from the database schema to the cold calls.",
  "I care about the unglamorous parts of the job: performance budgets, error budgets, code that a colleague can still read on a Monday morning. I've written CSS by hand since browsers hyphenated vendor prefixes, and I still do.",
  "Now I'm studying Computer Science at TU Delft, where I'm learning the theory behind the products I've already shipped. Outside work I ride a bicycle, brew espresso badly, and keep a small self-hosted homelab that my partner tolerates.",
];

export const howIWork = [
  "Talk to customers before writing code. Sales is a design tool.",
  "Design and engineering are the same discipline.",
  "Ship in small increments, in public, and let users shape the roadmap.",
  "Use boring infrastructure so the product can be ambitious.",
];

export const currentlyUsing = [
  "TypeScript",
  "Next.js",
  "React Native",
  "Supabase",
  "Figma",
  "Java",
];

export const aboutSite =
  "This site is hand-built with Next.js and a single stylesheet, no UI libraries, no client-side JavaScript. The design leans on type, spacing and thin rules; it should feel calm, even a little quiet.";

export const contact = {
  title: "Working on something interesting? I'd like to hear about it.",
  text: "Best reached by email; I read everything and answer within a day or two.",
  response: "Delft, NL ⬩ UTC+1 ⬩ replies within a day",
};
