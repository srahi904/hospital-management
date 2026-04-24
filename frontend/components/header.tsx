"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const hasAuthCookie = document.cookie.split(';').some(c => c.trim().startsWith('auth='))
    setIsLoggedIn(hasAuthCookie)
  }, [pathname])

  const handleLogout = () => {
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
    router.push('/login');
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Activity className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold">MediCare Plus</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/doctors" className="text-sm font-medium hover:text-primary transition-colors">
            Doctors
          </Link>
          <Link href="/appointments" className="text-sm font-medium hover:text-primary transition-colors">
            Appointments
          </Link>
          <Link href="/patient-portal" className="text-sm font-medium hover:text-primary transition-colors">
            Patient Portal
          </Link>
          <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
            Admin
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          {isLoggedIn ? (
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
          <Button asChild>
            <Link href="/appointments">Book Appointment</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/doctors" className="text-sm font-medium hover:text-primary transition-colors">
              Doctors
            </Link>
            <Link href="/appointments" className="text-sm font-medium hover:text-primary transition-colors">
              Appointments
            </Link>
            <Link href="/patient-portal" className="text-sm font-medium hover:text-primary transition-colors">
              Patient Portal
            </Link>
            <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
              Admin
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex justify-start">
                <ModeToggle />
              </div>
              {isLoggedIn ? (
                <Button variant="ghost" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              )}
              <Button asChild>
                <Link href="/appointments">Book Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
