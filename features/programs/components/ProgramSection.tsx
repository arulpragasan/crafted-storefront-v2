import { Section, Container } from "@/components/layout"

import { Typography } from "@/components/ui/Typography"
import { ProgramGrid } from "./ProgramGrid"

export function ProgramSection({
  title,
  programs
}: {
  title: string
  programs: any[]
}) {
  if (!programs.length) return null

  return (
    <Section>
      <Container>
      <Typography as="h2" variant="section">
        {title}
      </Typography>
        <ProgramGrid programs={programs} />
      </Container>
    </Section>
  )
}