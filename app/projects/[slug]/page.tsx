import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { formatDate } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: `${project.title} — ${club.name}`,
      description: project.summary,
      publishedTime: project.date,
      images: [
        {
          url: project.heroImage.src,
          width: project.heroImage.width,
          height: project.heroImage.height,
          alt: project.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((entry) => entry.slug !== project.slug)
    .sort((a, b) => {
      const aMatch = a.category === project.category ? 0 : 1;
      const bMatch = b.category === project.category ? 0 : 1;
      return aMatch - bMatch || b.date.localeCompare(a.date);
    })
    .slice(0, 3);

  return (
    <>
      <PageMasthead
        kicker={`${project.id} · ${project.date} · ${project.category.replace(/-/g, '_')}`}
        title={project.title}
        standfirst={project.summary}
        breadcrumb={{ href: '/projects', label: 'Project log' }}
      />

      <div className="wrap pt-10">
        <Photo image={project.heroImage} ratio="wide" priority sizes="100vw" full />
      </div>

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {project.story && project.story.length > 0 ? (
            project.story.map((paragraph, index) => (
              <p
                key={index}
                className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="measure text-lg leading-relaxed text-ink-muted">{project.summary}</p>
          )}

          {project.objectives && project.objectives.length > 0 ? (
            <section className="mt-12" aria-labelledby="objectives">
              <p className="mono text-accent" id="objectives">
                Protocol
              </p>
              <ol className="mt-5 border-t border-rule">
                {project.objectives.map((objective, index) => (
                  <li key={objective} className="flex gap-5 border-b border-rule py-3.5">
                    <span aria-hidden className="mono shrink-0 pt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink-muted">{objective}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="spec">
            <p className="mono text-accent">Record</p>
            <dl className="mt-4">
              {[
                { term: 'reference', value: project.id },
                { term: 'date', value: project.date },
                { term: 'leo_year', value: project.year },
                { term: 'location', value: project.location },
                { term: 'category', value: project.category.replace(/-/g, '_') },
              ]
                .filter((row) => Boolean(row.value))
                .map((row) => (
                  <div
                    key={row.term}
                    className="flex justify-between gap-4 border-b border-rule py-2.5 last:border-b-0"
                  >
                    <dt className="mono">{row.term}</dt>
                    <dd className="text-right font-mono text-sm text-ink">{row.value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          {project.impact && project.impact.length > 0 ? (
            <div className="spec mt-4">
              <p className="mono text-accent">Measured</p>
              <dl className="mt-4 space-y-4">
                {project.impact.map((stat) => (
                  <div key={stat.id}>
                    <dt className="mono">{stat.label}</dt>
                    <dd className="mt-1 font-mono text-2xl text-ink tabular-nums">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                    {stat.note ? (
                      <p className="mt-1 text-xs text-ink-faint">{stat.note}</p>
                    ) : null}
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          {project.partners && project.partners.length > 0 ? (
            <div className="spec mt-4">
              <p className="mono text-accent">Supervision and partners</p>
              <ul className="mt-3 space-y-1.5">
                {project.partners.map((partner) => (
                  <li key={partner.name} className="text-sm text-ink-muted">
                    {partner.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="wrap pb-16" aria-labelledby="project-gallery">
          <p className="mono text-accent" id="project-gallery">
            Photographs
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image) => (
              <Photo
                key={image.src}
                image={image}
                ratio="landscape"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-rule bg-panel band" aria-labelledby="related">
          <div className="wrap">
            <p className="mono text-accent" id="related">
              Related entries
            </p>
            <ul className="mt-6 border-t border-rule">
              {related.map((entry) => (
                <li key={entry.id} className="border-b border-rule">
                  <Link
                    href={`/projects/${entry.slug}`}
                    className="flex flex-col gap-1 py-5 transition-colors hover:text-accent sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-heading text-lg font-semibold">
                      <span className="mono mr-3 text-accent">{entry.id}</span>
                      {entry.title}
                    </span>
                    <span className="mono shrink-0">
                      {formatDate(entry.date, { year: 'numeric', month: 'short' })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
