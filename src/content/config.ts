import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    modDate: z.date().optional().nullable(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
  }),
});

export const collections = { blog };
