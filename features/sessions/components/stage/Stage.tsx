import type { Media } from "@/features/sessions/mock/session.mock"
import { PlayerStage } from "./PlayerStage"
import { GalleryStage } from "./GalleryStage"
import { InstagramStage } from "./InstagramStage"
import { GatewayStage } from "./GatewayStage"

/**
 * Stage — the single polymorphic region. One shell, swappable stage:
 * resolves a media payload into one of three render families.
 *
 *   Player   → youtube_video · youtube_live · uploaded_video
 *   Gallery  → image_gallery · instagram_post
 *   Gateway  → external_link
 *
 * Everything around the Stage (title, speakers, description, Up Next) is
 * identical across media types — only this region changes.
 */
export function Stage({ media, title }: { media: Media; title: string }) {
  switch (media.kind) {
    case "youtube_video":
    case "youtube_live":
    case "uploaded_video":
      return <PlayerStage media={media} title={title} />
    case "image_gallery":
      return <GalleryStage media={media} title={title} />
    case "instagram_post":
      return <InstagramStage media={media} title={title} />
    case "external_link":
      return <GatewayStage media={media} title={title} />
    default:
      return null
  }
}
