import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'winner',
  'runner-up': 'runner_up',
  merit: 'merit',
  recognition: 'recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} awards` : 'awards'}
        title="Recognition."
        standfirst="Recorded for completeness. The follow-up protocol is what the 2025 citation actually mentions, which is the right thing to have been noticed for."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="measure text-ink-muted">No awards recorded yet.</p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-3">
            {awards.map((award, index) => (
              <li key={award.id}>
                <Reveal delay={index * 60} className="h-full">
                  <div className="spec h-full">
                    <p className="mono text-accent">
                      {award.year} · {award.level ? levelLabel[award.level] ?? award.level : '—'}
                    </p>
                    <h2 className="mt-4 font-heading text-lg leading-snug font-semibold text-ink">
                      {award.title}
                    </h2>
                    {award.competition ? (
                      <p className="mono mt-2 normal-case">{award.competition}</p>
                    ) : null}
                    {award.description ? (
                      <p className="mt-3 border-t border-rule pt-3 text-sm leading-relaxed text-ink-muted">
                        {award.description}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
