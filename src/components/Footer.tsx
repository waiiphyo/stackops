import { siteContent } from '../content/siteContent';
import { isAboutPath, resolveHomeHref } from '../utils/navigation';

export function Footer() {
  const { footer, header } = siteContent;
  const onAboutPage = isAboutPath();

  return (
    <footer className="site-footer">
      <a className="brand" href={resolveHomeHref(onAboutPage)} aria-label={footer.homeAriaLabel}>
        <span className="brand-logo-frame brand-logo-frame-footer" aria-hidden="true">
          <img className="brand-logo" src={header.logoSrc} alt="" data-testid="footer-logo" />
        </span>
        <span>{header.brandName}</span>
      </a>
      <p>{footer.summary}</p>
    </footer>
  );
}
