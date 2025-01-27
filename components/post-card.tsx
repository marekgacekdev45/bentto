import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import { Post } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

const PostCard = ({ post: { title, excerpt, slug, thumbnail } }: { post: Post }) => {
	return (
	

				<div className=' bg-primary-600 border border-primary-700  shadow-lg flex flex-col md:flex-row lg:flex-col'>
					<div className='overflow-hidden w-full md:w-[45%] lg:w-full md:order-1 lg:order-none'>
						<Link href={`/aktualnosci/${slug}`}>
							<Image
								src={urlFor(thumbnail).url()}
								alt={`miniaturka posta o tytule ${title}`}
								className=' h-[275px] object-cover w-full'
								width={335}
								height={250}
							/>
						</Link>
					</div>

					<div className='p-5 flex justify-between items-center md:items-start lg:items-center flex-col text-left lg:text-center w-full md:w-[55%] lg:w-full'>
			<div className='w-full'>
				<Link href={`/aktualnosci/${slug}`}>
					<h3 className='mb-2 text-xl font-black text-black line-clamp-2'>{title}</h3>
				</Link>
				<p className='text !text-text !text-base line-clamp-3 sm:line-clamp-3 lg:min-h-[75px]'>{excerpt}</p>
			</div>
			<Button href={`/aktualnosci/${slug}`} label='Czytaj' className='mt-5' />
		</div>

				</div>
	)
}

export default PostCard
