import Image,{ StaticImageData } from 'next/image'
import React from 'react'

const Hero = ({ bgi, heading }: { bgi: StaticImageData; heading: string }) => {
	return (
		<section className='h-[250px]  sm:h-[350px] relative text-white px-6 2xl:px-0 mt-28 sm:mt-32  '>
			<Image src={bgi} alt='tło' fill className='absolute inset-0 -z-20 object-cover' quality={60} />
			<div className='absolute inset-0 -z-10 bg-black/70 '></div>

			<div className='max-w-screen-2xl mx-auto flex flex-col justify-center items-start h-full gap-2'>
				<span className="text-xs sm:text-sm lg:text-base pl-3 uppercase font-bold  relative after:content-[''] after:absolute after:right-[100%] after:top-1/2 after:-translate-y-1/2 after:bg-secondary-400 after:w-[1000px] after:h-[2px]">
					Bentto
				</span>
				<h1 className='text-4xl  md:text-5xl  uppercase font-bold'>{heading}</h1>
			</div>
		</section>
	)
}

export default Hero
