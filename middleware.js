import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { supabaseClient } from './lib/supabase'

export async function middleware(req) {
//   const res = NextResponse.next()
  

  // Create a Supabase client configured to use cookies

  const currentTime = new Date();

  const getDate = currentTime;

  // Refresh session if expired - required for Server Components
  const res = await supabaseClient.auth.getSession()

  return console.log(`${getDate} - A supabase hook has been called to get the session. (--I am in middleware.js--)`)
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}