/**
 * Domain types for a Leo club website.
 *
 * These describe DATA ONLY, never presentation — every field is something a
 * club officer could fill in without seeing the site. Identical across all
 * eleven club repos; each club's design lives in `components/` and
 * `app/globals.css`, not here.
 */

export interface ImageRef {
  /** Path under /public, or an absolute URL. */
  src: string;
  /** Required. Describe the content, not that it is an image. */
  alt: string;
  /** Intrinsic size. Supplying these is what prevents layout shift. */
  width: number;
  height: number;
  caption?: string;
  credit?: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  email?: string;
}

export interface Statistic {
  id: string;
  /** Number when it should count up; string for values like "24/7". */
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  note?: string;
}

/** Ranked so a board sorts correctly without hand-numbering every member. */
export type ExecutiveRank =
  | 'president'
  | 'immediate-past-president'
  | 'vice-president'
  | 'secretary'
  | 'assistant-secretary'
  | 'treasurer'
  | 'assistant-treasurer'
  | 'editor'
  | 'chairperson'
  | 'director'
  | 'member';

export interface Executive {
  id: string;
  name: string;
  /** Exact title as printed, e.g. "First Vice President". */
  position: string;
  rank: ExecutiveRank;
  /** Term served, e.g. "2025/26". */
  term: string;
  photo?: ImageRef;
  bio?: string;
  socials?: SocialLinks;
  /** Manual override when rank ordering is not enough. Lower sorts first. */
  order?: number;
}

export type ProjectCategory =
  | 'community-service'
  | 'education'
  | 'health'
  | 'environment'
  | 'youth-development'
  | 'fundraising'
  | 'leadership'
  | 'international';

export interface Project {
  id: string;
  /** URL segment. Unique and stable — it is a permalink. */
  slug: string;
  title: string;
  /** One sentence, for listings. */
  summary: string;
  /** Full story, one entry per paragraph. */
  story?: string[];
  category: ProjectCategory;
  /** Leo year, e.g. "2025/26". */
  year: string;
  /** ISO date (YYYY-MM-DD), used for sorting and display. */
  date: string;
  location?: string;
  heroImage: ImageRef;
  gallery?: ImageRef[];
  objectives?: string[];
  impact?: Statistic[];
  partners?: { name: string; url?: string }[];
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  /** Where it was won, e.g. "District 306 D2 Convention". */
  competition?: string;
  year: string;
  level?: 'winner' | 'runner-up' | 'merit' | 'recognition';
  description?: string;
}

export interface PastPresident {
  /** Leo year served, e.g. "2019/20". Sort key. */
  year: string;
  name: string;
  photo?: ImageRef;
  /** Presidential theme for the year, if the club used one. */
  theme?: string;
  highlights?: string[];
}

export interface GalleryItem extends ImageRef {
  id: string;
  album?: string;
  projectSlug?: string;
  date?: string;
}

export interface Club {
  name: string;
  shortName: string;
  tagline: string;
  motto?: string;
  description: string;
  /** ISO date the club was chartered. */
  charterDate?: string;
  district: string;
  multipleDistrict: string;
  sponsoringLionsClub?: string;
  districtUrl?: string;
  multipleDistrictUrl?: string;
  logo: ImageRef;
  heroImage: ImageRef;
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  socials: SocialLinks;
  /** Production origin, for canonical URLs and OG tags. */
  siteUrl: string;
  stats: Statistic[];
  about: {
    story: string[];
    mission: string;
    vision: string;
    values: { title: string; description: string }[];
  };
}
