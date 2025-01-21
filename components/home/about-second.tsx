import React from 'react'
import Button from '../button'

import AboutImage from '@/public/images/1200/bentto-66.webp'

import Pattern from "@/public/pattern.webp"

import Image from 'next/image'

const AboutSecond = () => {
	return (
		<section className='pt-10 xl:pt-0 2xl:pt-10 pb-10 '>
			<div className='wrapper'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-26 2xl:gap-20 justify-center items-center '>
					<div className='relative max-w-[550px] h-[350px] sm:h-[500px] max-h-[650px] mx-4 sm:mx-auto xl:mx-8 lg:ml-16 lg:h-full '>
						<div className='absolute w-full h-full rotate-[10deg] lg:rotate-[13deg]  top-0 left-0'>
						<Image
					src={Pattern}
					width={530}
					height={917}
					alt='tło'
					priority
					className='w-full h-full object-cover'
				/>
						</div>
						<Image
							src={AboutImage}
							alt='wyposażenie dla gastronomii w sklepie Bentto'
							quality={90}
							className='h-full relative z-10 object-cover'
						/>
					</div>

					<div className='flex flex-col justify-start items-start mx-auto text-left space-y-1 sm:py-12 lg:pr-12 2xl:pr-20'>
						<span className='preheading'>Poznaj nas</span>
						<h2 className='heading '>Bentto: Twój partner w gastronomii</h2>
						<p className='leading-relaxed  sm:text-lg pt-4'>
							Bentto to firma, która od lat specjalizuje się w sprzedaży, projektowaniu oraz serwisie sprzętu
							gastronomicznego. Nasza siedziba znajduje się w malowniczym Nowym Targu, gdzie pasja spotyka się z
							profesjonalizmem. Nasz zespół składa się z ekspertów, którzy doskonale rozumieją potrzeby branży
							gastronomicznej i oferują kompleksowe wsparcie na każdym etapie współpracy – od wyboru odpowiednich
							rozwiązań po ich wdrożenie.
						</p>
						<p className='leading-relaxed sm:text-lg pt-4 pb-6 sm:pb-10'>
							Naszym celem jest pomoc restauracjom, kawiarniom, hotelom i innym obiektom gastronomicznym w realizacji
							ich kulinarnych ambicji. Oferujemy szeroki wybór najwyższej jakości sprzętu, dopasowane do potrzeb
							projekty kuchni oraz niezawodne wsparcie serwisowe. Dzięki naszemu doświadczeniu i zaangażowaniu potrafimy
							sprostać nawet najbardziej wymagającym oczekiwaniom, dostarczając rozwiązania, które łączą funkcjonalność,
							estetykę i trwałość. Z nami możesz mieć pewność, że Twoja kuchnia będzie działała sprawnie i
							profesjonalnie.
						</p>
						
							<Button href='/kontakt' label='Kontakt' />
						
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSecond
