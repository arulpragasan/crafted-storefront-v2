import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { LookbookGrid } from "@/components/layout/LookbookGrid"
import { ProductCard } from "@/components/commerce/ProductCard"

export function SignatureLooks({ products }: any) {

  return (
    <Section className="-mt-32 relative z-10">

      <Container className="bg-white rounded-2xl shadow-xl p-12">

        <SectionTitle className="mb-12">
          Signature Looks
        </SectionTitle>

        <LookbookGrid>

          {products.map((product: any) => (
            
            <ProductCard
              key={product.slug}
              name={product.name}
              image={product.image_url}
              price={product.price}
              href={`/products/${product.slug}`}
              aspect="portrait"
            />
          ))}

        </LookbookGrid>

      </Container>

    </Section>
  )
}