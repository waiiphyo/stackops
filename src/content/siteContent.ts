import stackOpsLogo from '../../logos/StackOps_mark.svg';

export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type HeaderContent = {
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  homeAriaLabel: string;
  navAriaLabel: string;
  cta: Cta;
};

export type SectionHeading = {
  eyebrow: string;
  title: string;
  body: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type OperationsVisualNodeKey = 'monitor' | 'deploy' | 'secure';

export type OperationsVisualNode = {
  key: OperationsVisualNodeKey;
  title: string;
  summary: string;
};

export type OperationsVisual = {
  label: string;
  title: string;
  status: string;
  nodes: readonly OperationsVisualNode[];
};

export type ServiceIcon =
  | 'cloud'
  | 'pipeline'
  | 'operations'
  | 'security'
  | 'automation'
  | 'consulting';

export type Service = {
  icon: ServiceIcon;
  title: string;
  summary: string;
  detail: string;
};

export type WorkItem = {
  client: string;
  projectType: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: readonly string[];
};

export type WorkLabels = {
  client: string;
  projectType: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string;
};

export type Founder = {
  name: string;
  role: string;
  expertise: string;
  monogram: string;
};

export type AboutPagePrincipleIcon = 'target' | 'code' | 'access' | 'ship';

export type AboutPagePrinciple = {
  icon: AboutPagePrincipleIcon;
  title: string;
  body: string;
};

export type AboutPagePerson = {
  name: string;
  role: string;
  monogram: string;
  imageSrc?: string;
};

export type AboutPageContent = {
  hero: SectionHeading;
  stats: readonly Metric[];
  principlesHeading: SectionHeading;
  principles: readonly AboutPagePrinciple[];
  ecosystem: {
    label: string;
    ariaLabel: string;
    logos: readonly string[];
    credentials: readonly string[];
  };
  founderNote: {
    eyebrow: string;
    quote: string;
    signatureName: string;
    signatureMeta: string;
  };
  people: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly AboutPagePerson[];
  };
};

export type Insight = {
  title: string;
  summary: string;
};

export type SiteContent = {
  header: HeaderContent;
  navItems: readonly NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    metricsAriaLabel: string;
    proofAriaLabel: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  metrics: readonly Metric[];
  proof: readonly string[];
  operationsVisual: OperationsVisual;
  servicesHeading: SectionHeading;
  services: readonly Service[];
  workHeading: SectionHeading;
  workLabels: WorkLabels;
  work: readonly WorkItem[];
  about: {
    eyebrow: string;
    title: string;
    body: string;
    principles: readonly string[];
    cta: Cta;
  };
  aboutPage: AboutPageContent;
  founders: readonly Founder[];
  insightsHeading: SectionHeading;
  insights: readonly Insight[];
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    fieldLabels: {
      name: string;
      email: string;
      company: string;
      projectType: string;
      message: string;
    };
    projectTypes: readonly string[];
    mailtoSubjectPrefix: string;
    submitLabel: string;
    defaultNote: string;
    confirmationLead: string;
    confirmationMessage: string;
    confirmationLinkLabel: string;
  };
  footer: {
    homeAriaLabel: string;
    summary: string;
  };
};

