import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer. Carries a scope-of-practice note, which on a student health club's
 * site is not boilerplate — a visitor arriving from a screening clinic needs to
 * know in plain terms what this club does and does not do.
 *
 * A server component: no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'The club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/past-presidents', label: 'Past Presidents' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'The work',
    links: [
      { href: '/projects', label: 'Project log' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Take part',
    links: [
      { href: '/join', label: 'Join the club' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-rule">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-heading text-xl font-semibold text-ink">{club.name}</p>
            <p className="mono mt-2.5">Chartered 26 January 2019</p>
            <p className="measure mt-5 text-sm leading-relaxed text-ink-muted">
              {club.description}
            </p>

            <ul className="mt-7 flex gap-3">
              {club.socials.instagram ? (
                <li>
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Instagram aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.socials.facebook ? (
                <li>
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Facebook aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.socials.linkedin ? (
                <li>
                  <a
                    href={club.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Linkedin aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.contact.email ? (
                <li>
                  <a
                    href={`mailto:${club.contact.email}`}
                    aria-label="Email"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Mail aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="mono text-accent">{column.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Scope of practice. Load-bearing on a student health club's site. */}
        <div className="spec mt-14">
          <h2 className="mono text-accent">Scope of practice</h2>
          <p className="measure mt-3 text-xs leading-relaxed text-ink-muted">
            The Leo Club of Saegis Campus is a student organisation, not a healthcare provider. All
            clinical activity is carried out under the supervision of a qualified practitioner and
            within an agreed referral pathway. We do not diagnose, prescribe, or advise on
            treatment. Screening results are not a diagnosis; anyone with a positive finding is
            referred to a qualified clinician and contacted again at eight weeks.
          </p>
        </div>

        <p className="mt-8 border-t border-rule pt-6 text-xs leading-relaxed text-ink-faint">
          {club.name} is a member club of{' '}
          <a
            href={club.districtUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.district}
          </a>
          , part of{' '}
          <a
            href={club.multipleDistrictUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.multipleDistrict}
          </a>
          , within Lions Clubs International.
          {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
        </p>

        <p className="mt-3 text-xs text-ink-faint">
          © {year} {club.name}. {club.contact.address}
        </p>
      </div>
    </footer>
  );
}
