import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (pathname === '/gallery' || pathname === '/blog') {
		return NextResponse.rewrite(new URL('/404', request.url))
	}

	if (pathname.startsWith('/blog')) {
		return NextResponse.rewrite(new URL('/404', request.url))
	}

	return NextResponse.next()
}
