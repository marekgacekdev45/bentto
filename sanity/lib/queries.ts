import { sanityFetch } from './client'

export const GET_ALL_POSTS = async () => {
	const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
   "slug": slug.current,
   thumbnail,
   excerpt,
 }`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}

export const GET_LAST_THREE_POSTS = async () => {
	const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
		title,
	   "slug": slug.current,
	   thumbnail,
	   excerpt,
	 }`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})

	return data
}

export const GET_POST_BY_SLUG = async (slug: string) => {
	const query = `
	    *[_type == "post" && slug.current == "${slug}"][0]{
    title,
    "slug": slug.current,
    thumbnail,
	excerpt,
	content,
	publishedAt,
    "pdf": pdf.asset->url,
  }`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}

export const GET_ALL_REALISATIONS = async () => {
	const query = `*[_type == "realisation"] | order(_createdAt desc) {
    name,
   "slug": slug.current,
   thumbnail,
 }`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}

export const GET_REALISATION_BY_SLUG = async (slug: string) => {
	const query = `
	    *[_type == "realisation" && slug.current == "${slug}"][0]{
    name,
    "slug": slug.current,
    address,
	description,
	thumbnail,
	images,
  }`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}
