export const ABOUT_PATH = '/about';

export function isAboutPath(pathname = window.location.pathname) {
  return pathname === ABOUT_PATH || pathname === `${ABOUT_PATH}/`;
}

export function resolveHomeHref(onAboutPage = isAboutPath()) {
  return onAboutPage ? '/' : '#top';
}

export function resolveSiteHref(href: string, onAboutPage = isAboutPath()) {
  if (!onAboutPage || !href.startsWith('#')) {
    return href;
  }

  return `/${href}`;
}
