import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Section, Container } from "@/components/layout"
import {
  Display,
  Headline,
  CardHeading,
  Caption,
  Meta,
  Body,
} from "@/components/ui/Typography"
import { cn } from "@/lib/utils"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import { getProgram } from "@/lib/api/programs"

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Brand = {
  id: number
  name: string
  slug: string
  logo_url?: string
}

type SessionSpeaker = {
  id: number
  name: string
}

type Session = {
  id: number
  name: string
  slug: string
  session_type?: string
  media_type?: string
  status?: string
  thumbnail_url?: string
  speaker_count?: number
}

type Speaker = {
  id: number
  name: string
  slug?: string
  title?: string
  company?: string
  bio?: string
  avatar_url?: string
}

type Program = {
  id: number
  name: string
  slug: string
  description?: string
  status?: string
  cover_image_url?: string
  brand?: Brand
}

type Stats = {
  session_count: number
  speaker_count: number
  // Optional breakdown of sessions by type. May arrive as a { type: count } map
  // or a string[]; absent on older responses, in which case it is derived from
  // the sessions array below.
  session_types?: Record<string, number> | string[]
}

type ProgramResponse = {
  program: Program
  stats: Stats
  featured_session: Session | null
  speakers: Speaker[]
  sessions: Session[]
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

type Highlight = { label: string; count: number }

/** "panel_discussion" → "Panel Discussion" */
function humanizeType(value: string) {
  return value
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * Normalizes `stats.session_types` into ordered highlight rows. Accepts a
 * { type: count } map or a string[]; falls back to counting `session_type`
 * across the sessions array so the Highlights block always has content when
 * sessions exist.
 */
// function getSessionTypeHighlights(stats: Stats, sessions: Session[]): Highlight[] {
//   const raw = stats.session_types
//   const counts = new Map<string, number>()

//   if (Array.isArray(raw)) {
//     for (const type of raw) {
//       if (type) counts.set(type, (counts.get(type) ?? 0) + 1)
//     }
//   } else if (raw && typeof raw === "object") {
//     for (const [type, count] of Object.entries(raw)) {
//       if (type) counts.set(type, Number(count) || 0)
//     }
//   }

//   if (counts.size === 0) {
//     for (const session of sessions) {
//       const type = session.session_type
//       if (type) counts.set(type, (counts.get(type) ?? 0) + 1)
//     }
//   }

//   return [...counts.entries()]
//     .map(([label, count]) => ({ label: humanizeType(label), count }))
//     .sort((a, b) => b.count - a.count)
// }

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProgramDetailsPage({ params }: PageProps) {
  const { slug } = await params

  let data: ProgramResponse

  try {
    data = await getProgram(slug)
  } catch {
    notFound()
  }

  const { program, stats, featured_session, sessions } = data

  const cover = getImageUrl(program.cover_image_url)
  const isLive = program.status === "live"

  // CTA destination: featured session → first session → null
  const entrySession = featured_session ?? sessions[0] ?? null
  const entryHref = entrySession
    ? `/programs/${program.slug}/sessions/${entrySession.slug}`
    : null

  const statParts = [
    stats.session_count > 0 &&
      `${stats.session_count} ${stats.session_count === 1 ? "session" : "sessions"}`,
    stats.speaker_count > 0 &&
      `${stats.speaker_count} ${stats.speaker_count === 1 ? "speaker" : "speakers"}`,
  ].filter(Boolean) as string[]

  // const highlights = getSessionTypeHighlights(stats, sessions)

  const sessionTypes = Object.entries(stats.session_types || {})
    .filter(([, count]) => count > 0)
    .map(([type]) => humanizeType(type))

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────────
          Full-bleed cinematic banner — edge to edge rather than a contained,
          rounded card. Content is overlaid on the same `wide` grid the rest of
          the page uses, so the page reads as one continuous column. */}
      
      <section className="relative w-full">
        <div
          className={cn(
            "relative w-full overflow-hidden bg-neutral-900",
            "aspect-[4/5] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[18/8]",
            "min-h-[480px] md:min-h-[560px]"
          )}
        >
          {/* Cover image */}
          <Image
            src={cover}
            alt={program.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Scrim — stronger and taller so overlaid text stays readable */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-gradient-to-t from-black/85 via-black/45 via-45% to-black/10"
            )}
          />

          {/* Live badge */}
          {isLive && (
            <div className="absolute inset-x-0 top-0">
              <Container size="wide" className="pt-6 md:pt-8">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full",
                    "bg-red-500 px-3 py-1",
                    "text-white text-xs font-medium uppercase tracking-wide"
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  Live
                </span>
              </Container>
            </div>
          )}

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 pb-10 md:pb-14 lg:pb-16">
            <Container size="wide">
              <div className="flex max-w-3xl flex-col gap-5 md:gap-6">

                {program.brand?.name && (
                  <Meta tone="inverse" className="tracking-[0.25em]">
                    {program.brand.name}
                  </Meta>
                )}

                <Display as="h1" tone="inverse">
                  {program.name}
                </Display>

                {program.description && (
                  <Body
                    tone="inverse"
                    className="max-w-2xl text-base md:text-lg"
                  >
                    {program.description}
                  </Body>
                )}

                {/* Stats */}
                {statParts.length > 0 && (
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    {statParts.map((part, i) => (
                      <span key={part} className="flex items-center gap-3">
                        {i > 0 && (
                          <span
                            aria-hidden
                            className="h-1 w-1 rounded-full bg-white/40"
                          />
                        )}
                        <Caption variant="plain" tone="inverse">
                          {part}
                        </Caption>
                      </span>
                    ))}
                  </div>
                )}

                {/* Session Types */}
                {sessionTypes.length > 0 && (
  <Caption tone="inverse">
    Includes {sessionTypes.join(" • ")}
  </Caption>
)}
                {/*
                {sessionTypes.length > 0 && (
                  <div className="flex flex-col gap-3 pt-5">

                    {sessionTypes.map((type) => (
                      <span
                        key={type}
                        className={cn(
                          "rounded-full",
                          "border border-white/20",
                          "px-3 py-1",
                          "text-xs uppercase tracking-wider",
                          "text-white/90"
                        )}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                )}*/}

                {/* CTA */}
                {entryHref && (
                  <Link
                    href={entryHref}
                    className={cn(
                      "group/cta mt-2 inline-flex w-fit items-center gap-2.5",
                      "rounded-full bg-white px-7 py-3.5",
                      "text-sm font-medium uppercase tracking-widest text-neutral-900",
                      "transition-colors duration-200 hover:bg-white/90"
                    )}
                  >
                    {featured_session
                      ? `Watch ${featured_session.name}`
                      : "Watch Program"}

                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover/cta:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                )}
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* ─── Sessions ─────────────────────────────────────────────────────── */}
      {sessions.length > 0 && (
        <Section>
          <Container size="wide">

            <Headline className="mb-8 md:mb-12">
              Sessions
            </Headline>

            <div
              className={cn(
                "grid gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14",
                sessions.length === 1 &&
                  "grid-cols-1 justify-items-center",
                sessions.length >= 2 &&
                  sessions.length <= 5 &&
                  "grid-cols-1 sm:grid-cols-2",
                sessions.length >= 6 &&
                  "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  programSlug={program.slug}
                  isLarge={sessions.length === 1}
                />
              ))}
            </div>

          </Container>
        </Section>
      )}

      {/* ─── About ────────────────────────────────────────────────────────── */}
      {program.description && (
  <Section>
    <Container size="wide">
      <Headline className="mb-8 md:mb-12">
        About This Program
      </Headline>

      <div className="max-w-3xl">
        <Body className="text-lg leading-relaxed">
          {program.description}
        </Body>
      </div>
    </Container>
  </Section>
)}

      {/* ─── More From Brand (placeholder) ────────────────────────────────── */}
      {/*{program.brand?.name && (
        <Section>
          <Container size="wide">
            <Headline className="mb-10 md:mb-16">
              More from {program.brand.name}
            </Headline>

            <div className="flex items-center justify-center py-16 rounded-2xl bg-neutral-50">
              <Caption variant="plain" tone="secondary">
                More programs coming soon
              </Caption>
            </div>
          </Container>
        </Section>
      )}*/}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Session Card (page-local)
