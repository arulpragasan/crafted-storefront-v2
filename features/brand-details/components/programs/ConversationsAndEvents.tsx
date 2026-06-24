import { Caption, Body, Headline } from "@/components/ui/Typography"
import Link from "next/link"

type Program = {
  id: number | string
  slug?: string
  name: string
  description?: string
  sessions_count?: number
  speakers_count?: number
}

type Props = {
  programs: Program[]
}

export function ConversationsAndEvents({ programs }: Props) {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <Caption className="uppercase tracking-widest text-neutral-400">
          Conversations &amp; Events
        </Caption>

        <div className="grid gap-10 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramCard({ program }: { program: Program }) {
  const stats: string[] = []

  if (program.sessions_count && program.sessions_count > 0) {
    stats.push(
      `${program.sessions_count} session${program.sessions_count > 1 ? "s" : ""}`
    )
  }

  if (program.speakers_count && program.speakers_count > 0) {
    stats.push(
      `${program.speakers_count} speaker${program.speakers_count > 1 ? "s" : ""}`
    )
  }

  const href = program.slug ? `/programs/${program.slug}` : "#"

  return (
    <div className="space-y-4 border border-neutral-100 rounded-lg p-6">
      <Headline size="sm" className="tracking-tight">
        {program.name}
      </Headline>

      {program.description && (
        <Body className="text-neutral-600 line-clamp-3">
          {program.description}
        </Body>
      )}

      {stats.length > 0 && (
        <p className="text-xs text-neutral-400">
          {stats.join(" · ")}
        </p>
      )}

      <Link
        href={href}
        className="inline-block text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition"
      >
        Explore Program
      </Link>
    </div>
  )
}
