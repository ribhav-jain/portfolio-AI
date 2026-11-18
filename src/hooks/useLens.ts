import { useCallback, useEffect, useRef } from "react";
import type { SyntheticEvent } from "react";

const ACTIVE_ITEM = '[aria-current], [aria-pressed="true"]';

/**
 * Drives the sliding highlight ("lens") behind a row of links or buttons.
 *
 * Spread the result onto the group element, which must contain an element with class
 * `lens`. The lens follows the hovered or focused item and otherwise rests on the active
 * one (marked with `aria-current` or `aria-pressed="true"`). Pass the active item's key
 * so the lens moves when it changes.
 */
export function useLens<T extends HTMLElement>(activeKey: string | null) {
  const groupRef = useRef<T>(null);

  const moveTo = useCallback((item: HTMLElement | null) => {
    const lens = groupRef.current?.querySelector<HTMLElement>(".lens");
    if (!lens) return;
    if (!item) {
      lens.style.opacity = "0";
      return;
    }
    lens.style.width = `${item.offsetWidth}px`;
    lens.style.height = `${item.offsetHeight}px`;
    lens.style.transform = `translate(${item.offsetLeft}px, ${item.offsetTop}px)`;
    lens.style.opacity = "1";
  }, []);

  const moveToActive = useCallback(() => {
    moveTo(groupRef.current?.querySelector<HTMLElement>(ACTIVE_ITEM) ?? null);
  }, [moveTo]);

  // Follow the active item, unless the pointer is choosing something else right now.
  useEffect(() => {
    if (!groupRef.current?.matches(":hover")) moveToActive();
  }, [activeKey, moveToActive]);

  // Item sizes change when the window resizes and when web fonts finish loading.
  useEffect(() => {
    window.addEventListener("resize", moveToActive);
    void document.fonts?.ready.then(moveToActive);
    return () => window.removeEventListener("resize", moveToActive);
  }, [moveToActive]);

  const moveToTarget = (event: SyntheticEvent) => {
    const item = (event.target as HTMLElement).closest<HTMLElement>("a, button");
    if (item) moveTo(item);
  };

  return {
    ref: groupRef,
    onMouseOver: moveToTarget,
    onFocus: moveToTarget,
    onMouseLeave: moveToActive,
    onBlur: moveToActive,
  };
}
