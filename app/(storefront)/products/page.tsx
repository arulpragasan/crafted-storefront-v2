import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { ProductsClient } from "./ProductsClient"

const products = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: `Look ${i + 1}`,
  brand: "Crafted Studio",
  price: 7999 + i * 500,
  image: `https://picsum.photos/600/800?random=${i + 200}`,
  href: "#",
}))

export default function ProductsPage() {
  return (
    <Section>
      <Container size="wide">
        <ProductsClient products={products} />
      </Container>
    </Section>
  )
}