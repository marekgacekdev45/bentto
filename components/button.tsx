import { cn } from '@/lib/utils'
import Link from 'next/link'

const Button = ({ className, href, label }: { href: string; label: string; className?: string }) => {
	return (
		<Link
			href={href}
			className={cn(
				'rounded-sm px-8 py-2.5 md:py-4 overflow-hidden relative group cursor-pointer border-2 font-semibold border-secondary-400 text-white bg-secondary-400 uppercase',
				className
			)}>
			<span className='absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease'></span>
			<span className='relative text-white transition duration-300 group-hover:text-secondary-400 ease'>{label}</span>
		</Link>
	)
}

export default Button
