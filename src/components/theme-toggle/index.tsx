import { MoonIcon, SunIcon } from "@/components/icons";
import { THEME_COLORS } from "@/site-config";

function toggleTheme() {
  const root = document.documentElement;
  const theme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private windows can block storage; the choice just won't be remembered
  }
}

/**
 * Both icons are always rendered and CSS shows the right one, because the
 * theme is unknown during server rendering.
 */
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      className="inline-flex size-11 items-center justify-center rounded-full text-text-muted transition-colors duration-fast hover:bg-surface hover:text-text"
    >
      <SunIcon size={20} className="light:hidden" />
      <MoonIcon size={20} className="hidden light:block" />
    </button>
  );
}
