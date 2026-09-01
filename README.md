# Leo Club of Saegis Campus — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Lab*.** A health-sciences campus club, and the **only
dark-first site** in this set. It borrows from instrumentation rather than
consumer dark mode: hairline rules, monospace labels and identifiers, precise
data panels, and a single cyan used the way an indicator light is used —
sparingly, and always to mean something.

Deliberately **not** a glassmorphic dashboard. No blur panels, no floating
cards, no gradient meshes. The restraint is what stops it looking like every
other dark template.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## The design system

Dark **is** the base here, so `--color-page` is near-black and `--color-inverse`
is the light band — the opposite of every other club in this set. Bear that in
mind when copying a pattern across.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#08090c` | Near-black ground |
| `--color-panel` | `#10131a` | Data panels |
| `--color-raised` | `#171b24` | Raised surfaces |
| `--color-ink` | `#e6edf3` | Text |
| `--color-accent` | `#22d3ee` | Cyan — an indicator, ~12 uses per page |
| `--color-inverse` | `#f2f5f8` | The light closing band |

`color-scheme: dark` is set on `html`, so form controls and scrollbars render
dark rather than fighting the page.

Type: Sora (headings, body) + JetBrains Mono (labels, identifiers, figures).

### The monospace rule

The mono is not decoration. It marks **machine-readable content** — project
references, ISO timestamps, field names, measured values. Anything a person
wrote in prose is set in Sora. Keeping that distinction strict is what makes the
mono mean something; using it for body copy would break the system.

### Signature classes

- `.mono` — the label type
- `.spec` — a data panel: hairline border, cyan top edge, no blur or shadow
- `.bleed` — the one glow on the site, a faint cyan bleed behind a heading
- `.dot` — the status marker on log entries
- `.grid-faint` — hairline grid backdrop, used once on the opening screen

`components/LogEntry.tsx` renders a project as an instrument log entry, leading
with `project.id` and an ISO timestamp. That is why `id` should be the club's
real filing reference (`SC-014`), not a slug.

---

## Editing content

```ts
{
  id: 'SC-015',              // the club's real filing reference — rendered on the entry
  slug: 'winter-screening',
  title: 'Winter Screening',
  summary: 'One sentence.',
  story: ['Paragraph one.'],
  category: 'health',
  year: '2025/26',
  date: '2026-01-24',
  location: 'Nugegoda',
  featured: true,
  heroImage: { src: '/images/projects/winter-screening.jpg',
               alt: 'Describe what is happening', width: 1600, height: 900 },
  impact: [
    { id: 'screened', value: 240, label: 'People screened' },
    { id: 'referred', value: 31, label: 'Referred onward',
      note: 'All followed up at eight weeks.' },
  ],
  partners: [{ name: 'MOH Office, Nugegoda' }],
}
```

`Readout` renders `note` under the label because on this site the caveat is part
of the reading — "412 referred" means nothing without "every referral followed
up at eight weeks".

Board: `content/board.ts`, ordered automatically by `rank`.
Images: real `width`/`height`; `.jpg`/`.webp` only — HEIC does not render.
`Photo` darkens images slightly by default; pass `full` where the photograph is
the subject.

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical, OG tags.
- Every image via `next/image` in an aspect box, with `alt`.
- Keyboard-operable menu with `aria-expanded`/`aria-controls`, Escape, focus
  return, visible focus ring, skip link.
- `prefers-reduced-motion` respected; content readable with JavaScript off.
- `typedRoutes` on — a dead internal link fails the build.
- `images.remotePatterns` deliberately empty.
- The membership form composes a real pre-filled email. There is no form service
  and no database — which matters more than usual for a club whose members
  handle health information.

### Scope of practice

The footer carries a scope-of-practice statement, and the home page puts the
club's operating constraints **before** the project list rather than in the
footer. For a student health club that ordering is an ethical choice, not a
layout one — a visitor arriving from a screening clinic needs to know in plain
terms what this club does and does not do.

**If the club's actual supervision arrangements or referral pathway differ from
what those sections describe, correct them before launch.** They make specific
claims about clinical governance on the club's behalf.

## Deploying

Set `siteUrl` in `content/club.ts`, then `npm run build && npm start`.

## Outstanding content

Everything marked `TODO(content)` needs real values. Images are generated
solid-colour placeholders. The gallery copy states that no patient is
identifiable in any published image — keep that true.
