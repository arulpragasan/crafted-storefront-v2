import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { ImageCard } from "@/components/media/ImageCard"
import { Typography } from "@/components/ui/Typography"

const categories = [
  {
    id: "runway",
    title: "Runway",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "couture",
    title: "Couture",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bridal",
    title: "Bridal",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "accessories",
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "menswear",
    title: "Menswear",
    image:
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "emerging-designers",
    title: "Emerging Designers",
    image:
      "https://images.unsplash.com/photo-1520975682031-a27f2a36a6b3?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function CategoriesPage() {
  return (
    <Section>
      <Container>
        {/* Section 1: Page Intro */}
        <div className="max-w-[720px]">
          <Typography as="h1" size="display-lg">
            Categories
          </Typography>
        </div>

        {/* Section 2: Categories Gallery */}
        <div className="mt-space-7">
          <Grid columns={3}>
            {categories.map((category) => (
              <ImageCard
                key={category.id}
                title={category.title}
                image={category.image}
                href={`/categories/${category.id}`}
              />
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  )
}