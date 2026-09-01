import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[16/9]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here, so all of them carry intrinsic
 * dimensions and a fixed aspect box — nothing can shift the layout as it loads.
 *
 * Images are slightly darkened by default. On a near-black page a full-
 * brightness photograph is a hole punched in the interface; pulling it down a
 * little keeps it part of the same surface.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  full = false,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  /** Skips the darkening. Use where the photograph is the subject. */
  full?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div
        className={cn(
          'relative overflow-hidden border border-rule bg-panel',
          ratios[ratio],
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className={cn('object-cover', !full && 'brightness-90 contrast-105')}
        />
      </div>
      {image.caption ? (
        <figcaption className="mono mt-2.5 normal-case">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
