// @ts-check
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://marcuslorang.com/',
	integrations: [react(), sitemap(), mdx()],
})
