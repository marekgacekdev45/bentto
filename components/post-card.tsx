import Image from 'next/image'
import Link from 'next/link'

import { Post } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

const PostCard = ({ post: { title, excerpt, slug, thumbnail } }: { post: Post }) => {
	return (
		<Link
			href={`/aktualnosci/${slug}`}
			className=' bg-primary-600 border border-primary-700  shadow-lg flex flex-col md:flex-row lg:flex-col group'>
			<div className='overflow-hidden w-full md:w-[45%] lg:w-full md:order-1 lg:order-none'>
				<Image
					src={urlFor(thumbnail).url()}
					alt={`miniaturka posta o tytule ${title}`}
					className=' h-[275px] object-cover w-full group-hover:scale-105 duration-300 ease-in-out'
					width={335}
					height={250}
				/>
			</div>

			<div className='p-5 py-10 flex justify-between items-center md:items-start lg:items-center flex-col text-left lg:text-center w-full md:w-[55%] lg:w-full'>
				<div className='w-full'>
					<h3 className='mb-2 text-xl font-black text-black line-clamp-2'>{title}</h3>

					<p className='text !text-text !text-base line-clamp-3 sm:line-clamp-3 lg:min-h-[75px]'>{excerpt}</p>
				</div>
			</div>
		</Link>
	)
}

export default PostCard
