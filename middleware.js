import { NextResponse } from 'next/server'

const BYPASS_SECRET = 'kodokan2026'

export function middleware(request) {
  if (process.env.MAINTENANCE_MODE !== 'true') {
    return NextResponse.next()
  }

  const { pathname, searchParams } = request.nextUrl

  if (pathname === '/maintenance') {
    return NextResponse.next()
  }

  // ?bypass=kodokan2026 → Cookie setzen und weiterleiten
  if (searchParams.get('bypass') === BYPASS_SECRET) {
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set('maintenance_bypass', BYPASS_SECRET, {
      httpOnly: true,
      maxAge: 60 * 60 * 8, // 8 Stunden
      path: '/',
    })
    return response
  }

  // Bypass-Cookie vorhanden → normale Seite anzeigen
  if (request.cookies.get('maintenance_bypass')?.value === BYPASS_SECRET) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/maintenance', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|images|favicon\\.ico).*)'],
}
