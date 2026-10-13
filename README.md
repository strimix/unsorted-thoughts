# Unsorted Thoughts

Personal essays at [thoughts.unsorted.club](https://thoughts.unsorted.club).

Astro + Markdown, deployed on Cloudflare Pages.

## Local

```bash
npm install
npm run dev
```

## New thought

1. Add `src/content/thoughts/your-slug.md` with frontmatter (`title`, `dek`, `date`, `tags`, `minutes`, `number`, optional `titleEmphasis`, `cover`).
2. `npm run build` to verify.
3. Push to `main` — Cloudflare Pages rebuilds.

## Deploy (Cloudflare Pages)

1. Create a GitHub repo and push this project.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Custom domain: `thoughts.unsorted.club` (Pages will add the DNS record in the `unsorted.club` zone).
