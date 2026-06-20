import { HomepageResponse } from "@/types/homepage"
import { Section } from "@/components/layout/Section"
import { Headline } from "@/components/ui/Typography"
import { Container } from "@/components/layout/Container"
import { ProductTile } from "./products/ProductTile"

interface ProductsSectionProps {
  items: HomepageResponse["featured_products"]
}

export default function ProductsSection({ items }: ProductsSectionProps) {
  if (!items?.length) return null

  const products = items.slice(0, 6)
  const featured = products.slice(0, 2)
  const supporting = products.slice(2)

  return (
    <Section rhythm="feature">
      <Container size="wide">

        <Headline as="h2" className="mb-14">
          Collections
        </Headline>

        {/* Featured row — 2 large products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((product) => (
            <ProductTile
              key={product.id}
              name={product.name}
              image={product.image_url}
              price={product.price}
              href={`/products/${product.slug}`}
              featured
            />
          ))}
        </div>

        {/* Supporting row — up to 4 smaller products */}
        {supporting.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {supporting.map((product, index) => (
              <ProductTile
                key={product.id}
                name={product.name}
                image={product.image_url}
                price={product.price}
                href={`/products/${product.slug}`}
                className={
                  supporting.length % 2 !== 0 && index === supporting.length - 1
                    ? "md:col-span-2 lg:col-span-1"
                    : undefined
                }
              />
            ))}
          </div>
        )}

      </Container>
    </Section>
  )
}
