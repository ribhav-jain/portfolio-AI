/**
 * The active theme lives in `data-theme` on <html>, so CSS can style it without React state.
 * The inline script in index.html sets it before first paint (saved choice, else system setting);
 * keep the storage key below in sync with that script.
 */
const STORAGE_KEY = "theme";

export function toggleTheme(): void {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be blocked (private mode); the choice then lasts for this visit only.
  }
}
