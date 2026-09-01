'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * The club's figures as instrument readouts: monospace values in hairline
 * panels with a cyan top edge. Notes sit under the label because on this site
 * the caveat is part of the reading — "412 referred" means nothing without
 * "every referral followed up at eight weeks".
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Cell({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div className="spec h-full">
      <dt className="mono">{stat.label}</dt>
      <dd className="mt-3 font-mono text-3xl text-ink tabular-nums md:text-4xl">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      {stat.note ? (
        <p className="mt-3 border-t border-rule pt-3 text-xs leading-relaxed text-ink-faint">
          {stat.note}
        </p>
      ) : null}
    </div>
  );
}

export function Readout({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label}>
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Cell key={stat.id} stat={stat} />
        ))}
      </dl>
    </section>
  );
}
