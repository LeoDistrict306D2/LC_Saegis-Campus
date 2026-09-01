import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Readout } from '@/components/Readout';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="A student club, not a clinic."
        standfirst={club.about.mission}
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <Photo image={club.heroImage} ratio="landscape" sizes="(min-width: 768px) 33vw, 100vw" />
          <dl className="spec mt-8">
            {[
              { term: 'chartered', value: '2019-01-26' },
              { term: 'district', value: club.district },
              { term: 'campus', value: 'Saegis Campus, Nugegoda' },
              { term: 'sponsor', value: club.sponsoringLionsClub ?? '—' },
            ].map((row) => (
              <div
                key={row.term}
                className="flex justify-between gap-4 border-b border-rule py-2.5 last:border-b-0"
              >
                <dt className="mono">{row.term}</dt>
                <dd className="text-right font-mono text-sm text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="border-y border-rule bg-panel band">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <p className="mono text-accent">Mission</p>
            <p className="mt-4 font-heading text-2xl leading-snug font-semibold text-ink">
              {club.about.mission}
            </p>
          </div>
          <div>
            <p className="mono text-accent">Vision</p>
            <p className="mt-4 font-heading text-2xl leading-snug font-semibold text-ink">
              {club.about.vision}
            </p>
          </div>
        </div>
      </section>

      <div className="wrap band">
        <p className="mono mb-6">Record to date</p>
        <Readout stats={club.stats} label="Club record to date" />
      </div>
    </>
  );
}
