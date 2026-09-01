'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="mono text-accent">Error · render_failed</p>
      <h1 className="mt-5 font-heading text-4xl font-semibold text-ink md:text-lab">
        Something went wrong.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mono mt-8 self-start border border-accent bg-accent px-6 py-3 text-page hover:bg-accent-strong"
      >
        Retry
      </button>
    </div>
  );
}
