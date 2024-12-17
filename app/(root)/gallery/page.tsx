'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/counter.css'

const images = ['/images/bentto_1.webp', '/images/bentto_2.webp', '/images/bentto_3.webp']

const Page = () => {
	const [open, setOpen] = useState(false)
	const [index, setIndex] = useState(0)

	const fullscreenRef = useRef(null)
	return (
		<>
			<div style={{ display: 'flex', gap: '10px' }}>
				{images.map((img, i) => (
					<Image
						key={i}
						src={img}
						alt='Bentto'
						width={300}
						height={300}
						priority
						onClick={() => {
							setIndex(i)
							setOpen(true)
						}}
						style={{ cursor: 'pointer' }}
					/>
				))}
			</div>
			<Lightbox
				open={open}
				close={() => setOpen(false)} // Zamknij Lightbox
				slides={images.map(src => ({ src }))}
				plugins={[Thumbnails, Counter, Fullscreen, Slideshow, Zoom]}
			/>
		</>
	)
}

export default Page
