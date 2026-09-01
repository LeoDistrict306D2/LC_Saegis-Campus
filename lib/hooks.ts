'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll reveal.
 *
 * Deliberately holds no React state. The element renders VISIBLE — that is its
 * markup, so it is what the server sends and what a visitor sees with
 * JavaScript disabled or reduced motion enabled. Only after mount, and only
 * once we know animating is safe, does the effect add `is-hidden` and let the
 * observer take it off again.
 *
 * Toggling a class on the node rather than flipping state is also what React's
 * `set-state-in-effect` rule is asking for: an effect should drive the external
 * system (the DOM), not kick off a cascading re-render.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = options ?? {};
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;

    node.classList.add('is-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          node.classList.remove('is-hidden');
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      // If we unmount mid-animation, never leave the node stuck invisible.
      node.classList.remove('is-hidden');
    };
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Counts a number up when it scrolls into view.
 *
 * The final value is what gets rendered, so the served HTML already contains
 * the real figure — good for crawlers, and correct with JavaScript disabled.
 * The effect animates by writing `textContent`, then restores the final value
 * on cleanup, so an interrupted animation can never leave a wrong number on
 * screen.
 *
 * Everything is derived from `target`; there is no key map to keep in sync, so
 * adding a statistic cannot break the page.
 */
export function useCountUp(
  target: number,
  format: (value: number) => string,
  options?: { duration?: number; enabled?: boolean },
) {
  const { duration = 1600, enabled = true } = options ?? {};
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;

    let frame = 0;
    node.textContent = format(0);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // Ease-out cubic: quick start, gentle settle.
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = format(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      node.textContent = format(target);
    };
  }, [target, duration, enabled, format]);

  return ref;
}
