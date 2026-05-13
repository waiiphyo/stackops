import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function About() {
  return (
    <section className="page-section about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">{siteContent.about.eyebrow}</p>
        <h2>{siteContent.about.title}</h2>
        <p>{siteContent.about.body}</p>
        <ul className="principle-list">
          {siteContent.about.principles.map((principle) => (
            <li key={principle}>
              <CheckCircle2 aria-hidden="true" size={18} />
              {principle}
            </li>
          ))}
        </ul>
        <a className="button button-secondary about-teaser-link" href={siteContent.about.cta.href}>
          {siteContent.about.cta.label}
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      </div>

      <div className="founder-grid" aria-label="StackOps founder-led expertise">
        {siteContent.founders.map((founder) => (
          <article className="founder-card" data-testid="founder-card" key={founder.name}>
            <div className="founder-avatar" aria-hidden="true">
              {founder.monogram}
            </div>
            <div>
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p>{founder.expertise}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
