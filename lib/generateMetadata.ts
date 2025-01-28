import { Metadata } from 'next'

export const generateMetadata = ({
	title = 'Bentto - Urządzenia Gastonomiczne Nowy Targ',
	description = 'Bentto - Odkryj najlepsze urządzenia gastronomiczne w Nowym Targu. Jako eksperci w branży, oferujemy rozwiązania, które podniosą jakość Twojego biznesu. Sprawdź naszą ofertę już teraz!',
	path = '/',
}: {
	title?: string
	description?: string
	path?: string
}): Metadata => {
	const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bentto.eu/')
	const fullPath = path === '/' ? metadataBase.href : new URL(path, metadataBase).href

	return {
		metadataBase,
		title: {
			default: title,
			template: `%s | Bentto - Urządzenia Gastonomiczne`,
		},
		description,
		generator: 'Next.js',
		applicationName: 'Bentto - Urządzenia Gastonomiczne',
		referrer: 'origin-when-cross-origin',
		keywords:  [
            "Realizacje gastronomiczne",
            "Projekty kuchni gastronomicznych",
            "Wyposażenie restauracji",
            "Nowoczesny sprzęt gastronomiczny",
            "Funkcjonalne kuchnie"
          ],
		authors: { name: 'Marek Gacek', url: 'https://marekgacekdev.pl' },
		creator: 'Marek Gacek',
		publisher: 'Marek Gacek',
		alternates: {
			canonical: fullPath,
		},
		openGraph: {
			title,
			description,
			type: 'website',
			locale: 'pl_PL',
			url: fullPath,
			siteName: 'Bentto - Urządzenia Gastonomiczne',
		},
	}
}
