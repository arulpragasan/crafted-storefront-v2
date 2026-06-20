import { notFound } from "next/navigation"

import { Section, Container } from "@/components/layout"
import { getMockSession } from "@/features/sessions/mock/session.mock"
import { Stage } from "@/features/sessions/components/stage/Stage"
import { SessionHeader } from "@/features/sessions/components/SessionHeader"
import { SpeakerRow } from "@/features/sessions/components/SpeakerRow"
import { ExpandableDescription } from "@/features/sessions/components/ExpandableDescription"
import { UpNext } from "@/features/sessions/components/UpNext"
import { MoreFromBrand } from "@/features/sessions/components/MoreFromBrand"

/**
 * Session Details Page — "the media is the page".
 *
 * No hero / banner / cover: the Stage (media) is the focal point and sits at
 * the very top. Built on mock data to validate the experience before any API.
 *
 *   Desktop: [ Stage + Title + Speakers + Description ]  |  [ sticky Up Next ]
 *            then "More From Brand" full-width below.
 *   Mobile:  Stage → Title → Speakers → Description → Up Next → More From Brand
 *
 * Description sits before Up Next (correct order) but is collapsed by default
 * so it never buries continuation.
 */

type PageProps = {
  params: Promise<{ slug: string; session_slug: string }>
}

export default async function SessionDetailsPage({ params }: PageProps) {
  const { session_slug } = await params
  const session = getMockSession(session_slug)
  if (!session) notFound()

  const { program } = session

  return (
    <>
      {/* ─── Watch area: media + reading column, with sticky Up Next ───────── */}
      <Section rhythm="compact">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
            {/* Main column */}
            <div className="flex min-w-0 flex-col gap-6 md:gap-8">
              {/* Stage — the focal point */}
              <Stage media={session.media} title={session.name} />

              <SessionHeader session={session} />

              <SpeakerRow speakers={session.speakers} />

              <hr className="border-neutral-200" />

              <ExpandableDescription text={session.description} />

              {/* Up Next — mobile position: after description, before brand */}
              <div className="lg:hidden">
                <UpNext
                  sessions={session.related_sessions}
                  programSlug={program.slug}
                  programName={program.name}
                />
              </div>
            </div>

            {/* Up Next — desktop position: sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <UpNext
                  sessions={session.related_sessions}
                  programSlug={program.slug}
                  programName={program.name}
                />
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ─── More From Brand — full-width discovery band ──────────────────── */}
      {program.brand?.name && (
        <Section>
          <Container size="wide">
            <MoreFromBrand
              programs={session.more_from_brand}
              brandName={program.brand.name}
            />
          </Container>
        </Section>
      )}
    </>
  )
}
