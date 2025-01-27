import Hero from '@/components/hero'
import React from 'react'
import Background from '@/public/images/1600/bentto-32.webp'
import Link from 'next/link'
import Image from 'next/image'
import RealisationCard from '@/components/realisation-card'
import { GET_ALL_REALISATIONS } from '@/sanity/lib/queries'
import { Realisation } from '@/sanity/lib/interface'

export const revalidate = 60

const page = async () => {
	const realisations = await GET_ALL_REALISATIONS()



	return (
		<>
			<Hero bgi={Background} heading='Realizacje' />

			<section className='pt-5 sm:pt-10 pb-20 xl:mt-32 2xl:mt-12'>
				<div className='wrapper !max-w-screen-2xl'>
					<div className='max-w-screen-md mx-auto text-center space-y-1'>
						<span className='preheading'>Inspiracje z naszych projektów</span>
						<h2 className='heading'>Nasze realizacje</h2>
						<p className='text pt-4'>
							Zapraszamy do odkrycia naszych projektów, które pokazują, jak tworzymy funkcjonalne i estetyczne kuchnie
							dostosowane do potrzeb naszych klientów. Każda realizacja to unikalne podejście, nowoczesne rozwiązania i
							wysoka jakość wykonania.
						</p>
						<p className='text pt-4'>
							W naszej galerii znajdziesz przykłady współpracy z różnymi lokalami gastronomicznymi – od kameralnych
							kawiarni po prestiżowe restauracje. Sprawdź, jak możemy pomóc Ci w stworzeniu kuchni, która będzie sercem
							Twojego biznesu.
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-6 2xl:gap-12 pt-6 md:pt-12'>
						{realisations.map((realisation: Realisation) => (
							<RealisationCard key={`${realisation.name}-${realisation._id}`} realisation={realisation} />
						))}

						{/* {posts.map((post: Post) => (
							<PostCard post={post} />
						))} */}
					</div>
				</div>
			</section>
		</>
	)
}

export default page
