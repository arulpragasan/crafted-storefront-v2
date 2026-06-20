import { Section } from "@/components/layout/Section"
import { Headline, Caption } from "@/components/ui/Typography"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"

export default function SponsorsSection({ items }) {
  return (
    <Section variant="tight">
      <Container size="content">

        <Headline as="h2" align="center" className="mb-16">
          Partners
        </Headline>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-12 justify-items-center">

            {items.map((s) => (
              <a
                key={s.id}
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {s.logo_url ? (
                  <img
                    src={s.logo_url}
                    alt={s.name}
                    className="
                      max-h-10 object-contain
                      grayscale opacity-60
                      hover:grayscale-0 hover:opacity-100
                      transition-all duration-300
                    "
                  />
                ) : (
                  <Caption>
                    {s.name || (s as any).bane}
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
