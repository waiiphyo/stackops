import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { isAboutPath, resolveHomeHref, resolveSiteHref } from '../utils/navigation';
import { ThemeToggle, type ThemeMode } from './ThemeToggle';

type HeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const { header, navItems } = siteContent;
  const onAboutPage = isAboutPath();

  return (
    <header className="site-header">
      <a className="brand" href={resolveHomeHref(onAboutPage)} aria-label={header.homeAriaLabel}>
        <span className="brand-logo-frame" aria-hidden={header.logoAlt ? undefined : 'true'}>
          <img className="brand-logo" src={header.logoSrc} alt={header.logoAlt} />
        </span>
        <span className="brand-text">{header.brandName}</span>
      </a>

      <nav className="nav-links" aria-label={header.navAriaLabel}>
        {navItems.map((item) => (
          <a key={item.href} href={resolveSiteHref(item.href, onAboutPage)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        <a className="header-cta" href={resolveSiteHref(header.cta.href, onAboutPage)}>
          {header.cta.label}
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </header>
  );
}
