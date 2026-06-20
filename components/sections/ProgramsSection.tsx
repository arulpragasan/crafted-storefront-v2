import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Headline, Subheading, Body, Meta } from "@/components/ui/Typography"

interface Program {
  id: number
  title: string
  description?: string
  start_at: string
}

interface ProgramsSectionProps {
  programs: Program[]
}

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
  if (!programs?.length) return null

  return (
    <Section variant="homeDefault">
      <Container size="wide">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Sticky Intro */}
          <div className="sticky top-32 self-start">
            <Headline as="h2" className="mb-6">
              Experience the Program
            </Headline>

            <Body>
              A curated sequence of runway shows, designer talks,
              and collection launches presented throughout the event.
            </Body>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-neutral-200 pl-10 space-y-14">

            {programs.map((p) => {
              const date = new Date(p.start_at)

              const time = date.toLocaleTimeString("en-IN", {
                hour: "numeric",
                minute: "2-digit"
              })

              const day = date.toLocaleDateString("en-IN", {
                weekday: "long"
              })

              return (
                <Reveal key={p.id}>
                  <div className="relative">

                    {/* timeline dot */}
                    <span className="
                      absolute -left-[44px] top-2
                      w-3 h-3 rounded-full
                      bg-black
                    " />

                    {/* time */}
                    <Meta as="time" className="mb-1 block">
                      {day} • {time}
                    </Meta>

                    {/* title */}
                    <Subheading as="h3">
                      {p.title}
                    </Subheading>

                    {/* description */}
                    {p.description && (
                      <Body className="mt-2 max-w-md">
                        {p.description}
                      </Body>
                    )}

                  </div>
                </Reveal>
              )
            })}

          </div>

        </div>
      </Container>
    </Section>
  )
}
