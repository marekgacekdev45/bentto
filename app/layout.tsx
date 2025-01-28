import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/generateMetadata'

import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = generateMetadata({})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl'>
			<meta name='apple-mobile-web-app-title' content='Bentto' />

			<body className={`${montserrat.className}  antialiased `}>{children}</body>
		</html>
	)
}
