import { Metadata } from 'next'

import { Realisation } from '@/sanity/lib/interface'
import { GET_ALL_REALISATIONS } from '@/sanity/lib/queries'

import Hero from '@/components/hero'
import RealisationCard from '@/components/realisation-card'

import Background from '@/public/bentto-nasze-realizacje.webp'

export const revalidate = 60


export const metadata: Metadata = {
	title: 'Realizacje',
	description:
		'Zobacz nasze realizacje – wyjątkowe projekty Bentto, które łączą styl i funkcjonalność. Inspiracje do Twoich przestrzeni z naszymi produktami',

	openGraph: {
		title: 'Realizacje | Bentto - Urządzenia Gastonomiczne Nowy Targ',
		description:
			'Zobacz nasze realizacje – wyjątkowe projekty Bentto, które łączą styl i funkcjonalność. Inspiracje do Twoich przestrzeni z naszymi produktami',
		type: 'website',
		locale: 'pl_PL',
		url: 'https://bentto.eu/realizacje',
		siteName: 'Bentto - Urządzenia Gastonomiczne',
		images: [
			{
				url: 'https://bentto.eu/bentto-nasze-realizacje.webp',
				width: 1200,
				height: 630,
				alt: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
			},
		],
	},
	alternates: {
		canonical: 'https://bentto.eu/realizacje',
	},
}

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

						
					</div>
				</div>
			</section>
		</>
	)
}

export default page
