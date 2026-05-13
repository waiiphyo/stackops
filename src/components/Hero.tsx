import { Activity, ArrowRight, GitBranch, ShieldCheck, type LucideIcon } from 'lucide-react';
import { siteContent, type OperationsVisualNodeKey } from '../content/siteContent';

const operationsIcons = {
  monitor: Activity,
  deploy: GitBranch,
  secure: ShieldCheck,
} satisfies Record<OperationsVisualNodeKey, LucideIcon>;

export function Hero() {
  const { hero, metrics, operationsVisual, proof } = siteContent;

  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          {hero.eyebrow}
        </p>
        <h1>{hero.title}</h1>
        <p className="hero-body">{hero.body}</p>

        <div className="hero-actions">
          <a className="button button-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a className="button button-secondary" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>

        <dl className="metric-grid" aria-label={hero.metricsAriaLabel}>
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="ops-console" aria-label={operationsVisual.label}>
        <figcaption className="console-header">
          <span>{operationsVisual.title}</span>
          <span className="health-pill">{operationsVisual.status}</span>
        </figcaption>
        <div className="console-lines" aria-hidden="true">
          <span className="line-cyan" />
          <span />
          <span className="line-green" />
          <span />
        </div>
        <ul className="node-grid">
          {operationsVisual.nodes.map((node) => {
            const Icon = operationsIcons[node.key];

            return (
              <li className="node-card" key={node.key}>
                <Icon aria-hidden="true" size={20} />
                <strong>{node.title}</strong>
                <span>{node.summary}</span>
              </li>
            );
          })}
        </ul>
      </figure>

      <div className="proof-strip" aria-label={hero.proofAriaLabel}>
        {proof.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
