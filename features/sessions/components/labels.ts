import type { MediaType, SessionType } from "@/features/sessions/mock/session.mock"

/** Human label for a session type. */
export function sessionTypeLabel(type: SessionType): string {
  const map: Record<SessionType, string> = {
    showcase: "Showcase",
    talk: "Talk",
    interview: "Interview",
    panel: "Panel",
    workshop: "Workshop",
  }
  return map[type]
}

/**
 * Human label for a media type — only surfaced when it adds meaning.
 * Returns null for plain on-demand video, where the chip would be noise
 * (we never print "uploaded_video" / "youtube_video" literally).
 */
export function mediaTypeLabel(type: MediaType): string | null {
  const map: Record<MediaType, string | null> = {
    youtube_video: null,
    uploaded_video: null,
    youtube_live: "Live",
    image_gallery: "Gallery",
    instagram_post: "Instagram",
    external_link: "External",
  }
  return map[type]
}
