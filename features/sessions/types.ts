export type MediaType =
  | "youtube_video"
  | "youtube_live"
  | "uploaded_video"
  | "image_gallery"
  | "instagram_post"
  | "external_link"

export type SessionType =
  | "showcase"
  | "talk"
  | "interview"
  | "panel"
  | "workshop"

export type SessionMedia =
  | {
      kind: "youtube_video"
      url: string
      poster_url?: string | null
    }
  | {
      kind: "youtube_live"
      url: string
      poster_url?: string | null
    }
  | {
      kind: "uploaded_video"
      video_url?: string | null
      poster_url?: string | null
    }
  | {
      kind: "image_gallery"
      images: {
        url: string
        alt?: string
      }[]
    }
  | {
      kind: "instagram_post"
      url: string
      poster_url?: string | null
    }
  | {
      kind: "external_link"
      url: string
      poster_url?: string | null
    }

export type Speaker = {
  id: number
  name: string
  slug: string
  title?: string | null
  company?: string | null
  bio?: string | null
  avatar_url?: string | null
}

export type UpNextSession = {
  id: number
  name: string
  slug: string
  session_type: SessionType
  media_type: MediaType
  status: string
  thumbnail_url?: string | null
  speakers?: string[]
  duration_label?: string
}

export type ProgramCardData = {
  id: number
  name: string
  slug: string
  cover_image_url?: string | null

  session_count?: number
  speaker_count?: number

  brand?: {
    id: number
    name: string
    slug: string
  }
}

export type SessionHeaderData = {
  name: string
  session_type: SessionType
  media_type: MediaType
  program: {
    name: string
    slug: string
  }
}