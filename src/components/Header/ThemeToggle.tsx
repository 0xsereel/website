import { Moon, Sun } from "lucide-react";
import { useGlobal } from "../../contexts/globals";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useGlobal();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      data-theme-state={theme}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "light"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-option" data-active={theme === "light"}>
        <Sun size={14} strokeWidth={1.9} aria-hidden="true" />
      </span>
      <span className="theme-toggle-option" data-active={theme === "dark"}>
        <Moon size={14} strokeWidth={1.9} aria-hidden="true" />
      </span>
    </button>
  );
};
