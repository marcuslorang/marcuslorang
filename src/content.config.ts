import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const indlaeg = defineCollection({
	// Load Markdown and MDX files in the `src/content/indlaeg/` directory.
	loader: glob({ base: './src/content/indlaeg', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		published: z.boolean(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
})

export const collections = { indlaeg }
