import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { getImageUrl } from "@/lib/utils/getImageUrl"
import { Caption } from "@/components/ui/Typography"
import type { Media } from "@/features/sessions/mock/session.mock"

/**
 * Gateway Stage — external_link.
 *
 * NOT a fake player. A branded launch card: thumbnail backdrop + one
 * unmistakable "Open" action that leaves to the destination in a new tab.
 * The rest of the page (speakers, description, Up Next) still renders, so a
 * gateway session is never a dead end — the user returns to continuation.
 */
export function GatewayStage({ media, title }: { media: Media; title: string }) {
  if (media.kind !== "external_link") return null

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-900 aspect-video">
      <Image
        src={getImageUrl(media.thumbnail_url)}
        alt={title}
        fill
        priority
        sizes="(min-width: 1024px) 860px, 100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
        <Caption variant="plain" tone="inverse" className="opacity-80">
          This experience lives on {media.destination_label}
        </Caption>

        <a
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-neutral-900 transition-colors hover:bg-white/90"
        >
          Open Experience
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
