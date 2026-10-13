import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    title: z.string(),
    titleEmphasis: z.string().optional(),
    dek: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    minutes: z.number().int().positive(),
    number: z.number().int().positive(),
    cover: z.enum(['constructivist', 'none']).default('none'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { thoughts };
