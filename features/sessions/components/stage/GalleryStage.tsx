"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import type { Media } from "@/features/sessions/mock/session.mock"

/**
 * Gallery Stage — image_gallery.
 *
 * Turns lean-back into lean-through: a large active frame with a counter,
 * a thumbnail strip (desktop) and arrow/keyboard navigation. Reaching the
 * last frame is the natural cue to continue (handled by the page's Up Next).
 */
export function GalleryStage({ media, title }: { media: Media; title: string }) {
  const images = media.kind === "image_gallery" ? media.images : []
  const [active, setActive] = useState(0)
  const count = images.length

  const go = useCallback(
    (next: number) => setActive((next + count) % count),
    [count]
  )

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") go(active + 1)
      if (e.key === "ArrowLeft") go(active - 1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [active, go])

  if (count === 0) return null
  const current = images[active]

  return (
    <div className="flex flex-col gap-3">
      {/* Active frame */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 aspect-[3/2]">
        <Image
          src={getImageUrl(current.url)}
          alt={current.alt || `${title} — ${active + 1} of ${count}`}
          fill
          priority
          sizes="(min-width: 1024px) 860px, 100vw"
          className="object-cover"
        />

        {/* Counter */}
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium tabular-nums text-white">
          {active + 1} / {count}
        </span>

        {/* Prev / Next */}
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow transition-transform hover:scale-105"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow transition-transform hover:scale-105"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnail strip (desktop) / dots (mobile) */}
      <div className="hidden gap-2 overflow-x-auto pb-1 sm:flex">
        {images.map((img, i) => (
          <button
            key={img.url}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            aria-current={i === active}
            className={cn(
              "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-neutral-100",
              "ring-2 transition",
              i === active ? "ring-neutral-900" : "ring-transparent hover:ring-neutral-300"
            )}
          >
            <Image
              src={getImageUrl(img.url)}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 sm:hidden">
        {images.map((img, i) => (
          <button
            key={img.url}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to image ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-6 bg-neutral-900" : "w-1.5 bg-neutral-300"
            )}
          />
        ))}
      </div>
    </div>
  )
}
