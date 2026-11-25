import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const verdictEnum = z.enum(['pass', 'warn', 'fail']);

// Verification records: a film's picture/sound/subtitles after a real DCP run.
const tests = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tests' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.coerce.date(),
    cinema: z.string(),
    cinemaEn: z.string().optional(),
    picture: verdictEnum,
    sound: verdictEnum,
    subtitle: verdictEnum,
    projector: z.string().optional(),
    server: z.string().optional(),
    productionPc: z.string().optional(),
    issues: z.array(z.string()).default([]),
    verdict: z.string(),
    cover: z.string().optional(),
  }),
});

// Guides and info pages (DCP, subtitles, Dalian cinemas).
const guideSchema = z.object({
  title: z.string(),
  titleEn: z.string().optional(),
  date: z.coerce.date(),
  order: z.number().default(0),
});

// Community and personal shares (board games, food reviews, etc.).
const sharesSchema = z.object({
  title: z.string(),
  titleEn: z.string().optional(),
  date: z.coerce.date(),
  category: z.enum(['food', 'boardgame', 'community', 'other']),
  rating: z.number().min(1).max(5).optional(),
  dianpingSearch: z.string().optional(),
  location: z.string().optional(),
});

export const collections = {
  tests,
  dcp: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/dcp' }),
    schema: guideSchema,
  }),
  subtitles: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/subtitles' }),
    schema: guideSchema,
  }),
  'dalian-cinemas': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/dalian-cinemas' }),
    schema: guideSchema,
  }),
  'dalian-community': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/dalian-community' }),
    schema: sharesSchema,
  }),
  shares: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/shares' }),
    schema: sharesSchema,
  }),
};
