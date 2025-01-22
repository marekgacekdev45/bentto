import React from 'react'

import Background from '@/public/images/1600/bentto-15.webp'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'

const Posts = () => {
	return (
		<section className='pt-5 sm:pt-10 pb-10 xl:mt-32 2xl:mt-12 relative'>
			<Image src={Background} alt='background' fill className='absolute inset-0 -z-20 ' />
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

					<div className=' bg-primary-200 border border-primary-700  shadow-lg dark:bg-gray-800 dark:border-gray-700 group flex flex-col md:flex-row lg:flex-col'>
                        <div className='overflow-hidden w-full md:w-[45%] lg:w-full md:order-1 lg:order-none'>

						<Link href='#'>
							<Image src={Background} alt='' className=' min-h-[250px] h-full object-cover group-hover:scale-105 duration-300' />
						</Link>
                        </div>
						<div className='p-5 flex  justify-center items-center md:items-start lg:items-center flex-col text-left lg:text-center w-full md:w-[55%] lg:w-full  '>
							<Link href='#'>
								<h3 className='mb-2 text-xl font-black  text-black'>Noteworthy technology acquisitions 2021</h3>
							</Link>
							<p className='text !text-text  !text-base line-clamp-3 sm:line-clamp-4 '>
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
							</p>
                            

							<Button href='#' label='Czytaj' className='mt-5' />
                           
						</div>
					</div>
					<div className=' bg-primary-200 border border-primary-700  shadow-lg dark:bg-gray-800 dark:border-gray-700 group flex flex-col md:flex-row lg:flex-col'>
                        <div className='overflow-hidden w-full md:w-[45%] lg:w-full md:order-1 lg:order-none'>

						<Link href='#'>
							<Image src={Background} alt='' className=' min-h-[250px] h-full object-cover group-hover:scale-105 duration-300' />
						</Link>
                        </div>
						<div className='p-5 flex  justify-center items-center md:items-start lg:items-center flex-col text-left lg:text-center w-full md:w-[55%] lg:w-full '>
							<Link href='#'>
								<h3 className='mb-2 text-xl font-black  text-black'>Noteworthy technology acquisitions 2021</h3>
							</Link>
							<p className='text !text-text pb-5 !text-base line-clamp-4'>
								Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
							</p>
                            

							<Button href='#' label='Czytaj' />
                           
						</div>
					</div>
					<div className=' bg-primary-200 border border-primary-700  shadow-lg dark:bg-gray-800 dark:border-gray-700 group flex flex-col md:flex-row lg:flex-col'>
                        <div className='overflow-hidden w-full md:w-[45%] lg:w-full md:order-1 lg:order-none'>

						<Link href='#'>
							<Image src={Background} alt='' className=' min-h-[250px] h-full object-cover group-hover:scale-105 duration-300' />
						</Link>
                        </div>
						<div className='p-5 flex  justify-center items-center md:items-start lg:items-center flex-col text-left lg:text-center w-full md:w-[55%] lg:w-full '>
							<Link href='#'>
								<h3 className='mb-2 text-xl font-black  text-black'>Noteworthy technology acquisitions 2021</h3>
							</Link>
							<p className='text !text-text pb-5 !text-base line-clamp-4'>
								Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
							</p>
                            

							<Button href='#' label='Czytaj' />
                           
						</div>
					</div>



				
				
					
				
				</div>
			</div>
		</section>
	)
}

export default Posts
