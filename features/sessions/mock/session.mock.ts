/**
 * Mock data for the Session Details Page.
 *
 * Purpose: validate the *experience* before any API exists. Every media type
 * has a fully-populated fixture so the page can be walked end-to-end:
 *
 *   /programs/future-of-interfaces/sessions/designing-for-trust   → uploaded_video
 *   …/sessions/the-live-keynote                                   → youtube_live
 *   …/sessions/in-conversation-with-ada                           → youtube_video
 *   …/sessions/the-archive                                        → image_gallery
 *   …/sessions/behind-the-scenes                                  → instagram_post
 *   …/sessions/the-workshop-kit                                   → external_link
 *
 * Images use Unsplash (an allowed remote host in next.config.ts).
 */

export type SessionType =
  | "showcase"
  | "talk"
  | "interview"
  | "panel"
  | "workshop"

export type MediaType =
  | "youtube_video"
  | "youtube_live"
  | "uploaded_video"
  | "image_gallery"
  | "instagram_post"
  | "external_link"

export type SessionStatus = "scheduled" | "live" | "published" | "ended"

export type Media =
  | {
      kind: "youtube_video"
      youtube_id: string
      poster_url: string
    }
  | {
      kind: "youtube_live"
      youtube_id: string
      poster_url: string
      is_live: boolean
    }
  | {
      kind: "uploaded_video"
      playback_url: string
      poster_url: string
      duration_label: string
    }
  | {
      kind: "image_gallery"
      images: { url: string; alt: string }[]
    }
  | {
      kind: "instagram_post"
      permalink: string
      image_url: string
      caption?: string
    }
  | {
      kind: "external_link"
      url: string
      destination_label: string
      thumbnail_url: string
    }

export type Speaker = {
  id: number
  name: string
  title?: string
  company?: string
  avatar_url?: string
}

export type RelatedSession = {
  id: number
  name: string
  slug: string
  session_type: SessionType
  media_type: MediaType
  thumbnail_url: string
  duration_label?: string
  status?: SessionStatus
  speakers?: string[]
}

export type ProgramRef = {
  id: number
  name: string
  slug: string
  brand?: { id: number; name: string; slug: string }
}

export type ProgramCardData = {
  id: number
  name: string
  slug: string
  cover_image_url?: string
  session_count?: number
  speaker_count?: number
}

export type SessionDetails = {
  id: number
  name: string
  slug: string
  session_type: SessionType
  media_type: MediaType
  status: SessionStatus
  description: string
  media: Media
  thumbnail_url: string
  speakers: Speaker[]
  program: ProgramRef
  position: { index: number; total: number }
  related_sessions: RelatedSession[]
  /** Other programs from the same brand — powers "More From Brand". */
  more_from_brand: ProgramCardData[]
}

// ─── Shared fixtures ─────────────────────────────────────────────────────────

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: "Ada Lovelace",
    title: "Principal Designer",
    company: "Analytical",
    avatar_url: u("photo-1494790108377-be9c29b29330", 200),
  },
  {
    id: 2,
    name: "Grace Hopper",
    title: "VP, Product",
    company: "Mark I",
    avatar_url: u("photo-1438761681033-6461ffad8d80", 200),
  },
  {
    id: 3,
    name: "Alan Kay",
    title: "Research Fellow",
    company: "Dynabook",
    avatar_url: u("photo-1500648767791-00dcc994a43e", 200),
  },
]

const PROGRAM: ProgramRef = {
  id: 7,
  name: "The Future of Interfaces",
  slug: "future-of-interfaces",
  brand: { id: 3, name: "Acme Studio", slug: "acme-studio" },
}

const MORE_FROM_BRAND: ProgramCardData[] = [
  {
    id: 11,
    name: "Designing in the Open",
    slug: "designing-in-the-open",
    cover_image_url: u("photo-1517245386807-bb43f82c33c4"),
    session_count: 6,
    speaker_count: 4,
  },
  {
    id: 12,
    name: "Systems & Craft",
    slug: "systems-and-craft",
    cover_image_url: u("photo-1497366216548-37526070297c"),
    session_count: 9,
    speaker_count: 7,
  },
  {
    id: 13,
    name: "The Tools We Make",
    slug: "the-tools-we-make",
    cover_image_url: u("photo-1487014679447-9f8336841d58"),
    session_count: 5,
    speaker_count: 5,
  },
]

// ─── Related sessions (the program's sibling set — drives Up Next) ─────────────

const RELATED: RelatedSession[] = [
  {
    id: 102,
    name: "The Live Keynote",
    slug: "the-live-keynote",
    session_type: "showcase",
    media_type: "youtube_live",
    thumbnail_url: u("photo-1505373877841-8d25f7d46678", 600),
    status: "live",
    speakers: ["Grace Hopper"],
  },
  {
    id: 103,
    name: "In Conversation with Ada",
    slug: "in-conversation-with-ada",
    session_type: "interview",
    media_type: "youtube_video",
    thumbnail_url: u("photo-1573497019940-1c28c88b4f3e", 600),
    duration_label: "42 min",
    speakers: ["Ada Lovelace"],
  },
  {
    id: 104,
    name: "The Archive",
    slug: "the-archive",
    session_type: "showcase",
    media_type: "image_gallery",
    thumbnail_url: u("photo-1452587925148-ce544e77e70d", 600),
    duration_label: "12 images",
    speakers: ["Alan Kay"],
  },
  {
    id: 105,
    name: "Behind the Scenes",
    slug: "behind-the-scenes",
    session_type: "showcase",
    media_type: "instagram_post",
    thumbnail_url: u("photo-1611162617213-7d7a39e9b1d7", 600),
    speakers: ["Ada Lovelace"],
  },
  {
    id: 106,
    name: "The Workshop Kit",
    slug: "the-workshop-kit",
    session_type: "workshop",
    media_type: "external_link",
    thumbnail_url: u("photo-1531403009284-440f080d1e12", 600),
    speakers: ["Grace Hopper", "Alan Kay"],
  },
]

