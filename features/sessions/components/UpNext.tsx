import { Meta } from "@/components/ui/Typography"
import { UpNextCard } from "./UpNextCard"
import type { RelatedSession } from "@/features/sessions/mock/session.mock"

/**
 * UpNext — sibling sessions in program order. This IS the program's
 * continuation surface, so there is no separate "More From Program" section.
 * The first item is emphasized as the literal next thing to watch.
 *
 * Desktop: sticky right sidebar (set by the page). Mobile: stacked list
 * placed below the description.
 */
export function UpNext({
  sessions,
  programSlug,
  programName,
}: {
  sessions: RelatedSession[]
  programSlug: string
  programName: string
}) {
  if (sessions.length === 0) return null

  return (
    <section aria-label="Up next" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Meta className="tracking-[0.2em]">Up Next</Meta>
        <span className="font-sans text-xs text-neutral-500">
          From {programName}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {sessions.map((s, i) => (
          <UpNextCard
            key={s.id}
            session={s}
            programSlug={programSlug}
            highlighted={i === 0}
          />
        ))}
      </div>
    </section>
  )
}
