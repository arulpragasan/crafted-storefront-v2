import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Display, Headline, Meta } from "@/components/ui/Typography"
import { sessionTypeLabel, mediaTypeLabel } from "./labels"
import type { SessionDetails } from "@/features/sessions/mock/session.mock"

/**
 * SessionHeader — the textual focal point directly beneath the Stage.
 *
 * Approved structure, top → bottom:
 *   ← Back to Program        (the parent spine, always present)
 *   From {Program Name}      (low-weight context line)
 *   SESSION TYPE             (Meta eyebrow; + media-type label when meaningful)
 *   Session Title            (Display on desktop, Headline on mobile — the focal point)
 */
export function SessionHeader({ session }: { session: SessionDetails }) {
  const { program } = session
  const mediaLabel = mediaTypeLabel(session.media_type)

  const eyebrow = [sessionTypeLabel(session.session_type), mediaLabel]
    .filter(Boolean)
    .join(" · ")

  return (
    <header className="flex flex-col gap-3">
      {/* Back to Program */}
      <Link
        href={`/programs/${program.slug}`}
        className="inline-flex w-fit items-center gap-1 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Program
      </Link>

      {/* From {Program Name} */}
      <span className="font-sans text-sm text-neutral-500">
        From {program.name}
      </span>

      {/* SESSION TYPE eyebrow */}
      <Meta className="tracking-[0.2em]">{eyebrow}</Meta>

      {/* Title — the focal point */}
      <Display as="h1" className="hidden md:block">
        {session.name}
      </Display>
      <Headline as="h1" className="md:hidden">
        {session.name}
      </Headline>
    </header>
  )
}
