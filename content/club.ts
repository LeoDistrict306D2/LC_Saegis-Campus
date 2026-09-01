import type { Club } from '@/lib/types';

/**
 * Leo Club of Saegis Campus — club record.
 *
 * A health-sciences campus club. The voice is precise and slightly clinical,
 * matching the design; copy should prefer specifics over enthusiasm.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Saegis Campus',
  shortName: 'Saegis Campus',
  tagline: 'Trained here. Useful outside.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club at Saegis Campus, Nugegoda. Most of our members are training in nursing, pharmacy or biomedical science, and the club exists to put that training somewhere it does some good before graduation.',
  charterDate: '2019-01-26',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Nugegoda',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Saegis Campus emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Leo Club of Saegis Campus students running a community screening clinic',
    width: 1800,
    height: 900,
  },

  contact: {
    email: 'leosaegiscampus@gmail.com',
    address: 'Saegis Campus, Nugegoda, Sri Lanka',
  },

  socials: {
    instagram: 'https://www.instagram.com/leosaegiscampus',
    facebook: 'https://www.facebook.com/leosaegiscampus',
    linkedin: 'https://www.linkedin.com/company/leo-club-of-saegis-campus',
    email: 'leosaegiscampus@gmail.com',
  },

  siteUrl: 'https://saegis.leo306d2.org',

  stats: [
    { id: 'years', value: 6, label: 'Years active' },
    { id: 'members', value: 68, label: 'Student members' },
    { id: 'screened', value: 3900, suffix: '+', label: 'People screened' },
    {
      id: 'referred',
      value: 412,
      label: 'Referred onward',
      note: 'Every referral is followed up at eight weeks.',
    },
  ],

  about: {
    story: [
      'Chartered in January 2019. Almost every member is a student of nursing, pharmacy or biomedical science, which shapes what the club can usefully do and — more importantly — what it should not.',
      'What we can do is screening, health education, and logistics: blood pressure and glucose checks under supervision, medication-safety sessions for older residents, first aid at campus and community events.',
      'What we do not do is diagnose, advise on treatment, or work unsupervised. Every clinical activity has a qualified supervisor present and a referral pathway agreed in advance. A student club running health services without those two things is a liability dressed as a good deed.',
      'The eight-week follow-up on every referral is the part we are most pleased with. Screening someone and never finding out what happened next is data collection, not care.',
    ],
    mission:
      'To apply student training in supervised community health work, and to follow up every referral rather than counting the screening and stopping.',
    vision:
      'A campus club whose graduates have already worked in the communities their degrees are for.',
    values: [
      {
        title: 'Supervised, or not at all',
        description:
          'Every clinical activity has a qualified supervisor present. Enthusiasm is not a qualification and a student club is not a clinic.',
      },
      {
        title: 'Referral pathway first',
        description:
          'We agree where a positive finding goes before we screen anybody. Screening without a pathway is worse than not screening.',
      },
      {
        title: 'Follow up at eight weeks',
        description:
          'Every referral is contacted at eight weeks. Otherwise we know how many people we tested and nothing about whether it helped.',
      },
      {
        title: 'Stay inside scope',
        description:
          'No diagnosis, no treatment advice, no exceptions — however much someone wants an answer on the day.',
      },
    ],
  },
};
