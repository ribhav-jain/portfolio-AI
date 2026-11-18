/** Joins class names, skipping falsy entries: cx("card", isActive && "on"). */
export function cx(...names: Array<string | false | null | undefined>): string {
  return names.filter(Boolean).join(" ");
}