//
// Hierarchy, strongest → weakest:
//   1. Session name   — the focal point (serif CardHeading, neutral-900)
//   2. Speaker names  — the human draw (neutral-700, sits directly under title)
//   3. Type metadata  — supporting eyebrow (smallest, lightest)
// ─────────────────────────────────────────────────────────────────────────────

function sessionPlaceholder(type?: string) {
  switch (type) {
    case "showcase":
      return "/images/placeholders/showcase.jpg"

    case "interview":
      return "/images/placeholders/interview.jpg"

    case "talk":
      return "/images/placeholders/talk.jpg"

    case "panel":
      return "/images/placeholders/panel.jpg"

    case "workshop":
      return "/images/placeholders/workshop.jpg"

    default:
      return "/images/placeholders/talk.jpg"
  }
}

function SessionCard({
  session,
  programSlug,
  isLarge = false,
}: {
  session: Session
  programSlug: string
  isLarge?: boolean
}) {
  const href = `/programs/${programSlug}/sessions/${session.slug}`
  const thumbnail = getImageUrl(session.thumbnail_url) || sessionPlaceholder(session.session_type)
  
  const isLive = session.status === "live"

  const typeMeta = session.session_type
    ? humanizeType(session.session_type)
    : null

  return (
    <Link href={href} className="group block">
      <article className={cn( "flex flex-col", isLarge ? "max-w-4xl" : "" )} >
        {/* Thumbnail */}
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-2xl bg-neutral-100",
            isLarge ? "aspect-[16/9]" : "aspect-[3/2]"
          )}
        >
          <Image
            src={thumbnail}
            alt={session.name}
            fill
            sizes={
              isLarge
                ? "(min-width: 1024px) 1280px, 100vw"
                : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            }
            className={cn(
              "object-cover",
              "transition-transform duration-700 ease-out",
              "group-hover:scale-[1.03]"
            )}
          />

          {/* Live badge */}
          {isLive && (
            <span
              className={cn(
                "absolute right-3 top-3",
                "inline-flex items-center gap-1.5 rounded-full",
                "bg-red-500 px-2.5 py-1",
                "text-white text-xs font-medium uppercase tracking-wide"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          )}
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-2 pt-5">
          {typeMeta && <Meta>{typeMeta}</Meta>}

          <CardHeading className="transition-colors duration-200 group-hover:text-neutral-500">
            {session.name}
          </CardHeading>

          {session.speaker_count ? (
            <Caption variant="plain" tone="secondary">
              {session.speaker_count}{" "}
              {session.speaker_count === 1
                ? "Speaker"
                : "Speakers"}
            </Caption>
          ) : null}

          {/* CTA affordance — makes the card's action explicit on hover */}
          <span
            className={cn(
              "mt-1 inline-flex items-center gap-1.5",
              "font-sans text-xs uppercase tracking-widest text-neutral-400",
              "transition-colors duration-200 group-hover:text-neutral-900"
            )}
          >
            Watch Session
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Speaker Card (page-local)
// ─────────────────────────────────────────────────────────────────────────────

// function SpeakerCard({ speaker }: { speaker: Speaker }) {
//   const avatar = getImageUrl(speaker.avatar_url)
//   const role = [speaker.title, speaker.company].filter(Boolean).join(", ")

//   return (
//     <article className="flex flex-col items-center gap-4 text-center">
//       {/* Avatar */}
//       <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-900/5">
//         <Image
//           src={avatar}
//           alt={speaker.name}
//           fill
//           sizes="112px"
//           className="object-cover"
//         />
//       </div>

//       {/* Info */}
//       <div className="flex flex-col gap-1.5">
//         <CardHeading className="text-base md:text-lg">{speaker.name}</CardHeading>

//         {role && (
//           <Caption variant="plain" tone="secondary" className="text-xs leading-snug">
//             {role}
//           </Caption>
//         )}

//         {speaker.bio && (
//           <Body className="mt-1 line-clamp-2 text-sm text-neutral-500">
//             {speaker.bio}
//           </Body>
//         )}
//       </div>
//     </article>
//   )
// }
