import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function Work() {
  const { workHeading, workLabels } = siteContent;

  return (
    <section className="page-section split-section" id="work">
      <div className="section-heading sticky-heading">
        <p className="eyebrow">{workHeading.eyebrow}</p>
        <h2>{workHeading.title}</h2>
        <p>{workHeading.body}</p>
      </div>

      <div className="work-list">
        {siteContent.work.map((item, index) => (
          <article className="work-card" data-testid="work-card" key={item.client}>
            <div className="work-card-topline">
              <div>
                <span className="work-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <p className="work-client-label">{workLabels.client}</p>
                <p className="work-client">{item.client}</p>
              </div>
              <ArrowUpRight aria-hidden="true" size={20} />
            </div>
            <p className="work-project-type">
              <span>{workLabels.projectType}</span>
              {item.projectType}
            </p>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>{workLabels.problem}</dt>
                <dd>{item.problem}</dd>
              </div>
              <div>
                <dt>{workLabels.solution}</dt>
                <dd>{item.solution}</dd>
              </div>
              <div>
                <dt>{workLabels.outcome}</dt>
                <dd>{item.outcome}</dd>
              </div>
            </dl>
            <ul className="work-tags" aria-label={workLabels.tags}>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
