import Header from '@/components/header'
import Footer from '@/components/footer'

import Button from '@/components/button'

const NotFound = () => {
	return (
		<div className='flex flex-col  justify-between h-screen'>
			<Header />
			<main className='flex flex-col items-center justify-center h-full space-y-6 sm:space-y-12 text-center my-32 pt-28 sm:pt-32'>
				<h1 className='heading'>Nie ma takiej strony</h1>
				<h2 className='heading !text-secondary-400'>404</h2>
				<Button href='/' label='strona głowna' />
			</main>
			<Footer />
		</div>
	)
}

export default NotFound
