import Link from 'next/link';

/**
 * Page heading. The monospace kicker reads as a system label rather than an
 * eyebrow, and the faint cyan bleed behind the block is the only glow on the
 * site.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="border-b border-rule">
      <div className="wrap bleed grid gap-6 pt-12 pb-10 md:grid-cols-12 md:gap-10 md:pt-18 md:pb-14">
        <div className="md:col-span-7">
          {breadcrumb ? (
            <nav aria-label="Breadcrumb" className="mb-5">
              <Link href={breadcrumb.href} className="mono normal-case text-accent hover:text-accent-strong">
                ← {breadcrumb.label}
              </Link>
            </nav>
          ) : null}

          <p className="mono text-accent">{kicker}</p>

          <h1 className="mt-4 font-heading text-4xl leading-[1.04] font-semibold text-ink md:text-lab">
            {title}
          </h1>
        </div>

        {standfirst ? (
          <p className="self-end text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9">
            {standfirst}
          </p>
        ) : null}
      </div>
    </div>
  );
}
