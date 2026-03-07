import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/motion/Reveal"

interface BrandStoryProps {
  title?: string
  description?: string | null
}

export function BrandStory({ title, description }: BrandStoryProps) {
  if (!description) return null

  return (
    <Section variant="feature">
      <Container size="narrow">

        <Reveal>
          {title && (
            <SectionTitle className="mb-6">
              {title}
            </SectionTitle>
          )}

          <p
            className="
              text-lg
              leading-relaxed
              text-neutral-700
              max-w-2xl
            "
          >
            {description}
          </p>
        </Reveal>

      </Container>
    </Section>
  )
}