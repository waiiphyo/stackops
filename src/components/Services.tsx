import {
  Cloud,
  GitBranch,
  Headset,
  LockKeyhole,
  ServerCog,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { siteContent, type ServiceIcon } from '../content/siteContent';

const icons = {
  cloud: Cloud,
  pipeline: GitBranch,
  operations: Headset,
  security: LockKeyhole,
  automation: ServerCog,
  consulting: Wrench,
} satisfies Record<ServiceIcon, LucideIcon>;

export function Services() {
  const { servicesHeading } = siteContent;

  return (
    <section className="page-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">{servicesHeading.eyebrow}</p>
        <h2>{servicesHeading.title}</h2>
        <p>{servicesHeading.body}</p>
      </div>

      <div className="card-grid services-grid">
        {siteContent.services.map((service) => {
          const Icon = icons[service.icon] ?? Wrench;
          return (
            <article className="service-card" data-testid="service-card" key={service.title}>
              <div className="icon-box">
                <Icon aria-hidden="true" size={22} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span>{service.detail}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
