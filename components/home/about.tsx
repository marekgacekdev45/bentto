import { Home } from 'lucide-react'
import Image from 'next/image'

import test from '@/public/images/bentto_1.webp'
import Button from '../button'

const offers = [
	{
		id: 1,
		title: 'Sprzęt gastronomiczny',
		description: 'Dostarczamy najwyższej jakości urządzenia niezbędne w profesjonalnych kuchniach.',
		icon: <Home className='text-secondary-400 group-hover:text-primary-200 duration-500 size-12' />,
		image: '/images/bentto_1.webp',
	},
	{
		id: 2,
		title: 'Projektowanie kuchni',
		description: 'Tworzymy funkcjonalne i ergonomiczne projekty kuchni dostosowane do indywidualnych potrzeb klientów',
		icon: <Home className='text-secondary-400 group-hover:text-primary-200 duration-500  size-12' />,
		image: '/images/bentto_1.webp',
	},
	{
		id: 3,
		title: 'Serwis <br/> urządzeń',
		description: 'Zapewniamy profesjonalny serwis i wsparcie techniczne dla zakupionego u nas sprzętu',
		icon: <Home className='text-secondary-400 group-hover:text-primary-200 duration-500  size-12' />,
		image: '/images/bentto_1.webp',
	},
]

const About = () => {
	return (
		<section id='o-nas' className='pt-10 pb-10'>
			<div className='wrapper !max-w-screen-xl'>
				<div className='max-w-screen-md mx-auto text-center space-y-1'>
					<span className='preheading'>Our painting services</span>
					<h2 className='heading '>Residential And Commercial Painting Services</h2>
					<p className='leading-relaxed text-lg pt-4'>
						Real Deal Painting offers a comprehensive range of painting services from small homes and apartment
						complexes to commercial properties and office spaces that are backed by Real Deal Painting's steadfast
						commitment to excellence, quality, fair rates, and our 100% satisfaction guarantee.
					</p>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 2xl:gap-12 my-12 '>
					{offers.map(offer => (
						<div
							key={offer.id}
							className='group bg-primary-600 hover:bg-secondary-400/80 duration-500 flex flex-col justify-start gap-4 px-6 py-12 2xl:p-12 shadow-md relative md:w-3/4 lg:w-full mx-auto'>
							{offer.icon}
							<h3
								className='heading !text-2xl !leading-none group-hover:!text-primary-200 !duration-500'
								dangerouslySetInnerHTML={{ __html: offer.title }}
							/>
							<p className='text group-hover:!text-primary-200 !duration-500'>{offer.description}</p>
							<Image src={offer.image} alt={offer.title} className='-z-10' fill quality={60} />
						</div>
					))}
				</div>
				<div className='flex justify-center'>
					<Button href='/kontakt' label='Kontakt' className='' />
				</div>
			</div>
		</section>
	)
}

export default About
