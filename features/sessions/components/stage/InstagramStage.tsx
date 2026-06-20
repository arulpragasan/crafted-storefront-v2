import Image from "next/image"
import { Instagram } from "lucide-react"

import { getImageUrl } from "@/lib/utils/getImageUrl"
import { Caption } from "@/components/ui/Typography"
import type { Media } from "@/features/sessions/mock/session.mock"

/**
 * Instagram Stage — instagram_post.
 *
 * A single-frame, portrait-friendly embed facade — NOT stretched to 16:9.
 * Constrained max-width and centered so it reads as a native IG post, with a
 * clear path out to the source. Surrounding metadata carries more weight here
 * because the media itself is a single frame.
 */
export function InstagramStage({ media, title }: { media: Media; title: string }) {
  if (media.kind !== "instagram_post") return null

  return (
    <div className="flex justify-center">
      <figure className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <div className="relative aspect-square w-full bg-neutral-100">
          <Image
            src={getImageUrl(media.image_url)}
            alt={title}
            fill
            priority
            sizes="480px"
            className="object-cover"
          />
        </div>

        <figcaption className="flex flex-col gap-3 p-5">
          {media.caption && (
            <Caption variant="plain" tone="secondary" className="leading-relaxed">
              {media.caption}
            </Caption>
          )}
          <a
            href={media.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-500"
          >
            <Instagram className="h-4 w-4" />
            View on Instagram
          </a>
        </figcaption>
      </figure>
    </div>
  )
}
