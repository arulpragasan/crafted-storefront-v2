import { Caption, Headline } from "@/components/ui/Typography"
import ProductCard from "@/components/cards/ProductCard"

type Product = {
  id: number | string
  name: string
  slug: string
  price?: number
  compare_at_price?: number
  image_url?: string
  brand_name?: string
  [key: string]: any
}

type Theme = {
  name: string
  slug?: string
  products: Product[]
}

type Props = {
  themes: Theme[]
}

export function ThemedProducts({ themes }: Props) {
  return (
    <section className="py-16 px-6 lg:px-8 space-y-16">
      {themes.map((theme) => (
        <div key={theme.slug || theme.name} className="space-y-6">
          <Headline size="sm" className="tracking-tight">
            {theme.name}
          </Headline>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {theme.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
