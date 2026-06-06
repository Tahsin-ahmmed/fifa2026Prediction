'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Trophy, Calendar, Users, Home, MapPin, LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PWAInstallButton } from '@/components/pwa-install-button'
import Link from 'next/link'

const links = [
  { name: 'Home',      href: '/',          icon: Home     },
  { name: 'Predictor', href: '/predictor', icon: Trophy   },
  { name: 'Groups',    href: '/groups',    icon: Users    },
  { name: 'Schedule',  href: '/schedule',  icon: Calendar },
  { name: 'Teams',     href: '/teams',     icon: MapPin   },
]

/**
 * Smart navigation:
 * - Home → any page  : router.push()   → history grows by 1 (back returns to home)
 * - Page → other page: router.replace()→ replaces current entry (back still goes to home)
 *
 * Result: Phone back button always goes Home → then closes the app.
 * The predictor's internal step "Back" button is a UI button unaffected by this.
 */
export function Navbar() {
  const pathname = usePathname()
  const router   = useRouter()

  const navigate = (href: string) => {
    if (href === pathname) return        // already here, do nothing
    if (pathname === '/') {
      router.push(href)                 // leaving home → add history entry
    } else {
      router.replace(href)              // between non-home pages → replace, no stack growth
    }
  }

  return (
    <>
      {/* ── Top nav (desktop) ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
          <div className="mr-4 hidden md:flex">
            {/* Logo — always push so back works from home */}
            <button
              onClick={() => router.push('/')}
              className="mr-6 flex items-center space-x-2 cursor-pointer"
            >
              <Trophy className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">FIFA 2026 Predictor</span>
            </button>

            <nav className="flex items-center gap-6 text-sm">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <button
                    key={link.href}
                    onClick={() => navigate(link.href)}
                    className={cn(
                      'transition-colors hover:text-foreground/80 flex items-center gap-2 cursor-pointer',
                      pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Mobile: title + install + login */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <button
              onClick={() => navigate('/')}
              className="md:hidden flex items-center cursor-pointer"
            >
              <Trophy className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold">FIFA 2026</span>
            </button>
            <nav className="flex items-center gap-2">
              <PWAInstallButton />
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline-block">Login</span>
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* ── Bottom nav (mobile) ── */}
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 border-t border-border/40 bg-background/95 backdrop-blur flex justify-around items-center">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          return (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className={cn(
                'flex flex-col items-center justify-center w-full h-full space-y-1 cursor-pointer touch-manipulation',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{link.name}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
