import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { BrandCard } from "@/components/commerce/BrandCard"
import { ProductCard } from "@/components/commerce/ProductCard"
import { Typography } from "@/components/ui/Typography"
import { notFound } from "next/navigation"

type PageProps = {
  params?: {
    slug?: string
  }
}

export default async function CategoryDetailPage({ params }: PageProps) {
  
  // ---- MOCK DATA (replace with Spree) ----
  const category = {
    name: "Jwellery",
    description:
      "A curated selection of contemporary and heritage designers in this category.",
  }

  const brands = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: `Brand ${i + 1}`,
    image: `https://picsum.photos/600/800?random=${i + 50}`,
    href: `/brands/brand-${i + 1}`,
  }))

  const featuredProducts = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    name: `Featured Piece ${i + 1}`,
    brand: brands[i % brands.length].name,
    image: `https://picsum.photos/600/800?random=${i + 90}`,
    href: "#",
  }))

  return (
    <Section>
      <Container size="wide">
        {/* ========================
            CATEGORY HEADER
        ======================== */}
        <div className="mb-space-12 max-w-2xl">
          <Typography as="h1">{category.name}</Typography>
          <p className="mt-space-4 text-neutral-600 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* ========================
            BRANDS (PRIMARY)
        ======================== */}
          <Grid columns={3} gap="loose">
            {brands.map((brand) => (
              <BrandCard key={brand.id} {...brand} />
            ))}
          </Grid>

        {/* ========================
            FEATURED PRODUCTS
            (SECONDARY, EDITORIAL)
        ======================== */}
        {featuredProducts.length > 0 && (
          <div className="mt-space-20">
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-space-6">
              Editor’s Picks
            </p>

            <Grid columns={3} gap="normal">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </Grid>
          </div>
        )}
      </Container>
    </Section>
  )
}