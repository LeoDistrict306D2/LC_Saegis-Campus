import type { Metadata } from 'next';
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="contact"
        title="Get in touch."
        standfirst="Partnerships, supervision offers, or a request for a screening session in your community."
      />

      <div className="wrap band grid gap-6 md:grid-cols-12">
        <section className="md:col-span-7" aria-labelledby="details">
          <div className="spec">
            <p className="mono text-accent" id="details">
              Details
            </p>
            <dl className="mt-5 space-y-5">
              {club.contact.email ? (
                <div className="flex items-start gap-4">
                  <Mail aria-hidden size={17} className="mt-1 shrink-0 text-accent" />
                  <div>
                    <dt className="mono">email</dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${club.contact.email}`}
                        className="font-mono text-lg break-all text-ink underline underline-offset-4 hover:text-accent"
                      >
                        {club.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>
              ) : null}

              {club.contact.address ? (
                <div className="flex items-start gap-4">
                  <MapPin aria-hidden size={17} className="mt-1 shrink-0 text-accent" />
                  <div>
                    <dt className="mono">location</dt>
                    <dd className="mt-1.5 font-mono text-lg text-ink">{club.contact.address}</dd>
                  </div>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="spec mt-4">
            <p className="mono text-accent">If you are offering supervision</p>
            <p className="measure mt-3 text-sm leading-relaxed text-ink-muted">
              Qualified practitioners willing to supervise a clinic session are the single thing
              that most limits how much this club can do. If that is you, say so in the first line
              and the secretary will reply the same week.
            </p>
          </div>
        </section>

        <section className="md:col-span-5" aria-labelledby="social">
          <div className="spec">
            <p className="mono text-accent" id="social">
              Elsewhere
            </p>
            <ul className="mt-5">
              {club.socials.instagram ? (
                <li className="border-b border-rule">
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 py-3.5 text-ink-muted transition-colors hover:text-accent"
                  >
                    <Instagram aria-hidden size={17} />
                    Instagram
                  </a>
                </li>
              ) : null}
              {club.socials.facebook ? (
                <li className="border-b border-rule">
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 py-3.5 text-ink-muted transition-colors hover:text-accent"
                  >
                    <Facebook aria-hidden size={17} />
                    Facebook
                  </a>
                </li>
              ) : null}
              {club.socials.linkedin ? (
                <li>
                  <a
                    href={club.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 py-3.5 text-ink-muted transition-colors hover:text-accent"
                  >
                    <Linkedin aria-hidden size={17} />
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>

            <p className="mt-6 border-t border-rule pt-4 text-sm leading-relaxed text-ink-faint">
              Looking to join rather than get in touch? The membership page has a form that reaches
              the secretary directly.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
