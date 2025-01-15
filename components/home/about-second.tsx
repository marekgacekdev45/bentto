import React from 'react'
import Button from '../button'

import AboutImage from '@/public/images/bentto_3.webp'

import Image from 'next/image'

const AboutSecond = () => {
	return (
		<section className='  border pt-20 pb-20 '>
            <div className='wrapper'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 2xl:gap-20 '>
               
			
				<div className='relative max-w-[520px] h-[500px] max-h-[680px] mx-8 lg:ml-16 lg:h-full'>
					<div className='absolute w-full h-full rotate-[10deg] lg:rotate-[13deg] bg-primary-800 top-0 left-0'></div>
					<Image
						src={AboutImage}
						alt='2'
						width={600}
						height={714}
						quality={90}
						className='h-full relative z-10 object-cover'
					/>
				</div>
			

			<div className='flex flex-col justify-start items-start mx-auto text-left space-y-1 py-12'>
				<span className='preheading'>Our painting services</span>
				<h2 className='heading '>Residential And Commercial Painting Services</h2>
				<p className='leading-relaxed text-lg pt-4'>
					Real Deal Painting offers a comprehensive range of painting services from small homes and apartment complexes
					to commercial properties and office spaces that are backed by Real Deal Painting's steadfast commitment to
					excellence, quality, fair rates, and our 100% satisfaction guarantee.
				</p>
				<p className='leading-relaxed text-lg pt-4'>
					Real Deal Painting offers a comprehensive range of painting services from small homes and apartment complexes
					to commercial properties and office spaces that are backed by Real Deal Painting's steadfast commitment to
					excellence, quality, fair rates, and our 100% satisfaction guarantee.
				</p>
				<div className='pt-12'>
					<Button href='/oferta' label='Poznaj ofertę' />
				</div>
			</div>
                 
            </div>
            </div>
		</section>
	)
}

export default AboutSecond
