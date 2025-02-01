import { Metadata } from 'next'

import { Realisation } from '@/sanity/lib/interface'
import { GET_REALISATION_BY_SLUG } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

import Hero from '@/components/hero'
import RealisationGallery from '@/components/realisation-gallery'

import Background from '@/public/bentto-realizacja.webp'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const { slug } = await params

	const realisation: Realisation = await GET_REALISATION_BY_SLUG(slug)

	return {
		title: `${realisation.name} | Bentto - Urządzenia Gastonomiczne Nowy Targ`,
		description: `Zobacz realizację ${realisation.name} – unikalny projekt Bentto, który łączy elegancję z funkcjonalnością. Sprawdź, jak nasze produkty zmieniają przestrzeń.`,
		alternates: {
			canonical: `https://bentto.eu/${realisation.slug}`,
		},
		openGraph: {
			title: `${realisation.name} | Bentto - Urządzenia Gastonomiczne Nowy Targ`,
			description: `Zobacz realizację ${realisation.name} – unikalny projekt Bentto, który łączy elegancję z funkcjonalnością. Sprawdź, jak nasze produkty zmieniają przestrzeń.`,
			type: 'article',
			locale: 'pl_PL',
			url: `https://bentto.eu/${realisation.slug}`,
			siteName: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
			images: [
				{
					url: urlFor(realisation.thumbnail).url(),
					width: 1200,
					height: 630,
					alt: `miniaturka ${realisation.name} | Bentto - Urządzenia Gastonomiczne Nowy Targ`,
				},
			],
		},
	}
}

const page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params

	const { name, address, description, images }: Realisation = await GET_REALISATION_BY_SLUG(slug)

	const imageUrls = images.map((image: any) => urlFor(image).url())

	return (
		<>
			<Hero bgi={Background} heading='Realizacje' />

			<section className='pt-5 sm:pt-10 pb-20 xl:mt-32 2xl:mt-12'>
				<div className='wrapper !max-w-screen-2xl space-y-12'>
					<div className='max-w-screen-lg mx-auto text-center space-y-1'>
						<h2 className='heading'>{name}</h2>
						
						{address && <p className=' text pt-4'>{address}</p>}
						{description && <p className='text pt-1 '>{description}</p>}
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						<RealisationGallery images={imageUrls} alt={name} />
					</div>
				</div>
			</section>
		</>
	)
}

export default page
