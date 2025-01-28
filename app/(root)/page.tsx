import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import AboutSecond from '@/components/home/about-second'
import Offer from '@/components/home/offer'
import Posts from '@/components/home/posts'
import Realisations from '@/components/home/realisations'

export const revalidate = 60

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<AboutSecond />
			<Offer />
			<Posts />
			<Realisations />
		</>
	)
}
