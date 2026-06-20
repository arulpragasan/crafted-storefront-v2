"use client"

import Image from "next/image"
import { useState } from "react"
import { Play } from "lucide-react"

import { cn } from "@/lib/utils"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import type { Media } from "@/features/sessions/mock/session.mock"

/**
 * Player Stage — youtube_video · youtube_live · uploaded_video.
 *
 * Shows a poster facade with a single, unmistakable play affordance, then
 * swaps in the real player on click. The facade keeps the design-system
 * surface (rounded, neutral) until the user commits, so third-party chrome
 * never flashes in unprompted. This is the "media is the page" focal point.
 */
export function PlayerStage({ media, title }: { media: Media; title: string }) {
  const [playing, setPlaying] = useState(false)

  if (
    media.kind !== "youtube_video" &&
    media.kind !== "youtube_live" &&
    media.kind !== "uploaded_video"
  ) {
    return null
  }

  const poster = getImageUrl(media.poster_url)
  const isLive = media.kind === "youtube_live" && media.is_live

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-video">
      {playing ? (
        media.kind === "uploaded_video" ? (
          // Mock first-party player — real <video> with controls, no src in mock.
          <video
            className="h-full w-full"
            controls
            autoPlay
            poster={poster}
            aria-label={title}
          >
            <source src={media.playback_url} type="video/mp4" />
          </video>
        ) : (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${media.youtube_id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={poster}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 860px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Live pill — reuses the storefront live-badge language */}
          {isLive && (
            <span
              className={cn(
                "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full",
                "bg-red-500 px-3 py-1 text-white text-xs font-medium uppercase tracking-wide"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          )}

          {/* Play affordance */}
          <span
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "flex h-16 w-16 items-center justify-center rounded-full md:h-20 md:w-20",
              "bg-white/95 text-neutral-900 shadow-lg",
              "transition-transform duration-200 group-hover:scale-105"
            )}
          >
            <Play className="h-7 w-7 translate-x-0.5 fill-current" />
          </span>
        </button>
      )}
    </div>
  )
}
