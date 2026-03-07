import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { ProductCard } from "@/components/commerce/ProductCard"

export function ThemedProducts({ themes }: any) {

  return (
    <Section className="py-32">

      <Container size="wide">

        {themes.map((theme:any)=>(
          <div key={theme.theme} className="mb-24">

            <SectionTitle className="mb-12">
              {theme.theme}
            </SectionTitle>

            <div
  className="
  flex gap-8
  overflow-x-auto
  pb-4
  snap-x snap-mandatory
  scrollbar-hide
"
>

  {theme.products.map((product:any)=>(
    <div
      key={product.id}
      className="min-w-[260px] snap-start"
    >

      <ProductCard
        name={product.name}
        image={product.image_url}
        price={product.price}
        href={`/products/${product.slug}`}
        aspect="portrait"
      />

    </div>
  ))}

</div>

          </div>
        ))}

      </Container>

    </Section>
  )
}