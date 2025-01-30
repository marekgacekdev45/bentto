import Hero from '@/components/hero'


import Background from '@/public/bentto-kontakt.webp'
import { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Kontakt',
	description:
		'Skontaktuj się z nami – chętnie odpowiemy na Twoje pytania. Sprawdź dane kontaktowe Bentto i napisz do nas lub zadzwoń, aby uzyskać więcej informacji.',

	openGraph: {
		title: 'Kontakt | Bentto - Urządzenia Gastonomiczne Nowy Targ',
		description:
			'Skontaktuj się z nami – chętnie odpowiemy na Twoje pytania. Sprawdź dane kontaktowe Bentto i napisz do nas lub zadzwoń, aby uzyskać więcej informacji.',
		type: 'website',
		locale: 'pl_PL',
		url: 'https://bentto.eu/kontakt',
		siteName: 'Bentto - Urządzenia Gastonomiczne',
		images: [
			{
				url: '/bentto-kontakt.webp',
				width: 1200,
				height: 630,
				alt: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
			},
		],
	},
	alternates: {
		canonical: 'https://bentto.eu/kontakt',
	},
}

const page = () => {
  return (
    <>
    <Hero bgi={Background} heading='Kontakt' />
    </>
  )
}

export default page