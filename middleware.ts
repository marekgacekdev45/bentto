import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (  pathname === '/blog' || pathname === '/realisations' || pathname === '/contact' || pathname === '/privacy-policy') {
		return NextResponse.rewrite(new URL('/404', request.url))
	}

	if (pathname.startsWith('/blog') || pathname.startsWith('/realisations')) {
		return NextResponse.rewrite(new URL('/404', request.url))
	}

	return NextResponse.next()
}
