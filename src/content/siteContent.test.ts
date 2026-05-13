import { describe, expect, expectTypeOf, it } from 'vitest';
import { siteContent } from './siteContent';

describe('siteContent', () => {
  it('uses approved primary navigation labels and destinations', () => {
    expect(siteContent.navItems).toEqual([
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'About Us', href: '/about' },
      { label: 'Insights', href: '#insights' },
    ]);

    const labels = siteContent.navItems.map((item) => item.label);

    expect(labels).not.toContain('About');
    expect(labels).not.toContain('Founders');
  });

  it('defines the approved header copy and CTA', () => {
    expect(siteContent.header).toMatchObject({
      brandName: 'StackOps',
      logoAlt: 'StackOps logo',
      homeAriaLabel: 'StackOps home',
      navAriaLabel: 'Main navigation',
      cta: { label: 'Book a consult', href: '#contact' },
    });
    expect(siteContent.header.logoSrc).toContain('StackOps_mark.svg');
  });

  it('contains the core landing page sections', () => {
    expect(siteContent.hero.primaryCta.label).toBe('Start a project');
    expect(siteContent.hero.secondaryCta.label).toBe('View our work');
    expect(siteContent.metrics).toHaveLength(3);
    expect(siteContent.services).toHaveLength(6);
    expect(siteContent.work).toHaveLength(4);
    expect(siteContent.founders).toHaveLength(3);
    expect(siteContent.aboutPage.stats).toHaveLength(3);
    expect(siteContent.aboutPage.principles).toHaveLength(4);
    expect(siteContent.aboutPage.people.items).toHaveLength(3);
    expect(siteContent.insights).toHaveLength(3);
  });

  it('defines editable section heading copy and work labels', () => {
    expect(siteContent.servicesHeading).toEqual({
      eyebrow: 'Services',
      title: 'Services built for operational maturity',
      body:
        'From cloud foundations to managed operations, StackOps focuses on the systems that keep modern teams shipping safely.',
    });
    expect(siteContent.workHeading).toEqual({
      eyebrow: 'Selected Projects',
      title: 'Completed client-style work',
      body:
        'Sample project profiles show how StackOps turns cloud, delivery, security, and operations problems into systems teams can keep running.',
    });
    expect(siteContent.workLabels).toEqual({
      client: 'Client',
      projectType: 'Project',
      problem: 'Challenge',
      solution: 'Delivery',
      outcome: 'Outcome',
      tags: 'Capabilities',
    });
    expect(siteContent.insightsHeading).toEqual({
      eyebrow: 'Insights',
      title: 'Operational thinking',
      body:
        'A compact view of how StackOps approaches reliable platforms, automation, and secure delivery.',
    });
  });

  it('contains the approved proof points', () => {
    expect(siteContent.proof).toEqual([
      'Cloud platform modernization',
      'Secure delivery pipelines',
      'Operational reliability',
      'Automation-first execution',
    ]);
    expect(siteContent.hero.proofAriaLabel).toBe('StackOps capabilities');
  });

  it('defines stable icon keys for each service', () => {
    expect(siteContent.services.map((service) => service.icon)).toEqual([
      'cloud',
      'pipeline',
      'operations',
      'security',
      'automation',
      'consulting',
    ]);

    siteContent.services.forEach((service) => {
      expect(service.icon).toEqual(expect.any(String));
      expect(service.icon).not.toHaveLength(0);
    });
  });

  it('defines approved fictional client project cards', () => {
    expect(siteContent.work.map((item) => item.client)).toEqual([
      'Northline Logistics',
      'Finora Pay',
      'MedAxis Clinic Group',
      'UrbanGrid Retail',
    ]);

    siteContent.work.forEach((item) => {
      expect(item.projectType).toEqual(expect.any(String));
      expect(item.title).toEqual(expect.any(String));
      expect(item.problem).toEqual(expect.any(String));
      expect(item.solution).toEqual(expect.any(String));
      expect(item.outcome).toEqual(expect.any(String));
      expect(item.tags.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('defines the operations visual copy', () => {
    expect(siteContent.operationsVisual).toEqual({
      label: 'StackOps operations health visual',
      title: 'Operations map',
      status: 'Systems healthy',
      nodes: [
        { key: 'monitor', title: 'Monitor', summary: 'Signals unified' },
        { key: 'deploy', title: 'Deploy', summary: 'Pipelines controlled' },
        { key: 'secure', title: 'Secure', summary: 'Access hardened' },
      ],
    });
  });

  it('defines the approved standalone about page copy', () => {
    expect(siteContent.about.cta).toEqual({ label: 'Read our story', href: '/about' });
    expect(siteContent.aboutPage.hero).toEqual({
      eyebrow: '/ About StackOps',
      title: 'Built for cloud teams. Only reliable systems.',
      body:
        'We did not adapt generic IT support into cloud consulting. We built StackOps from real DevOps work: cloud foundations, secure delivery pipelines, automation, observability, and operating habits that match how modern teams actually run production systems.',
    });
    expect(siteContent.aboutPage.stats).toEqual([
      { value: '2025', label: 'Founded' },
      { value: '3', label: 'Founder-led engineers' },
      { value: '24/7', label: 'Operations mindset' },
    ]);
    expect(siteContent.aboutPage.principles.map((principle) => principle.title)).toEqual([
      'Operations-First',
      'Automation-First',
      'Direct Access',
      'Ship Safely',
    ]);
    expect(siteContent.aboutPage.ecosystem).toMatchObject({
      label: 'Technology ecosystem and credentials',
      ariaLabel: 'Technology ecosystem logos',
      logos: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'GitHub', 'Docker', 'Prometheus'],
      credentials: [
        'Cloud certificate placeholder',
        'Security training placeholder',
        'Operations achievement placeholder',
      ],
    });
    expect(siteContent.aboutPage.founderNote.quote).toBe(
      '"We started StackOps because reliable systems should not depend on heroics. Every engagement starts with one question: will this be easier to operate after we leave?"',
    );
    expect(siteContent.aboutPage.people.items.map((person) => person.name)).toEqual([
      'Wai Phyo',
      'Hein Htet Win',
      'Aung Hein Kyaw',
    ]);
    expect(siteContent.aboutPage.people.items.map((person) => person.imageSrc)).toEqual([
      '/team/wai-phyo-sample.svg',
      '/team/hein-htet-win-sample.svg',
      '/team/aung-hein-kyaw-sample.svg',
    ]);
  });

  it('defines accessibility labels used by the hero', () => {
    expect(siteContent.hero.metricsAriaLabel).toBe('StackOps proof metrics');
    expect(siteContent.hero.proofAriaLabel).toBe('StackOps capabilities');
  });

  it('defines a direct contact email and required project types', () => {
    expect(siteContent.contact.email).toBe('hello@stackops.example');
    expect(siteContent.contact.projectTypes).toEqual([
      'Cloud modernization',
      'DevOps automation',
      'Managed operations',
      'Security hardening',
      'Technical consulting',
    ]);
  });

  it('defines footer summary copy', () => {
    expect(siteContent.footer.summary).toBe(
      'Founder-led IT consulting for resilient digital infrastructure.',
    );
  });

  it('preserves literal content types for downstream consumers', () => {
    expectTypeOf(siteContent.navItems).toEqualTypeOf<
      readonly [
        { readonly label: 'Services'; readonly href: '#services' },
        { readonly label: 'Work'; readonly href: '#work' },
        { readonly label: 'About Us'; readonly href: '/about' },
        { readonly label: 'Insights'; readonly href: '#insights' },
      ]
    >();
    expectTypeOf(siteContent.header.brandName).toEqualTypeOf<'StackOps'>();
    expectTypeOf(siteContent.header.logoSrc).toEqualTypeOf<string>();
    expectTypeOf(siteContent.header.logoAlt).toEqualTypeOf<'StackOps logo'>();
    expectTypeOf(siteContent.header.navAriaLabel).toEqualTypeOf<'Main navigation'>();
    expectTypeOf(siteContent.hero.metricsAriaLabel).toEqualTypeOf<'StackOps proof metrics'>();
    expectTypeOf(siteContent.hero.proofAriaLabel).toEqualTypeOf<'StackOps capabilities'>();
    expectTypeOf(siteContent.header.cta.href).toEqualTypeOf<'#contact'>();
    expectTypeOf(siteContent.operationsVisual.nodes[0].key).toEqualTypeOf<'monitor'>();
    expectTypeOf(siteContent.servicesHeading.title).toEqualTypeOf<
      'Services built for operational maturity'
    >();
    expectTypeOf(siteContent.workHeading.title).toEqualTypeOf<'Completed client-style work'>();
    expectTypeOf(siteContent.workLabels.client).toEqualTypeOf<'Client'>();
    expectTypeOf(siteContent.work[0].client).toEqualTypeOf<'Northline Logistics'>();
    expectTypeOf(siteContent.work[0].tags[0]).toEqualTypeOf<'Cloud foundation'>();
    expectTypeOf(siteContent.about.cta.href).toEqualTypeOf<'/about'>();
    expectTypeOf(siteContent.aboutPage.hero.title).toEqualTypeOf<
      'Built for cloud teams. Only reliable systems.'
    >();
    expectTypeOf(siteContent.aboutPage.principles[0].title).toEqualTypeOf<'Operations-First'>();
    expectTypeOf(siteContent.aboutPage.ecosystem.logos[0]).toEqualTypeOf<'AWS'>();
    expectTypeOf(siteContent.aboutPage.people.items[0].role).toEqualTypeOf<'Cloud / Platform'>();
    expectTypeOf(siteContent.aboutPage.people.items[0].imageSrc).toEqualTypeOf<
      '/team/wai-phyo-sample.svg'
    >();
    expectTypeOf(siteContent.insightsHeading.title).toEqualTypeOf<'Operational thinking'>();
    expectTypeOf(siteContent.services[0].icon).toEqualTypeOf<'cloud'>();
    expectTypeOf(siteContent.contact.email).toEqualTypeOf<'hello@stackops.example'>();
    expectTypeOf(siteContent.footer.summary).toEqualTypeOf<
      'Founder-led IT consulting for resilient digital infrastructure.'
    >();
  });
});
