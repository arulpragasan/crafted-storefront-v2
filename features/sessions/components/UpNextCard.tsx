import Image from "next/image"
import Link from "next/link"
import { Play, Images, Instagram, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import { Caption } from "@/components/ui/Typography"
import { sessionTypeLabel } from "./labels"
import type { MediaType, RelatedSession } from "@/features/sessions/mock/session.mock"

function MediaIcon({ type }: { type: MediaType }) {
  const cls = "h-3.5 w-3.5"
  switch (type) {
    case "image_gallery":
      return <Images className={cls} />
    case "instagram_post":
      return <Instagram className={cls} />
    case "external_link":
      return <ArrowUpRight className={cls} />
    default:
      return <Play className={cn(cls, "fill-current")} />
  }
}

/**
 * UpNextCard — one sibling session in the Up Next rail. Horizontal (thumb +
 * copy) so the rail stays scannable. Thumbnail meta-overlay signals media type
 * and live status at a glance; title is the focal point.
 */
export function UpNextCard({
  session,
  programSlug,
  highlighted = false,
}: {
  session: RelatedSession
  programSlug: string
  highlighted?: boolean
}) {
  const href = `/programs/${programSlug}/sessions/${session.slug}`
  const isLive = session.status === "live"
  const meta = [sessionTypeLabel(session.session_type), session.duration_label]
    .filter(Boolean)
    .join(" · ")

  return (
    <Link
      href={href}
      className={cn(
        "group flex gap-3 rounded-xl p-2 transition-colors hover:bg-neutral-50",
        highlighted && "bg-neutral-50"
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-36 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={getImageUrl(session.thumbnail_url)}
          alt={session.name}
          fill
          sizes="144px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isLive ? (
          <span className="absolute left-1.5 top-1.5 inline-flex items-center gap-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
            <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
            Live
          </span>
        ) : (
          <span className="absolute bottom-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-white">
            <MediaIcon type={session.media_type} />
          </span>
        )}
      </div>

      {/* Copy */}
      <div className="flex min-w-0 flex-col gap-1 pt-0.5">
        {highlighted && (
          <Caption variant="plain" tone="default" className="text-[11px] font-medium uppercase tracking-wide text-neutral-900">
            Up Next
          </Caption>
        )}
        <span className="line-clamp-2 font-serif text-sm leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500">
          {session.name}
        </span>
        {session.speakers && session.speakers.length > 0 && (
          <span className="line-clamp-1 font-sans text-xs font-medium text-neutral-700">
            {session.speakers.join(", ")}
          </span>
        )}
        {meta && (
          <Caption variant="plain" tone="secondary" className="text-xs">
            {meta}
          </Caption>
        )}
      </div>
    </Link>
  )
}
