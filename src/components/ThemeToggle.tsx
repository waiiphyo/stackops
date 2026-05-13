import { Moon, Sun } from 'lucide-react';

export type ThemeMode = 'dark' | 'light';

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps) {
  const isLight = theme === 'light';
  const label = isLight ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      aria-pressed={isLight}
      onClick={onToggleTheme}
    >
      {isLight ? <Moon aria-hidden="true" size={16} /> : <Sun aria-hidden="true" size={16} />}
    </button>
  );
}
