import { getProducts } from "@/lib/api/products"
import { parseProductsQuery } from "@/lib/utils/parseProductsQuery"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

import { ProductsPageContainer } from "@/features/products/components/layout"
import { ProductsProvider } from "@/features/products/context/products"

export const dynamic = "force-dynamic"

type SearchParams = Record<string, string | string[] | undefined>

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}


export default async function ProductsPage({ searchParams }: Props) {
  const resolvedParams = await searchParams   // ✅ unwrap here

  const query = parseProductsQuery(resolvedParams)

  const { products, filters, meta, navigation } =
    await getProducts(query)

  return (
    <section>
      <Container>

        <ProductsProvider
          value={{ products, filters, meta, navigation }}
        >
          <ProductsPageContainer
            category={query.category}
            subcategory={query.subcategory}
          />
        </ProductsProvider>

      </Container>
    </section>
  )
}