// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// // DEVELOPMENT MIDDLEWARE - NO AUTHENTICATION CHECKS
// // This allows free access to all routes during development
// export async function middleware(req: NextRequest) {
//   // Simply pass through all requests without any authentication checks
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/login'],
// };

// PRODUCTION MIDDLEWARE - UNCOMMENT WHEN READY FOR PRODUCTION

import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
          res = NextResponse.next({
            request: req,
          });
          cookiesToSet.forEach(({ name, value, options }) => res.cookies.set(name, value, options));
        },
      },
    },
  );

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const protectedPaths = ['/dashboard'];
    const currentPath = req.nextUrl.pathname;

    // Check if current path starts with any protected path
    const isProtectedRoute = protectedPaths.some(
      (path) => currentPath === path || currentPath.startsWith(`${path}/`),
    );

    if (isProtectedRoute && !user) {
      // Optionally preserve the intended destination
      const redirectUrl = new URL('/login', req.url);
      redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }

    // Optional: Redirect authenticated users away from login page
    if (currentPath === '/login' && user) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return res;
  } catch (error) {
    console.error('Middleware auth error:', error);
    // On auth error, redirect to login for protected routes
    const protectedPaths = ['/dashboard'];
    const currentPath = req.nextUrl.pathname;

    const isProtectedRoute = protectedPaths.some(
      (path) => currentPath === path || currentPath.startsWith(`${path}/`),
    );

    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return res;
  }
}
