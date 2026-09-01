import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Past Presidents',
  description: `Every president of ${club.name} since charter in 2019.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} terms · since 2019`}
        title="Succession."
        standfirst="Each president sets a theme. Read in order they track how a student health club acquired its constraints."
      />

      <div className="wrap band">
        <ol className="border-t border-rule">
          {years.map((president, index) => (
            <li key={president.year} className="border-b border-rule">
              <Reveal delay={Math.min(index, 6) * 40}>
                <div className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
                  <p className="mono md:col-span-2 md:pt-1">{president.year}</p>
                  <div className="md:col-span-4">
                    <p className="font-heading text-lg font-semibold text-ink">{president.name}</p>
                    {president.theme ? (
                      <p className="mt-1 text-sm text-accent">{president.theme}</p>
                    ) : null}
                  </div>
                  <div className="md:col-span-6">
                    {president.highlights && president.highlights.length > 0 ? (
                      <ul className="space-y-1">
                        {president.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mono">—</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
