import Image from 'next/image'

import Button from '@/components/button'

import HeroImg from '@/public/images/bentto-hero.webp'
import Pattern from '@/public/pattern.webp'

const Hero = () => {
	return (
		<section className='relative lg:h-screen pt-40 md:pt-48 lg:pt-42 2xl:pt-36  mb-10 '>
			<div className='hidden lg:block absolute inset-y-0 left-[62%] right-0 -z-10'>
				<Image src={Pattern} width={530} height={917} alt='tło' priority className='w-full h-full object-cover' />
			</div>
			<div className='wrapper h-full grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16 '>
				{/* text */}
				<div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left '>
					<h1 className='heading  xl:!text-5xl'>
						Sprzęt gastronomiczny najwyższej jakości
					</h1>
					<p className='text md:!text-xl mt-6'>
						Posiadamy wszytko, czego potrzebujesz do urządzenia swojej kuchni lub restauracji na najwyższym poziomie.
						Jesteśmy zlokalizowani w malowniczym Podhalu, w sercu Nowego Targu, ale nasza oferta jest dostępna dla
						klientów w całej Polsce. Dzięki szerokiej gamie produktów i naszemu doświadczeniu, jesteśmy gotowi
						dostarczyć Ci sprzęt gastronomiczny najwyższej jakości, niezależnie od tego, gdzie się znajdujesz.
					</p>
					<Button href='/#oferta' label='Poznaj ofertę' className='mt-12' />

					<ul className='flex flex-wrap sm:flex-nowrap justify-center lg:justify-start items-center mt-12 md:mt-16 w-full gap-6 md:gap-12'>
						<li className='flex flex-col'>
							<span className='text-3xl sm:text-4xl xl:text-5xl font-bold text-black uppercase'>10+</span>
							<span className='sm:text-lg'>Lat doświadczenia</span>
						</li>
						<li className='flex flex-col'>
							<span className='text-3xl sm:text-4xl xl:text-5xl font-bold text-black uppercase'>100%</span>
							<span className='sm:text-lg'>Zadowolonych klientów</span>
						</li>
						<li className='flex flex-col'>
							<span className='text-3xl sm:text-4xl xl:text-5xl font-bold text-black uppercase'>5/5</span>
							<span className='sm:text-lg'>Najlepsze opinie</span>
						</li>
					</ul>
				</div>
				{/* image */}
				<Image
					src={HeroImg}
					alt='asortymenty w sklepie Bentto'
					priority
					className='sm:mb-24 md:mb-0 lg:pb-20  mx-auto max-w-[600px] aspect-[4/3] lg:aspect-auto lg:h-3/4 xl:h-[100%] 2xl:h-[94%] w-full xl:w-[90%]  my-auto object-cover lg:p-6'
				/>
			</div>
		</section>
	)
}

export default Hero