const DESCRIPTION =
  "Trust is the quietest part of an interface and the first thing users feel. " +
  "In this session we trace how typography, motion, and restraint compound into " +
  "credibility — and why the most premium products tend to do less, more " +
  "deliberately. We work through real teardowns, from onboarding to empty states, " +
  "and leave with a vocabulary for designing interfaces that feel inevitable. " +
  "Expect strong opinions, a few uncomfortable critiques, and a practical framework " +
  "you can apply the same afternoon."

// ─── The session catalogue (keyed by slug) ────────────────────────────────────

function base(
  partial: Pick<
    SessionDetails,
    "id" | "name" | "slug" | "session_type" | "media_type" | "status" | "media" | "thumbnail_url"
  >
): SessionDetails {
  const index = RELATED.findIndex((r) => r.slug === partial.slug)
  return {
    description: DESCRIPTION,
    speakers: SPEAKERS,
    program: PROGRAM,
    position: { index: index >= 0 ? index + 2 : 1, total: RELATED.length + 1 },
    related_sessions: RELATED.filter((r) => r.slug !== partial.slug),
    more_from_brand: MORE_FROM_BRAND,
    ...partial,
  }
}

export const SESSIONS: Record<string, SessionDetails> = {
  "designing-for-trust": base({
    id: 101,
    name: "Designing for Trust",
    slug: "designing-for-trust",
    session_type: "talk",
    media_type: "uploaded_video",
    status: "published",
    thumbnail_url: u("photo-1531403009284-440f080d1e12"),
    media: {
      kind: "uploaded_video",
      playback_url: "",
      poster_url: u("photo-1531403009284-440f080d1e12", 1600),
      duration_label: "31 min",
    },
  }),

  "the-live-keynote": base({
    id: 102,
    name: "The Live Keynote",
    slug: "the-live-keynote",
    session_type: "showcase",
    media_type: "youtube_live",
    status: "live",
    thumbnail_url: u("photo-1505373877841-8d25f7d46678"),
    media: {
      kind: "youtube_live",
      youtube_id: "dQw4w9WgXcQ",
      poster_url: u("photo-1505373877841-8d25f7d46678", 1600),
      is_live: true,
    },
  }),

  "in-conversation-with-ada": base({
    id: 103,
    name: "In Conversation with Ada",
    slug: "in-conversation-with-ada",
    session_type: "interview",
    media_type: "youtube_video",
    status: "published",
    thumbnail_url: u("photo-1573497019940-1c28c88b4f3e"),
    media: {
      kind: "youtube_video",
      youtube_id: "dQw4w9WgXcQ",
      poster_url: u("photo-1573497019940-1c28c88b4f3e", 1600),
    },
  }),

  "the-archive": base({
    id: 104,
    name: "The Archive",
    slug: "the-archive",
    session_type: "showcase",
    media_type: "image_gallery",
    status: "published",
    thumbnail_url: u("photo-1452587925148-ce544e77e70d"),
    media: {
      kind: "image_gallery",
      images: [
        { url: u("photo-1452587925148-ce544e77e70d", 1600), alt: "Archive frame 1" },
        { url: u("photo-1517245386807-bb43f82c33c4", 1600), alt: "Archive frame 2" },
        { url: u("photo-1497366216548-37526070297c", 1600), alt: "Archive frame 3" },
        { url: u("photo-1487014679447-9f8336841d58", 1600), alt: "Archive frame 4" },
        { url: u("photo-1545235617-9465d2a55698", 1600), alt: "Archive frame 5" },
        { url: u("photo-1558655146-9f40138edfeb", 1600), alt: "Archive frame 6" },
      ],
    },
  }),

  "behind-the-scenes": base({
    id: 105,
    name: "Behind the Scenes",
    slug: "behind-the-scenes",
    session_type: "showcase",
    media_type: "instagram_post",
    status: "published",
    thumbnail_url: u("photo-1611162617213-7d7a39e9b1d7"),
    media: {
      kind: "instagram_post",
      permalink: "https://www.instagram.com/p/CExample/",
      image_url: u("photo-1611162617213-7d7a39e9b1d7", 1080),
      caption: "A look at how the set came together the night before.",
    },
  }),

  "the-workshop-kit": base({
    id: 106,
    name: "The Workshop Kit",
    slug: "the-workshop-kit",
    session_type: "workshop",
    media_type: "external_link",
    status: "published",
    thumbnail_url: u("photo-1531403009284-440f080d1e12"),
    media: {
      kind: "external_link",
      url: "https://example.com/workshop-kit",
      destination_label: "Notion",
      thumbnail_url: u("photo-1531403009284-440f080d1e12", 1600),
    },
  }),
}

export function getMockSession(slug: string): SessionDetails | null {
  return SESSIONS[slug] ?? null
}