export const siteContent = {
  header: {
    brandName: 'StackOps',
    logoSrc: stackOpsLogo,
    logoAlt: 'StackOps logo',
    homeAriaLabel: 'StackOps home',
    navAriaLabel: 'Main navigation',
    cta: { label: 'Book a consult', href: '#contact' },
  },
  navItems: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About Us', href: '/about' },
    { label: 'Insights', href: '#insights' },
  ],
  hero: {
    eyebrow: 'IT consulting for reliable growth',
    title: 'We design, automate, and operate resilient digital infrastructure.',
    body:
      'StackOps helps teams modernize cloud platforms, secure delivery pipelines, stabilize operations, and turn complex systems into dependable business capability.',
    metricsAriaLabel: 'StackOps proof metrics',
    proofAriaLabel: 'StackOps capabilities',
    primaryCta: { label: 'Start a project', href: '#contact' },
    secondaryCta: { label: 'View our work', href: '#work' },
  },
  metrics: [
    { value: '3', label: 'founder-led experts' },
    { value: '24/7', label: 'operations mindset' },
    { value: 'Cloud', label: 'DevOps + security' },
  ],
  proof: [
    'Cloud platform modernization',
    'Secure delivery pipelines',
    'Operational reliability',
    'Automation-first execution',
  ],
  operationsVisual: {
    label: 'StackOps operations health visual',
    title: 'Operations map',
    status: 'Systems healthy',
    nodes: [
      { key: 'monitor', title: 'Monitor', summary: 'Signals unified' },
      { key: 'deploy', title: 'Deploy', summary: 'Pipelines controlled' },
      { key: 'secure', title: 'Secure', summary: 'Access hardened' },
    ],
  },
  servicesHeading: {
    eyebrow: 'Services',
    title: 'Services built for operational maturity',
    body:
      'From cloud foundations to managed operations, StackOps focuses on the systems that keep modern teams shipping safely.',
  },
  services: [
    {
      icon: 'cloud',
      title: 'Cloud architecture',
      summary: 'Plan and modernize cloud foundations that scale with the business.',
      detail: 'AWS, Azure, networking, identity, migration planning',
    },
    {
      icon: 'pipeline',
      title: 'DevOps automation',
      summary: 'Turn manual release work into reliable, repeatable delivery systems.',
      detail: 'CI/CD, IaC, environment strategy, release controls',
    },
    {
      icon: 'operations',
      title: 'Managed operations',
      summary: 'Stabilize production operations with monitoring and response patterns.',
      detail: 'Observability, alerting, runbooks, incident readiness',
    },
    {
      icon: 'security',
      title: 'Security hardening',
      summary: 'Reduce exposure across infrastructure, access, and delivery workflows.',
      detail: 'IAM, secrets, patching, compliance-ready controls',
    },
    {
      icon: 'automation',
      title: 'Infrastructure automation',
      summary: 'Codify repeatable systems so teams can ship without drift.',
      detail: 'Terraform, containers, scripting, configuration management',
    },
    {
      icon: 'consulting',
      title: 'Technical consulting',
      summary: 'Bring senior execution support to roadmaps, audits, and delivery gaps.',
      detail: 'Assessments, architecture reviews, delivery leadership',
    },
  ],
  workHeading: {
    eyebrow: 'Selected Projects',
    title: 'Completed client-style work',
    body:
      'Sample project profiles show how StackOps turns cloud, delivery, security, and operations problems into systems teams can keep running.',
  },
  workLabels: {
    client: 'Client',
    projectType: 'Project',
    problem: 'Challenge',
    solution: 'Delivery',
    outcome: 'Outcome',
    tags: 'Capabilities',
  },
  work: [
    {
      client: 'Northline Logistics',
      projectType: 'Cloud foundation and migration readiness',
      title: 'Cloud foundation reset for a regional logistics platform',
      problem:
        'A growing logistics team needed cleaner account boundaries, safer network patterns, and a migration path for aging workloads.',
      solution:
        'Mapped the target cloud foundation, separated environments, codified provisioning, and documented the operating model for handoff.',
      outcome:
        'The team gained a clearer migration route and a more predictable foundation for product delivery and support.',
      tags: ['Cloud foundation', 'AWS', 'Terraform', 'Migration planning'],
    },
    {
      client: 'Finora Pay',
      projectType: 'CI/CD pipeline modernization',
      title: 'Release pipeline modernization for a payments product',
      problem:
        'Manual releases created coordination risk and slowed delivery across application, infrastructure, and QA teams.',
      solution:
        'Introduced CI/CD workflows, environment promotion gates, deployment visibility, and rollback-ready release routines.',
      outcome:
        'Engineering moved toward a repeatable release process with clearer ownership and less manual operational friction.',
      tags: ['CI/CD', 'DevOps', 'Release controls', 'Quality gates'],
    },
    {
      client: 'MedAxis Clinic Group',
      projectType: 'Security hardening and access cleanup',
      title: 'Identity and infrastructure hardening for clinical operations',
      problem:
        'Shared access, inconsistent secrets handling, and unclear infrastructure ownership increased operational exposure.',
      solution:
        'Reviewed IAM, tightened privileged access, improved secrets practices, and created remediation guidance for the operations team.',
      outcome:
        'Leadership received a practical hardening path with clearer access control and better readiness for future audits.',
      tags: ['Security hardening', 'IAM', 'Secrets', 'Operations'],
    },
    {
      client: 'UrbanGrid Retail',
      projectType: 'Monitoring and incident readiness',
      title: 'Operations readiness program for a retail platform',
      problem:
        'Production incidents were difficult to triage because service signals, escalation paths, and runbooks were fragmented.',
      solution:
        'Built monitoring views, alert routing, incident runbooks, and operating rituals for service health reviews.',
      outcome:
        'Support teams gained a shared view of system health and a calmer path from alert to action.',
      tags: ['Observability', 'Runbooks', 'Incident response', 'SRE'],
    },
  ],
  about: {
    eyebrow: 'About StackOps',
    title: 'Founder-led cloud operations with a longer story behind it.',
    body:
      'StackOps was founded in 2025 by DevOps engineers who wanted infrastructure, delivery, and operations to feel less fragile.',
    principles: ['Reliability before flash', 'Automation over repetition', 'Security built into delivery'],
    cta: { label: 'Read our story', href: '/about' },
  },
  aboutPage: {
    hero: {
      eyebrow: '/ About StackOps',
      title: 'Built for cloud teams. Only reliable systems.',
      body:
        'We did not adapt generic IT support into cloud consulting. We built StackOps from real DevOps work: cloud foundations, secure delivery pipelines, automation, observability, and operating habits that match how modern teams actually run production systems.',
    },
    stats: [
      { value: '2025', label: 'Founded' },
      { value: '3', label: 'Founder-led engineers' },
      { value: '24/7', label: 'Operations mindset' },
    ],
    principlesHeading: {
      eyebrow: 'How we work',
      title: 'Four principles, every project.',
      body:
        'How we design infrastructure, work with teams, and earn trust as a long-term cloud operations partner.',
    },
    principles: [
      {
        icon: 'target',
        title: 'Operations-First',
        body: 'Built for ownership, monitoring, recovery, and maintainability from day one.',
      },
      {
        icon: 'code',
        title: 'Automation-First',
        body: 'Manual infrastructure and release work becomes repeatable, reviewed, and safer.',
      },
      {
        icon: 'access',
        title: 'Direct Access',
        body: 'Work directly with the engineers designing, building, and operating the system.',
      },
      {
        icon: 'ship',
        title: 'Ship Safely',
        body: 'Security, access, secrets, and environment controls belong inside delivery.',
      },
    ],
    ecosystem: {
      label: 'Technology ecosystem and credentials',
      ariaLabel: 'Technology ecosystem logos',
      logos: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Terraform',
        'Kubernetes',
        'GitHub',
        'Docker',
        'Prometheus',
      ],
      credentials: [
        'Cloud certificate placeholder',
        'Security training placeholder',
        'Operations achievement placeholder',
      ],
    },
    founderNote: {
      eyebrow: "Founder's note",
      quote:
        '"We started StackOps because reliable systems should not depend on heroics. Every engagement starts with one question: will this be easier to operate after we leave?"',
      signatureName: 'StackOps Founding Team',
      signatureMeta: 'Founded 2025',
    },
    people: {
      eyebrow: 'Our people',
      title: 'Meet the team.',
      body:
        'The people behind StackOps. Building the cloud operations practice that helps teams run safer, faster, and more reliable systems.',
      items: [
        {
          name: 'Wai Phyo',
          role: 'Cloud / Platform',
          monogram: 'W',
          imageSrc: '/team/wai-phyo-sample.svg',
        },
        {
          name: 'Hein Htet Win',
          role: 'DevOps / Automation',
          monogram: 'H',
          imageSrc: '/team/hein-htet-win-sample.svg',
        },
        {
          name: 'Aung Hein Kyaw',
          role: 'Security / Operations',
          monogram: 'A',
          imageSrc: '/team/aung-hein-kyaw-sample.svg',
        },
      ],
    },
  },
  founders: [
    {
      name: 'Wai Phyo',
      role: 'DevOps Engineer',
      expertise: 'Cloud foundations, migrations, platform strategy, and infrastructure reviews.',
      monogram: 'W',
    },
    {
      name: 'Hein Htet Win',
      role: 'DevOps Engineer',
      expertise: 'CI/CD systems, infrastructure as code, developer workflows, and release quality.',
      monogram: 'H',
    },
    {
      name: 'Aung Hein Kyaw',
      role: 'DevOps Engineer',
      expertise: 'Hardening, monitoring, access controls, incident readiness, and managed operations.',
      monogram: 'A',
    },
  ],
  insightsHeading: {
    eyebrow: 'Insights',
    title: 'Operational thinking',
    body:
      'A compact view of how StackOps approaches reliable platforms, automation, and secure delivery.',
  },
  insights: [
    {
      title: 'Cloud reliability starts with ownership',
      summary: 'Healthy platforms make service boundaries, alerts, and operating responsibilities visible.',
    },
    {
      title: 'Automation is an operating decision',
      summary: 'The best automation removes repeated risk while keeping delivery teams in control.',
    },
    {
      title: 'Security belongs inside delivery',
      summary: 'Access, secrets, and infrastructure policy work best when they are part of the release path.',
    },
  ],
  contact: {
    eyebrow: 'Contact',
    title: 'Ready to modernize how your systems run?',
    body:
      'Tell us what you are building, stabilizing, or automating. StackOps will respond with a practical next step.',
    email: 'hello@stackops.example',
    fieldLabels: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      projectType: 'Project type',
      message: 'Message',
    },
    projectTypes: [
      'Cloud modernization',
      'DevOps automation',
      'Managed operations',
      'Security hardening',
      'Technical consulting',
    ],
    mailtoSubjectPrefix: 'StackOps inquiry',
    submitLabel: 'Prepare request',
    defaultNote: 'This first version prepares a direct email instead of sending to a backend.',
    confirmationLead: 'Thanks',
    confirmationMessage: 'Your request is ready to send through your email client.',
    confirmationLinkLabel: 'Email StackOps with this request',
  },
  footer: {
    homeAriaLabel: 'StackOps footer home',
    summary: 'Founder-led IT consulting for resilient digital infrastructure.',
  },
} as const satisfies SiteContent;
