import Image from 'next/image'
import Link from 'next/link'

import { Facebook, Mail, MapPin, Phone } from 'lucide-react'

import Logo from '@/public/logo.webp'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.504183804342!2d20.028751076800393!3d49.47498245711741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e51364bbaf2d%3A0xf26e8c025b4b5307!2sBentto%20Urz%C4%85dzenia%20gastronomiczne!5e0!3m2!1spl!2spl!4v1737785696051!5m2!1spl!2spl'
				width='100%'
				height='100%' 
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				className='h-[300px]'
				title='mapa dojdazdu do sklepu ze sprzętem gastronomicznym Bentto w Nowym Targu'
			/>

			<div className='bg-primary-600 shadow-lg pt-16 lg:pt-24 pb-12'>
				<div className='wrapper !max-w-screen-xl space-y-12'>
					<div className='flex flex-col lg:flex-row gap-12'>
						<div className='lg:w-[40%] xl:w-1/2 mx-auto'>
							<Link href='/'>
								<Image src={Logo} alt='logo' />
							</Link>
						</div>
						<div className='lg:w-[60%] xl:w-1/2  flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between gap-6 sm:gap-0'>
							<div className='sm:w-1/3 text-center sm:text-left'>
								<h2 className='text-2xl font-bold text-black mb-4'>Menu</h2>
								<ul className='flex flex-col justify-center items-center sm:justify-start sm:items-start gap-3'>
									<li>
										<Link href='/#o-nas' className='link-hover font-medium'>
											O nas
										</Link>
									</li>
									<li>
										<Link href='/#oferta' className='link-hover font-medium'>
											Oferta
										</Link>
									</li>
									<li>
										<Link href='/aktualnosci' className='link-hover font-medium'>
											Aktualności
										</Link>
									</li>
									<li>
										<Link href='/realizacje' className='link-hover font-medium'>
											Realizacje
										</Link>
									</li>
									<li>
										<Link href='/kontakt' className='link-hover font-medium'>
											Kontakt
										</Link>
									</li>
									<li>
										<Link href='/polityka-prywatnosci' className='link-hover font-medium'>
											Polityka prywatności
										</Link>
									</li>
								</ul>
							</div>

							<div className='sm:w-1/3 text-center sm:text-left'>
								<h2 className='text-2xl font-bold text-black mb-4'>Kontakt</h2>
								<ul className='flex flex-col justify-center items-center sm:justify-start sm:items-start gap-3'>
									<li>
										<Link href='tel:+48602270903' className='topbar_link group !p-0' aria-label='Zadzwoń'>
											<Phone className='topbar_link-icon' />
											<span className=' topbar_link-text link-hover--group '>+48 602-270-903</span>
										</Link>
									</li>
									<li>
										<Link href='mailto:bentto@onet.eu' className='topbar_link group !p-0' aria-label='Napisz'>
											<Mail className='topbar_link-icon ' />
											<span className=' topbar_link-text link-hover--group'>bentto@onet.eu</span>
										</Link>
									</li>
									<li>
										<Link
											href='https://maps.app.goo.gl/LpyzjWDadgucufKh8'
											target='_blank'
											rel='noreferrer nofollow'
											className='topbar_link group !p-0'
											aria-label='Zobacz adres'>
											<MapPin className='topbar_link-icon' />
											<span className='topbar_link-text link-hover--group'>Szaflarska 61,<br/> Nowy Targ</span>
										</Link>
									</li>
								</ul>
							</div>

							<div className='sm:w-1/3 sm:pl-16 text-center sm:text-left'>
								<h2 className='text-2xl font-bold text-black mb-4'>Social </h2>
								<ul className='flex flex-col justify-center items-center sm:justify-start sm:items-start gap-3 '>
									<li>
										<Link
											href='https://facebook.com/benttont'
											aria-label='facebook'
											rel='noreferrer nofollow'
											target='_blank'>
											<Facebook className='topbar_link-icon group-hover:scale-105 duration-300' />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr className='border-primary-800' />

					<div className='flex  flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between gap-2 sm:gap-0'>
						<p>
							© <span>{currentYear}</span> Bentto
						</p>

						<div className='flex gap-2'>
							<p>Hand coded by </p>
							<Link href='https://marekgacekdev.pl' target='_blank' className='link-hover font-medium'>
								Marek Gacek
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
