import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { Readout } from '@/components/Readout';
import { LogEntry } from '@/components/LogEntry';

/**
 * Home.
 *
 * Opens on a hairline grid with a monospace status line, then readouts, then
 * the log itself. The scope-of-practice constraints appear before the project
 * list rather than buried in the footer — for a student health club that
 * ordering is an ethical choice, not a layout one.
 */
export default function HomePage() {
  const featured = byDateDesc(projects.filter((project) => project.featured)).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 6);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Opening -------------------------------------------------------- */}
      <section className="grid-faint border-b border-rule">
        <div className="wrap bleed band">
          <p className="mono text-accent">
            {club.district} · est_{charterYear ?? '—'}
          </p>

          <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.02] font-semibold text-ink md:text-lab">
            {club.tagline}
          </h1>

          <p className="measure mt-7 text-lg leading-relaxed text-ink-muted">
            {club.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group mono inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3.5 text-page transition-colors hover:bg-accent-strong"
            >
              Project log
              <ArrowRight
                aria-hidden
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="mono inline-flex items-center border border-rule-strong px-6 py-3.5 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Join the club
            </Link>
          </div>
        </div>
      </section>

      {/* Readouts ------------------------------------------------------- */}
      <div className="wrap band">
        <p className="mono mb-6">Record to date</p>
        <Readout stats={club.stats} label="Club record to date" />
      </div>

      <section className="wrap">
        <Photo image={club.heroImage} ratio="wide" priority sizes="100vw" full />
      </section>

      {/* Constraints ---------------------------------------------------- */}
      <section className="border-y border-rule bg-panel" aria-labelledby="constraints">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mono text-accent">Operating constraints</p>
            <h2
              id="constraints"
              className="mt-4 font-heading text-3xl font-semibold text-ink md:text-4xl"
            >
              What a student club may and may not do
            </h2>
            <p className="measure mt-4 text-ink-muted">
              These four rules are the reason the club is allowed to run clinical activity at all.
              They are constraints, not values.
            </p>
          </div>

          <ol className="grid gap-4 md:col-span-7 md:col-start-6 sm:grid-cols-2">
            {club.about.values.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 60} className="h-full">
                  <div className="spec h-full">
                    <p className="mono text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Log ------------------------------------------------------------ */}
      <section className="wrap band" aria-labelledby="log">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono text-accent">Selected entries</p>
            <h2 id="log" className="mt-4 font-heading text-3xl font-semibold text-ink md:text-4xl">
              Project log
            </h2>
          </div>
          <Link href="/projects" className="mono text-accent hover:text-accent-strong">
            All {projects.length} entries →
          </Link>
        </div>

        <div className="mt-10">
          {featured.map((project, index) => (
            <LogEntry key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="border-t border-rule" aria-labelledby="board-heading">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mono text-accent">Committee</p>
            <h2
              id="board-heading"
              className="mt-4 font-heading text-3xl font-semibold text-ink md:text-4xl"
            >
              Who runs it
            </h2>
            <p className="measure mt-4 text-ink-muted">
              The board for {leadership[0]?.term ?? 'this year'}. Note the Director of Follow-up —
              a post that exists because screening without follow-up is not worth doing.
            </p>
            <Link
              href="/board"
              className="mono mt-6 inline-block text-accent hover:text-accent-strong"
            >
              Full board →
            </Link>
          </div>

          <ul className="md:col-span-7 md:col-start-6">
            {leadership.map((member, index) => (
              <li
                key={member.id}
                className="flex flex-col gap-0.5 border-b border-rule py-4 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <Reveal delay={index * 35} className="contents">
                  <span className="font-heading text-lg font-semibold text-ink">{member.name}</span>
                  <span className="mono shrink-0">{member.position}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Put your training somewhere useful.
            </h2>
            <p className="measure mt-4 text-on-inverse/70">
              Open to every student at Saegis Campus. You will be on a supervised clinic rotation
              within your first term, and you will do the eight-week follow-up calls too.
            </p>
          </div>
          <Link
            href="/join"
            className="group mono inline-flex shrink-0 items-center gap-2 bg-on-inverse px-6 py-3.5 text-inverse transition-colors hover:bg-accent hover:text-page"
          >
            Join the club
            <ArrowRight
              aria-hidden
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
