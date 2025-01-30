import { Post } from '@/sanity/lib/interface'
import { GET_ALL_POSTS } from '@/sanity/lib/queries'

import { Metadata } from 'next'

import Hero from '@/components/hero'
import PostCard from '@/components/post-card'

import Background from '@/public/bentto-aktualnosci.webp'

export const revalidate = 60

export const metadata: Metadata = {
	title: 'Aktualności',
	description:
		'Przeczytaj najnowsze wiadomości i aktualności Bentto – informacje o nowych produktach, promocjach oraz nadchodzących wydarzeniach i ofertach.',

	openGraph: {
		title: 'Aktualności | Bentto - Urządzenia Gastonomiczne Nowy Targ',
		description:
			'Przeczytaj najnowsze wiadomości i aktualności Bentto – informacje o nowych produktach, promocjach oraz nadchodzących wydarzeniach i ofertach.',
		type: 'website',
		locale: 'pl_PL',
		url: 'https://bentto.eu/aktualnosci',
		siteName: 'Bentto - Urządzenia Gastonomiczne',
		images: [
			{
				url: '/bentto-aktualnosci.webp',
				width: 1200,
				height: 630,
				alt: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
			},
		],
	},
	alternates: {
		canonical: 'https://bentto.eu/aktualnosci',
	},
}

const page = async () => {
	const posts: Post[] = await GET_ALL_POSTS()

	return (
		<>
			<Hero bgi={Background} heading='Aktualności' />

			<section className='pt-5 sm:pt-10 pb-20 xl:mt-32 2xl:mt-12'>
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
