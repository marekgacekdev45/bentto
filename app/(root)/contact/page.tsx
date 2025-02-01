import { Metadata } from 'next'

import Link from 'next/link'
import Image from 'next/image'

import { Mail, MapPin, Phone } from 'lucide-react'

import ContactForm from '@/components/contact-form'
import Hero from '@/components/hero'

import Background from '@/public/bentto-kontakt.webp'
import Pattern from '@/public/pattern.webp'

export const metadata: Metadata = {
	title: 'Kontakt',
	description:
		'Skontaktuj się z nami – chętnie odpowiemy na Twoje pytania. Sprawdź dane kontaktowe Bentto i napisz do nas lub zadzwoń, aby uzyskać więcej informacji.',

	openGraph: {
		title: 'Kontakt | Bentto - Urządzenia Gastonomiczne Nowy Targ',
		description:
			'Skontaktuj się z nami – chętnie odpowiemy na Twoje pytania. Sprawdź dane kontaktowe Bentto i napisz do nas lub zadzwoń, aby uzyskać więcej informacji.',
		type: 'website',
		locale: 'pl_PL',
		url: 'https://bentto.eu/kontakt',
		siteName: 'Bentto - Urządzenia Gastonomiczne',
		images: [
			{
				url: 'https://bentto.eu/bentto-kontakt.webp',
				width: 1200,
				height: 630,
				alt: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
			},
		],
	},
	alternates: {
		canonical: 'https://bentto.eu/kontakt',
	},
}

const page = () => {
	return (
		<>
			<Hero bgi={Background} heading='Kontakt' />

			<section className='mt-5 sm:mt-10 mb-20  xl:mt-12'>
				<div className='wrapper !max-w-screen-2xl relative  grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-6 2xl:gap-0'>
					<Image src={Pattern} alt='tło' fill className='absolute inset-0 -z-20 object-cover ' />
					<div className='absolute inset-0 -z-10 bg-black/80 '></div>

					<div className='flex flex-col justify-center items-start  sm:px-6 xl:px-16 pt-20 lg:py-20'>
						<h2 className='heading  !text-white'>Masz pytania? Chcesz dowiedzieć się więcej?</h2>
						<p className='text pt-4  text-white'>
							Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania i pomóc w każdej sprawie.
						</p>
						<p className='text pt-2  text-white'>
							Skontaktuj się z nami za pomocą formularza lub korzystając z innych dostępnych metod.
						</p>
						<p className='text pt-2  text-white'>Czekamy na Twój kontakt!</p>

						<hr className='border border-white w-full border-dashed my-12' />

						<h3 className='text-xl font-black text-white uppercase'>Kontakt</h3>
						<ul className='flex flex-col justify-start items-start gap-6 pt-6'>
							<li>
								<Link href='tel:+48602270903' className='topbar_link group !p-0' aria-label='Zadzwoń'>
									<Phone className='topbar_link-icon !size-7 !text-white' />
									<span className=' topbar_link-text link-hover--group after:!bg-white !text-white !text-lg'>
										+48 602-270-903
									</span>
								</Link>
							</li>
							<li>
								<Link href='mailto:bentto@onet.eu' className='topbar_link group !p-0' aria-label='Napisz'>
									<Mail className='topbar_link-icon !size-7 !text-white' />
									<span className=' topbar_link-text link-hover--group after:!bg-white !text-white !text-lg'>
										bentto@onet.eu
									</span>
								</Link>
							</li>
							<li>
								<Link
									href='https://maps.app.goo.gl/LpyzjWDadgucufKh8'
									target='_blank'
									rel='noreferrer nofollow'
									className='topbar_link group !p-0'
									aria-label='Zobacz adres'>
									<MapPin className='topbar_link-icon !size-7 !text-white' />
									<span className='topbar_link-text link-hover--group after:!bg-white !text-white !text-lg'>
										Szaflarska 61, Nowy Targ
									</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className='flex  justify-center items-center   sm:px-6 xl:px-16 pb-20 lg:py-20'>
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	)
}

export default page
