export const CAREERS_EMAIL = 'careers@northernfacilitiesgroup.ca';

export interface JobListing {
  slug: string;
  title: string;
  location: string;
  employmentType: string;
  shortDescription: string;
  compensation: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  notRequired?: string[];
  compensationDetails?: string[];
  successMetrics?: { period: string; items: string[] }[];
  onboarding?: string[];
  tools?: string[];
  whyJoin?: string[];
}

export const jobs: JobListing[] = [
  {
    slug: 'business-development-representative',
    title: 'Business Development Representative - Commercial Cleaning',
    location: 'Greater Toronto Area (GTA), Ontario | Remote-Friendly',
    employmentType: 'Full-Time',
    shortDescription:
      'Own the sales pipeline for commercial cleaning services. Hunt for new business, build relationships, and hit targets.',
    compensation: '$32,000 - $42,000/year + commission ($300-500 per deal)',
    fullDescription:
      "We're hiring Business Development Representatives to own the sales pipeline for our commercial cleaning services. You'll spend your days on the phone and email with property managers, realtors, and office managers—diagnosing their facility challenges, pitching our solution, and closing deals. This isn't a customer service role; it's a pure sales role.",
    responsibilities: [
      'Make 25-30 outbound calls per day to pre-qualified decision-makers',
      'Conduct needs assessment calls, identify pain points, and qualify prospects',
      'Send professional follow-up emails and SMS sequences',
      'Book walkthrough appointments for our operations team',
      'Close deals and build long-term client relationships',
      'Hit monthly targets: 2-4 closed deals, 500+ conversations, 20+ qualified leads',
      'Use Quo dialer, custom CRM, and email/SMS tools daily',
      'Participate in weekly sales meetings and provide pipeline updates',
    ],
    requirements: [
      'Experience making cold calls or doing outbound B2B sales (preferred)',
      'Comfortable with rejection and persistence',
      'Organized—can manage a large pipeline without micromanagement',
      'Coachable and willing to take feedback',
      'Excited about growth—not just collecting a paycheck',
      'Professional but casual communication style',
      'Ability to work from our GTA office or remote',
    ],
    notRequired: [
      'Cleaning industry knowledge (we\'ll teach you)',
      'Sales degree or certification',
      'Perfectly polished sales background',
    ],
    compensationDetails: [
      'Base Salary: $32,000 - $42,000/year',
      'Commission: $300 - $500 per closed deal',
      'Realistic Monthly Comp: $2,667 - $3,500/month',
      'Benefits: Health coverage, paid time off, professional development budget',
      'Performance bonus at 6 and 12 months',
    ],
    successMetrics: [
      {
        period: 'Daily',
        items: ['25-30 outbound conversations', '3-5 new prospects qualified', '1-2 walkthrough appointments booked'],
      },
      {
        period: 'Monthly',
        items: ['500-600 conversations', '60-100 qualified prospects', '20-40 walkthrough bookings', '2-4 closed deals'],
      },
    ],
    onboarding: [
      'Week 1: Listen to sales calls, learn scripts, understand services',
      'Week 2: Make calls with senior rep, get real-time feedback',
      'Week 3: Make calls independently with peer support',
      'Week 4: Full load, daily 1-on-1s with manager',
    ],
    tools: ['Quo (phone dialer)', 'Custom CRM', 'Email/SMS sequencing tools', 'Google Suite'],
    whyJoin: [
      'You\'ll actually close deals—we have a proven playbook',
      'Real commission structure—serious money by month 3-4',
      'Weekly 1-on-1s, daily coaching, supportive team',
      '95% close rate on our best channel',
      'Growing company—early wins build your track record',
    ],
  },
  {
    slug: 'appointment-setting-client-intake-specialist',
    title: 'Appointment Setting & Client Intake Specialist',
    location: 'Greater Toronto Area (GTA), Ontario',
    employmentType: 'Full-Time',
    shortDescription:
      'The first voice prospects hear. Handle inbound calls, qualify leads, schedule walkthroughs, and manage CRM.',
    compensation: '$28,000 - $36,000/year + performance bonus',
    fullDescription:
      "You're the first voice new prospects hear from Northern Facilities Group. You'll handle inbound calls, qualify incoming leads, schedule walkthroughs, manage our CRM, and own the follow-up sequences that keep deals warm. This role is the backbone of our sales operation.",
    responsibilities: [
      'Answer inbound calls from prospects (200+ calls/month)',
      'Qualify inbound leads quickly—understand needs, company size, timeline',
      'Schedule walkthroughs and consultation meetings',
      'Input lead data into CRM with 95%+ accuracy',
      'Manage email/SMS follow-up sequences',
      'Handle scheduling conflicts and coordinate with operations',
      'Maintain clean, organized CRM records',
      'Send confirmation emails and provide next steps',
      'Track inbound conversion metrics and report weekly',
    ],
    requirements: [
      'Customer service or administrative background (2+ years preferred)',
      'Excellent phone voice and communication skills',
      'Strong organizational skills',
      'Attention to detail (data entry accuracy critical)',
      'Comfortable with CRM, email, spreadsheets, phone system',
      'Positive attitude, handle high call volume without stress',
      'Can work from our GTA office (not remote)',
    ],
    notRequired: ['Sales background', 'Cleaning industry knowledge', 'Technical certifications'],
    compensationDetails: [
      'Base Salary: $28,000 - $36,000/year',
      'Performance Bonus: $50 per scheduled walkthrough that closes',
      'Benefits: Health coverage, paid time off, professional development',
    ],
    successMetrics: [
      {
        period: 'Daily',
        items: ['40-50 calls handled', '5-10 prospects qualified', '2-3 walkthroughs scheduled'],
      },
      {
        period: 'Monthly',
        items: ['800-1,000 calls handled', '100-200 prospects qualified', '40-60 walkthroughs scheduled', '95%+ CRM accuracy'],
      },
    ],
    onboarding: [
      'Day 1-3: Shadow current intake specialist, learn CRM',
      'Day 4-7: Handle calls with backup, get feedback',
      'Week 2: Handle 80% of calls independently',
      'Week 3+: Full responsibility',
    ],
    tools: ['Quo (phone system)', 'Custom CRM', 'Email platform', 'SMS/follow-up tools', 'Google Sheets'],
    whyJoin: [
      'Critical to growth—good intake multiplies deals',
      'Learn the business, options to move into other roles',
      'Low stress, high impact—not responsible for closing',
      'Supportive environment, clear expectations',
    ],
  },
  {
    slug: 'operations-coordinator-project-manager',
    title: 'Operations Coordinator & Project Manager',
    location: 'Greater Toronto Area (GTA), Ontario',
    employmentType: 'Full-Time',
    shortDescription:
      'Operational backbone. Manage crew scheduling, quality control, client communication, and scale operations.',
    compensation: '$35,000 - $45,000/year + performance bonus',
    fullDescription:
      "You'll be the operational backbone of Northern Facilities Group. Manage crew scheduling and assignments, ensure quality control on all jobs, handle client communication on ongoing contracts, coordinate with vendors, and help our Operations Manager scale. As we grow, you'll manage 20-50+ active contracts.",
    responsibilities: [
      'Manage crew scheduling, assignments, and logistics for 20-50+ contracts',
      'Assign qualified teams to jobs based on building type and availability',
      'Conduct quality control checks—photo verification, inspections',
      'Respond to client questions and concerns during service delivery',
      'Track and manage supply inventory and ordering',
      'Coordinate with GFL and other partners',
      'Handle job transitions when issues arise',
      'Generate weekly performance reports',
      'Help develop and improve operational processes',
      'Manage crew training and onboarding',
    ],
    requirements: [
      'Project management or operations background (2-3+ years)',
      'Excellent organizational and multitasking skills',
      'Strong communication with crews and clients',
      'Problem-solving mindset',
      'Data-driven—comfortable with spreadsheets and reporting',
      'Professional attitude, conflict resolution',
      'Detail-oriented',
    ],
    compensationDetails: [
      'Base Salary: $35,000 - $45,000/year',
      'Performance Bonus: Based on quality metrics and contract growth',
      'Benefits: Health coverage, paid time off, professional development',
      'Growth Path: Potential to move into Operations Manager role',
    ],
    successMetrics: [
      {
        period: 'Monthly',
        items: [
          '100% on-time starts',
          'Zero missed appointments',
          'Client satisfaction: 4.5+/5',
          'Quality audit: 95%+ pass rate',
        ],
      },
    ],
    tools: ['Custom CRM', 'Scheduling software', 'Google Suite', 'Photo/documentation tools'],
    whyJoin: [
      'Essential to growth—good ops = happy clients',
      'Real impact on profitability and satisfaction',
      'Learn how sales, operations, and finance connect',
      'Path to leadership and partnership roles',
    ],
  },
  {
    slug: 'b2c-sales-lead-generation',
    title: 'B2C Sales Representative & Local Lead Generation',
    location: 'Greater Toronto Area (GTA), Ontario',
    employmentType: 'Part-Time (20-25 hrs/week) | Potential Full-Time',
    shortDescription:
      'Manage B2C leads from Google and Facebook. Qualify homeowners, schedule consultations, close smaller-ticket deals.',
    compensation: '$18-20/hour + commission (Part-Time) | $32k-38k + commission (Full-Time)',
    fullDescription:
      "B2C cleaning is different from B2B. You'll manage inbound leads from Google, Facebook, and word-of-mouth, handling residential and small business clients, building local partnerships, and closing smaller-ticket deals faster.",
    responsibilities: [
      'Respond to inbound B2C leads from Google Local Services and Search',
      'Qualify homeowners and small business owners',
      'Schedule consultations and estimate calls',
      'Close deals via phone and email',
      'Manage Google Ads and Facebook Ads (basic optimization)',
      'Build local referral partnerships',
      'Handle customer communication and small contract management',
      'Track B2C pipeline and conversion metrics',
    ],
    requirements: [
      'Sales experience (B2C preferred)',
      'Comfortable with Google Ads and Facebook Ads (or willing to learn)',
      'Strong phone and email communication',
      'Able to close smaller deals quickly',
      'Detail-oriented, self-motivated',
      'Local knowledge of GTA is a plus',
    ],
    compensationDetails: [
      'Part-Time: $18-20/hour + $200-300 per deal',
      'Realistic monthly: $1,500-2,000 (3-4 closes)',
      'Full-Time: $32,000-38,000/year + commission',
    ],
    successMetrics: [
      {
        period: 'Monthly (Part-Time)',
        items: ['40-60 inbound leads managed', '12-20 consultations', '4-8 closes', '$800-2,400 commission'],
      },
    ],
    tools: ['Google Ads', 'CRM', 'Email/phone tools', 'Google Suite'],
    whyJoin: [
      'Fast closes—B2C moves quick',
      'Flexible schedule—start part-time, scale to full-time',
      'Learn ads and marketing',
      'Growth opportunity—team management potential',
    ],
  },
  {
    slug: 'cleaning-crew-lead-supervisor',
    title: 'Cleaning Crew Lead & Quality Supervisor',
    location: 'Greater Toronto Area (GTA), Ontario | Multiple locations',
    employmentType: 'Full-Time',
    shortDescription:
      'Lead a team of 2-4 cleaners. Manage building accounts, ensure quality standards, represent NFG to clients.',
    compensation: '$32,000 - $40,000/year + performance bonus',
    fullDescription:
      "You'll lead a team of 2-4 cleaners, manage specific building accounts, ensure quality standards are met on every job, and be the face of Northern Facilities Group to our clients. As a crew lead, you're not just cleaning—you're representing the company and managing your team.",
    responsibilities: [
      'Lead and supervise a team of 2-4 cleaners on assigned buildings',
      'Execute cleaning work to quality standards',
      'Manage building-specific preferences and client relationships',
      'Conduct quality checks after each cleaning',
      'Train and coach your team on techniques',
      'Handle basic equipment maintenance and supply management',
      'Communicate with clients about issues or special requests',
      'Track time, attendance, and crew metrics',
      'Represent NFG professionally to clients',
    ],
    requirements: [
      '2-3+ years commercial or residential cleaning experience',
      'Leadership or supervisor experience',
      'Strong attention to detail and quality standards',
      'Reliable and professional',
      'Able to train and motivate a small team',
      'Problem-solver',
      'Comfortable with technology (CRM, photo uploads)',
      'Reliable vehicle, willingness to travel between locations',
    ],
    compensationDetails: [
      'Base Salary: $32,000 - $40,000/year',
      'Performance Bonus: Based on client satisfaction and team productivity',
      'Benefits: Health coverage, paid time off, equipment provided',
      'Potential: Move into Area Manager role',
    ],
    successMetrics: [
      {
        period: 'Monthly',
        items: [
          '100% on-time job completions',
          'Zero missed appointments',
          'Client satisfaction: 4.5+/5',
          'Quality inspection pass rate: 98%+',
          'Team attendance: 95%+',
        ],
      },
    ],
    whyJoin: [
      'Real leadership—manage a team, influence quality',
      'Trusted—face of NFG to our biggest accounts',
      'Clear advancement to Area Manager or Operations',
      'Stability—recurring contracts = stable schedule',
    ],
  },
];

export function getJobBySlug(slug: string): JobListing | undefined {
  return jobs.find((j) => j.slug === slug);
}
