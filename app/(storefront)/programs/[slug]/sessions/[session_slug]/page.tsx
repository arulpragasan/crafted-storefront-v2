import { notFound } from "next/navigation"

import { Section, Container } from "@/components/layout"
import { SessionHeader } from "@/features/sessions/components/SessionHeader"
import { SpeakerRow } from "@/features/sessions/components/SpeakerRow"
import { ExpandableDescription } from "@/features/sessions/components/ExpandableDescription"
import { UpNext } from "@/features/sessions/components/UpNext"
import { Stage } from "@/features/sessions/components/stage/Stage"

import { getSession } from "@/lib/api/sessions"

type PageProps = {
  params: Promise<{
    slug: string
    session_slug: string
  }>
}

export default async function SessionDetailsPage({
  params,
}: PageProps) {
  const { slug, session_slug } = await params

  let data

  try {
    data = await getSession(slug, session_slug)
  } catch {
    notFound()
  }

  const { program, session, speakers, up_next } = data

  const sessionHeaderData = {
    ...session,
    program,
  }

  return (
    <Section variant="tight">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          {/* Main Column */}
          <div className="flex min-w-0 flex-col gap-6 md:gap-8">

            {/* Temporary media placeholder */}
            <div className="aspect-video rounded-3xl bg-neutral-100 flex items-center justify-center">
              <Stage
                media={session.media}
                title={session.name}
              />
            </div>

            <SessionHeader session={sessionHeaderData} />

            <SpeakerRow speakers={speakers} />

            <hr className="border-neutral-200" />

            <ExpandableDescription
              text={session.description || ""}
            />

            {/* Mobile Up Next */}
            <div className="lg:hidden">
              <UpNext
                sessions={up_next}
                programSlug={program.slug}
                programName={program.name}
              />
            </div>
          </div>

          {/* Desktop Up Next */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <UpNext
                sessions={up_next}
                programSlug={program.slug}
                programName={program.name}
              />
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}