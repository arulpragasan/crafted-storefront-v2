"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import { CardHeading, Caption, Display, Meta } from "@/components/ui/Typography"

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type ProgramBrand = {
  id: number
  name: string
  slug: string
  logo_url?: string
}

type ProgramFeaturedSession = {
  id: number
  name: string
  session_type?: string
  media_type?: string
  status?: string
  thumbnail_url?: string
}

type Program = {
  id: number
  name: string
  slug: string
  description?: string

  status?: string

  cover_image_url?: string

  session_count?: number
  speaker_count?: number

  brand?: ProgramBrand

  featured_session?: ProgramFeaturedSession
}

export type ProgramCardProps = {
  program: Program
  variant?: "poster" | "spotlight"
  showBrand?: boolean
  className?: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const isLive = (status?: string) => status === "live"

/** "1 session" · "8 sessions" — count is a value signal, never an apology. */
function countLabel(count: number | undefined, singular: string): string | null {
  if (count == null || count <= 0) return null
  return `${count} ${count === 1 ? singular : `${singular}s`}`
}

/** Joins editorial meta fragments with the system "·" separator. */
function metaLine(parts: Array<string | null | undefined>): string {
  return parts.filter(Boolean).join(" · ")
}

// ─────────────────────────────────────────────────────────────────────────────
// Live badge — the single sanctioned non-neutral accent (status.live token)
// ─────────────────────────────────────────────────────────────────────────────

function LiveBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full",
        "bg-red-500 px-2.5 py-1",
        "text-white text-xs font-medium uppercase tracking-wide",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
      Live
    </span>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ProgramCard
// ─────────────────────────────────────────────────────────────────────────────

export function ProgramCard({
  program,
  variant = "poster",
  showBrand = true,
  className,
}: ProgramCardProps) {
  const href = `/programs/${program.slug}`
  const cover = getImageUrl(program.cover_image_url)
  const live = isLive(program.status)

console.log("cover")
console.log(program.cover_image_url)
console.log(cover)

  const brandName = showBrand ? program.brand?.name : undefined
  const sessions = countLabel(program.session_count, "session")
  const speakers = countLabel(program.speaker_count, "speaker")

  // ── Spotlight — large editorial hero, text over scrim ───────────────────────
  if (variant === "spotlight") {
    const statLine = metaLine([sessions, speakers])

    return (
      <Link
        href={href}
        className={cn("group block", className)}
        aria-label={`Explore program: ${program.name}`}
      >
        <article
          className={cn(
            "relative w-full overflow-hidden rounded-3xl bg-neutral-100",
            "aspect-[3/4] sm:aspect-[4/3] md:aspect-[2/1] lg:aspect-[21/9]"
          )}
        >
          {/* Cover */}
          <Image
            src={cover}
            alt={program.name}
            fill
            priority
            sizes="(min-width: 1024px) 1280px, 100vw"
            className={cn(
              "object-cover",
              "transition-transform duration-700 ease-out",
              "group-hover:scale-[1.03]"
            )}
          />

          {/* Cinematic readability scrim */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-gradient-to-t from-black/80 via-black/30 via-40% to-transparent"
            )}
          />

          {/* Live badge */}
          {live && (
            <LiveBadge className="absolute left-6 top-6 md:left-8 md:top-8" />
          )}

          {/* Text overlay */}
          <div
            className={cn(
              "absolute inset-x-0 bottom-0",
              "flex flex-col gap-4 md:gap-5",
              "p-6 md:p-10 lg:p-14",
              "max-w-4xl"
            )}
          >
            {brandName && (
              <Meta tone="inverse" className="uppercase tracking-widest">
                {brandName}
              </Meta>
            )}

            <Display
              as="h2"
              tone="inverse"
              className="transition-opacity duration-200 group-hover:opacity-80"
            >
              {program.name}
            </Display>

            {(statLine || program.featured_session?.name) && (
              <div className="flex flex-col gap-1.5">
                {statLine && (
                  <Caption variant="plain" tone="inverse">
                    {statLine}
                  </Caption>
                )}
                {program.featured_session?.name && (
                  <Caption variant="plain" tone="inverse" className="line-clamp-1 opacity-80">
                    Featuring · {program.featured_session.name}
                  </Caption>
                )}
              </div>
            )}

            {/* CTA — visual only; the whole card is the link */}
            <span
              className={cn(
                "mt-3 inline-flex items-center gap-2",
                "text-sm uppercase tracking-widest text-white/90",
                "transition-all duration-200 group-hover:text-white group-hover:gap-3"
              )}
            >
              View Program
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </article>
      </Link>
    )
  }

  // ── Poster (default) — image-first discovery card ───────────────────────────
  const posterMeta = metaLine([brandName, sessions])
  const featuredSessionName = program.featured_session?.name

  return (
    <Link href={href} className={cn("group block", className)}>
      <article className="flex flex-col">
        {/* Cover */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={cover}
            alt={program.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
            className={cn(
              "object-cover",
              "transition-transform duration-700 ease-out",
              "group-hover:scale-[1.03]"
            )}
          />

          {live && <LiveBadge className="absolute right-3 top-3" />}
        </div>

        {/* Copy */}
        <div className="space-y-2.5 pt-5">
          {posterMeta && (
            <Meta className="uppercase tracking-wide">{posterMeta}</Meta>
          )}

          <CardHeading className="transition-opacity duration-200 group-hover:opacity-70">
            {program.name}
          </CardHeading>

          {featuredSessionName && (
            <div className="flex flex-col gap-0.5">
              <Meta className="opacity-60">Featured</Meta>
              <Caption variant="plain" tone="secondary" className="line-clamp-2">
                {featuredSessionName}
              </Caption>
            </div>
          )}

          {speakers && (
            <Caption variant="plain" tone="secondary" className="opacity-70">
              {speakers}
            </Caption>
          )}
        </div>
      </article>
    </Link>
  )
}

export default ProgramCard
