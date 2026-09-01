import type { Project } from '@/lib/types';

/**
 * Project log.
 *
 * The `id` is rendered as the log reference on every entry (`SC-014`), so use
 * the club's real project reference rather than a slug-like string.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 900,
});

export const projects: Project[] = [
  {
    id: 'SC-014',
    slug: 'baseline',
    title: 'Baseline',
    summary:
      'Supervised blood pressure and glucose screening in four Nugegoda communities, with eight-week follow-up on every referral.',
    category: 'health',
    year: '2025/26',
    date: '2025-08-09',
    location: 'Nugegoda',
    featured: true,
    heroImage: placeholder('Students running a supervised screening clinic'),
    story: [
      'Four sites, monthly rotation, two qualified supervisors per session, and a referral pathway agreed with the MOH office before the first clinic ran.',
      'The follow-up is the part that took the work. Contacting 412 people at eight weeks to ask whether they attended the referral — and recording the answer honestly when they had not — is unglamorous and is the only thing that turns a screening number into a useful one.',
      'Attendance at referral came out at 61%. That is lower than we expected and is now the problem the project is actually working on.',
    ],
    objectives: [
      'Screen at four sites on a monthly rotation, always supervised',
      'Agree the referral pathway before screening begins',
      'Contact every referral at eight weeks and record the outcome',
    ],
    impact: [
      { id: 'screened', value: 3900, suffix: '+', label: 'People screened' },
      { id: 'referred', value: 412, label: 'Referred onward' },
      { id: 'attended', value: 61, suffix: '%', label: 'Attended referral' },
    ],
    partners: [{ name: 'MOH Office, Nugegoda' }],
  },
  {
    id: 'SC-011',
    slug: 'medicine-cabinet',
    title: 'Medicine Cabinet',
    summary:
      'Medication-safety sessions for older residents: what is expired, what interacts, and what nobody explained at the pharmacy.',
    category: 'health',
    year: '2024/25',
    date: '2025-02-22',
    location: 'Nugegoda and Maharagama',
    featured: true,
    heroImage: placeholder('A medication safety session with older residents'),
    story: [
      'Run by pharmacy students under a registered pharmacist. Residents bring in everything in the house and it is gone through, item by item.',
      'The recurring finding is not dramatic and is worth stating plainly: a large share of what people are holding is expired, duplicated across two prescribers, or was never explained clearly enough to be taken correctly.',
      'We do not change anyone’s medication. We identify, explain, and refer back to the prescribing doctor — which is the entire scope a student club should have here.',
    ],
    objectives: [
      'Review household medication with a registered pharmacist present',
      'Explain rather than adjust; refer anything clinical back to the prescriber',
      'Provide a written summary the resident can take to their doctor',
    ],
    impact: [
      { id: 'households', value: 260, label: 'Households visited' },
      { id: 'flagged', value: 780, label: 'Items flagged' },
      { id: 'referred', value: 94, label: 'Referred to prescriber' },
    ],
  },
  {
    id: 'SC-009',
    slug: 'first-response',
    title: 'First Response',
    summary:
      'Certified first-aid and CPR training for campus staff, students and the surrounding businesses.',
    category: 'education',
    year: '2024/25',
    date: '2024-10-12',
    location: 'Saegis Campus, Nugegoda',
    featured: true,
    heroImage: placeholder('A CPR training session on campus'),
    story: [
      'Delivered with certified instructors, not by students teaching students. The club organises, recruits and runs the logistics; the teaching is done by people qualified to do it.',
      'Two hundred and ten people certified so far, including staff from eleven businesses on the surrounding roads. Four AEDs have since been installed nearby, which was not our project but was our argument.',
    ],
    impact: [
      { id: 'certified', value: 210, label: 'People certified' },
      { id: 'businesses', value: 11, label: 'Local businesses' },
      { id: 'aeds', value: 4, label: 'AEDs installed nearby' },
    ],
  },
  {
    id: 'SC-006',
    slug: 'campus-donors',
    title: 'Campus Donors',
    summary: 'A twice-yearly blood donation camp on campus with the NBTS.',
    category: 'health',
    year: '2023/24',
    date: '2024-03-14',
    location: 'Saegis Campus, Nugegoda',
    heroImage: placeholder('A blood donation camp on campus'),
    impact: [
      { id: 'units', value: 288, label: 'Units collected' },
      { id: 'camps', value: 8, label: 'Camps held' },
    ],
    partners: [{ name: 'National Blood Transfusion Service' }],
  },
  {
    id: 'SC-003',
    slug: 'hand-hygiene',
    title: 'Hand Hygiene',
    summary: 'A hand-hygiene teaching programme in six primary schools.',
    category: 'education',
    year: '2022/23',
    date: '2023-05-08',
    location: 'Colombo district',
    heroImage: placeholder('A hand hygiene session at a primary school'),
    impact: [
      { id: 'students', value: 1400, label: 'Students taught' },
      { id: 'schools', value: 6, label: 'Schools' },
    ],
  },
  {
    id: 'SC-001',
    slug: 'charter',
    title: 'Charter',
    summary: 'The club chartered on 26 January 2019 with eighteen founding members.',
    category: 'leadership',
    year: '2018/19',
    date: '2019-01-26',
    location: 'Saegis Campus, Nugegoda',
    heroImage: placeholder('The charter of the Leo Club of Saegis Campus'),
    impact: [{ id: 'founding', value: 18, label: 'Founding members' }],
  },
];
