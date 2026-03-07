import { notFound } from "next/navigation"
import { BrandHero } from "@/components/brand/BrandHero"
import { BrandStory } from "@/components/brand/BrandStory"
import { RunwayStrip } from "@/components/brand/RunwayStrip"
import { SignatureLooks } from "@/components/brand/SignatureLooks"
import { ThemedProducts } from "@/components/brand/ThemedProducts"
import { ConnectWithBrand } from "@/components/brand/ConnectWithBrand"
import { StickyBrandBar } from "@/components/brand/StickyBrandBar"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"

import ProductsSection from "@/components/sections/ProductsSection"
import ProgramsSection from "@/components/sections/ProgramsSection"
import DesignerCarousel from "@/components/sections/DesignerCarousel"

export const revalidate = 3600

async function getBrandData(slug: string) {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"

  const res = await fetch(`${apiUrl}/api/v2/storefront/brands/${slug}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) return null
  return res.json()
}

export default async function BrandDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getBrandData(slug)

  if (!data || !data.brand) notFound()

  const {
    brand,
    brand_story,
    featured_products = [],
    themed_products = [],
    programs = [],
    explore_brands = []
  } = data
  return (
    <main className="min-h-screen bg-stone-50">

            <StickyBrandBar
        name={brand.name}
        logo={brand.logo_url}
      />
      <BrandHero brand={brand} />

      {/* Signature Looks (overlapping hero) */}
      {featured_products.length > 0 && (
        <SignatureLooks products={featured_products.slice(0,5)} />
      )}

      {/* Story */}
      {brand.description && (
        <BrandStory
          title={brand.name}
          description={brand.description}
        />
      )}

      {/* Programs */}
      {programs.length > 0 && (
        <ProgramsSection programs={programs} />
      )}

      {/* Runway Strip */}
      {/*{featured_products.length > 0 && (
        <RunwayStrip
          images={featured_products.map(p => p.image_url)}
        />
      )}*/}

      {/* Collections */}
      {themed_products.length > 0 && (
        <ThemedProducts themes={themed_products} />
      )}

      {/* Connect */}
      <Section className="py-40 bg-stone-100">
        <Container>
          <ConnectWithBrand brand={brand} />
        </Container>
      </Section>

      {/* Explore Designers */}
      {explore_brands.length > 0 && (
        // <Section className="py-32 bg-white">
        //   <Container>
        //     <SectionTitle className="mb-20">
        //       Discover More Designers
        //     </SectionTitle>

        //     <DesignerCarousel items={explore_brands} />
        //   </Container>
        // </Section>
        <DesignerCarousel items={explore_brands} />
      )}

    </main>
  )
}