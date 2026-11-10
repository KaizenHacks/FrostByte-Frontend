// ─── Brand Colors ────────────────────────────────────────────────────────────
export const colors = {
  glacierGrey: '#A5AFBD',
  frostWhite: '#DCE3EA',
  snowWhite: '#F5F7FA',
  arcticSlate: '#53647B',
  midnightIce: '#171F2D',
  paleIce: '#C2E1E8',
  digitalMagenta: '#D65BFF',
  prismaticBlue: '#6D9EFF',
} as const;

// ─── Official KaizenHacks Brand Palette ───────────────────────────────────────
export const kaizenBrandColors = {
  deepNavy: '#091F42',
  royalBlue: '#254B85',
  midBlue: '#3E70A5',
  mutedBlue: '#6499C1',
  warmPaper: '#CAC4BA',
  offWhite: '#F2F3F1',
  ink: '#0D1014',
} as const;

// ─── Organizer Details (KaizenHacks) ─────────────────────────────────────────
export const kaizenHacksMeta = {
  name: 'KaizenHacks',
  role: 'Organizer',
  networkType: 'Independent Event & Innovation Network',
  attribution: 'Organized by KaizenHacks',
  tagline: 'Grow together. Build independently.',
  philosophy: 'Progress through every event.',
  purpose:
    'To empower individuals to organise independent events, collaborate with others and build lasting experience and credibility through collective progress.',
  mission:
    'Make organising meaningful events easier, more accessible and more rewarding by connecting independent organisers with people, knowledge and resources.',
  vision:
    'Build a growing network where every event creates opportunities, experience and credibility for the next generation of organisers.',
  description:
    'KaizenHacks is an Independent Event & Innovation Network dedicated to connecting independent organisers with people, knowledge, and resources so every event builds lasting experience, credibility, and opportunity.',
  logo: '/logo/kaizen_primary_dark_trimmed.png',
  logoDark: '/logo/kaizen_primary_dark.png',
  logoPrimary: '/assets/kaizen_primary.png',
  logoIconic: '/assets/kaizen_iconic_light.png',
  website: 'https://kaizenhacks.tech',
  instagram: 'https://www.instagram.com/kaizen_hacks/',
  linkedin: 'https://www.linkedin.com/company/kaizen-hacks/',
  github: 'https://github.com/orgs/KaizenHacks/',
} as const;

// ─── Official Community ──────────────────────────────────────────────────────
export const communityMeta = {
  name: 'FROSTBYTE Community',
  label: 'JOIN THE FROSTBYTE COMMUNITY',
  shortLabel: 'Join WhatsApp Community',
  url: 'https://chat.whatsapp.com/JeWOFSPmNvD8BY4wk8WfSd',
  description:
    'Connect directly with the KaizenHacks organizing squad, assemble party members, ask questions, and receive official quest briefings in real time.',
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Sponsors & Partners', href: '#sponsors' },
  { label: 'Community', href: '#community' },
] as const;

export const registrationNavLink = {
  label: 'Registration',
  href: '#registration',
} as const;

// ─── Event Metadata ──────────────────────────────────────────────────────────
export const eventMeta = {
  name: 'FROSTBYTE',
  year: '2026',
  fullName: 'FROSTBYTE 2026',
  organizer: 'KaizenHacks',
  attribution: 'FROSTBYTE by KaizenHacks',
  poweredBy: 'Powered by KaizenHacks',
  networkType: 'Independent Event & Innovation Network',
  tagline: 'Modern Web Development & Agentic Engineering.',
  shortDescription:
    'FROSTBYTE by KaizenHacks is a 3-day hackathon bringing developers together to build web solutions powered by modern web development and agentic engineering.',
  description:
    'FROSTBYTE brings together developers to build web-based solutions through modern web development and agentic engineering. Participants will work on a real-world problem statement revealed at the beginning of the hackathon.',
  domain: 'Web Development & Agentic Engineering',
  format: '3-Day Hackathon (Day 01 Kickoff • Day 02 Submission • Day 03 Judging)',
  dates: 'To be announced',
  venue: 'To be announced',
  location: 'To be announced',
  registrationStatus: 'NOT OPEN',
  registrationUrl: '#registration',
  whatsappUrl: 'https://chat.whatsapp.com/JeWOFSPmNvD8BY4wk8WfSd',
  supportEmail: 'support@kaizenhacks.tech',
} as const;

