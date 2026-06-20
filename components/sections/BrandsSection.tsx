import { Section } from "@/components/layout/Section"
import { Headline } from "@/components/ui/Typography"
import { Container } from "@/components/layout/Container"
import { BrandTile } from "./brands/BrandTile"

export default function BrandsSection({ items }) {
  if (!items?.length) return null

  const brands = items.slice(0, 5)
  const [featured, ...rest] = brands

  return (
    <Section variant="default">
      <Container size="wide">

        <Headline as="h2" className="mb-14">
          Featured Designers
        </Headline>

        {/* Editorial 5-tile grid */}
        {/*gap-6*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">

          {/* Featured tile — spans 2 rows on desktop */}
          <BrandTile
            name={featured.name}
            image={featured.cover_image_url}
            href={`/brands/${featured.slug || featured.id}`}
            featured
            className="lg:row-span-2"
          />

          {/* Remaining tiles */}
          {rest.map((brand, index) => (
            <BrandTile
              key={brand.id}
              name={brand.name}
              image={brand.cover_image_url}
              href={`/brands/${brand.slug || brand.id}`}
              className={
                rest.length % 2 !== 0 && index === rest.length - 1
                  ? "md:col-span-2 lg:col-span-1"
                  : undefined
              }
            />
          ))}

        </div>

      </Container>
    </Section>
  )
}
