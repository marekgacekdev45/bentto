import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
	description:
		'Bentto - Odkryj najlepsze urządzenia gastronomiczne w Nowym Targu. Jako eksperci w branży, oferujemy rozwiązania, które podniosą jakość Twojego biznesu. Sprawdź naszą ofertę już teraz!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl'>
			<body className={`${inter.className}  antialiased `}>{children}</body>
		</html>
	)
}
