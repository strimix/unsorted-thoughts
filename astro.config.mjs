// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thoughts.unsorted.club',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Hide compare tools and Russian routes while ruEnabled is false.
      filter: (page) =>
        !page.includes('/compare/') && !page.includes('/ru'),
    }),
  ],
});
