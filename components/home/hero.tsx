import Button from '@/components/button'
import Image from 'next/image'

import HeroImg from '@/public/images/bentto_1.webp'

const Hero = () => {
	return (
		<section className='pt-48 lg:pt-36 relative lg:h-screen mb-20'>
			<div className='hidden lg:block absolute inset-y-0 left-[60%] right-0 bg-gray-300 -z-10'></div>
			<div className='wrapper grid grid-cols-1 lg:grid-cols-2 h-full gap-12 2xl:gap-32 '>
				{/* text */}
				<div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left '>
					<h1 className='uppercase text-[25px] xxs:text-3xl xs:text-4xl xl:text-[50px] font-black text-black font-text tracking-wider leading-[1.1]'>Sprzęt gastronomiczny najwyższej jakości</h1>
					<p className=' md:text-xl leading-relaxed font-text mt-4'>
						Posiadamy wszytko, czego potrzebujesz do urządzenia swojej kuchni lub restauracji na najwyższym poziomie.
						Jesteśmy zlokalizowani w malowniczym Podhalu, w sercu Nowego Targu, ale nasza oferta jest dostępna dla
						klientów w całej Polsce. Dzięki szerokiej gamie produktów i naszemu doświadczeniu, jesteśmy gotowi
						dostarczyć Ci sprzęt gastronomiczny najwyższej jakości, niezależnie od tego, gdzie się znajdujesz.
					</p>
					<Button href='/oferta' label='Poznaj ofertę' className='mt-12' />

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
				<Image src={HeroImg} alt='2' width={600} height={814} priority quality={90} className='mb-24 lg:pb-20 lg:mb-0 mx-auto max-w-[600px] aspect-[4/3] lg:aspect-auto lg:h-3/4 xl:h-[84%] w-full xl:w-[90%]  my-auto' />
			</div>
		</section>
	)
}

export default Hero
