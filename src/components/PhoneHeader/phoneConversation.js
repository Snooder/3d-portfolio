export const INTRO_MESSAGES = [
  { side: 'matt', text: "Hey! I’m Matt’s portfolio assistant 👋" },
  { side: 'matt', text: 'I’m here to answer your questions.' },
];

export const PORTFOLIO_TOPICS = {
  build: {
    icon: '🔨',
    question: 'What does Matt build?',
    answer: 'Matt builds full-stack products that run real operations. He works across React interfaces, Go APIs, Python data pipelines, PostgreSQL, AI tooling, and AWS, then adds multi-tenant security, monitoring, and reliable deployment so the product can support real users.',
    followUps: ['projects', 'design', 'approach', 'stack'],
  },
  experience: {
    icon: '💼',
    question: 'Tell me about his experience',
    answer: 'Matt founded Snydex Platforms and previously built ML infrastructure at Flatiron Health, publishing systems at Arizent, Shopify solutions as a freelancer, and university applications at Rutgers.',
    topicLinks: [
      { topicId: 'snydex', icon: '🏗️', label: 'Snydex Platforms', detail: 'Founder and engineer' },
      { topicId: 'flatiron', icon: '🧬', label: 'Flatiron Health', detail: 'ML infrastructure' },
      { topicId: 'moreExperience', icon: '➕', label: 'More roles', detail: 'Arizent, freelance, Rutgers' },
    ],
    followUps: ['impact', 'collaboration', 'role'],
  },
  projects: {
    icon: '🚀',
    question: 'Show me his projects',
    answer: 'Highlights include MuseumIQ for collections and museum operations, StarFetcher for real-time game data, Snydex Invoice for billing workflows, and WeedBuddy for compliant dispensary operations. Matt designed and built each product from the interface through APIs, data models, and cloud infrastructure.',
    topicLinks: [
      { topicId: 'museumiq', icon: '🏛️', label: 'MuseumIQ', detail: 'Museum operations' },
      { topicId: 'starfetcher', icon: '🎮', label: 'StarFetcher', detail: 'Real-time game data' },
      { topicId: 'snydexInvoice', icon: '🧾', label: 'Snydex Invoice', detail: 'Billing workflows' },
      { topicId: 'weedbuddy', icon: '🌿', label: 'WeedBuddy', detail: 'Compliant retail operations' },
    ],
    followUps: ['design', 'ai', 'impact', 'build'],
  },
  museumiq: {
    icon: '🏛️',
    question: 'Tell me about MuseumIQ',
    answer: 'MuseumIQ gives museums one secure place to manage collections and daily operations. Matt designed the interface and built the APIs, multi-tenant data model, and AWS infrastructure.',
    followUps: ['projects', 'design', 'approach'],
  },
  starfetcher: {
    icon: '🎮',
    question: 'Tell me about StarFetcher',
    answer: 'StarFetcher turns real-time game data into a clear, responsive product experience. Matt built the interface, data flows, APIs, and cloud foundation behind it.',
    followUps: ['projects', 'design', 'stack'],
  },
  snydexInvoice: {
    icon: '🧾',
    question: 'Tell me about Snydex Invoice',
    answer: 'Snydex Invoice simplifies billing and document workflows for busy teams. Matt designed and built the product across the interface, APIs, data model, and cloud deployment.',
    followUps: ['projects', 'snydex', 'approach'],
  },
  weedbuddy: {
    icon: '🌿',
    question: 'Tell me about WeedBuddy',
    answer: 'WeedBuddy supports compliant dispensary operations with practical retail workflows. Matt built the experience from product design through backend services, data, and infrastructure.',
    followUps: ['projects', 'design', 'build'],
  },
  stack: {
    icon: '🧰',
    question: 'What’s his tech stack?',
    answer: 'Matt uses React and TypeScript for interfaces, Go for high-performance services, Python for data and AI workflows, PostgreSQL for structured multi-tenant data, and AWS for deployment and scale. He chooses the stack around the product’s needs instead of forcing every project into one pattern.',
    followUps: ['ai', 'approach', 'experience'],
  },
  availability: {
    icon: '🟢',
    question: 'Is Matt available?',
    answer: 'Yes. Matt is open to full-stack, AI infrastructure, and product engineering opportunities.',
    followUps: ['role', 'collaboration', 'contact'],
  },
  approach: {
    icon: '🧭',
    question: 'How does Matt handle new work?',
    answer: 'Matt starts with a single user and plans for operational success to get them where they need to be. He moves between product, design, data, security, and infrastructure to ship useful first versions, then strengthens reliability, access controls, and observability as the product proves itself.',
    followUps: ['collaboration', 'impact', 'projects'],
  },
  design: {
    icon: '🎨',
    question: 'Does Matt design too?',
    answer: 'Yes. Matt designs interfaces and product flows alongside the code. Work such as RestaurantIQ, Safe With Sounds, and StarFetcher focuses on clear hierarchy, approachable data, responsive layouts, and interactions that guide users toward the next useful action.',
    followUps: ['projects', 'approach', 'impact'],
  },
  ai: {
    icon: '🤖',
    question: 'What AI work has he done?',
    answer: 'Matt has built ML platforms, model deployment tooling, data pipelines, and modern AI and LLM product experiences. His work ranges from scrappy Heroku-style prototypes for testing ideas quickly to production AWS systems using EC2, Lambda, S3, RDS, and load balancing. He focuses on getting a useful version into people’s hands, then strengthening the architecture as the product proves itself.',
    followUps: ['flatiron', 'stack', 'projects'],
  },
  impact: {
    icon: '📈',
    question: 'What impact has he made?',
    answer: 'Matt builds reliable platforms designed to scale. His products have served thousands of users. At Flatiron Health, he supported oncology researchers working with millions of protected health records. He brings a security-minded approach and deep AWS specialization to every system he builds. As a freelancer, he served more than 20 clients and helped build businesses from the ground up.',
    followUps: ['experience', 'approach', 'collaboration'],
  },
  collaboration: {
    icon: '🤝',
    question: 'How does he collaborate?',
    answer: 'Matt works directly with early users, designers, engineers, ML builders, and stakeholders. He turns ambiguous needs into testable product decisions, shares progress early, and uses feedback to shape reliable software that fits real workflows.',
    followUps: ['approach', 'experience', 'role'],
  },
  role: {
    icon: '🎯',
    question: 'What roles is he targeting?',
    answer: 'Matt is targeting full-stack, product engineering, and AI infrastructure roles where he can own meaningful systems from idea through production.',
    followUps: ['experience', 'stack', 'contact'],
  },
  snydex: {
    icon: '🏗️',
    question: 'Snydex Platforms',
    answer: 'At Snydex Platforms, Matt takes multi-tenant SaaS products from idea to production across museums, hospitality, retail, billing, and data products. He owns product design, shared platform architecture, Go and Python services, PostgreSQL, AWS, monitoring, and the user feedback loop.',
    followUps: ['projects', 'ai', 'approach'],
  },
  flatiron: {
    icon: '🧬',
    question: 'Flatiron Health',
    answer: 'At Flatiron Health, Matt supported ML platforms used for oncology research. He maintained Python CLI and API tooling, improved Docker model deployments, managed EC2, RDS, and ELB infrastructure, and worked with Jenkins and Terraform to improve testing, reliability, speed, and cost.',
    followUps: ['ai', 'impact', 'stack'],
  },
  moreExperience: {
    icon: '➕',
    question: 'More roles',
    answer: 'Matt’s earlier experience includes full-stack publishing work at Arizent, Shopify engineering for freelance clients, and application development at Rutgers University.',
    followUps: ['arizent', 'freelance', 'rutgers'],
  },
  arizent: {
    icon: '📰',
    question: 'Arizent',
    answer: 'At Arizent, Matt built Java, JavaScript, and MySQL publishing systems, new content types, and third-party integrations. He also improved Docker and Jenkins workflows, collaborated with designers, and helped deliver experiences associated with a 30% engagement increase.',
    followUps: ['design', 'impact', 'stack'],
  },
  freelance: {
    icon: '🛍️',
    question: 'Freelance',
    answer: 'Matt built custom Shopify applications, subscription tools, data backups, and storefront experiences for 20 e-commerce businesses.',
    followUps: ['design', 'approach', 'projects'],
  },
  rutgers: {
    icon: '🏫',
    question: 'Rutgers University',
    answer: 'As a Junior Application Developer at Rutgers, Matt built internal Drupal tools, automated Unix workflows, and redesigned responsive university web experiences.',
    followUps: ['experience', 'collaboration', 'stack'],
  },
  contact: {
    icon: '✉️',
    question: 'How can I contact him?',
    answer: 'Choose the best way to reach Matt:',
    contacts: [
      {
        type: 'email',
        label: 'Email Matt',
        detail: 'Copy email address',
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        detail: '/in/mattcsnyder',
        href: 'https://www.linkedin.com/in/mattcsnyder/',
      },
      {
        type: 'github',
        label: 'GitHub',
        detail: '@snooder',
        href: 'https://github.com/snooder',
      },
    ],
    followUps: ['availability', 'role', 'projects'],
  },
};

export const PRIMARY_TOPIC_IDS = ['build', 'experience', 'availability'];

export const PROMPT_APPS = [
  {
    id: 'build',
    label: 'Build',
    icon: '🔨',
    gradient: 'linear-gradient(135deg,#f97316,#ef4444)',
    topics: ['build', 'stack', 'approach', 'ai'],
  },
  {
    id: 'career',
    label: 'Career',
    icon: '💼',
    gradient: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
    topics: ['experience', 'snydex', 'flatiron', 'moreExperience'],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '🚀',
    gradient: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
    topics: ['projects', 'design', 'impact'],
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '✉️',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    topics: ['availability', 'role', 'contact'],
  },
];
