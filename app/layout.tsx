import type { Metadata } from 'next'
import Script from 'next/script'

import { Montserrat } from 'next/font/google'

import { Toaster } from 'sonner'

import './globals.css'

const montserrat = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		default: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
		template: '%s | Bentto - Urządzenia Gastonomiczne',
	},
	description:
		'Bentto - Odkryj najlepsze urządzenia gastronomiczne w Nowym Targu. Jako eksperci w branży, oferujemy rozwiązania, które podniosą jakość Twojego biznesu. Sprawdź naszą ofertę już teraz!',
	generator: 'Next.js',
	applicationName: 'Bentto - Urządzenia Gastonomiczne',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Realizacje gastronomiczne',
		'Projekty kuchni gastronomicznych',
		'Wyposażenie restauracji',
		'Nowoczesny sprzęt gastronomiczny',
		'Funkcjonalne kuchnie',
	],
	authors: { name: 'Marek Gacek', url: 'https://marekgacekdev.pl' },
	creator: 'Marek Gacek',
	publisher: 'Marek Gacek',
	openGraph: {
		title: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
		description:
			'Bentto - Odkryj najlepsze urządzenia gastronomiczne w Nowym Targu. Jako eksperci w branży, oferujemy rozwiązania, które podniosą jakość Twojego biznesu. Sprawdź naszą ofertę już teraz!',
		type: 'website',
		locale: 'pl_PL',
		url: 'https://bentto.eu/',
		siteName: 'Bentto - Urządzenia Gastonomiczne',
		images: [
			{
				url: 'https://bentto.eu/bentto-o-nas.webp',
				width: 1200,
				height: 630,
				alt: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
			},
		],
	
	},
	alternates: {
		canonical: 'https://bentto.eu/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl'>
			<head>
				<Script
					src={`https://cdn-cookieyes.com/client_data/5d5be7a176eb3875f9d137c8/script.js`}
					strategy='beforeInteractive'></Script>
				<meta name='apple-mobile-web-app-title' content='Bentto' />
				<meta name='theme-color' content='#ffffff' />
			</head>

			<body className={`${montserrat.className}  antialiased `}>
				{children}

				<Toaster richColors expand closeButton />
			</body>
		</html>
	)
}
