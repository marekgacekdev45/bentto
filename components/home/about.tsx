import Image from 'next/image'

import Button from '@/components/button'

import { Brush, CookingPot, Wrench } from 'lucide-react'

const offers = [
	{
		id: 1,
		title: 'Sprzęt gastronomiczny',
		description: 'Dostarczamy najwyższej jakości urządzenia niezbędne w profesjonalnych kuchniach.',
		icon: <CookingPot className='text-secondary-400 group-hover:text-primary-200 duration-500 size-12' />,
		image: '/tlo-1.webp',
	},
	{
		id: 2,
		title: 'Projektowanie kuchni',
		description: 'Tworzymy funkcjonalne i ergonomiczne projekty kuchni dostosowane do indywidualnych potrzeb klientów',
		icon: <Brush className='text-secondary-400 group-hover:text-primary-200 duration-500  size-12' />,
		image: '/tlo-2.webp',
	},
	{
		id: 3,
		title: 'Serwis <br/> urządzeń',
		description: 'Zapewniamy profesjonalny serwis i wsparcie techniczne dla zakupionego u nas sprzętu',
		icon: <Wrench className='text-secondary-400 group-hover:text-primary-200 duration-500  size-12' />,
		image: '/tlo-3.webp',
	},
]

const About = () => {
	return (
		<section id='o-nas' className='pt-5 sm:pt-10 pb-10 xl:mt-32 2xl:mt-12'>
			<div className='wrapper !max-w-screen-xl'>
				<div className='max-w-screen-md mx-auto text-center space-y-1'>
					<span className='preheading'>Nasza bogata oferta</span>
					<h2 className='heading'>Wszystko dla Twojej restauracji</h2>
					<p className='text pt-4'>
						Z dumą prezentujemy naszą wszechstronną ofertę sprzętu gastronomicznego, kompleksowego serwisu oraz
						projektowania kuchni, specjalnie dostosowaną do Twojej restauracji. Ułatwiamy Ci nie tylko zakup niezbędnego
						wyposażenia, ale także zapewniamy profesjonalny serwis i projektujemy kuchnie, które spełnią Twoje
						oczekiwania.
					</p>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 2xl:gap-12 my-12 '>
					{offers.map(offer => (
						<div
							key={offer.id}
							className='group bg-primary-600 hover:bg-secondary-400/80 duration-500 flex flex-col justify-start gap-4 px-6 py-12 2xl:p-12 shadow-md relative md:w-3/4 lg:w-full mx-auto'>
							{offer.icon}
							<h3
								className='heading !text-xl md:!text-2xl !leading-none group-hover:!text-primary-200 !duration-500'
								dangerouslySetInnerHTML={{ __html: offer.title }}
							/>
							<p className='text group-hover:!text-primary-200 !duration-500'>{offer.description}</p>
							<Image src={offer.image} alt={offer.title} className='-z-10 object-cover' fill quality={40} />
						</div>
					))}
				</div>
				<div className='flex justify-center'>
					<Button href='/#oferta' label='Zobacz ofertę' />
				</div>
			</div>
		</section>
	)
}

export default About
