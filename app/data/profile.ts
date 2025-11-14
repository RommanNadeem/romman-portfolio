export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  period: string;
  location: string;
  degree: string;
  details: string[];
}

export interface ProjectItem {
  name: string;
  timeframe: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
}

export interface HeroLink {
  label: string;
  url: string;
}

export interface HeroMeta {
  dates: string;
  location: string;
  status: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  links: HeroLink[];
  badges: string[];
  coverImageUrl: string | null;
  meta: HeroMeta;
}

type BlockVariant = 'info' | 'warning' | 'default';

export interface CalloutBlock {
  type: 'callout';
  title: string;
  body: string;
  variant?: BlockVariant;
}

export interface MetricsItem {
  label: string;
  value: number;
  suffix?: string;
  tooltip?: string;
}

export interface MetricsBlock {
  type: 'metrics';
  title: string;
  items: MetricsItem[];
}

export interface FeatureItem {
  title: string;
  body: string;
  iconKey: string;
}

export interface FeatureGridBlock {
  type: 'feature_grid';
  title: string;
  cols?: number;
  items: FeatureItem[];
}

export interface BulletsBlock {
  type: 'bullets';
  title: string;
  style?: 'checks' | 'dots';
  items: string[];
}

export type ContentBlock = CalloutBlock | MetricsBlock | FeatureGridBlock | BulletsBlock;

export const profileName = 'Haris Ibrahim';
export const profileTitle = 'Strategic Marketing & Growth Leader';
export const profileHeadline =
  'CMO-level operator with deep experience in industrial marketing, product commercialization, and data-driven growth across energy, automation, and telecom.';

export const summaryParagraphs = [
  'A highly professional, innovative and versatile marketeer with branding and digital marketing specialization to deliver profitable results.',
  'Identifies long-term opportunities to produce high-impact ROI and increase customer outreach with cost-effective technological solutions and industrial applications.',
];

