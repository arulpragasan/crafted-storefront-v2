import { Section, Container, Grid } from "@/components/layout"
import { Headline } from "@/components/ui/Typography"
import { RevealOnView } from "@/components/motion/RevealOnView"

import { CategoryCard } from "./card/CategoryCard"
import type { Category } from "@/lib/api/categories"

type CategorySectionProps = {
  title?: string
  categories: Category[]
}

export function CategorySection({
  title = "Categories",
  categories,
}: CategorySectionProps) {
  if (!categories.length) return null

  return (
    <Section>
      <Container size="wide">
        <Headline as="h2" className="mb-10 md:mb-16">
          {title}
        </Headline>

        <RevealOnView>
          <Grid variant="catalog" gap="loose" stagger={false}>
            {categories.map((category, i) => (
              <CategoryCard
                key={category.slug}
                category={category}
                priority={i < 3}
              />
            ))}
          </Grid>
        </RevealOnView>
      </Container>
    </Section>
  )
}
