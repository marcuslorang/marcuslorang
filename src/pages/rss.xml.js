import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const posts = await getCollection(
		'indlaeg',
		({ data }) => data.published === true
	)

	return rss({
		title: 'Marcus Lorang',
		description: 'Studerende på Horsens handelsskole.',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/indlaeg/${post.id}/`,
		})),
	})
}
