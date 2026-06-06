'use client'

import Link from 'next/link'
import { Trophy, Calendar, Users, Home, MapPin, Settings, LogIn } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Predictor', href: '/predictor', icon: Trophy },
    { name: 'Groups', href: '/groups', icon: Users },
    { name: 'Schedule', href: '/schedule', icon: Calendar },
    { name: 'Teams', href: '/teams', icon: MapPin },
  ]

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">
                FIFA 2026 Predictor
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'transition-colors hover:text-foreground/80 flex items-center gap-2',
                      pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          
          {/* Mobile Nav */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="md:hidden flex items-center">
              <Trophy className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold">FIFA 2026</span>
            </div>
            <nav className="flex items-center">
              <Link href="/login" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline-block">Login</span>
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 border-t border-border/40 bg-background/95 backdrop-blur flex justify-around items-center">
         {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex flex-col items-center justify-center w-full h-full space-y-1',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-[10px] font-medium">{link.name}</span>
                </Link>
              )
            })}
      </div>
    </>
  )
}
