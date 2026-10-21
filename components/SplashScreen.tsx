import Image from 'next/image';
import { club } from '@/content/club';

/**
 * Entry splash, built from the `.spec` / `.mono` instrumentation vocabulary
 * already in `globals.css` — a boot readout, not a dashboard. No blur, no
 * gradient mesh, no floating card — consistent with the rest of this site's
 * restraint. Pure CSS fade — no client JS — so it degrades correctly with
 * JavaScript off.
 */
export function SplashScreen() {
  return (
    <div aria-hidden="true" className="splash-screen fixed inset-0 z-80 flex items-center justify-center bg-page">
      <div className="spec flex flex-col items-center px-10 py-8 text-center">
        <div className="flex items-center gap-2">
          <span className="dot splash-blink" />
          <span className="mono">System Ready</span>
        </div>
        <Image
          src={club.logo.src}
          alt=""
          width={56}
          height={56}
          priority
          className="mt-5"
        />
        <h1 className="mt-5 text-2xl text-ink">Leo Club of {club.shortName}</h1>
        <p className="mono mt-3">{club.tagline}</p>
      </div>
    </div>
  );
}
