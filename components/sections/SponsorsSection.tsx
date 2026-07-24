import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Caption } from "@/components/ui/Typography"
import type { SponsorsSection as SponsorsSectionData } from "@/types/homepage"

type SponsorsSectionProps = {
  items: SponsorsSectionData["items"]
}

export default function SponsorsSection({ items }: SponsorsSectionProps) {
  return (
    <Section variant="tight">
      <Container>

        <SectionTitle align="center" className="mb-16">
          Our Partners
        </SectionTitle>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-12 justify-items-center">

            {items.map((s) => (
              <a
                key={s.id}
                href={s.website ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-full items-center justify-center px-4"
              >
                {s.logo_url ? (
                  <img
                    src={s.logo_url}
                    alt={s.name}
                    className="
                      h-10
                      w-auto
                      max-w-full
                      object-contain
                      grayscale
                      opacity-60
                      transition-all
                      duration-300
                      hover:grayscale-0
                      hover:opacity-100
                    "
                  />
                ) : (
                  <Caption>
                    {s.name}
                  </Caption>
                )}
              </a>
            ))}

          </div>
        </Reveal>

      </Container>
    </Section>
  )
}
