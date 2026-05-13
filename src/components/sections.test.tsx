import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../App';
import { siteContent } from '../content/siteContent';

describe('StackOps landing page', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
    window.localStorage.clear();
  });

  afterEach(() => {
    window.history.pushState({}, '', '/');
    window.localStorage.clear();
    Reflect.deleteProperty(window.HTMLElement.prototype, 'scrollIntoView');
    vi.restoreAllMocks();
  });

  it('renders the approved navigation and hero CTAs', () => {
    render(<App />);

    const mainNav = screen.getByRole('navigation', { name: 'Main navigation' });

    expect(screen.getByRole('img', { name: 'StackOps logo' })).toHaveAttribute(
      'src',
      siteContent.header.logoSrc,
    );
    expect(screen.getByTestId('footer-logo')).toHaveAttribute('src', siteContent.header.logoSrc);
    expect(within(mainNav).getByRole('link', { name: 'Services' })).toHaveAttribute(
      'href',
      '#services',
    );
    expect(within(mainNav).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    expect(within(mainNav).getByRole('link', { name: 'About Us' })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(within(mainNav).queryByRole('link', { name: 'About' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Founders' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We design, automate, and operate resilient digital infrastructure.',
    );
    expect(screen.getByRole('link', { name: 'Start a project' })).toHaveAttribute(
      'href',
      '#contact',
    );
    expect(screen.getByRole('link', { name: 'View our work' })).toHaveAttribute('href', '#work');

    expect(screen.queryByRole('navigation', { name: 'Footer navigation' })).not.toBeInTheDocument();
  });

  it('toggles and persists the site theme', () => {
    render(<App />);

    const appShell = document.querySelector('.app-shell');

    expect(appShell).toHaveAttribute('data-theme', 'dark');
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    expect(screen.getByRole('button', { name: 'Switch to light theme' }).querySelector('span')).toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));

    expect(appShell).toHaveAttribute('data-theme', 'light');
    expect(window.localStorage.getItem('stackops-theme')).toBe('light');
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: 'Switch to dark theme' }).querySelector('span')).toBeNull();
  });

  it('renders the operations visual and hero metrics', () => {
    render(<App />);

    expect(screen.getByLabelText('StackOps operations health visual')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('Cloud')).toBeInTheDocument();
  });

  it('renders every approved proof item in the hero', () => {
    render(<App />);

    siteContent.proof.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders services, work, and insights sections without the homepage about teaser', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Services built for operational maturity' }),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('service-card')).toHaveLength(siteContent.services.length);
    siteContent.services.forEach((service) => {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument();
    });

    expect(screen.getByRole('heading', { name: 'Completed client-style work' })).toBeInTheDocument();
    const workCards = screen.getAllByTestId('work-card');
    expect(workCards).toHaveLength(siteContent.work.length);
    const firstWorkCard = workCards[0];

    expect(within(firstWorkCard).getByText(siteContent.workLabels.client)).toBeInTheDocument();
    expect(within(firstWorkCard).getByText(siteContent.workLabels.projectType)).toBeInTheDocument();
    expect(within(firstWorkCard).getByText(siteContent.workLabels.problem)).toBeInTheDocument();
    expect(within(firstWorkCard).getByText(siteContent.workLabels.solution)).toBeInTheDocument();
    expect(within(firstWorkCard).getByText(siteContent.workLabels.outcome)).toBeInTheDocument();
    expect(within(firstWorkCard).getByLabelText(siteContent.workLabels.tags)).toBeInTheDocument();

    siteContent.work.forEach((item, index) => {
      const card = workCards[index];

      expect(within(card).getByText(item.client)).toBeInTheDocument();
      expect(within(card).getByText(item.projectType)).toBeInTheDocument();
      expect(within(card).getByRole('heading', { name: item.title })).toBeInTheDocument();
      expect(within(card).getByText(item.problem)).toBeInTheDocument();
      expect(within(card).getByText(item.solution)).toBeInTheDocument();
      expect(within(card).getByText(item.outcome)).toBeInTheDocument();

      item.tags.forEach((tag) => {
        expect(within(card).getByText(tag)).toBeInTheDocument();
      });
    });

    expect(
      screen.queryByRole('heading', {
        name: 'Founder-led cloud operations with a longer story behind it.',
      }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Read our story' })).not.toBeInTheDocument();
    expect(screen.queryByTestId('founder-card')).not.toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Operational thinking' })).toBeInTheDocument();
    expect(screen.getAllByTestId('insight-card')).toHaveLength(siteContent.insights.length);
    siteContent.insights.forEach((insight) => {
      expect(screen.getByRole('heading', { name: insight.title })).toBeInTheDocument();
    });
  });

  it('renders the standalone about page with homepage links from /about', () => {
    window.history.pushState({}, '', '/about');
    render(<App />);

    const mainNav = screen.getByRole('navigation', { name: 'Main navigation' });

    expect(screen.getByRole('link', { name: 'StackOps home' })).toHaveAttribute('href', '/');
    expect(within(mainNav).getByRole('link', { name: 'Services' })).toHaveAttribute(
      'href',
      '/#services',
    );
    expect(within(mainNav).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/#work');
    expect(within(mainNav).getByRole('link', { name: 'About Us' })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(within(mainNav).queryByRole('link', { name: 'About' })).not.toBeInTheDocument();
    expect(within(mainNav).getByRole('link', { name: 'Insights' })).toHaveAttribute(
      'href',
      '/#insights',
    );
    expect(screen.getByRole('link', { name: /Book a consult/ })).toHaveAttribute(
      'href',
      '/#contact',
    );
    expect(screen.queryByRole('navigation', { name: 'Footer navigation' })).not.toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Built for cloud teams. Only reliable systems.',
    );
    expect(within(screen.getByRole('heading', { level: 1 })).getByText('Only reliable systems.')).toHaveClass(
      'about-title-accent',
    );
    expect(
      screen.getByText(/We did not adapt generic IT support into cloud consulting/),
    ).toBeInTheDocument();

    const stats = screen.getByLabelText('StackOps about metrics');

    expect(within(stats).getByText('2025')).toBeInTheDocument();
    expect(within(stats).getByText('Founded')).toBeInTheDocument();
    expect(within(stats).getByText('3')).toBeInTheDocument();
    expect(within(stats).getByText('Founder-led engineers')).toBeInTheDocument();
    expect(within(stats).getByText('24/7')).toBeInTheDocument();

    siteContent.aboutPage.principles.forEach((principle) => {
      expect(screen.getByRole('heading', { name: principle.title })).toBeInTheDocument();
      expect(screen.getByText(principle.body)).toBeInTheDocument();
    });

    expect(screen.getByText('Technology ecosystem and credentials')).toBeInTheDocument();

    const ecosystem = screen.getByLabelText('Technology ecosystem logos');

    siteContent.aboutPage.ecosystem.logos.forEach((logo) => {
      expect(within(ecosystem).getAllByText(logo).length).toBeGreaterThan(0);
    });
    siteContent.aboutPage.ecosystem.credentials.forEach((credential) => {
      expect(screen.getByText(credential)).toBeInTheDocument();
    });

    expect(screen.getByText(siteContent.aboutPage.founderNote.quote)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Meet the team.' })).toBeInTheDocument();
    siteContent.aboutPage.people.items.forEach((person) => {
      expect(
        screen.getByRole('img', { name: `${person.name} sample portrait` }),
      ).toHaveAttribute('src', person.imageSrc);
      expect(screen.getByRole('heading', { name: person.name })).toBeInTheDocument();
      expect(screen.getByText(person.role)).toBeInTheDocument();
    });
  });

  it('scrolls to the requested homepage section after loading with a hash', async () => {
    window.history.pushState({}, '', '/#work');
    const scrollIntoView = vi.fn();

    Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    });

    render(<App />);

    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start' });
    });
    expect(scrollIntoView.mock.contexts[0]).toBe(document.getElementById('work'));
  });

  it('shows a local confirmation after a completed contact request', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Aye Chan' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'aye@example.com' } });
    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'Example Co' } });
    fireEvent.change(screen.getByLabelText('Project type'), {
      target: { value: 'Cloud modernization' },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'We need help modernizing our cloud platform.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Prepare request' }));

    expect(screen.getByText(/Thanks, Aye Chan/)).toBeInTheDocument();
    const preparedEmailLink = screen.getByRole('link', { name: /Email StackOps/ });
    const preparedHref = preparedEmailLink.getAttribute('href') ?? '';

    expect(preparedHref).toContain('mailto:hello@stackops.example');
    expect(preparedHref).toContain(encodeURIComponent('StackOps inquiry: Cloud modernization'));
    expect(preparedHref).toContain(encodeURIComponent('Name: Aye Chan'));
    expect(preparedHref).toContain(encodeURIComponent('Email: aye@example.com'));
    expect(preparedHref).toContain(encodeURIComponent('Company: Example Co'));
    expect(preparedHref).toContain(encodeURIComponent('Project type: Cloud modernization'));
    expect(preparedHref).toContain(
      encodeURIComponent('We need help modernizing our cloud platform.'),
    );

    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'A later edit should require preparing the request again.' },
    });

    expect(screen.queryByRole('link', { name: /Email StackOps/ })).not.toBeInTheDocument();
    expect(screen.getByText(siteContent.contact.defaultNote)).toBeInTheDocument();
  });

  it('does not prepare a contact confirmation for a whitespace-only name', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: '   ' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'aye@example.com' } });
    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'Example Co' } });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'We need help modernizing our cloud platform.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Prepare request' }));

    expect(screen.queryByText(/Thanks,/)).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Email StackOps/ })).not.toBeInTheDocument();
  });
});
