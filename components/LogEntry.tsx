import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

/**
 * A project as a log entry — this site's signature.
 *
 * Each entry leads with its reference and an ISO timestamp in monospace, the
 * way an instrument log does, then the human-readable record beneath. It is the
 * reason there are no project cards here: a card presents a project as a
 * product, and this club presents its work as a record of supervised activity.
 *
 * The reference comes from `project.id` verbatim (`SC-014`), so it is the
 * club's real filing reference rather than a display artefact.
 */
export function LogEntry({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={Math.min(index, 4) * 50}>
      <article className="border-t border-rule py-8">
        {/* Log header line */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="dot" aria-hidden />
          <span className="mono text-accent">{project.id}</span>
          <span className="mono">
            <time dateTime={project.date}>{project.date}</time>
          </span>
          <span className="mono">{project.category.replace(/-/g, '_')}</span>
          {project.location ? <span className="mono">{project.location}</span> : null}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h3 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
              <Link href={`/projects/${project.slug}`} className="hover:text-accent">
                {project.title}
              </Link>
            </h3>

            <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">{project.summary}</p>

            {project.impact && project.impact.length > 0 ? (
              <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
                {project.impact.slice(0, 3).map((stat) => (
                  <div key={stat.id}>
                    <dd className="font-mono text-2xl text-ink tabular-nums">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                    <dt className="mono mt-1">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            ) : null}

            <Link
              href={`/projects/${project.slug}`}
              className="group mono mt-7 inline-flex items-center gap-1.5 text-accent hover:text-accent-strong"
            >
              Open record
              <ArrowUpRight
                aria-hidden
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="md:col-span-5">
            <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden>
              <Photo
                image={project.heroImage}
                ratio="landscape"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
