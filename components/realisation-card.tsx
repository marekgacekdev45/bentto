import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Realisation } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

const RealisationCard = ({ realisation: { slug, name, thumbnail } }: { realisation: Realisation }) => {
	return (
		<Link href={`/realizacje/${slug}`} className='bg-primary-600 border border-primary-700  shadow-lg   group'>
			<div className='overflow-hidden w-full '>
				<Image
					src={urlFor(thumbnail).url()}
					alt={`miniaturka realizacji o tytule ${name}`}
					className=' aspect-square max-h-[400px] object-cover w-full group-hover:scale-105 duration-300'
					width={635}
					height={550}
				/>
			</div>

			<h3 className=' text-2xl font-black text-black  p-10 text-center'>{name}</h3>
		</Link>
	)
}

export default RealisationCard
