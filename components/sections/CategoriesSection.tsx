import { Section } from "@/components/layout/Section"
import { Headline } from "@/components/ui/Typography"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { CategoryTile } from "./categories/CategoryTile"

export default function CategoriesSection({ items }) {
  if (!items?.length) return null

  const categories = items.slice(0, 8)

  return (
    <Section rhythm="default">
      <Container size="wide">

        <Headline as="h2" className="mb-14">
          Explore
        </Headline>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((item) => (
              <CategoryTile
                key={item.id}
                name={item.name}
                image={item.image_url}
                href={`/categories/${item.slug}`}
              />
            ))}
          </div>
        </Reveal>

      </Container>
    </Section>
  )
}
