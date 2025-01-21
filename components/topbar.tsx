'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Mail, MapPin, Phone } from 'lucide-react'

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
					<Link href='tel:+48602270903' className='topbar_link' aria-label='Zadzwoń'>
						<Phone className='topbar_link-icon ' />
						<span className=' topbar_link-text link-hover--group !hidden md:!block'>+48 602-270-903</span>
					</Link>
				</li>
				<li className='lg:border-r pl-4 lg:px-4 group'>
					<Link href='mailto:bentto@onet.eu' className='topbar_link ' aria-label='Napisz'>
						<Mail className='topbar_link-icon ' />
						<span className=' topbar_link-text link-hover--group !hidden md:!block'>bentto@onet.eu</span>
					</Link>
				</li>
				<li className='hidden lg:block pl-4 group'>
					<Link
						href='https://maps.app.goo.gl/LpyzjWDadgucufKh8'
						target='_blank'
						rel='noreferrer nofollow'
						className='topbar_link'
						aria-label='Zobacz adres'>
						<MapPin className='topbar_link-icon' />
						<span className='topbar_link-text link-hover--group'>Szaflarska 61, Nowy Targ</span>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Topbar
