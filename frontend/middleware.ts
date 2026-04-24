import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth')

  // Paths that require authentication
  const requireAuthPaths = ['/admin', '/patient-portal', '/appointments']
  
  const isProtectedPath = requireAuthPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath && !authCookie) {
    // If user is not logged in and tries to access a protected route, redirect to login
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Optional: Redirect logged in users away from the login page
  if (request.nextUrl.pathname === '/login' && authCookie) {
    // Redirect to their respective dashboard based on fake auth role
    if (authCookie.value === 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url))
    } else {
      return NextResponse.redirect(new URL('/patient-portal', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/patient-portal/:path*', '/appointments/:path*', '/login'],
}
