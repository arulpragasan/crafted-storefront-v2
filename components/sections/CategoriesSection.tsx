import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { EditorialGrid } from "@/components/layout/EditorialGrid"
import { CategoryCard } from "@/features/categories/components/card/CategoryCard"

export default function CategoriesSection({ items }) {
  return (
    <Section variant="default">
      <Container>

        <SectionTitle spacing="toGrid">
          Explore
        </SectionTitle>

        <Reveal>
          <EditorialGrid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {items.map((item) => (
              <CategoryCard
                key={item.id}
                title={item.name}
                image={item.image_url}
                href={`/category/${item.slug}`}
              />
            ))}

          </EditorialGrid>
        </Reveal>

      </Container>
    </Section>
  )
}
