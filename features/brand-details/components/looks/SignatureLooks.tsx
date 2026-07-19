import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { EditorialGrid } from "@/components/layout/EditorialGrid"
import { ProductCard } from "@/features/products/components/card/ProductCard"

type Product = {
  slug: string
  name: string
  image_url: string
  price?: number
}

type Props = {
  products: Product[]
}

export function SignatureLooks({ products }: Props) {
  // Editorial composition: first product is the Hero Look,
  // next four are supporting looks. Graceful degradation if fewer than five.
  const heroLook = products[0]
  const supportingLooks = products.slice(1, 5)

  return (
    <Section>
      <Container size="wide">
        <SectionTitle className="mb-12">
          Signature Collections
        </SectionTitle>

        <EditorialGrid className="grid-cols-2 md:grid-cols-4 gap-8">
          {heroLook && (
            <ProductCard
              key={heroLook.slug}
              name={heroLook.name}
              image={heroLook.image_url}
              href={`/products/${heroLook.slug}`}
              aspect="portrait"
              showPrice={false}
              className="md:col-span-2 md:row-span-2"
            />
          )}

          {supportingLooks.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              image={product.image_url}
              href={`/products/${product.slug}`}
              aspect="portrait"
              showPrice={false}
            />
          ))}
        </EditorialGrid>
      </Container>
    </Section>
  )
}
