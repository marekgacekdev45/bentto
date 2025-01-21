import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const brands = [
	{
		name: 'ecolab',
		logo: '/brands/ecolab.webp',
	},
	{
		name: 'hallde',
		logo: '/brands/hallde.webp',
	},
	{
		name: 'kitchenaid',
		logo: '/brands/kitchenaid.webp',
	},
	{
		name: 'redfox',
		logo: '/brands/redfox.webp',
	},
	{
		name: 'rmgastro',
		logo: '/brands/rmgastro.webp',
	},
	{
		name: 'robot-coupe',
		logo: '/brands/robot-coupe.webp',
	},
	{
		name: 'stalchem',
		logo: '/brands/stalchem.webp',
	},
	{
		name: 'stalgast',
		logo: '/brands/stalgast.webp',
	},
	{
		name: 'tomgast',
		logo: '/brands/tomgast.webp',
	},
]

const BrandsMarquee = () => {
	return (
		<Marquee autoFill pauseOnHover className='py-6'>
			{brands.map(brand => (
				<Image
					key={brand.name}
					src={brand.logo}
					width={200}
					height={150}
					alt={`logo firrmy ${brand.name}`}
					quality={50}
					sizes='(max-width:768px) 150px,200px'
                     className='w-[100px] sm:w-[150px] md:w-[200px] h-[70px] sm:h-[75px] md:h-[100px] object-contain mx-4 md:mx-6'
				/>
			))}
		</Marquee>
	)
}

export default BrandsMarquee
