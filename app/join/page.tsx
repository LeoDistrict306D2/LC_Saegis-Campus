import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to every student at Saegis Campus.`,
  alternates: { canonical: '/join' },
};

const notes = [
  {
    title: 'Supervised rotation, first term',
    body: 'You will be on a clinic rotation within your first term, always with a qualified supervisor present. Nobody works unsupervised, at any level of study.',
  },
  {
    title: 'You will make the follow-up calls',
    body: 'Contacting referrals at eight weeks is unglamorous, and it is the part of the work that makes the rest of it mean anything. Everyone does it.',
  },
  {
    title: 'Scope is not negotiable',
    body: 'No diagnosis, no treatment advice, no exceptions — however much someone at a clinic wants an answer on the day. Learning to hold that line is part of the training.',
  },
  {
    title: 'It counts for something',
    body: 'Supervised community practice before graduation, on your record, in the field your degree is for.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="membership"
        title="Put your training somewhere useful."
        standfirst="Open to every student at Saegis Campus, in any year and any programme. No experience needed."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="what">
          <p className="mono text-accent" id="what">
            What you are signing up for
          </p>
          <ol className="mt-6 grid gap-4">
            {notes.map((note, index) => (
              <li key={note.title} className="spec">
                <p className="mono text-accent">{String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-3 font-heading text-lg font-semibold text-ink">{note.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{note.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <p className="mono text-accent" id="enquiry">
            Enquiry
          </p>
          <p className="measure mt-4 mb-8 text-ink-muted">
            This opens a pre-written email to the club secretary. Nothing you type is sent anywhere
            else — there is no form service and no database behind this page.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mono mt-6 normal-case">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="text-accent underline underline-offset-2 hover:text-accent-strong"
              >
                {club.contact.email}
              </a>
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
