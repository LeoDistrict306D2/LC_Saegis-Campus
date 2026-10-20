import type { GalleryItem } from '@/lib/types';

/**
 * Photo gallery.
 *
 * Illustrative entries only — every item points at the shared placeholder
 * until the club supplies real photography. The shape (album, projectSlug,
 * date) is what matters; swap `src`/`alt` for real images as they arrive.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 900,
});

export const gallery: GalleryItem[] = [
  {
    id: 'g-001',
    ...placeholder('A supervised screening clinic running at Baseline'),
    album: 'Baseline',
    projectSlug: 'baseline',
    date: '2025-08-09',
  },
  {
    id: 'g-002',
    ...placeholder('A student calling a referral for an eight-week follow-up'),
    album: 'Baseline',
    projectSlug: 'baseline',
    date: '2025-09-20',
  },
  {
    id: 'g-003',
    ...placeholder('A pharmacy student reviewing household medication'),
    album: 'Medicine Cabinet',
    projectSlug: 'medicine-cabinet',
    date: '2025-02-22',
  },
  {
    id: 'g-004',
    ...placeholder('CPR training in progress on campus'),
    album: 'First Response',
    projectSlug: 'first-response',
    date: '2024-10-12',
  },
  {
    id: 'g-005',
    ...placeholder('A newly certified group after a First Response session'),
    album: 'First Response',
    projectSlug: 'first-response',
    date: '2024-10-12',
  },
  {
    id: 'g-006',
    ...placeholder('Donors at a Campus Donors blood camp'),
    album: 'Campus Donors',
    projectSlug: 'campus-donors',
    date: '2024-03-14',
  },
  {
    id: 'g-007',
    ...placeholder('A hand-hygiene demonstration at a primary school'),
    album: 'Hand Hygiene',
    projectSlug: 'hand-hygiene',
    date: '2023-05-08',
  },
  {
    id: 'g-008',
    ...placeholder('The founding members at the club’s charter'),
    album: 'Charter',
    projectSlug: 'charter',
    date: '2019-01-26',
  },
  {
    id: 'g-009',
    ...placeholder('The board at the 2025/26 installation'),
    album: 'Club Life',
    date: '2025-07-12',
  },
  {
    id: 'g-010',
    ...placeholder('Members at the Leo District 306 D2 Convention'),
    album: 'Club Life',
    date: '2025-03-14',
  },
];
