import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

type Props = {
  params: { slug: string }
}

export default function ProgramDetails({ params }: Props) {
  return (
    <Section>
      <Container variant="narrow">
        <h2 className="text-3xl font-light">
          Program: {params.slug}
        </h2>
      </Container>
    </Section>
  )
}