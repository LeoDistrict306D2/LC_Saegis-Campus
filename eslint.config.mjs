import next from 'eslint-config-next';

/**
 * eslint-config-next 16 ships a native flat config array as its default export.
 * The old `FlatCompat`/`compat.extends('next/core-web-vitals')` pattern — still
 * what create-next-app emits — throws a circular-JSON error against this
 * version, so it is deliberately not used here.
 */
const config = [
  ...next,
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default config;
