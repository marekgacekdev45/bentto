import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_POST_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params

	const { data: post } = await sanityFetch({ query: GET_POST_BY_SLUG_QUERY, params: { slug } })

    console.log(post);

	const myPortableTextComponents = {
        types: {
            image: ({ value }: any) => (
                <Image src={urlFor(value).url()} alt='post' width={700} height={700} className='mx-auto' />
            ),
            
        },
    }

	return (
		<>
			<h1>{post.title};</h1>
			<Image src={urlFor(post.thumbnail).url()} alt={post.title} width={1920} height={500} />
            <div className='prose'>

            <PortableText value={post.content} components={myPortableTextComponents}  />
            </div>

            <p>tutaj link do PDF: <Link href={post.pdfURL} target='_blank'>PDF</Link></p>
		</>
	)
}

export default page
