import { profile } from "../data/profile.ts";
import "./Footer.css";

// The year is written into the page at build time. suppressHydrationWarning keeps React
// quiet if a visitor loads that build after New Year; the next deploy corrects the text.
const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer wrap">
      <p>
        © <span suppressHydrationWarning>{YEAR}</span> {profile.name}. All rights reserved.
      </p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
