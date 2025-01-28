import Image from 'next/image'
import Link from 'next/link'

import Topbar from '@/components/topbar'
import Navbar from '@/components/navbar'

import logo from '@/public/logo.webp'

const Header = () => {
	return (
		<header className='fixed top-0 inset-x-0  bg-primary-200 shadow-lg z-50'>
			<div className='flex max-w-screen-max mx-auto'>
				<Link href='/' className=' flex justify-center items-center px-4 pl-4 lg:w-[20%] 2xl:w-[15%] bg-primary-400 '>
					<Image src={logo} alt='Bentto - Urządzenia Gastronomiczne' />
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
