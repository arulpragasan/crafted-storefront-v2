import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { EditorialGrid } from "@/components/layout/EditorialGrid"
import { BrandCard } from "@/features/brands/components/card/BrandCard"


export default function BrandsSection({ items }) {
  return (
    <Section variant="default">
      <Container size="wide">

        <SectionTitle spacing="toGrid">
          Featured Designers
        </SectionTitle>

        <EditorialGrid className="grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((brand, index) => (
            <BrandCard
              key={brand.id}
              name={brand.name}
              tagline={brand.tagline}
              image={brand.cover_image_url}
              logo={brand.logo_url}
              href={`/brands/${brand.slug || brand.id}`}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            />
          ))}
        </EditorialGrid>

      </Container>
    </Section>
  )
}
