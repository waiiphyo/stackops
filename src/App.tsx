import { useEffect, useState } from 'react';
import { AboutPage } from './components/AboutPage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Insights } from './components/Insights';
import { Services } from './components/Services';
import type { ThemeMode } from './components/ThemeToggle';
import { Work } from './components/Work';
import { isAboutPath } from './utils/navigation';

const THEME_STORAGE_KEY = 'stackops-theme';

function getHashTargetId() {
  const hash = window.location.hash;

  if (!hash) {
    return '';
  }

  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
}

function scrollToCurrentHashTarget() {
  const targetId = getHashTargetId();

  if (!targetId) {
    return;
  }

  document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
}

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';
}

export default function App() {
  const onAboutPage = isAboutPath();
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (onAboutPage) {
      return undefined;
    }

    const scheduleHashScroll = () => {
      window.requestAnimationFrame(scrollToCurrentHashTarget);
    };

    scheduleHashScroll();
    window.addEventListener('hashchange', scheduleHashScroll);

    return () => {
      window.removeEventListener('hashchange', scheduleHashScroll);
    };
  }, [onAboutPage]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-shell${onAboutPage ? ' about-page-shell' : ''}`} data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        {onAboutPage ? (
          <AboutPage />
        ) : (
          <>
            <Hero />
            <Services />
            <Work />
            <Insights />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
