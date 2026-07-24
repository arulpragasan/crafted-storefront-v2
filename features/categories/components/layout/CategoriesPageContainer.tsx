import { Container } from "@/components/layout/Container"
import { PageSection } from "@/components/layout/PageSection"
import type { Category } from "@/lib/api/categories"
import { CategoriesEditorialHero } from "../sections/CategoriesEditorialHero"
import { PrimaryCategoryAtlas } from "../sections/PrimaryCategoryAtlas"
import type { EditorialDiscoveryItem } from "../sections/EditorialDiscoverySection"

type CategoriesPageContainerProps = {
  categories: Category[]
}

function createDiscoveryItems(categories: Category[]): EditorialDiscoveryItem[] {
  const imageFallbacks = [
    categories[1]?.imageUrl,
    categories[2]?.imageUrl,
    categories[0]?.imageUrl,
  ]

  return [
    {
      id: "occasion-led",
      label: "Occasions",
      title: "Ceremonial Light",
      description:
        "A softer route into dressing for gatherings, rituals, and evenings that ask for presence.",
      imageUrl: imageFallbacks[0] ?? "/images/placeholder.png",
    },
    {
      id: "material-led",
      label: "Materials",
      title: "Texture and Hand",
      description:
        "Explore future edits through fabric, surface, embroidery, and the touch of craft.",
      imageUrl: imageFallbacks[1] ?? "/images/placeholder.png",
    },
    {
      id: "mood-led",
      label: "Moods",
      title: "Quiet Opulence",
      description:
        "A developing path for discovering pieces by atmosphere, restraint, and emotional tone.",
      imageUrl: imageFallbacks[2] ?? "/images/placeholder.png",
    },
  ]
}

export function CategoriesPageContainer({
  categories,
}: CategoriesPageContainerProps) {
  return (
    <main>
      <PageSection rhythm="feature">
        <Container size="wide">
          <CategoriesEditorialHero />
        </Container>
      </PageSection>

      <PageSection rhythm="tight">
        <Container size="wide">
          <PrimaryCategoryAtlas categories={categories} />
        </Container>
      </PageSection>

    </main>
  )
}
