import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Typography } from "@/components/ui/Typography"

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
  console.log("Programs:", programs)
  console.table(programs)
  if (!programs?.length) return null

  return (
    <Section variant="feature">
      <Container size="wide">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Sticky Intro */}
          <div className="sticky top-32 self-start">
            <Typography as="h2" variant="display-lg" className="mb-6">
              Experience the Program
            </Typography>

            <Typography variant="body-lg" className="text-neutral-600">
              A curated sequence of runway shows, designer talks,
              and collection launches presented throughout the event.
            </Typography>
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
                    <p className="text-sm text-neutral-500 mb-1">
                      {day} • {time}
                    </p>

                    {/* title */}
                    <Typography as="h3" variant="subsection">
                      {p.title}
                    </Typography>

                    {/* description */}
                    {p.description && (
                      <p className="text-neutral-600 mt-2 text-sm max-w-md">
                        {p.description}
                      </p>
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