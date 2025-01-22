import React from 'react'
import BrandsMarquee from '@/components/brands-marquee'
import { CookingPot,ChefHat, SquarePen, Wrench } from 'lucide-react'

const offers = [
	{
		icon: <ChefHat className='size-16 text-secondary-400 pb-3' />,
		title: 'Sprzęt <br/> Gastronomiczny',
		description:
			'Wysokiej jakości urządzenia dla restauracji i lokali gastronomicznych – od pieców konwekcyjnych po meble ze stali nierdzewnej.',
	},
	{
		icon: <CookingPot className='size-16 text-secondary-400 pb-3' />,
		title: 'Wyposażenie <br/> Gastronomiczne',
		description:
			'Kompleksowa oferta akcesoriów, noży, desek, garnków i eleganckiej zastawy stołowej dla profesjonalnych kuchni.',
	},
	{
		icon: <SquarePen className='size-16 text-secondary-400 pb-3' />,
		title: 'Projektowanie <br/> Kuchni',
		description: 'Tworzymy profesjonalne projekty kuchni , które łączą funkcjonalność, ergonomię i estetykę. ',
	},
	{
		icon: <Wrench className='size-16 text-secondary-400 pb-3' />,
		title: 'Serwis <br/> Gastronomiczny',
		description: 'Szybkie naprawy, regularne przeglądy i wsparcie techniczne, by Twój sprzęt działał bez zarzutu.',
	},
]

const Offer = () => {
	return (
		<section id='oferta' className='pb-12'>
			<BrandsMarquee />

			<div className='wrapper pt-6 md:pt-12'>
				<div className='max-w-screen-md mx-auto text-center space-y-1'>
					<span className='preheading'>Nasze Usługi</span>
					<h2 className='heading'>Kompleksowa oferta dla gastronomii</h2>
					<p className='text pt-4'>
						W Bentto oferujemy szeroki zakres usług, obejmujących sprzedaż nowoczesnego sprzętu gastronomicznego,
						projektowanie funkcjonalnych kuchni oraz wsparcie serwisowe. Nasza oferta jest dopasowana do potrzeb
						restauracji, kawiarni, hoteli i innych obiektów, gwarantując jakość, niezawodność i profesjonalizm na każdym
						etapie współpracy.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-6 md:pt-12'>
					{offers.map(offer => (
						<div key={offer.title} className='border border-primary-700 shadow-lg px-4 xl:px-8 py-8 2xl:aspect-square flex flex-col justify-center items-center text-center gap-4 m-4 hover:-translate-y-3 duration-300'>
							{offer.icon}
							<h3 className='text-lg font-black text-black uppercase' dangerouslySetInnerHTML={{ __html: offer.title }} />
							<p>{offer.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Offer
