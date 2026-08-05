export const profile = {
  name: "Tomás Correia",
  handle: "tomas-correia",
  title: "Founder & Full-Stack Developer",
  tagline: "Toward a future of abundance.",
  location: "Delft, NL",
  timezone: "UTC+1",
  email: "thomas.correia.dc@gmail.com",
  source: "https://github.com/Toolbloxindex/Personal-Portfolio",
  linkedin: "https://www.linkedin.com/in/tom%C3%A1s-correia-367810278/",
  socials: [
    {
      id: "whatsapp-phone",
      label: "whatsapp",
      handle: "+351 913 609 469",
      href: "https://wa.me/351913609469",
      external: true,
    },
    {
      id: "whatsapp-username",
      label: "whatsapp",
      handle: "@tomdco",
      href: "https://wa.me/tomdco",
      external: true,
    },
    {
      id: "x",
      label: "x",
      handle: "@tomdcore",
      href: "https://x.com/tomdcore",
      external: true,
    },
    {
      id: "github",
      label: "github",
      handle: "@toolbloxindex",
      href: "https://github.com/toolbloxindex",
      external: true,
    },
    {
      id: "linkedin",
      label: "linkedin",
      handle: "in/tomás-correia-367810278",
      href: "https://www.linkedin.com/in/tom%C3%A1s-correia-367810278/",
      external: true,
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
  galleryNote?: string;
  videos?: ProjectVideo[];
  youtube?: ProjectVideo[];
  icon?: { src: string; alt: string; large?: boolean };
  small?: boolean;
  startup?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bookhero",
    title: "BookHero",
    year: "2026",
    icon: { src: "/images/Bookhero/logo.png", alt: "BookHero logo", large: true },
    role: "Founder, product, sales & marketing",
    startup: true,
    summary: "A B2B SaaS for small service businesses: booking pages, WhatsApp reminders, checkout and reporting, built and launched solo.",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Supabase (PostgreSQL)", "Meta WhatsApp Cloud API"],
    skills: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "SQL & Database Design",
      "REST APIs",
      "Product Design",
      "User Interface Design",
      "Sales",
      "Cold Calling",
      "B2B Sales",
      "Relationship Management",
      "Onboarding & Implementation",
      "Marketing",
    ],
    links: [
      { label: "bookhero.app", href: "https://bookhero.app", external: true },
    ],
    galleryNote: "Key screens from the product",
    gallery: [
      {
        label: "Front Page",
        images: [
          { src: "/images/Bookhero/Screenshots%20Website%20Page/1-%20Hero%20Page.png", caption: "Hero", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/2-%20Language%20and%20Region%20Modal.png", caption: "Language & region", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/3-%20Problem%20Page.png", caption: "Problem", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/4-%20Results%20Page.png", caption: "Results", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/5-%20Pricing%20Page.png", caption: "Pricing", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/6-%20Login%20%26%20Registration.png", caption: "Login & registration", width: 3418, height: 2136 },
        ],
      },
      {
        label: "Business Portal",
        images: [
          { src: "/images/Bookhero/Screenshots%20Business%20End/1-Calendar%20and%20Appointments.png", caption: "Calendar and Appointments", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/2-Checkout%20Service%20Selection.png", caption: "Checkout: Service Selection", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/3-Checkout%20Payment%20Method%20Selection.png", caption: "Checkout: Payment Method", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/4-Invoice.png", caption: "Invoice", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/5-Transactions.png", caption: "Transactions", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/6-CRM%20(Customer%20Relationship%20Management).png", caption: "CRM (Customer Relationship Management)", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/7-%20Staff%20Management.png", caption: "Staff Management", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/8-Staff%20Daily%20Agenda%20View.png", caption: "Staff Daily Agenda View", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/9-%20Staff%20Week%20Schedule%20View.png", caption: "Staff Week Schedule View", width: 3420, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/10-%20Staff%20Base%20Schedule.png", caption: "Staff Base Schedule", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/11-%20Staff%20Time%20Off.png", caption: "Staff Time Off", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/12-%20Staff%20Commissions.png", caption: "Staff Commissions", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/13-%20Business%20Services.png", caption: "Business Services", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/14-%20Business%20Complements%20and%20Products%20.png", caption: "Complements & Products", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/15-%20Business%20Page%20Customization.png", caption: "Page Customization", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/16-%20Business%20Page%20Address.png", caption: "Page Address", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/17-%20Reports%20Overview.png", caption: "Reports Overview", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/18%20-%20Reports%20Bookings.png", caption: "Reports: Bookings", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/19%20-%20Reports%20Clients.png", caption: "Reports: Clients", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/20%20-%20Reports%20Revenue.png", caption: "Reports: Revenue", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/21%20-%20Reports%20Employees.png", caption: "Reports: Employees", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/22%20-%20Settings%20Data%20Export.png", caption: "Settings: Data Export", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/23%20-%20Settings%20Billing%20%2B%20Reminders%2B%20Preferences.png", caption: "Settings: Billing, Reminders & Preferences", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/24%20-%20Billing%20and%20Plans%20Modal.png", caption: "Billing & Plans Modal", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/25%20-%20Help%20Page.png", caption: "Help Page", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Business%20End/26%20-%20Business%20Switcher%20Toast.png", caption: "Business Switcher", width: 3418, height: 2136 },
        ],
      },
      {
        label: "Business Mobile",
        framed: false,
        images: [
          { src: "/images/Bookhero/Screenshots%20Business%20Mobile/1-%20Personal%20Employee%20Calendar.png", caption: "Employee Calendar", width: 879, height: 1798 },
          { src: "/images/Bookhero/Screenshots%20Business%20Mobile/2-%20Booking%20Interface.png", caption: "Booking Interface", width: 879, height: 1798 },
          { src: "/images/Bookhero/Screenshots%20Business%20Mobile/3-%20Booking%20View.png", caption: "Booking View", width: 879, height: 1798 },
          { src: "/images/Bookhero/Screenshots%20Business%20Mobile/4-%20Checkout.png", caption: "Checkout", width: 879, height: 1798 },
        ],
      },
      {
        label: "Booking Page",
        framed: false,
        images: [
          { src: "/images/Bookhero/Booking%20page/1-%20Business%20Page.png", caption: "Business Page", width: 879, height: 1799 },
          { src: "/images/Bookhero/Booking%20page/2-%20Choosing%20Time%20Slot.png", caption: "Choosing a Time Slot", width: 872, height: 1799 },
          { src: "/images/Bookhero/Booking%20page/3-%20Confirmation%20and%20Details.png", caption: "Confirmation & Details", width: 879, height: 1798 },
          { src: "/images/Bookhero/Booking%20page/4-%20Booking%20Confirmed.png", caption: "Booking Confirmed", width: 880, height: 1798 },
          { src: "/images/Bookhero/Booking%20page/5-%20Whatsapp%20Reminders%20with%20Buttons.png", caption: "WhatsApp Reminders", width: 873, height: 1802 },
        ],
      },
    ],
    body: [
      {
        heading: "Context",
        paragraphs: [
          "Walk into almost any salon and you'll see the same thing: a phone that won't stop buzzing, a paper diary, an owner juggling customers and rescheduling at the same time. **Almost 1 in 4 appointments ends in a no-show**, and a solo professional loses roughly **€340 a month** to them. The tools on the market charge commission per booking, are built for the customer rather than the owner, and cost too much for a business that just wants to fill its schedule.",
        ],
      },
      {
        heading: "Product & technical",
        paragraphs: [
          "**I built and launched BookHero solo**: an all-in-one booking platform for small service businesses, on **TypeScript, React, Next.js, Supabase (PostgreSQL) and the Meta WhatsApp Cloud API**. Design, architecture, code, deployment and support were all mine.",
          "On the customer side there's an **online booking page**: each business gets its own link (bookhero.app/their-name), styled with its own logo, banner, colors and services, where clients book in under a minute without creating an account. Real availability only, group bookings, mobile-first, no app to install.",
          "Behind that sits a **multi-professional calendar** with day, week, month and agenda views, time blocked for lunch breaks and days off, live sync across devices, and sensible defaults like auto-assigning a booking when no professional is preferred.",
          "A **messaging layer** keeps clients showing up: confirmation the moment they book, a WhatsApp reminder on a dynamic schedule (you set the window), native reschedule and cancel buttons, and a review request after the service. Every client gets a profile with visit history, notes, no-shows, and the tax data needed to invoice them.",
          "The **checkout** closes the sale: add services, addons and products to a cart, apply a discount and a tip, take cash or card, and generate a PDF receipt that lands in the client's history automatically. The **reporting dashboard** then shows what's working: revenue, bookings, no-show rate, top services, performance per professional. No SQL required.",
        ],
      },
      {
        heading: "Sales",
        paragraphs: [
          "**I did the sales myself with high-volume cold calling and in-person meetings** with salons, barbershops and nail studios, people who would never find or buy this online.",
          "Once a business signed up I onboarded them by hand: set up their page, services and team, walked them through the first bookings and stayed close as they built a daily routine on it. It turned a product into relationships.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "[BookHero](https://bookhero.app) is live, built on a simple promise: **no commission, no lock-in, reminders that cut no-shows, and data the owner can export anytime**. It talks to small businesses where they already are (WhatsApp), and it proved you can sell software to people who would never sign up for it online.",
        ],
      },
    ],
  },
  {
    slug: "veblen",
    title: "Veblen",
    year: "2025",
    role: "Co-founder, product, marketing & sales",
    startup: true,
    icon: { src: "/images/Veblen/icon.png", alt: "Veblen app icon" },
    summary: "A B2C SaaS financial intelligence platform: AI-driven stock research, portfolio analytics and investment insights. Founded at sixteen.",
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
  {
    slug: "why-not-you",
    title: "WHY NOT YOU?",
    year: "2026",
    role: "Director & editor",
    small: true,
    summary: "A short film about discipline, sacrifice and the pursuit of greatness. Shot in Portugal with friends, directed and edited by me in DaVinci Resolve.",
    stack: ["DaVinci Resolve", "DJI Drone", "GoPro", "iPhone 16 Pro (Blackmagic Camera)"],
    skills: ["Directing", "Cinematography", "Video Editing", "Color Grading", "Storytelling", "Drone Footage"],
    links: [
      { label: "Teaser (recommended to watch)", href: "https://www.youtube.com/watch?v=hBklX3ouv00", external: true },
      { label: "Full short film", href: "https://www.youtube.com/watch?v=UwMm6JbsfLU&feature=youtu.be", external: true },
    ],
    body: [
      {
        heading: "Context",
        paragraphs: [
          "\u201CYou are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.\u201D That's David Goggins.",
          "WHY NOT YOU? is a short film I directed about discipline, sacrifice and the pursuit of greatness. Behind every victory are thousands of hours that nobody sees. Why not you?",
          "Featuring Tiago Ramos, Duarte Quesado, Francisco Carvalho and Gonçalo Guerreiro.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "I directed the short film and shot it over a few weeks in Portugal with friends, then edited it myself. Filmed on a DJI drone, a GoPro and an iPhone 16 Pro with the Blackmagic Camera app, and edited and color graded in DaVinci Resolve. The film also includes a motivational speech by Jim Rohn.",
          "Inspired by David Goggins, it explores discipline, sacrifice and ambition through exercise.",
        ],
      },
      {
        heading: "Why I made it",
        paragraphs: [
          "This was just a fun personal side project, shot with some friends. I'm heavily inspired by David Goggins and others like him. I love to swim, run and cycle, I used to run half marathons, and I keep a strong gym discipline. I wanted to convey that message to other people: most of us live way below our potential because we never push past comfort.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The teaser and the full film are live on YouTube. I did it for fun, I just decided to exercise my free will.",
        ],
      },
    ],
    youtube: [
      { src: "https://www.youtube.com/watch?v=hBklX3ouv00", caption: "Teaser (recommended to watch)" },
      { src: "https://www.youtube.com/watch?v=UwMm6JbsfLU&feature=youtu.be", caption: "Full short film" },
    ],
    gallery: [
      {
        label: "Stills",
        images: [
          { src: "/images/Short%20Film/Tom%C3%A1s%20Cycling.png", caption: "Tomás cycling", width: 1920, height: 1080 },
          { src: "/images/Short%20Film/Duarte%20Swimming.png", caption: "Duarte swimming", width: 1920, height: 1080 },
          { src: "/images/Short%20Film/Tiago%20Running.png", caption: "Tiago running", width: 1920, height: 1080 },
          { src: "/images/Short%20Film/Francisco%20Working%20out.png", caption: "Francisco working out", width: 1920, height: 1080 },
          { src: "/images/Short%20Film/movie%20poster%20A3.png", caption: "Movie poster", width: 3508, height: 4961 },
        ],
      },
    ],
  },
  {
    slug: "toolblox-labs",
    title: "Toolblox Labs",
    year: "2024",
    role: "Design, build & launch",
    small: true,
    icon: { src: "/images/Toolblox%20Labs/icon.png", alt: "Toolblox Labs rocket icon" },
    summary: "A small model rocket: designed and simulated in OpenRocket, 3D-printed on a Bambu Lab A1 Mini, launched and compared against the simulation.",
    stack: [],
    links: [
      { label: "github", href: "https://github.com/Toolbloxindex/Toolblox-Labs", external: true },
    ],
    body: [
      {
        heading: "Context",
        paragraphs: [
          "Toolblox Labs is where I run small experiments in public. Prototype 1 is a model rocket built as a personal challenge: to test aerodynamics from design to launch.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "Designed the rocket in OpenRocket and simulated the flight before printing anything: a predicted 82.9 m apogee, a top speed of 35.9 m/s and Mach 0.105. The design was split into print-friendly segments joined with friction-fit couplers, no glue.",
          "Sliced every part in Bambu Studio and printed them on a Bambu Lab A1 Mini in ABS. Tuned the build around a 5 Ns solid-fuel motor (average thrust 4 N), wired the pad with a 9 V electric igniter and launched twice from 10 m away.",
          "Open-sourced the whole build: the [GitHub repository](https://github.com/Toolbloxindex/Toolblox-Labs) holds the detailed specifications, the full 3D files and instructions to replicate and launch the rocket.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Both flights were stable and the measured performance landed close to the OpenRocket predictions, closing the loop: design, simulate, print, fly, compare. The repository carries the full 3D model, STLs, motor thrust curves and flight simulation data.",
        ],
      },
    ],
    gallery: [
      {
        label: "Prototype & simulation",
        images: [
          { src: "/images/Toolblox%20Labs/3D%20Render.png", caption: "3D render", width: 1893, height: 1024 },
          { src: "/images/Toolblox%20Labs/Plotted%20Graph%20Simulation.png", caption: "OpenRocket flight simulation", width: 686, height: 420 },
          { src: "/images/Toolblox%20Labs/B4-4%20Graph.png", caption: "Klima B4-4 thrust curve", width: 1120, height: 683 },
        ],
      },
      {
        label: "Launch",
        images: [
          { src: "/images/Toolblox%20Labs/IMG_Launch1.jpg", caption: "Launch 1", width: 2024, height: 3604 },
          { src: "/images/Toolblox%20Labs/IMG_Launch2.jpg", caption: "Launch 2", width: 940, height: 1625 },
          { src: "/images/Toolblox%20Labs/IMG_Launch2_Edited.png", caption: "Launch 2 (edited)", width: 1206, height: 2056 },
          { src: "/images/Toolblox%20Labs/IMG_Launch2_Unedited.jpg", caption: "Launch 2 (original)", width: 1206, height: 2099 },
        ],
      },
    ],
  },
  {
    slug: "gfx-archive",
    title: "GFX",
    year: "2021",
    role: "Freelance GFX Designer",
    small: true,
    summary: "A summer of freelance GFX design on Twitter: profile pictures, thumbnails and YouTuber assets for the Roblox community, made in Photoshop, Blender and Paint.NET.",
    stack: ["Photoshop 2021", "Blender", "Paint.NET"],
    skills: ["Graphic Design", "Freelancing", "Client Relations", "Pricing & Negotiation"],
    links: [],
    body: [
      {
        heading: "Context",
        paragraphs: [
          "Spent a whole summer doing nothing but graphic design. I made profile pictures and thumbnails for Roblox games and assets for Roblox YouTubers, and sold them on Twitter as GFX. Everything was made in Photoshop, Blender and Paint.NET.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "Getting started as a freelancer was the hard part. With no clients and no reputation, there's nothing that makes someone trust you with their money. I kept showing my work anyway, and once the first few people came in the growth was fast. Happy clients brought more clients.",
          "Each order was the same routine: build the scene in Blender, finish it in Photoshop and Paint.NET, then handle pricing, deadlines and revisions over Twitter DMs.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "I didn't make much money. Most of the summer I was working below minimum wage, and eventually I got tired of it. But it left me with a much more honest idea of what freelancing is really like.",
        ],
      },
    ],
    gallery: [
      {
        label: "Selected artwork",
        images: [
          { src: "/images/GFX/Sharkblox.png", caption: "Sharkblox", width: 1920, height: 1080 },
          { src: "/images/GFX/Artic.png", caption: "Arctic", width: 1920, height: 1080 },
          { src: "/images/GFX/School%20Bus.png", caption: "School bus", width: 1920, height: 1080 },
          { src: "/images/GFX/squid%20game%201.png", caption: "Squid Game 1", width: 1920, height: 1080 },
          { src: "/images/GFX/squid%20game%202.png", caption: "Squid Game 2", width: 1920, height: 1080 },
          { src: "/images/GFX/Pfp%20Toolblox.png", caption: "Toolblox profile picture", width: 1500, height: 1500 },
          { src: "/images/GFX/Supermarket%20Story%202.png", caption: "Supermarket Story 2", width: 1920, height: 1080 },
          { src: "/images/GFX/SuperMarket%20Story.png", caption: "Supermarket Story", width: 512, height: 512 },
          { src: "/images/GFX/Toolblox.png", caption: "Toolblox", width: 1920, height: 1080 },
          { src: "/images/GFX/Pfp%202.png", caption: "Profile picture 2", width: 400, height: 400 },
          { src: "/images/GFX/Police%20Scene.png", caption: "Police scene", width: 1920, height: 1080 },
        ],
      },
    ],
  },
];

export const majorProjects: Project[] = projects.filter((p) => !p.small);

export const sideProjects: Project[] = projects.filter((p) => p.small);

export const projectsSub =
  "Major products built end to end, plus smaller experiments in public. Newest first.";

export const experienceSub =
  "Work, education and skills.";

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
  proof?: { label: string; images: ProjectImage[] };
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
    stack: ["Next.js", "Supabase", "WhatsApp Cloud API"],
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
    proof: {
      label: "Show proof",
      images: [
        {
          src: "/images/Youtube/Youtube%20Analytics%20.png",
          caption: "YouTube Studio analytics",
          width: 1908,
          height: 1086,
        },
      ],
    },
  },
  {
    period: "Jan – Dec 2021",
    title: "Freelance GFX Designer",
    company: "Self-employed",
    location: "Lisbon, PT",
    startAge: "12",
    project: "gfx-archive",
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
    summary: "Graduated with a 19.44/20 average, among the best in the year.",
  },
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Engineering & Development",
    items: [
      "Full-stack Development",
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
    ],
  },
  {
    category: "Design",
    items: [
      "Product Design",
      "UX & UI Design",
      "User Research",
      "Web Design",
      "Graphic Design",
      "Branding",
      "Figma",
    ],
  },
  {
    category: "Media & Content",
    items: ["Video Editing", "Content Creation", "DaVinci Resolve", "Affinity"],
  },
  {
    category: "Business & Growth",
    items: [
      "Start-up Ventures",
      "Product Management",
      "Sales",
      "Growth Marketing",
      "Marketing",
      "Partnerships",
      "Data Analysis",
      "Community Building",
    ],
  },
];

export const keySkills = [
  "Full-stack Development",
  "Product Design",
  "UX & UI Design",
  "Start-up Ventures",
  "Product Management",
  "Growth Marketing",
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
    name: "IELTS Academic: Overall Score 8.0",
    issuer: "IELTS Official",
    issued: "Dec 2025",
    skills: "English — 8.0/9",
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

export type AboutBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string; cite: string }
  | { type: "modal"; label: string; body: string; cite: string; href: string };

export const aboutStory: AboutBlock[] = [
  { type: "p", text: "Hi, I'm Tomás." },
  {
    type: "p",
    text: "More than anything else, I am driven by the belief that technology, science, and human ingenuity can create a future of abundance, one in which every person can live with dignity and opportunity. I want to dedicate my life to building things that matter and contribute, in whatever way I can, to humanity's progress.",
  },
  {
    type: "p",
    text: "I constantly remind myself that life is incredibly precious and that we only get one shot at it. Time, for me, is the most valuable resource there is. This is why I resonate deeply with the Latin phrase Memento Mori, meaning \"remember you must die.\" It comes from ancient Roman tradition, where it was whispered to emperors after great triumphs to remind them of their mortality. I keep a Memento Mori calendar that tracks the weeks of an average human life, and every week I cross one off. It is a simple but powerful reminder that time is finite, and that it should not be wasted.",
  },
  {
    type: "p",
    text: "That perspective has pushed me toward Computer Science and Engineering. I believe that artificial intelligence and robotics have the potential to unlock extraordinary progress for humanity, and although I do not know exactly what the future will look like, I am convinced that technological advancement will play a fundamental role in improving the human condition. My goal is to contribute, in whatever way I can, to that future.",
  },
  {
    type: "p",
    text: "I'm someone who finds a lot of meaning in building things and working towards long-term goals. I've built software, launched startups, and worked on large projects, while also constantly learning new things. I've always struggled to stay still. I feel most fulfilled when I'm creating, exploring ideas, and making progress towards something that matters.",
  },
  {
    type: "p",
    text: "Technology is at the center of many of my interests. Over the years, I've spent thousands of hours teaching myself how to code, taking courses, and building projects from my own initiative. I founded startups, experimented with different ideas, and learned far more from failures and mistakes than from successes. More than the technical side, I'm fascinated by the possibility that technology could improve people's lives and help create a world with greater opportunity and abundance.",
  },
  {
    type: "p",
    text: "Outside of technology, design is one of my biggest passions. I admire products that combine functionality with simplicity and beauty. Good design is more than aesthetics. It's a way of understanding people and creating things that genuinely improve their lives. I'm inspired by Steve Jobs' obsession with simplicity, detail, and intuitive design.",
  },
  {
    type: "p",
    text: "Sport, too, has become one of the ways through which I explore my own limits. I spend much of my time in the gym, running, cycling, and swimming. Over the years, I have completed numerous races and half-marathons, including demanding routes across hills with significant elevation. What attracts me to endurance sports is the psychological challenge, the confrontation with discomfort, doubt, and exhaustion. I used to run until I couldn't, sometimes pushing myself to the point of being unable to function properly for days afterwards. Over time, I learned to channel that intensity more intelligently, but the mindset of pushing beyond perceived limits has stayed with me.",
  },
  {
    type: "p",
    text: "I admire people who push the limits of human performance, especially David Goggins. His philosophy of embracing discomfort and constantly challenging yourself has influenced the way I approach both sport and life. One quote of his that has always stayed with me comes from Can't Hurt Me:",
  },
  {
    type: "quote",
    text: "When you think that you are done, you're only 40% into what your body's capable of doing. That's just the limits that we put on ourselves.",
    cite: "David Goggins · Can't Hurt Me",
  },
  {
    type: "p",
    text: "At the same time, I've learned that discipline is about taking care of the only body and mind you'll ever have. I try to take good care of my body. Warren Buffett often uses a similar idea, and I like his analogy, when talking about how we should think about our bodies and minds.",
  },
  {
    type: "p",
    text: "Like a car you are given at birth that you have to drive for the rest of your life, with no possibility of replacement. You can invest in better maintenance, better fuel, and better habits, but you only ever get one vehicle.",
  },
  {
    type: "modal",
    label: "Read Warren Buffett's original quote",
    body: "When I was sixteen, I had just two things on my mind - girls and cars. I wasn't very good with girls. So I thought about cars. I thought about girls, too, but I had more luck with cars.\n\nLet's say that when I turned sixteen, a genie had appeared to me. And that genie said, 'Warren, I'm going to give you the car of your choice. It'll be here tomorrow morning with a big bow tied on it. Brand-new. And it's all yours.'\n\nHaving heard all the genie stories, I would say, 'What's the catch?' And the genie would answer, 'There's only one catch. This is the last car you're ever going to get in your life. So it's got to last a lifetime.'\n\nIf that had happened, I would have picked out that car. But, can you imagine, knowing it had to last a lifetime, what I would do with it?\n\nI would read the manual about five times. I would always keep it garaged. If there was the least little dent or scratch, I'd have it fixed right away because I wouldn't want it rusting. I would baby that car, because it would have to last a lifetime.\n\nThat's exactly the position you are in concerning your mind and body. You only get one mind and one body. And it's got to last a lifetime. Now, it's very easy to let them ride for many years. But if you don't take care of that mind and that body, they'll be a wreck forty years later, just like the car would be.\n\nIt's what you do right now, today, that determines how your mind and body will operate ten, twenty, and thirty years from now.",
    cite: "Warren Buffett",
    href: "https://www.goodreads.com/quotes/587506-when-i-was-sixteen-i-had-just-two-things-on",
  },
  {
    type: "p",
    text: "I have very big dreams and I aim to create transformative work that has a real impact on the world. I hope to contribute towards a future of abundance for all, where technological progress enables every person to live with dignity and opportunity. This is not just a vague ambition for me. It is a core part of my purpose and the reason I wake up and choose work hard every day.",
  },
  {
    type: "p",
    text: "I also try to live by a principle of working with extreme intensity and volume, to the point where failure becomes statistically unlikely, as Alex Hormozi has described. If I want to achieve something meaningful, I need to act accordingly. I recognize that behind every victory are thousands of hours of work.",
  },
  {
    type: "p",
    text: "I try to remain deeply self-critical and intellectually honest. I have no problem admitting when I am wrong, and I constantly question my own assumptions. I am heavily influenced by the philosophy of Karl Popper and his idea that knowledge grows through criticism, experimentation, and the elimination of error. I try to reject intuition before confirming it, and I strive to be as truth-seeking as possible. I am extremely careful with my statements and prefer to think in terms of first principles rather than assumptions. In that sense, I see thinking itself as a process of continuous correction rather than certainty. I also try to stay humble in how I think about my own ideas, actively exposing my thinking to criticism and resisting the urge to defend my intuition. I see myself as a work in progress, constantly being refined through experience, feedback, and error correction.",
  },
  {
    type: "quote",
    text: "It is easy to obtain confirmations, or verifications, for nearly every theory—if we look for confirmations. Confirmations should count only if they are the result of risky predictions... A theory which is not refutable by any conceivable event is non-scientific. Irrefutability is not a virtue of a theory (as people often think) but a vice. Every genuine test of a theory is an attempt to falsify it, or refute it.",
    cite: "Karl Raimund Popper · Conjectures and Refutations: The Growth of Scientific Knowledge (1963), 36",
  },
  {
    type: "p",
    text: "I am also very inspired by successful people, not in a superficial way, but because I am interested in understanding how they think and what patterns led to their outcomes. Some of the books that have influenced me the most are Steve Jobs by Walter Isaacson, Elon Musk by Walter Isaacson, and Shoe Dog by Phil Knight. I also read widely outside my main field, especially in history, physics, and economics, to fill gaps in my understanding of the world.",
  },
  {
    type: "p",
    text: "In terms of personality, I try to be highly focused. I prefer depth over breadth and try to concentrate my energy on a small number of meaningful goals rather than spreading myself too thin. At the same time, it would be easy to assume that this makes me isolated or overly self-focused, but that is not the case. I genuinely enjoy meeting new people and learning from different perspectives. I often attend run clubs, networking events, and social environments where I can connect with people from different countries, backgrounds, and interests.",
  },
  {
    type: "p",
    text: "I believe soft skills are extremely important in any career, and I have actively worked on developing them by stepping outside my comfort zone. I have done door-to-door sales, cold calls, client meetings, and managed relationships in professional contexts. These experiences have made me more confident, but also more aware of how much there is still to learn.",
  },
  {
    type: "p",
    text: "For all my interest in technology, ambition, and performance, the people around me matter deeply. I value my family and friends a great deal, and some of my happiest moments come from simple conversations, shared experiences, and learning from others. A few years ago, I struggled with social anxiety and tended to be more self-centered in how I viewed the world. Over time, I learned to listen more, to appreciate others more, and to understand that ambition is meaningless if it is not shared.",
  },
  {
    type: "p",
    text: "Space is another obsession of mine. I spend hours watching Starship and NASA launches. As I'm Portuguese, I like to make an analogy to the Era of Discoveries, when sailing ships ventured into the unknown oceans. They feel like modern-day epics. I also find deep meaning in looking at the night sky, thinking about distant galaxies, the possibility of life beyond Earth, and how much of the universe remains unknown. In a world that often feels focused on immediate problems, space is a reminder of scale, mystery, and how much there still is to discover. I would be honored to contribute in any way to the ultimate question of life.",
  },
  {
    type: "p",
    text: "At my core, I am someone who wants to understand how the world works and contribute to building things that improve it. I am deeply entrepreneurial, highly curious, ambitious, and hardcore. I don't know exactly where my path will lead, but I hope that, over time, I can look back and say that I used my time well, contributing to something larger than myself.",
  },
  {
    type: "p",
    text: "If you've made it this far, thank you for reading. I hope this offers a glimpse into who I am, my mission and values.",
  },
];

export const aboutGallery: ProjectImage[] = [
  { src: "/images/About%20Me/IMG_3963.jpg", caption: "Tomás Correia", width: 2125, height: 1206 },
  { src: "/images/About%20Me/IMG_3754.jpeg", caption: "Tomás Correia", width: 2830, height: 3877 },
  { src: "/images/About%20Me/0f05a0e6-37e8-42fa-ab56-7adaa4f0fee1%202.jpg", caption: "Tomás Correia", width: 1200, height: 1600 },
  { src: "/images/About%20Me/IMG_5653.JPG", caption: "Tomás Correia", width: 6000, height: 4000 },
  { src: "/images/About%20Me/IMG_2156.jpeg", caption: "Tomás Correia", width: 4032, height: 3024 },
  { src: "/images/About%20Me/IMG_5649.JPG", caption: "Tomás Correia", width: 3648, height: 5472 },
  { src: "/images/About%20Me/IMG_5932.jpg", caption: "Tomás Correia", width: 1206, height: 1874 },
  { src: "/images/About%20Me/IMG_4096.JPG", caption: "Tomás Correia", width: 4000, height: 3159 },
  { src: "/images/About%20Me/IMG_5931.jpg", caption: "Tomás Correia", width: 1206, height: 2116 },
  { src: "/images/About%20Me/IMG_2461.jpeg", caption: "Tomás Correia", width: 2322, height: 3401 },
  { src: "/images/About%20Me/IMG_0299.jpeg", caption: "Tomás Correia", width: 3024, height: 4032 },
];

export const photography: ProjectImage[] = [
  { src: "/images/Photography/dji_fly_20241207_180426_129_1750016746337_photo_optimized.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/dji_fly_20241207_180032_125_1750016825049_photo_optimized.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/DJI_0376.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/DJI_0379.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/IMG_2739.jpeg", caption: "Photography by Tomás Correia", width: 2800, height: 3910 },
  { src: "/images/Photography/IMG_2734.jpeg", caption: "Photography by Tomás Correia", width: 4032, height: 3024 },
  { src: "/images/Photography/IMG_2733.jpeg", caption: "Photography by Tomás Correia", width: 4032, height: 3024 },
  { src: "/images/Photography/IMG_2732.jpeg", caption: "Photography by Tomás Correia", width: 4032, height: 3024 },
  { src: "/images/Photography/IMG_2730.jpeg", caption: "Photography by Tomás Correia", width: 3534, height: 2650 },
  { src: "/images/Photography/IMG_2729.jpeg", caption: "Photography by Tomás Correia", width: 4032, height: 3024 },
  { src: "/images/Photography/IMG_2599.jpeg", caption: "Photography by Tomás Correia", width: 2647, height: 1557 },
  { src: "/images/Photography/IMG_2597.jpeg", caption: "Photography by Tomás Correia", width: 3024, height: 4032 },
  { src: "/images/Photography/IMG_2595.jpeg", caption: "Photography by Tomás Correia", width: 2944, height: 3926 },
  { src: "/images/Photography/IMG_2593.jpeg", caption: "Photography by Tomás Correia", width: 3024, height: 4032 },
  { src: "/images/Photography/CITY%20PHOTO%204x%20%20EDITED%20.jpg", caption: "Photography by Tomás Correia", width: 3764, height: 8192 },
  { src: "/images/Photography/dji_export_20250615_202203_1750015323949_sphere_screenshot.JPG", caption: "Photography by Tomás Correia", width: 3820, height: 2048 },
  { src: "/images/Photography/dji_fly_20250101_001124_278_1735690488705_photo_optimized.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/dji_fly_20241231_235240_260_1735689846761_photo_optimized.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/DJI_0248.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/dji_fly_20241230_125052_242_1735566350345_photo_optimized.jpg", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/DJI_0239.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/DJI_0234.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/DJI_0211.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/dji_fly_20241225_171512_185_1735147198766_photo_optimized.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/DJI_0164.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
  { src: "/images/Photography/dji_fly_20241123_133824_23_1750016841963_photo_optimized.JPG", caption: "Photography by Tomás Correia", width: 4000, height: 2250 },
];

export const contact = {
  title: "Working on something interesting? I'd like to hear about it.",
  text: "Best reached by email; I read everything and answer within a day or two.",
};
