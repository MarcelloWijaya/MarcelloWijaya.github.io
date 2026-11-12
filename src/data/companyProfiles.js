// Source-backed public company profile projects.
// Keep private repository URLs out of the published site.
export const companyProfiles = [
  {
    id: '10',
    slug: 'anakueducare',
    title: 'AnaKuEducare',
    category: 'Websites',
    status: 'COMPANY PROFILE · PUBLIC WEBSITE',
    description: 'A learning-center website introducing AnaKu Baca Tulis, its teaching approach, and information for parents.',
    items: [
      'Present early reading and writing programs and the learning approach for families.',
      'Explain the educational philosophy, classroom activities, and school partnerships.',
      'Help parents find branch and headquarters contact information.'
    ],
    stack: ['Laravel 10', 'PHP', 'HTML', 'CSS'],
    siteUrl: 'https://anakueducare.id/',
    brand: 'AnaKu',
    tone: 'sage',
    role: 'Company profile website',
    format: 'Educational website',
    implementation: 'The connected source repository is a Laravel 10 codebase with public templates and website assets.',
    note: 'The public website is available at anakueducare.id. The connected source repository is private; the precise version deployed on the domain has not been verified.'
  },
  {
    id: '11',
    slug: 'dw-consulting',
    title: 'DW Consulting',
    category: 'Websites',
    status: 'COMPANY PROFILE · VERCEL',
    description: 'A consulting company profile that explains its business-support offering and provides a direct way to make an inquiry.',
    items: [
      'Introduce business consulting, planning, and operational support.',
      'Organize company information in a responsive, accessible layout.',
      'Provide a direct WhatsApp contact action for inquiries.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'https://dw-consulting.vercel.app/',
    brand: 'DW',
    tone: 'navy',
    role: 'Company profile website',
    format: 'Responsive static website',
    implementation: 'The connected website repository uses semantic HTML, CSS, and client-side JavaScript with a navy-and-gold design system.',
    note: 'Public Vercel deployment is available. Source repository is private; project ownership and individual contributions are not described beyond the verified code.'
  },
  {
    id: '12',
    slug: 'omah-moesik',
    title: 'Omah Moesik',
    category: 'Websites',
    status: 'COMPANY PROFILE · VERCEL',
    description: 'A music-education company website presenting the Omah Moesik identity, instrument information, and contact options.',
    items: [
      'Explain the music-school identity and showcase instrument-related information.',
      'Use interactive program cards and a readable FAQ.',
      'Connect questions to a WhatsApp message draft.'
    ],
    stack: ['Next.js 16', 'React', 'TypeScript'],
    siteUrl: 'https://omah-moesik.vercel.app/',
    brand: 'OM',
    tone: 'terracotta',
    role: 'Company profile website',
    format: 'Music education website',
    implementation: 'The reviewed repository is a Next.js App Router and TypeScript website with interactive program dialogs and WhatsApp-based contact.',
    note: 'The public Vercel site is available. The reviewed GitHub source is documented as a review candidate, so its exact equivalence to the published deployment is not asserted.'
  },
  {
    id: '13',
    slug: 'inti-jaya-teknik',
    title: 'Inti Jaya Teknik Diesel',
    category: 'Websites',
    status: 'COMPANY PROFILE · VERCEL',
    description: 'A diesel-workshop company profile focused on injection-pump service, injector calibration, and customer inquiries.',
    items: [
      'Explain diesel injection pump service and injector testing.',
      'Help customers understand the initial consultation and workshop process.',
      'Provide direct WhatsApp links for service questions.'
    ],
    stack: ['Next.js 15', 'React', 'TypeScript'],
    siteUrl: 'https://inti-jaya-tenknik-diesel.vercel.app/',
    brand: 'IJT',
    tone: 'burgundy',
    role: 'Company profile website',
    format: 'Workshop services website',
    implementation: 'The connected website source uses Next.js App Router, TypeScript, responsive service pages, and WhatsApp inquiry links.',
    note: 'Public Vercel deployment is available. The site is separate from the IJT stock-management application; source repository is private.'
  }
];