export const contactInfo = [
  {
    label: 'Address',
    value: 'Lahore, Pakistan',
    href: 'https://maps.app.goo.gl/H4u9JcJYr5nMUeuE8',
  },
  { label: 'Mobile', value: '+92-300-8817098', href: 'tel:+923008817098' },
  { label: 'Phone', value: '+92-42-35247830', href: 'tel:+924235247830' },
  { label: 'Email', value: 'harisibrahim1@yahoo.com', href: 'mailto:harisibrahim1@yahoo.com' },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Tensai Technologies',
    role: 'Co-Founder & CMO',
    period: 'Jul 2020 – Present',
    highlights: [
      'Built a data-first consultancy that helps industrial clients interpret historical performance and act on predictive insights.',
      'Designed marketing systems that articulate Tensai’s value narrative around uptime gains, streamlined operations, and growth opportunities.',
      'Educated customers on how to translate analytics into uptime improvements and cost savings, strengthening long-term partnerships.',
    ],
  },
  {
    company: 'Avanceon Limited',
    role: 'Head of Marketing',
    period: 'Feb 2019 – Jun 2020',
    highlights: [
      "Owned global marketing strategy for Middle Eastern and South Asian markets while supporting Avanceon's institutional business plan.",
      'Directed external communications end-to-end, covering websites, digital acquisition, print, email, and multimedia storytelling.',
      'Expanded data-informed optimization across web and social channels to sharpen messaging, engagement, and lead quality.',
      'Led marketing research that aligned annual priorities with on-ground tactics and informed senior stakeholders.',
      'Managed marketing budgets, talent, and vendor relationships to deliver measurable ROI.',
    ],
  },
  {
    company: 'INTECH Process Automation',
    role: 'Global Marketing Manager',
    period: 'Jul 2014 – Feb 2019',
    highlights: [
      'Partnered with global sales to execute awareness programs (trade shows, target accounts, sales collateral) that fueled record 12% YoY revenue growth.',
      'Launched full-stack digital marketing (SEO, SEM, SMM, content, marketing automation) delivering US$3M+ qualified leads and US$0.98M revenue in FY17-18.',
      'Built reporting dashboards for continuous channel performance optimization and UX improvements.',
      'Directed product marketing for advanced software solutions, driving 165% average revenue growth and the business’s highest-ever software revenues in FY17-18.',
      'Authored a comprehensive market intelligence framework covering verticals, applications, territories, Capex/Opex, and competitor tracking to guide 5-year regional strategies.',
      'Rolled out sales force effectiveness initiatives that elevated talent management, account planning, CRM adoption, and collaboration across global teams.',
      'Owned budgeting, ROI measurement, and company-wide business reporting (bookings, costing, profitability).',
    ],
  },
  {
    company: 'INTECH Process Automation',
    role: 'Marketing & Business Development Manager (Advance Software Solutions)',
    period: 'May 2017 – Jun 2018',
    highlights: [
      'Led business development for the Advance Software Solutions category alongside marketing leadership duties.',
      'Set category direction, orchestrated GTM campaigns, and prioritized account penetration to exceed annual revenue targets by 25% (57% YoY growth).',
    ],
  },
  {
    company: "Jazz – A Veon's Brand",
    role: 'Specialist – Communication & Channel Development',
    period: 'Oct 2012 – Mar 2014',
    highlights: [
      'Owned ATL/BTL campaign execution for mobile internet, delivering 86% revenue and 56% subscriber growth.',
      'Ran qualitative and quantitative research programs (NPS, BHT, SPI) to uncover actionable consumer insights.',
      'Partnered with brand activation, product, and sales teams to ship high-impact activation campaigns and sales enablement assets.',
      'Launched an industry-first joint planning process with sales, onboarding 25,000 retail partners and generating US$56K incremental revenue within five months.',
    ],
  },
  {
    company: "Jazz – A Veon's Brand",
    role: 'Specialist – Product & Pricing',
    period: 'Oct 2011 – Sep 2012',
    highlights: [
      'Managed the mobile internet business end-to-end, covering expansion planning, subscriber acquisition, product launches, and pricing.',
      'Led new product development lifecycle from insight gathering to launch, coordinating technical, marketing, and customer success stakeholders.',
      'Drove product lifecycle optimizations that delivered 152% revenue growth within 12 months.',
    ],
  },
  {
    company: 'British American Tobacco Pakistan',
    role: 'Project Coordinator',
    period: 'Jan 2009 – Jul 2009',
    highlights: [
      'Coordinated capital projects with rigorous control over BOQs, RFIs, drawings, and supplier communications.',
      'Managed budgets and contract negotiations, unlocking US$0.76M in savings.',
    ],
  },
  {
    company: 'British American Tobacco Pakistan',
    role: 'Shift Manager',
    period: 'Dec 2006 – Dec 2008',
    highlights: [
      'Led production for processed tobacco SKUs with strict adherence to BAT global standards.',
      'Managed engineering and capacity expansion projects that increased production capacity by 27%.',
    ],
  },
  {
    company: 'Mari Petroleum Company Limited',
    role: 'Trainee Mechanical Engineer',
    period: 'May 2006 – Nov 2006',
    highlights: [
      'Supported drilling engineers on two gas wells and streamlined maintenance department workflows.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: 'Lahore University of Management Sciences (LUMS)',
    degree: 'MBA in Marketing Management',
    period: 'Jun 2011',
    location: 'Lahore, Pakistan',
    details: ['CGPA 3.60'],
  },
  {
    institution: 'University of Engineering and Technology (UET)',
    degree: 'B.E (Hons) – Mechanical Engineering',
    period: 'Feb 2006',
    location: 'Lahore, Pakistan',
    details: ['Aggregate percentage: 82%', 'Graduated with Honors'],
  },
];

