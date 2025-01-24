import RealisationImage from '@/public/images/1200/bentto-realizacje.webp'
import Pattern from '@/public/pattern.webp'

import Image from 'next/image'

import Button from '../button'

const Realisations = () => {
	return (
		<section className=' py-16 sm:pb-24 lg:py-32 '>
			<div className='wrapper'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-26 2xl:gap-20 justify-center items-center '>
					<div className='flex flex-col justify-start items-start mx-auto text-left space-y-1 sm:py-12 lg:pl-12 2xl:pl-20'>
						<span className='preheading'>Zrealizowane projekty</span>
						<h2 className='heading '>Nasze realizacje</h2>
						<p className='text pt-4 '>
							Zapraszamy do zapoznania się z naszą galerią realizacji, w której prezentujemy projekty kuchni
							wyposażonych w nowoczesny sprzęt gastronomiczny. Każde z naszych wdrożeń to połączenie funkcjonalności,
							estetyki i wysokiej jakości rozwiązań, które pomagają naszym klientom osiągać sukces w branży
							gastronomicznej.
						</p>
            <p className='text pt-4 pb-6 sm:pb-10'>
            Znajdziesz tu inspiracje, które pokazują, jak możemy dostosować nasze usługi do różnych
							potrzeb – od małych kawiarni po duże restauracje. Przekonaj się, jak możemy pomóc stworzyć idealną
							przestrzeń dla Twojego lokalu!
            </p>

						<Button href='/realizacje' label='zobacz realizacje' />
					</div>

					<div className='relative max-w-[550px] h-[350px] sm:h-[500px] max-h-[650px] mx-4 sm:mx-auto lg:mx-8  lg:h-[600px] '>
						<div className='absolute w-full h-full rotate-[10deg] lg:rotate-[13deg]  top-0 left-0'>
							<Image src={Pattern} width={530} height={917} alt='tło' priority className='w-full h-full object-cover' />
						</div>
						<Image
							src={RealisationImage}
							alt='wyposażenie dla gastronomii w sklepie Bentto'
							quality={90}
							className='h-full relative z-10 object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Realisations