export const contactEmail = 'support@kaizenhacks.tech';

// ─── About Highlights ────────────────────────────────────────────────────────
export const aboutHighlights = [
  {
    title: 'Web Development',
    description:
      'Exclusively focused on web development. Build responsive, high-performance web applications and digital interfaces that solve real-world problems.',
    icon: 'Globe' as const,
    badge: 'CORE DOMAIN',
  },
  {
    title: 'Agentic Engineering',
    description:
      'Incorporate autonomous agentic workflows, intelligent tool-calling, and smart agent architectures into your web platforms.',
    icon: 'Bot' as const,
    badge: 'TECHNICAL FOCUS',
  },
  {
    title: 'Three-Day Format',
    description:
      'Structured across 3 distinct days: Day 01 kickoff and dev, Day 02 continued build and final submission, and Day 03 dedicated live judging.',
    icon: 'Clock' as const,
    badge: 'SCHEDULE',
  },
  {
    title: 'Central Problem Statement',
    description:
      'One official real-world challenge revealed at opening ceremony. Every squad builds against the same frontier with complete creative freedom.',
    icon: 'Lock' as const,
    badge: 'CHALLENGE',
  },
] as const;

// ─── Event Timeline (3-Day Structure) ────────────────────────────────────────
export const eventTimeline = [
  {
    day: 'DAY 01',
    phase: 'HACKATHON BEGINS',
    title: 'Opening & Development Kickoff',
    description:
      'Event opening and participant onboarding. Introduction to the event and rules. Problem statement reveal. Development begins as participants dive into their web development projects.',
    time: 'Day 01',
    tag: 'Kickoff & Dev',
  },
  {
    day: 'DAY 02',
    phase: 'BUILD & FINAL SUBMISSION',
    title: 'Continued Development & Final Submission',
    description:
      'Continued development, project refinement, and testing. Final project submission happens on Day 02 before the submission deadline, including repository and project links.',
    time: 'Day 02',
    tag: 'Final Submission Deadline',
  },
  {
    day: 'DAY 03',
    phase: 'JUDGING & RESULTS',
    title: 'Evaluation, Demonstrations & Victory Ceremony',
    description:
      'Day 03 is a dedicated judging day: project evaluation by judges, demonstrations, and presentations. Final evaluation followed by winner announcements and closing ceremony.',
    time: 'Day 03',
    tag: 'Judging & Awards',
  },
] as const;

// ─── Problem Statement Metadata ──────────────────────────────────────────────
export const problemStatementMeta = {
  title: 'THE PROBLEM STATEMENT',
  status: 'To be revealed at the beginning of FROSTBYTE.',
  badge: 'ENCRYPTED QUEST DATA',
  domain: 'Web Development & Agentic Engineering',
  description:
    'FROSTBYTE brings together developers to build web-based solutions through modern web development and agentic engineering. Participants will work on a real-world problem statement revealed at the beginning of the hackathon.',
  details: [
    {
      title: 'Exclusively Web-Based',
      description: 'Projects must be accessible web applications, responsive web apps, or web-first platforms.',
    },
    {
      title: 'Agentic Engineering',
      description: 'Integrate autonomous agent workflows, reasoning loops, or intelligent automation into web experiences.',
    },
    {
      title: 'Unveiled on Day 01',
      description: 'The sealed problem statement is decrypted live at opening ceremony so all teams start on an equal footing.',
    },
  ],
} as const;

