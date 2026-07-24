import { Section } from "@/components/layout/Section"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { ProductCard } from "@/features/products/components/card/ProductCard"
import type { FeaturedProductsSection } from "@/types/homepage"


interface ProductsSectionProps {
    items: FeaturedProductsSection["items"]
}

export default function ProductsSection({ items }: ProductsSectionProps) {
    return (
        <Section variant="default">
            <Container size="wide">
                <SectionTitle spacing="toGrid">
                  Featured Collections
                </SectionTitle>

                <Grid className="grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                    {items.map((product, index) => (
                        <ProductCard
                        key={product.id}
                        name={product.name}
                        image={product.image_url}
                        price={product.price}
                        href={`/products/${product.slug}`}
                        aspect={"portrait"}
                        className={(index === 0)||(index === 3) ? "md:col-span-2 md:row-span-2" : ""}
                        />
                    ))}
                </Grid>
            </Container>
        </Section>
    )
}
