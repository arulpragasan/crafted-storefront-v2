"use client"

import Link from "next/link"
import clsx from "clsx"

const navItems = [
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
  { label: "Profile", href: "/profile" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl tracking-wide font-semibold"
        >
          Crafted
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-neutral-600 hover:text-black transition-colors duration-300"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}