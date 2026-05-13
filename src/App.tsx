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
