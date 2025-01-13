'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { Phone, Mail, MapPin, Menu } from 'lucide-react'
import logo from '@/public/logo.webp'
import Button from '@/components/button'
import { useState, useEffect } from 'react'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
	{
		id: 1,
		title: 'O nas',
		href: '/',
		desktop: true,
	},
	{
		id: 2,
		title: 'Oferta',
		href: '/oferta',
		desktop: true,
	},
	{
		id: 3,
		title: 'Aktualności',
		href: '/aktualnosci',
		desktop: true,
	},
	{
		id: 4,
		title: 'Galeria',
		href: '/galeria',
		desktop: true,
	},
]

const Topbar = () => {
	const [isVisible, setIsVisible] = useState(true)
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY

			if (scrollTop >= 50) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className={`w-full duration-300 ${isVisible ? '' : 'hidden'}`}>
			<ul className='flex justify-end border-b py-4 pr-4 lg:pr-8 '>
				<li className='border-r px-4 group'>
					<Link href='tel:+48602270903' className='topbar_link' aria-label="Zadzwoń">
						<Phone className='topbar_link-icon ' />
						<span className=' topbar_link-text link-hover--group !hidden md:!block'>+48 602-270-903</span>
					</Link>
				</li>
				<li className='lg:border-r pl-4 lg:px-4 group'>
					<Link href='mailto:bentto@onet.eu' className='topbar_link ' aria-label="Napisz">
						<Mail className='topbar_link-icon ' />
						<span className=' topbar_link-text link-hover--group !hidden md:!block'>bentto@onet.eu</span>
					</Link>
				</li>
				<li className='hidden lg:block pl-4 group'>
					<Link
						href='https://maps.app.goo.gl/LpyzjWDadgucufKh8'
						target='_blank'
						rel='noreferrer nofollow'
						className='topbar_link' aria-label="Zobacz adres">
						<MapPin className='topbar_link-icon' />
						<span className='topbar_link-text link-hover--group'>Szaflarska 61, Nowy Targ</span>
					</Link>
				</li>
			</ul>
		</div>
	)
}

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	const pathname = usePathname()

	return (
		<div className='flex justify-end lg:justify-between items-center py-2 sm:py-4 pr-8 lg:pr-12 pl-12 2xl:pl-20 '>
			<nav className='hidden lg:block'>
				<ul className='flex gap-6'>
					{navLinks.map(item => (
						<li key={item.id} className={`${item.desktop ? '' : '2xl:hidden'}`}>
							<Link
								href={item.href}
								className={`uppercase text-[19px] font-semibold ${pathname === item.href ? 'link-active' : 'link-hover'}`}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Button href='/kontakt' label='Kontakt' className='hidden lg:inline-flex ' />

			<div className='lg:hidden'>
				<Sheet>
					<SheetTrigger aria-label="Otwórz menu"className='bg-secondary-400 rounded-md p-2'>
						
							<Menu className='size-7 text-white' />
						
					</SheetTrigger>
					<SheetContent className='bg-white'>
						<SheetHeader>
							<SheetTitle>
								<Link href='/' className=' px-4'>
									<Image
										src={logo}
										alt='Bentto - Urządzenia Gastronomiczne'
										width={280}
										height={100}
										className='w-[80%] mx-ato'
									/>
								</Link>
							</SheetTitle>
						</SheetHeader>

						<ul className='flex flex-col gap-6 mt-8'>
							{navLinks.map(item => (
								<li key={item.id} className={`${item.desktop ? '' : '2xl:hidden'}`}>
									<Link
										href={item.href}
										className={`uppercase text-[19px] font-semibold ${pathname === item.href ? 'link-active' : 'link-hover'}`}>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}

const Header = () => {
	return (
		<header className='fixed top-0 inset-x-0  bg-primary-200 shadow-lg z-50'>
			<div className='flex max-w-screen-max mx-auto'>
				<Link href='/' className='pl-4 lg:w-[20%] 2xl:w-[15%] flex justify-center items-center   bg-primary-400 px-4'>
					<Image src={logo} alt='Bentto - Urządzenia Gastronomiczne' width={280} height={100} priority />
				</Link>
				<div className='w-[75%] lg:w-[80%] 2xl:w-[85%] flex flex-col'>
					<Topbar />
					<Navbar />
				</div>
			</div>
		</header>
	)
}

export default Header
