"use client"

import Link from "next/link"
import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { ProfileDropdown } from "@/components/layout/ProfileDropdown"
import { MobileNavOverlay } from "@/components/layout/MobileNavOverlay"
import { leftNav, rightNav } from "@/lib/navigation"

const MOBILE_NAV_ID = "mobile-nav-overlay"

export function Header({ brandName }: { brandName?: string }) {
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!brandName) return

    const hero = document.getElementById("brand-hero")

    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBrand(!entry.isIntersecting)
      },
      { rootMargin: "-80px 0px 0px 0px" }
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [brandName])

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleMobileClose = () => {
    setMobileOpen(false)
    // Restore focus to the menu button
    menuButtonRef.current?.focus()
  }

  const navLink = (item: { label: string; href: string }) => {
    const active = pathname.startsWith(item.href)

    return (
      <Link
        key={item.href}
        href={item.href}
        className={clsx(
          "relative transition-colors",
          active ? "text-black" : "text-neutral-600 hover:text-black"
        )}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200"
            : "bg-white/60 backdrop-blur-lg"
        )}
      >
        {/* Desktop */}
        <div
          className={clsx(
            "max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 hidden lg:grid grid-cols-3 items-center transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          {/* Left */}
          <nav className="flex items-center gap-8 text-sm tracking-wide">
            {leftNav.map(navLink)}
          </nav>

          {/* Center */}
          <div className="flex justify-center">
            {showBrand && brandName ? (
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-700">
                {brandName}
              </span>
            ) : (
              <Link
                href="/"
                className={clsx(
                  "font-serif tracking-[0.25em]",
                  scrolled ? "text-lg" : "text-xl md:text-2xl"
                )}
              >
                CRAFTED
              </Link>
            )}
          </div>

          {/* Right */}
          <nav className="flex items-center justify-end gap-8 text-sm tracking-wide">
            {rightNav.map(navLink)}
            <ProfileDropdown />
          </nav>
        </div>

        {/* Mobile */}
        <div
          className={clsx(
            "lg:hidden flex items-center justify-between px-6 transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          {/* Menu trigger */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls={MOBILE_NAV_ID}
            className="text-sm tracking-wide text-neutral-700 hover:text-black transition-colors"
          >
            Menu
          </button>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            {showBrand && brandName ? (
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-700">
                {brandName}
              </span>
            ) : (
              <Link
                href="/"
                className={clsx(
                  "font-serif tracking-[0.25em]",
                  scrolled ? "text-lg" : "text-xl"
                )}
              >
                CRAFTED
              </Link>
            )}
          </div>

          {/* Empty spacer to maintain layout balance */}
          <div className="w-8" />
        </div>
      </header>

      {/* Mobile overlay */}
      <MobileNavOverlay
        id={MOBILE_NAV_ID}
        open={mobileOpen}
        onClose={handleMobileClose}
      />
    </>
  )
}
