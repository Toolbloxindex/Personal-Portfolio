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
  youtube?: ProjectVideo[];
  icon?: { src: string; alt: string; large?: boolean };
  small?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bookhero",
    title: "BookHero",
    year: "2026",
    icon: { src: "/images/Bookhero/logo.png", alt: "BookHero logo", large: true },
    role: "Founder, product, sales & marketing",
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
    gallery: [
      {
        label: "Front Page",
        images: [
          { src: "/images/Bookhero/Screenshots%20Website%20Page/1-%20Hero%20Page.png", caption: "Hero", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/6-%20Language%20and%20Region%20Modal.png", caption: "Language & region", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/2-%20Problem%20Page.png", caption: "Problem", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/3-%20Results%20Page.png", caption: "Results", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/4-%20Pricing%20Page.png", caption: "Pricing", width: 3418, height: 2136 },
          { src: "/images/Bookhero/Screenshots%20Website%20Page/5-%20Login%20%26%20Registration.png", caption: "Login & registration", width: 3418, height: 2136 },
        ],
      },
      {
        label: "Business End",
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

export const aboutSub =
  "Two startups by seventeen, a CS degree in progress at TU Delft, and a habit of building things in public.";

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
