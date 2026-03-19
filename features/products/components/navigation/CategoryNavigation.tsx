"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { buildProductsUrl } from "@/lib/utils/buildProductsUrl"

type Category = {
  name: string
  slug: string
}

type Props = {
  categories?: Category[]
  subcategories?: Category[]
  currentCategory?: string
  currentSubcategory?: string
}

export function CategoryNavigation({
  categories = [],
  subcategories = [],
  currentCategory,
  currentSubcategory,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  })

  const searchParams = useSearchParams()

  const hasSubcategories = !!subcategories?.length
  const items =
    currentCategory && hasSubcategories ? subcategories : categories

  const clearHref = buildProductsUrl(searchParams, {
    category: null,
    subcategory: null,
  })

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    })
  }

  // 🔥 Find active item
  const activeSlug = currentCategory
    ? currentSubcategory
    : currentCategory

  // 🔥 Animate underline position
  useEffect(() => {
    if (!activeSlug) return

    const el = itemRefs.current[activeSlug]
    const container = scrollRef.current

    if (el && container) {
      const elRect = el.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      setIndicatorStyle({
        width: elRect.width,
        left: elRect.left - containerRect.left,
      })

      // 🔥 Auto center active item
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })
    }
  }, [activeSlug])

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">

      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4 px-6">
        Collections
      </p>

      <div className="relative flex items-center">

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-0 z-10 h-full w-12
            flex items-center justify-center
            bg-gradient-to-r from-white via-white/90 to-transparent
            opacity-50 hover:opacity-100 transition
          "
        >
          ‹
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="
            overflow-x-auto scrollbar-hide w-full
            scroll-smooth
          "
        >
          <div className="relative flex gap-8 px-12 min-w-max items-center overflow-hidden">

            {/* BACK */}
            {currentCategory && (
              <Link
                href={clearHref}
                scroll={false}
                className="text-sm text-neutral-500 hover:text-black whitespace-nowrap transition"
              >
                ← All
              </Link>
            )}

            {items.map((item) => {
              const isActive =
                currentCategory
                  ? currentSubcategory === item.slug
                  : currentCategory === item.slug

              const href = buildProductsUrl(
                searchParams,
                currentCategory && hasSubcategories
                  ? { subcategory: item.slug }
                  : { category: item.slug, subcategory: null }
              )

              return (
                <Link
                  key={item.slug}
                  href={href}
                  scroll={false}
                  ref={(el) => {
                    itemRefs.current[item.slug] = el
                  }}
                  className={`
                    text-sm font-medium whitespace-nowrap
                    pb-2 transition-colors duration-200
                    ${
                      isActive
                        ? "text-black"
                        : "text-neutral-500 hover:text-black"
                    }
                  `}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* 🔥 Animated underline */}
            <span
              className="absolute bottom-0 h-[1px] bg-black transition-all duration-300 ease-out"
              style={{
                width: indicatorStyle.width,
                transform: `translateX(${indicatorStyle.left}px)`,
              }}
            />

          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-0 z-10 h-full w-12
            flex items-center justify-center
            bg-gradient-to-l from-white via-white/90 to-transparent
            opacity-50 hover:opacity-100 transition
          "
        >
          ›
        </button>
      </div>
    </div>
  )
}