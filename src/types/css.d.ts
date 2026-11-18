import "react";

declare module "react" {
  // Allow CSS custom properties in the `style` prop, e.g. style={{ "--i": 2 }}.
  interface CSSProperties {
    [property: `--${string}`]: string | number | undefined;
  }
}
