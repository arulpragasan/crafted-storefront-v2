import { StickyBrandBar } from "@/components/brand/StickyBrandBar"
import { BrandHero } from "@/components/brand/BrandHero"
import { BrandStory } from "@/components/brand/BrandStory"
import ProgramsSection from "@/components/sections/ProgramsSection"
import { LookbookGrid } from "@/components/layout/LookbookGrid"
import { ProductCard } from "@/components/commerce/ProductCard"
import { BrandCard } from "@/components/commerce/BrandCard"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"

async function getBrand(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v2/storefront/brands/${slug}`,
    { cache: "no-store" }
  )

  return res.json()
}

export default async function BrandPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getBrand(params.slug)

  const { brand, products, programs, related_brands } = data

  return (
    <main>

      {/* Sticky brand identity while scrolling */}
      <StickyBrandBar
        name={brand.name}
        logo={brand.logo_url}
      />

      {/* Hero */}
      <BrandHero brand={brand} />

      {/* Story */}
      <BrandStory brand={brand} />

      {/* Runway / Programs */}
      <ProgramsSection items={programs} />

      {/* Featured Pieces */}
      <Section variant="default">
        <Container size="wide">

          <SectionTitle>
            Featured Pieces
          </SectionTitle>

          <LookbookGrid>
            {products.map((product: any) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image_url}
                href={`/products/${product.slug}`}
                brand={brand.name}
                price={product.price}
              />
            ))}
          </LookbookGrid>

        </Container>
      </Section>

      {/* Explore More Designers */}
      <Section variant="feature">
        <Container size="wide">

          <SectionTitle>
            Explore Designers
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {related_brands.map((b: any) => (
              <BrandCard
                key={b.id}
                name={b.name}
                image={b.logo_url}
                href={`/brands/${b.slug}`}
              />
            ))}
          </div>

        </Container>
      </Section>

    </main>
  )
}