// Backward-compatible alias for existing imports
export const tracks = [
  {
    title: 'Modern Web Development',
    description:
      'Build responsive, intuitive, and robust web applications leveraging modern frameworks and modern web architectures.',
    icon: 'Globe' as const,
  },
  {
    title: 'Agentic Engineering',
    description:
      'Integrate autonomous agentic capabilities, reasoning pipelines, and intelligent workflows into interactive web solutions.',
    icon: 'Bot' as const,
  },
  {
    title: 'Single Central Challenge',
    description:
      'One official real-world challenge statement revealed at opening ceremony. Equal footing, maximum technical depth.',
    icon: 'Lock' as const,
  },
] as const;

// ─── Sponsors & Organizer ────────────────────────────────────────────────────
export const sponsorTiers = [
  {
    tier: 'Organized by',
    slots: 1,
    size: 'lg' as const,
  },
] as const;

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: 'What is FROSTBYTE and who organizes it?',
    answer:
      'FROSTBYTE 2026 is an immersive winter hackathon organized by KaizenHacks, an Independent Event & Innovation Network. It brings together developers to build web-based solutions through modern web development and agentic engineering around a single real-world problem statement.',
  },
  {
    question: 'Are registrations currently open for FROSTBYTE 2026?',
    answer:
      'Registrations have not opened yet — applications are opening soon! Join the official FROSTBYTE WhatsApp Community to be among the first to receive application release alerts, squad formation briefings, and event logistics.',
  },
  {
    question: 'What is the format and duration of the hackathon?',
    answer:
      'FROSTBYTE takes place across THREE DAYS: Day 01 features event opening, rules introduction, problem statement reveal, and development kickoff. Day 02 is focused on continued building and final project submission before the deadline. Day 03 is a dedicated judging day for project evaluation, demos, presentations, winner announcements, and the closing ceremony.',
  },
  {
    question: 'When is the final project submission deadline?',
    answer:
      'Final project submissions happen on DAY 02. All code repositories and project links must be committed and submitted before the Day 02 deadline. Day 03 is strictly reserved for judging evaluations and presentations, not an extension of development.',
  },
  {
    question: 'What is the technical domain of the hackathon?',
    answer:
      'FROSTBYTE is exclusively a Web Development hackathon with a focus on Agentic Engineering. There are no multiple unrelated tracks (no separate AI, hardware, or open innovation tracks). All participants build web solutions addressing the single central challenge.',
  },
  {
    question: 'What is the problem statement?',
    answer:
      'THE PROBLEM STATEMENT will be revealed at the beginning of FROSTBYTE during Day 01 opening ceremony. This ensures every team begins ideating and building at the exact same moment.',
  },
  {
    question: 'Who can enter and what is the team size?',
    answer:
      'FROSTBYTE is open to all passionate student builders, developers, and designers. You can compete solo or in teams of up to 4 members. You can find teammates in our official WhatsApp Community.',
  },
  {
    question: 'How do I join the community and get updates?',
    answer:
      'Join the official FROSTBYTE WhatsApp Community at https://chat.whatsapp.com/JeWOFSPmNvD8BY4wk8WfSd for official announcements, team formation mixers, and direct access to KaizenHacks organizers.',
  },
  {
    question: 'How can I contact the organizing team for support?',
    answer:
      'You can reach the KaizenHacks organizing team directly by sending an email to support@kaizenhacks.tech or through our official community channels.',
  },
] as const;

// ─── Social Links ────────────────────────────────────────────────────────────
export const socialLinks = [
  { platform: 'Website', href: 'https://kaizenhacks.tech' },
  { platform: 'Instagram', href: 'https://www.instagram.com/kaizen_hacks/' },
  { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/kaizen-hacks/' },
  { platform: 'GitHub', href: 'https://github.com/orgs/KaizenHacks/' },
  { platform: 'WhatsApp', href: 'https://chat.whatsapp.com/JeWOFSPmNvD8BY4wk8WfSd' },
] as const;
