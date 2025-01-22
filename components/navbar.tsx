'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { Menu } from 'lucide-react'

import logo from '@/public/logo.webp'

const navLinks = [
	{
		id: 1,
		title: 'O nas',
		href: '/#o-nas',
		desktop: true,
	},
	{
		id: 2,
		title: 'Oferta',
		href: '/#oferta',
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
	{
		id: 5,
		title: 'Kontakt',
		href: '/Kontakt',
		desktop: false,
	},
]

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	const pathname = usePathname()

	return (
		<div className='flex justify-end lg:justify-between items-center py-2 sm:py-4 pr-8 lg:pr-12 pl-12 2xl:pl-20 '>
			<nav className='hidden lg:block'>
				<ul className='flex gap-6'>
					{navLinks.map(
						item =>
							item.desktop && (
								<li key={item.id}>
									<Link
										href={item.href}
										className={`uppercase text-lg font-bold text-black ${pathname === item.href ? 'link-active' : 'link-hover'}`}>
										{item.title}
									</Link>
								</li>
							)
					)}
				</ul>
			</nav>
			<Button href='/kontakt' label='Kontakt' className='hidden lg:inline-flex ' />

			<div className='lg:hidden'>
				<Sheet>
					<SheetTrigger aria-label='Otwórz menu' className='bg-secondary-400 rounded-md p-2'>
						<Menu className='size-7 text-white' />
					</SheetTrigger>
					<SheetContent className='bg-white'>
						<SheetHeader>
							<SheetTitle>
								<SheetClose asChild>
									<Link href='/' className=' px-4'>
										<Image
											src={logo}
											alt='Bentto - Urządzenia Gastronomiczne'
											width={280}
											height={100}
											className='w-[80%] mx-auto'
										/>
									</Link>
								</SheetClose>
							</SheetTitle>
						</SheetHeader>

						<ul className='flex flex-col gap-6 mt-8'>
							{navLinks.map(item => (
								<li key={item.id}>
									<SheetClose asChild>
										<Link
											href={item.href}
											className={` text-[19px] font-bold uppercase ${pathname === item.href ? 'link-active' : 'link-hover'}`}>
											{item.title}
										</Link>
									</SheetClose>
								</li>
							))}
						</ul>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}

export default Navbar