export const projects: ProjectItem[] = [
  {
    name: 'INTECH Technology Conference (iTC) – Nigeria',
    timeframe: 'August 2015',
    description: 'Led INTECH’s most successful conference by aligning global stakeholders and flawless on-ground execution.',
    highlights: [
      'Managed a five-member core team and coordinated across regional units.',
      'Delivered the company’s top-performing conference with standout planning and collaboration.',
    ],
  },
  {
    name: 'INTECH Technology Conference (iTC) – Houston',
    timeframe: 'October 2014',
    description: 'Coordinated INTECH’s inaugural Oil & Gas automation conference in the US.',
    highlights: [
      'Owned strategy, creative, content, vendor management, and post-event ROI measurement.',
    ],
  },
  {
    name: 'Mobile Internet Activation Campaigns – Jazz',
    timeframe: 'Jun 2013 – Oct 2013',
    description: 'Launched the Man-of-Steel and ShugalPur activation campaigns for the mobile internet business.',
    highlights: [
      'Both campaigns exceeded business KPIs and strengthened Jazz’s mobile internet brand.',
    ],
  },
  {
    name: "Feasibility of a 'News' Channel – Eye Television Network",
    timeframe: 'May 2011',
    description: 'MBA capstone analyzing market viability for a new channel with detailed product launch recommendations.',
    highlights: ['Delivered research-backed go-to-market guidance.'],
  },
  {
    name: 'Mega Plant Up-gradation – BAT Pakistan',
    timeframe: 'July 2008',
    description: 'Led a six-member team through layout redesign, equipment negotiations, and execution for a processing line upgrade.',
    highlights: ['Generated US$117,000 annual savings.'],
  },
  {
    name: 'Implementation of SCOR – BAT Pakistan',
    timeframe: 'March 2007',
    description: 'Implemented the Supply Chain Operation Reference (SCOR) model in the Green Leaf Threshing Factory.',
    highlights: ['Established a repeatable framework for supply chain excellence.'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Leadership & Execution',
    items: [
      'Excellent problem solving and management skills',
      'Hands-on experience with corporate planning, budgeting, and negotiations',
      'Efficient in delivering under pressure and aggressive timelines',
      'Sound supply chain knowledge across tobacco, energy, and telecom',
    ],
  },
  {
    title: 'Marketing & Growth',
    items: [
      'Brand strategy, positioning, and communication system design',
      'End-to-end campaign leadership across ATL, BTL, digital, and events',
      'Data-driven customer journey optimization and reporting',
      'Cross-functional alignment between marketing, product, and sales operations',
    ],
  },
  {
    title: 'Technology & Analytics',
    items: [
      'Advanced proficiency in MS Office, Tableau, MATLAB, SPSS',
      'Machine Learning fundamentals and applied analytics',
      'Advanced Google Analytics, Google Tag Manager, and GAIQ certified',
      'Comfortable with marketing automation and dashboarding',
    ],
  },
];

export const certifications = [
  'Machine Learning – Stanford University (Coursera)',
  'Tableau Desktop Certified Professional: Fundamentals, Desktop II (Intermediate), Desktop III (Expert)',
  'Advanced Google Analytics Certification',
  'Google Tag Manager Certification',
  'Google Analytics Individual Qualification (GAIQ)',
];

export const honors = [
  'Employee of the Quarter – INTECH (iTC-Nigeria delivery)',
  'Outstanding Performance Award – Jazz (Retail Upselling Program)',
  '1st Position – LUMS Inter-batch Ad Development Competition',
  'High Potential Performer (Lister) – BAT Pakistan Supply Chain',
  'Graduated with Honors in Mechanical Engineering',
];

export const interests = [
  'Guitar playing and music production',
  'Listening to and creating music',
  'Traveling and hiking',
  'Cars and superbikes',
  'Watching movies and documentaries',
  'Boxing, cricket, football, and badminton',
];

export const impactStats: ImpactStat[] = [
  {
    value: 'US$3M+',
    label: 'Qualified Digital Leads',
    description: 'Generated for INTECH through SEO, SEM, and marketing automation in FY17-18.',
  },
  {
    value: '25,000',
    label: 'Retail Partners Activated',
    description: 'Onboarded via Jazz’s industry-first joint planning process for mobile internet growth.',
  },
  {
    value: '165%',
    label: 'Avg Revenue Growth',
    description: 'Delivered for INTECH’s Advance Software Solutions category across consecutive launches.',
  },
  {
    value: '86% / 56%',
    label: 'Revenue & Subscriber Lift',
    description: 'Achieved for Jazz mobile internet through integrated ATL/BTL communication campaigns.',
  },
];

export const heroContent: HeroContent = {
  title: 'Haris Ibrahim',
  subtitle: 'Fractional CMO and B2B Growth Marketer',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/placeholder-haris' },
    { label: 'Email', url: 'mailto:haris@example.com' },
  ],
  badges: ['12+ years experience', 'B2B Marketing', 'Industrial Automation', 'Telecom', 'Tech'],
  coverImageUrl: null,
  meta: {
    dates: '2011 - Present',
    location: 'Lahore, Pakistan',
    status: 'Open to consulting and fractional CMO roles',
  },
};

