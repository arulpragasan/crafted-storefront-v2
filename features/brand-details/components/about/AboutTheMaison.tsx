import { Caption } from "@/components/ui/Typography"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/ui/SectionTitle"

type Props = {
  description: string
}

export function AboutTheMaison({ description }: Props) {
  return (
    <Section>
      <Container size="narrow">
          <SectionTitle>
            About the Maison
          </SectionTitle>

          <p className="text-base md:text-lg text-neutral-700 leading-[1.85] whitespace-pre-line">
            {description}
          </p>
      </Container>
    </Section>
  )
}
