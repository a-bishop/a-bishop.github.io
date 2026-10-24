import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Each file name is the post's URL slug, matching the old Gatsby site.
// Posts sit directly in src/content/posts/ (no subfolders), since URLs are flat.
const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    note: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
