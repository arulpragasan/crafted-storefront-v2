import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { EditorialGrid } from "@/components/layout/EditorialGrid"
import { CategoryCard } from "@/features/categories/components/card/CategoryCard"
import { EditorialCTA } from "@/components/ui/EditorialCTA"

export default function CategoriesSection({ items }) {
  const visibleItems = items.slice(0, 6)

  return (
    <Section variant="default">
      <Container>
        <SectionTitle spacing="toGrid">Explore Experiences</SectionTitle>

        <Reveal>
          <EditorialGrid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <CategoryCard
                key={item.id}
                title={item.name}
                image={item.image_url}
                href={`/categories/${item.slug}`}
                aspect="portrait"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
              />
            ))}
          </EditorialGrid>
        </Reveal>

        <div className="mt-14 flex justify-center md:mt-16">
          <EditorialCTA href="/categories">Explore All Experiences</EditorialCTA>
        </div>
      </Container>
    </Section>
  )
}
