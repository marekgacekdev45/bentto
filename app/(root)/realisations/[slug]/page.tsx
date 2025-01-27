import Hero from '@/components/hero'
import { GET_REALISATION_BY_SLUG } from '@/sanity/lib/queries'
import React from 'react'

import Background from '@/public/images/1600/bentto-32.webp'
import { Realisation } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'
import RealisationGallery from '@/components/realisation-gallery'

export const revalidate = 60

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
						{description && <p className='prose text pt-4'>{description}</p>}
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
