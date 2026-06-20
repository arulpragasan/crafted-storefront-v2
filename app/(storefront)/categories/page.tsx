import { Section, Container } from "@/components/layout"
import { Display, Body } from "@/components/ui/Typography"
import { CategorySection } from "@/features/categories/components/CategorySection"
import { EditorialRail } from "@/features/categories/components/rail/EditorialRail"
import {
  getCategories,
  getThemes,
  getOccasions,
  type Theme,
  type Occasion,
} from "@/lib/api/categories"

export default async function CategoriesPage() {
  const [categories, themes, occasions] = await Promise.all([
    getCategories(),
    getThemes(),
    getOccasions(),
  ])

  return (
    <>
      <Section>
        <Container size="wide">
          <div className="py-12 md:py-20">
            <Display as="h1">Explore</Display>
            <Body className="mt-4">
              Browse categories, themes, and occasions.
            </Body>
          </div>
        </Container>
      </Section>

      <CategorySection title="Categories" categories={categories} />

      <EditorialRail
        title="Themes"
        items={themes}
        getHref={(theme: Theme) => `/themes/${theme.slug}`}
      />

      <EditorialRail
        title="Occasions"
        items={occasions}
        getHref={(occasion: Occasion) => `/occasions/${occasion.slug}`}
      />
    </>
  )
}
