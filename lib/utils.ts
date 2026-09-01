import type { Executive, ExecutiveRank } from './types';

/** Joins class names, dropping falsy values. */
export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}

/**
 * Initials for avatar fallbacks.
 *
 * Written defensively on purpose: the obvious `name.split(' ')[1][0]` throws on
 * any single-word name, and Sri Lankan Leo rosters routinely contain mononyms
 * and names prefixed with the honorific "Leo".
 */
export function getInitials(name: string): string {
  const words = name
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0 && w.toLowerCase() !== 'leo');

  if (words.length === 0) return '?';
  if (words.length === 1) return (words[0] ?? '').slice(0, 2).toUpperCase();

  const first = words[0]?.[0] ?? '';
  const last = words[words.length - 1]?.[0] ?? '';
  return (first + last).toUpperCase();
}

const rankOrder: Record<ExecutiveRank, number> = {
  president: 0,
  'immediate-past-president': 1,
  'vice-president': 2,
  secretary: 3,
  'assistant-secretary': 4,
  treasurer: 5,
  'assistant-treasurer': 6,
  editor: 7,
  chairperson: 8,
  director: 9,
  member: 10,
};

/** Conventional board order. An explicit `order` always wins. */
export function sortExecutives(executives: Executive[]): Executive[] {
  return [...executives].sort((a, b) => {
    if (a.order !== undefined || b.order !== undefined) {
      return (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
    }
    const diff = rankOrder[a.rank] - rankOrder[b.rank];
    return diff !== 0 ? diff : a.name.localeCompare(b.name);
  });
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Formats an ISO date. Returns the input unchanged if unparseable, so a typo in
 * content shows up visibly rather than as "Invalid Date".
 */
export function formatDate(
  iso: string,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' },
): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat('en-LK', options).format(date);
}

/** Newest first, by ISO date. */
export function byDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatStatValue(value: number | string): string {
  return typeof value === 'number' ? value.toLocaleString('en-LK') : value;
}
