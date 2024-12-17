import { defineQuery } from 'next-sanity'

export const GET_ALL_POSTS_QUERY = defineQuery(
	`*[_type == "post"] | order(_publishedAt desc) {
   ...
  }`
)

export const GET_POST_BY_SLUG_QUERY = defineQuery(
	`*[_type == "post" && slug.current == $slug ][0] {
   ...,
     "pdfURL": pdf.asset->url
  }`
)
