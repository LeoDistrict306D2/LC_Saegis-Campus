import { JetBrains_Mono, Sora } from 'next/font/google';

/**
 * Sora for headings and body, JetBrains Mono for labels, identifiers and
 * figures.
 *
 * The monospace is not decorative: on this site it marks machine-readable
 * content — project references, ISO timestamps, field names and measured
 * values. Anything a person wrote in prose is set in Sora. Keeping that
 * distinction strict is what makes the mono mean something.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const fontVariables = `${sora.variable} ${jetbrains.variable}`;
