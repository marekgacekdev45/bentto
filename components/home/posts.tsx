import React from 'react'

import Background from '@/public/images/1600/bentto-15.webp'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'
import { Post } from '@/sanity/lib/interface'
import { GET_LAST_THREE_POSTS } from '@/sanity/lib/queries'
import PostCard from '../post-card'

const revalidate = 60

const Posts = async () => {
	const posts: Post[] = await GET_LAST_THREE_POSTS()
	return (
		<section className='pt-5 sm:pt-10 pb-10 xl:mt-32 2xl:mt-12 relative'>
			<Image src={Background} alt='background' fill className='absolute inset-0 -z-20 object-cover ' />
			<div className='absolute inset-0 -z-10 bg-black opacity-80 '></div>

			<div className='wrapper !max-w-screen-xl text-white py-12'>
				<div className='max-w-screen-md mx-auto text-center space-y-1'>
					<span className='preheading'>Bądź na Bieżąco</span>
					<h2 className='heading !text-white'>Aktualności i Promocje</h2>
					<p className='text pt-4'>
						Zapraszamy do sekcji aktualności, gdzie znajdziesz najnowsze informacje o sprzęcie gastronomicznym,
						ciekawych promocjach oraz innych interesujących treściach. Śledź nasze nowości, aby nie przegapić
						wyjątkowych okazji i atrakcyjnych ofert przygotowanych specjalnie dla Ciebie.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-6 2xl:gap-12 pt-6 md:pt-12'>

					{posts.map((post: Post) => (
						<PostCard key={`${post.slug}-${post._id}`} post={post} />
					))}
					
					



				
				
					
				
				</div>
			</div>
		</section>
	)
}

export default Posts