export const contentBlocks: ContentBlock[] = [
  {
    type: 'callout',
    title: 'About',
    variant: 'info',
    body:
      'I am a B2B marketer and fractional CMO with deep experience across industrial automation, oil and gas, telecom, and technology. I build data driven marketing engines that connect brand, digital, and product marketing directly to pipeline and revenue. Over the last decade I have led global marketing, launched new software categories, scaled digital demand generation, and partnered with sales and leadership teams to grow revenue, improve margins, and open new markets.',
  },
  {
    type: 'metrics',
    title: 'Snapshot',
    items: [
      {
        label: 'Experience',
        value: 12,
        suffix: '+ years',
        tooltip: 'B2B marketing across industrial, telecom, and technology',
      },
      {
        label: 'Qualified pipeline influenced',
        value: 3,
        suffix: 'M+ USD',
        tooltip: 'Leads generated from digital campaigns at INTECH in FY 2017-18',
      },
      {
        label: 'Incremental revenue',
        value: 0.98,
        suffix: 'M USD',
        tooltip: 'Bottom line revenue from digital campaigns at INTECH in FY 2017-18',
      },
      {
        label: 'Software category growth',
        value: 165,
        suffix: '% avg',
        tooltip: 'Year on year revenue growth in a new software product category',
      },
      {
        label: 'Mobile internet revenue growth',
        value: 152,
        suffix: '%',
        tooltip: 'Revenue uplift at Jazz in 12 months',
      },
      {
        label: 'Project cost savings',
        value: 0.76,
        suffix: 'M USD',
        tooltip: 'Savings delivered at BAT through capital project and process improvements',
      },
    ],
  },
  {
    type: 'feature_grid',
    title: 'What I Do',
    cols: 3,
    items: [
      {
        title: 'Build demand engines',
        body:
          'Design and run digital first demand generation across SEO, SEM, paid, email, and content that ties directly into CRM and revenue reporting.',
        iconKey: 'demand',
      },
      {
        title: 'Product and category marketing',
        body:
          'Define positioning, messaging, and go to market plans that help new software and services categories grow fast and profitably.',
        iconKey: 'product',
      },
      {
        title: 'Go to market strategy',
        body:
          'Use market, customer, and competitive insights to shape multi year marketing and sales strategies across territories and verticals.',
        iconKey: 'strategy',
      },
      {
        title: 'Sales and channel enablement',
        body:
          'Partner with sales and channels to improve account planning, create enablement content, and improve sales force effectiveness.',
        iconKey: 'sales',
      },
      {
        title: 'Analytics and reporting',
        body:
          'Implement dashboards and reporting in tools like Google Analytics and Tableau to track funnel performance and marketing ROI.',
        iconKey: 'analytics',
      },
      {
        title: 'Team and vendor leadership',
        body:
          'Lead internal teams and external agencies to execute campaigns on time and on budget while maintaining brand consistency.',
        iconKey: 'leadership',
      },
    ],
  },
  {
    type: 'bullets',
    title: 'Selected Career Highlights',
    style: 'checks',
    items: [
      'Generated over 3M USD in qualified pipeline and 0.98M USD in incremental revenue from digital campaigns at INTECH in a single fiscal year.',
      'Increased revenues for a new software product category by an average of 165 percent year on year, exceeding annual targets by 25 percent.',
      "Helped INTECH achieve its highest ever revenues, with 12 percent year on year growth driven by global brand and demand programs.",
      'Grew mobile internet revenues by 152 percent in 12 months at Jazz while increasing the subscriber base by 56 percent.',
      'Expanded the mobile internet retail partner base by 25,000 active outlets at Jazz and drove a 520 percent revenue increase worth 56K USD in five months.',
      'Delivered 0.76M USD in project cost savings and a 27 percent production capacity increase at British American Tobacco through capital projects and process improvements.',
    ],
  },
  {
    type: 'feature_grid',
    title: 'Experience Overview',
    cols: 2,
    items: [
      {
        title: 'Co Founder and CMO - Tensai Technologies',
        body:
          'Built the marketing function for a data and analytics focused technology company serving industrial and technology customers. Defined positioning around data driven operational improvement and growth and set up the basic analytics layer to translate customer data into sales and leadership insights.',
        iconKey: 'founder',
      },
      {
        title: 'Head of Marketing - Avanceon',
        body:
          'Owned the annual marketing plan across Middle East and South Asia. Managed external communications, digital channels, and research to support the institutional strategic business plan and generate qualified leads.',
        iconKey: 'marketing_head',
      },
      {
        title: 'Global Marketing Manager - INTECH',
        body:
          'Led global brand, digital, and product marketing, helping the company achieve record revenues. Developed the digital marketing stack and dashboards that generated multi million dollar pipeline and revenue.',
        iconKey: 'global_role',
      },
      {
        title: 'Marketing and Business Development - Advanced Software Solutions',
        body:
          'Set direction and go to market for a new software category, combining new account acquisition and wallet share growth to exceed revenue targets by more than 25 percent.',
        iconKey: 'software',
      },
      {
        title: 'Specialist - Product and Pricing, Jazz',
        body:
          'Managed the mobile internet portfolio, including data expansion, lifecycle management, pricing, and new product development, driving triple digit revenue growth.',
        iconKey: 'pricing',
      },
      {
        title: 'Engineering and Operations - BAT and Mari Petroleum',
        body:
          'Managed capital projects, production shifts, and maintenance workflows, delivering significant cost savings and capacity increases in complex industrial environments.',
        iconKey: 'operations',
      },
    ],
  },
  {
    type: 'feature_grid',
    title: 'Case Studies',
    cols: 3,
    items: [
      {
        title: 'Scaling digital demand at INTECH',
        body:
          'Built and scaled a full digital marketing stack including SEO, SEM, email, content partnerships, and dashboards. Resulted in over 3M USD in qualified pipeline and 0.98M USD in incremental revenue in FY 2017-18.',
        iconKey: 'case_intech_demand',
      },
      {
        title: 'Growing a new software category',
        body:
          'Defined positioning and go to market for an advanced software solutions portfolio, delivering on average 165 percent year on year revenue growth and exceeding annual targets by 25 percent.',
        iconKey: 'case_software',
      },
      {
        title: 'Jazz mobile internet growth story',
        body:
          'Managed mobile internet product and communication, launched new packs and pricing, and expanded retail partners by 25,000 outlets. Delivered 152 percent revenue growth, 56 percent subscriber growth, and a 520 percent revenue uplift worth 56K USD in five months from the retail program.',
        iconKey: 'case_jazz',
      },
    ],
  },
  {
    type: 'bullets',
    title: 'Skills and Tools',
    style: 'dots',
    items: [
      'B2B demand generation, product marketing, and go to market for industrial and technology companies.',
      'Campaign planning across SEO, SEM, paid media, email, content, and events.',
      'Market and customer research, competitive analysis, and multi year strategic planning.',
      'Sales and channel enablement, account planning, and sales force effectiveness programs.',
      'Data and analytics tools including Tableau, Google Analytics, Google Tag Manager, and SPSS.',
      'Team leadership, budget ownership, vendor management, and cross functional stakeholder alignment.',
    ],
  },
  {
    type: 'bullets',
    title: 'Certifications',
    style: 'dots',
    items: [
      'Stanford University - Machine Learning (Coursera)',
      'Tableau Desktop - Fundamentals, Desktop II (Intermediate), Desktop III (Expert)',
      'Google - Advanced Google Analytics, Google Tag Manager, Google Analytics Individual Qualification',
    ],
  },
];

export const profileData = {
  hero: heroContent,
  blocks: contentBlocks,
};

