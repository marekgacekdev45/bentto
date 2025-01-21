import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import AboutSecond from '@/components/home/about-second'
import BrandsMarquee from '@/components/home/brands-marquee'
import Offer from '@/components/home/offer'

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<AboutSecond />
			<BrandsMarquee />
			<Offer/>
		</>
	)
}
