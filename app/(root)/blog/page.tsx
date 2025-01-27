import Button from '@/components/button'
import Hero from '@/components/hero'
import PostCard from '@/components/post-card'

import Background from '@/public/images/1600/bentto-32.webp'
import { Post } from '@/sanity/lib/interface'
import { GET_ALL_POSTS } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

const page = async () => {
	const posts: Post[] = await GET_ALL_POSTS()

	return (
		<>
			<Hero bgi={Background} heading='Aktualności' />

			<section  className='pt-5 sm:pt-10 pb-20 xl:mt-32 2xl:mt-12'>
				<div className='wrapper !max-w-screen-2xl'>
					<div className='max-w-screen-md mx-auto text-center space-y-1'>
						<span className='preheading'>Bądź na bieżąco</span>
						<h2 className='heading'>Aktualności i Promocje</h2>
						<p className='text pt-4'>
							Bądź na bieżąco z najnowszymi informacjami, promocjami i aktualnościami ze świata gastronomii. W tej
							sekcji znajdziesz ogłoszenia o nowych produktach, specjalnych ofertach i inspirujących treściach, które
							pomogą Ci w rozwoju Twojego biznesu. Sprawdzaj regularnie, by nie przegapić żadnej okazji!
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-6 2xl:gap-12 pt-6 md:pt-12'>
						{posts.map((post: Post) => (
							<PostCard post={post} />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default page
