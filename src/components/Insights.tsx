import { BookOpen } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export function Insights() {
  const { insightsHeading } = siteContent;

  return (
    <section className="page-section" id="insights">
      <div className="section-heading">
        <p className="eyebrow">{insightsHeading.eyebrow}</p>
        <h2>{insightsHeading.title}</h2>
        <p>{insightsHeading.body}</p>
      </div>

      <div className="card-grid insight-grid">
        {siteContent.insights.map((insight) => (
          <article className="insight-card" data-testid="insight-card" key={insight.title}>
            <BookOpen aria-hidden="true" size={20} />
            <h3>{insight.title}</h3>
            <p>{insight.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
