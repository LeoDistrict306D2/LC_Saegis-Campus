import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="mono text-accent">Error 404 · not_found</p>
      <h1 className="mt-5 font-heading text-4xl font-semibold text-ink md:text-lab">
        No record at that path.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        The page you asked for does not exist. It may have been renamed or moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="mono border border-accent bg-accent px-6 py-3 text-page hover:bg-accent-strong"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="mono border border-rule-strong px-6 py-3 text-ink-muted hover:border-ink hover:text-ink"
        >
          Project log
        </Link>
      </div>
    </div>
  );
}
