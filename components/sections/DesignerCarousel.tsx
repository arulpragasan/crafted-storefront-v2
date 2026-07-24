"use client"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BrandCard } from "@/features/brands/components/card/BrandCard"
import type { FeaturedBrandsSection } from "@/types/homepage"

type Props = {
  items: FeaturedBrandsSection["items"]
}

export default function DesignerCarousel({ items }: Props) {
  return (
    <Section variant="muted">
      <Container>

        <SectionTitle spacing="toGrid">
          Discover More Designers
        </SectionTitle>

        <div className="flex gap-8 overflow-x-auto pb-6 pr-6 scrollbar-hide">
          {items.map((brand, index) => (
            <div key={brand.id} className="min-w-[220px] md:min-w-[260px]">
              <BrandCard
                key={brand.id}
                name={brand.name}
                tagline={brand.tagline ?? undefined}
                image={brand.cover_image_url ?? undefined}
                href={`/brands/${brand.slug}`}
                className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              />
              {/*<BrandCard
                name={brand.name}
                image={brand.cover_image_url}
                tagline={brand.tagline}
                href={`/brands/${brand.slug || brand.id}`}
                aspect="portrait"
              />*/}
            </div>
          ))}
        </div>

      </Container>
    </Section>
  )
}
