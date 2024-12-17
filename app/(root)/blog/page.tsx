import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
	const { data: posts } = await sanityFetch({ query: GET_ALL_POSTS_QUERY })

	console.log(posts)

	return (
		<div>
			{posts.map(post => (
				<Link href={`/aktualnosci/${post.slug.current}`} key={post._id}>
					<h2>{post.title}</h2>
					<p>{post.slug.current}</p>
					<Image src={urlFor(post.thumbnail).url()} alt={post.title} width={500} height={500} />
				</Link>
			))}
		</div>
	)
}

export default Page
