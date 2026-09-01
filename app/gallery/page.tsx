import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photographs from the work of ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="photographs"
        title="From the clinics."
        standfirst="Pictures from supervised sessions, filed against the log entry they belong to. No patient is identifiable in any image published here."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="measure">
            <p className="text-ink-muted">
              The gallery is empty while photographs are being reviewed for identifiability.
              Images already cleared appear on the log entry they belong to.
            </p>
            <Link
              href="/projects"
              className="mono mt-6 inline-block text-accent hover:text-accent-strong"
            >
              Go to the log →
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <Photo
                key={item.id}
                image={item}
                ratio="landscape"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
