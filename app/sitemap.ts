import { Post, Realisation } from '@/sanity/lib/interface'
import { GET_ALL_REALISATIONS, GET_ALL_POSTS } from '@/sanity/lib/queries'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bentto.eu'

	const realisations: Realisation[] = await GET_ALL_REALISATIONS()

	const realisationsUrls = realisations.map((realisation: Realisation) => ({
		url: `${siteUrl}/realizacje/${realisation.slug}`,
		lastModified: new Date(),
		priority: 0.7,
	}))

	const posts: Post[] = await GET_ALL_POSTS()

	const postsUrls = posts.map((post: Post) => ({
		url: `${siteUrl}/aktualnosci/${post.slug}`,
		lastModified: new Date(),
		priority: 0.8,
	}))

	return [
		{
			url: `${siteUrl}`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${siteUrl}/aktualnosci`,
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: `${siteUrl}/realizacje`,
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: `${siteUrl}/kontakt`,
			lastModified: new Date(),
			priority: 0.9,
		},

		...postsUrls,
		...realisationsUrls,

		{
			url: `${siteUrl}/polityka-prywatnosci`,
			lastModified: new Date(),
			priority: 0.6,
		},
	]
}
