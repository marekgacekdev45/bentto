import React from 'react'
import Background from '@/public/images/1600/bentto-32.webp'
import Hero from '@/components/hero'
import { GET_POST_BY_SLUG } from '@/sanity/lib/queries'
import { Post } from '@/sanity/lib/interface'
import Image from 'next/image'
import { url } from 'inspector'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

export const revalidate = 60

const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<Image src={urlFor(value).url()} alt='post' width={700} height={700} className='mx-auto' />
		),
	},
}

const page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params

	const { title, thumbnail, content, pdf, publishedAt }: Post = await GET_POST_BY_SLUG(slug)

	console.log(pdf)

	return (
		<>
			<Hero bgi={Background} heading='Aktualności' />

			<section id='o-nas' className='pt-5 sm:pt-10 pb-20 xl:mt-32 2xl:mt-12'>
				<div className='wrapper !max-w-screen-2xl'>
					<div className='flex flex-col lg:flex-row gap-y-12'>
						{/* Sticky Content */}
						<div className='w-full lg:w-[50%] flex flex-col gap-y-12 lg:pr-12 lg:sticky top-32 h-full'>
							<Image
								src={urlFor(thumbnail).url()}
								alt=' '
								className='w-full object-cover shadow-md'
								width={500}
								height={800}
							/>
						</div>

						{/* Main Content */}
						<div className='w-full lg:w-[50%] lg:pl-12 space-y-6'>
							<div>
								<h2 className='text-4xl font-bold text-black pb-2'>{title}</h2>
								<p className='text-sm'>{new Date(publishedAt).toLocaleDateString()}</p>
							</div>
							<div className='prose font-light pt-3'>
								<PortableText value={content} components={myPortableTextComponents} />
							</div>
                            
							{pdf && <div>
                                <Link href={pdf} target='_blank' className='text-black font-semibold  link-hover'>Pobierz pdf</Link>
                                </div>
                                }
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
