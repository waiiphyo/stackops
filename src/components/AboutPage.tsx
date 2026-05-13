import { ArrowUpRight, Braces, Radio, ShieldCheck, Target } from 'lucide-react';
import { siteContent, type AboutPagePrincipleIcon } from '../content/siteContent';

const principleIcons = {
  target: Target,
  code: Braces,
  access: Radio,
  ship: ArrowUpRight,
} satisfies Record<AboutPagePrincipleIcon, typeof Target>;

export function AboutPage() {
  const { aboutPage } = siteContent;
  const marqueeLogos = [...aboutPage.ecosystem.logos, ...aboutPage.ecosystem.logos];
  const titleAccent = 'Only reliable systems.';
  const titleLead = aboutPage.hero.title.replace(titleAccent, '').trim();

  return (
    <article className="about-reference-page">
      <section className="about-reference-hero">
        <div>
          <p className="about-reference-kicker">{aboutPage.hero.eyebrow}</p>
          <h1>
            {titleLead} <span className="about-title-accent">{titleAccent}</span>
          </h1>
        </div>
        <p>{aboutPage.hero.body}</p>
      </section>

      <dl className="about-reference-stats" aria-label="StackOps about metrics">
        {aboutPage.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>

      <section className="about-reference-section about-principles-section">
        <div className="about-section-heading">
          <p className="about-reference-kicker">
            <span aria-hidden="true" />
            {aboutPage.principlesHeading.eyebrow}
          </p>
          <h2>{aboutPage.principlesHeading.title}</h2>
          <p>{aboutPage.principlesHeading.body}</p>
        </div>

        <div className="about-principles-grid">
          {aboutPage.principles.map((principle, index) => {
            const PrincipleIcon = principleIcons[principle.icon];

            return (
              <article className="about-principle-card" key={principle.title}>
                <div className="about-principle-topline">
                  <span className="about-principle-icon">
                    <PrincipleIcon aria-hidden="true" size={22} strokeWidth={1.8} />
                  </span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-ecosystem-section">
        <p className="about-reference-kicker about-ecosystem-label">
          {aboutPage.ecosystem.label}
        </p>
        <div className="about-marquee" aria-label={aboutPage.ecosystem.ariaLabel}>
          <div className="about-marquee-track">
            {marqueeLogos.map((logo, index) => (
              <span key={`${logo}-${index}`}>{logo}</span>
            ))}
          </div>
        </div>
        <ul className="about-credential-list">
          {aboutPage.ecosystem.credentials.map((credential) => (
            <li key={credential}>
              <ShieldCheck aria-hidden="true" size={16} />
              {credential}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-founder-note-section">
        <p className="about-reference-kicker">
          <span aria-hidden="true" />
          {aboutPage.founderNote.eyebrow}
        </p>
        <blockquote>{aboutPage.founderNote.quote}</blockquote>
        <p className="about-founder-signature">
          <strong>{aboutPage.founderNote.signatureName}</strong>
          <span aria-hidden="true">/</span>
          <span>{aboutPage.founderNote.signatureMeta}</span>
        </p>
      </section>

      <section className="about-team-section">
        <div className="about-section-heading">
          <p className="about-reference-kicker">
            <span aria-hidden="true" />
            {aboutPage.people.eyebrow}
          </p>
          <h2>{aboutPage.people.title}</h2>
          <p>{aboutPage.people.body}</p>
        </div>

        <div className="about-team-grid">
          {aboutPage.people.items.map((person) => (
            <article className="about-person-card" key={person.name}>
              <div className="about-person-photo" aria-hidden="true">
                <span>{person.monogram}</span>
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
