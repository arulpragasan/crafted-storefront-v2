import { Section, Container, Grid } from "@/components/layout"
import { Headline } from "@/components/ui/Typography"

import { ProgramCard, type ProgramCardProps } from "./ProgramCard"
import { ProgramGrid } from "./ProgramGrid"

// Reuse the card's program shape — single source of truth, no new types.
type Program = ProgramCardProps["program"]

type ProgramSectionProps = {
  title?: string
  variant?: "spotlight" | "carousel" | "grid"
  programs: Program[]
}

export function ProgramSection({
  title,
  variant = "grid",
  programs,
}: ProgramSectionProps) {
  if (!programs.length) return null

  return (
    <Section>
      <Container size="wide">
        {title && (
          <Headline className="mb-10 md:mb-16">{title}</Headline>
        )}

        {variant === "spotlight" && (
          <div className="mb-8 md:mb-12">
            <ProgramCard program={programs[0]} variant="spotlight" />
          </div>
        )}

        {variant === "carousel" && (
          <Grid variant="lookbook">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} variant="poster" />
            ))}
          </Grid>
        )}

        {variant === "grid" && <ProgramGrid programs={programs} />}
      </Container>
    </Section>
  )
}
