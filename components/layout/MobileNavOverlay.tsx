"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { useEffect, useRef } from "react"
import { primaryNav, guestNav, authenticatedNav } from "@/lib/navigation"
import { isAuthenticated } from "@/lib/auth"
import { SectionTitle, Body } from "@/components/ui/Typography"

type MobileNavOverlayProps = {
  id: string
  open: boolean
  onClose: () => void
}

export function MobileNavOverlay({ id, open, onClose }: MobileNavOverlayProps) {
  const pathname = usePathname()
  const secondaryNav = isAuthenticated ? authenticatedNav : guestNav
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Move focus into overlay when opened
  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus()
    }
  }, [open])

  // Escape key closes overlay
  useEffect(() => {
    if (!open) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  // Focus trap
  useEffect(() => {
    if (!open) return

    const overlay = overlayRef.current
    if (!overlay) return

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return

      const focusableElements = overlay!.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      )

      if (focusableElements.length === 0) return

      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleTab)
    return () => document.removeEventListener("keydown", handleTab)
  }, [open])

  return (
    <div
      id={id}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-nav-title"
      inert={!open}
      className={clsx(
        "fixed inset-0 z-[100] flex flex-col bg-white transition-opacity duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 h-20">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif tracking-[0.25em] text-xl"
        >
          CRAFTED
        </Link>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="text-sm tracking-wide text-neutral-700 hover:text-black transition-colors"
        >
          Close
        </button>
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 flex flex-col justify-center px-10 -mt-20"
        aria-label="Main navigation"
      >
        <h2 id="mobile-nav-title" className="sr-only">
          Navigation
        </h2>

        <ul className="space-y-8">
          {primaryNav.map((item) => {
            const active = pathname.startsWith(item.href)

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={clsx(
                    "block transition-colors",
                    active ? "text-black" : "text-neutral-500 hover:text-black"
                  )}
                >
                  <SectionTitle as="span" size="section">
                    {item.label}
                  </SectionTitle>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Divider */}
        <div className="my-10 w-12 border-t border-neutral-300" />

        <ul className="space-y-5">
          {secondaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-neutral-500 hover:text-black transition-colors"
              >
                <Body>{item.label}</Body>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
