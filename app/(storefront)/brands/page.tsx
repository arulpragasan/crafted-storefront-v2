import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { Typography } from "@/components/ui/Typography"
import { BrandCard } from "@/components/commerce/BrandCard"

const brands = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: `Brand ${i + 1}`,
  image: `https://picsum.photos/600/800?random=${i + 100}`,
  href: "#",
}))

export default function BrandsPage() {
  return (
    <Section>
      <Container>
        <Typography as="h1">
          Brands
        </Typography>

        <div className="mt-space-7">
          <Grid columns={3}>
            {brands.map((brand) => (
              <BrandCard key={brand.id} {...brand} />
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  )
}