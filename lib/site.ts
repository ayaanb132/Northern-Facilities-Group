export const siteConfig = {
  name: 'Northern Facilities Group',
  shortName: 'NFG',
  description:
    'Premium commercial cleaning and facility management services for residential, condos, medical practices, restaurants, warehouses, retail, and office spaces across Canada.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://northernfacilitiesgroup.ca',
  ogImage: '/images/og/default.jpg',
  links: {
    email: 'info@northernfacilitiesgroup.ca',
    phone: '(855) 664-1144',
    address: '30 Eglinton Ave W, Mississauga, ON',
  },
  hours: '7 days a week, 8am – 8pm',
  nav: {
    main: [
      { title: 'Services', href: '/services' },
      { title: 'Specialty', href: '/specialty' },
      { title: 'How It Works', href: '/how-it-works' },
      { title: 'Proof', href: '/proof' },
    ],
    cta: { title: 'Get a Walkthrough', href: '/get-walkthrough' },
    secondary: [
      { title: 'Contact', href: '/contact' },
      { title: 'Privacy', href: '/privacy' },
      { title: 'Terms', href: '/terms' },
    ],
  },
  propertyTypes: [
    { id: 'residential', name: 'Residential', icon: 'Home' },
    { id: 'condo', name: 'Condo Tower', icon: 'Building2' },
    { id: 'medical', name: 'Medical Practices', icon: 'Stethoscope' },
    { id: 'restaurant', name: 'Restaurant', icon: 'UtensilsCrossed' },
    { id: 'warehouse', name: 'Warehouse', icon: 'Warehouse' },
    { id: 'retail', name: 'Retail', icon: 'Store' },
    { id: 'office', name: 'Office', icon: 'Briefcase' },
  ],
  tiers: [
    {
      id: 'essential',
      name: 'Essential',
      description: 'Daily cleaning and maintenance for standard requirements',
      features: [
        'Daily cleaning service',
        'Basic supplies included',
        'Weekly supervisor check-ins',
        'Standard reporting',
      ],
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Enhanced cleaning with quality assurance and dedicated support',
      features: [
        'Everything in Essential',
        'Enhanced cleaning protocols',
        'Bi-weekly deep cleaning',
        'Dedicated account manager',
        'Real-time reporting dashboard',
        '24/7 emergency support',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Full-service facility management with custom SLAs',
      features: [
        'Everything in Professional',
        'Custom SLA agreements',
        'On-site supervision',
        'Inventory management',
        'Vendor coordination',
        'Sustainability reporting',
        'Executive quarterly reviews',
      ],
      popular: false,
    },
  ],
  stats: [
    { value: '100,000+', label: 'sqft serviced daily' },
    { value: '5+', label: 'Years in Business' },
    { value: '24/7', label: 'Support Available' },
  ],
  socialProof: [
    'Trusted by leading property management companies across Canada',
    'ISO 9001 certified quality management',
    'LEED cleaning certification',
  ],
} as const;

export type PropertyType = (typeof siteConfig.propertyTypes)[number]['id'];
export type Tier = (typeof siteConfig.tiers)[number];
