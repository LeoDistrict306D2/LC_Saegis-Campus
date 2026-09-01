'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Membership enquiry form.
 *
 * No backend, so rather than render a form that silently discards what people
 * type, this composes a pre-filled email and hands it to the visitor's mail
 * client. It works, needs no server or third-party form service, and no
 * personal data passes through anyone else's hands — which matters more than
 * usual for a club whose members handle health information.
 */
export function JoinForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');

    const body = [
      `Name: ${name}`,
      `Programme: ${String(data.get('programme') ?? '')}`,
      `Year of study: ${String(data.get('year') ?? '')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Membership enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const field =
    'mt-2 w-full border border-rule-strong bg-panel px-3 py-2.5 font-mono text-sm text-ink focus:border-accent focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className="measure">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="join-name" className="mono block">
            Full name
          </label>
          <input id="join-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="join-programme" className="mono block">
            Programme
          </label>
          <select id="join-programme" name="programme" required defaultValue="" className={field}>
            <option value="" disabled>
              Select
            </option>
            <option value="Nursing">Nursing</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Biomedical Science">Biomedical Science</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="join-year" className="mono block">
            Year of study
          </label>
          <input id="join-year" name="year" type="number" min={1} max={6} required className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="join-message" className="mono block">
            Anything else
          </label>
          <textarea id="join-message" name="message" rows={5} className={field} />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-sm text-page transition-colors hover:bg-accent-strong"
      >
        Send enquiry
        <ArrowRight aria-hidden size={15} className="transition-transform group-hover:translate-x-1" />
      </button>

      <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm text-ink-muted">
        {sent
          ? 'Your email app should have opened with the message ready. If it did not, write to us directly at the address below.'
          : ''}
      </p>
    </form>
  );
}
