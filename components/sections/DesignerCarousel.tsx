"use client"

import { HomepageResponse } from "@/types/homepage"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BrandCard } from "@/components/commerce/BrandCard"

type Props = {
  items: HomepageResponse["featured_brands"]
}

export default function DesignerCarousel({ items }: Props) {
  return (
    <Section variant="muted">

      <Container>

        <SectionTitle className="mb-10">
          Discover More Designers
        </SectionTitle>

        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

          {items.map((brand) => (
            <div key={brand.id} className="min-w-[220px] md:min-w-[260px]">
              <BrandCard
                name={brand.name}
                image={brand.logo_url}
                href={`/brands/${brand.slug || brand.id}`}
                aspect="portrait"
              />
            </div>
          ))}

        </div>

      </Container>

    </Section>
  )
}