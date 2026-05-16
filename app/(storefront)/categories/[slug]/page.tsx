import { notFound } from "next/navigation"
import CategoryHero from "./components/CategoryHero"
import EditorialOverview from "./components/EditorialOverview"
import ExploreBrands from "./components/ExploreBrands"
import ExploreThemes from "./components/ExploreThemes"
import ProductResults from "./components/ProductResults"
import {
  getCategoryBySlug,
  getBrandsByCategory,
  getThemesByCategory,
  getProducts,
} from "@/lib/api/categories"
import { PageSection } from "@/components/layout/PageSection"


type PageProps = {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{
    brand?: string
    theme?: string
    page?: string
  }>
}

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params
  const resolvedSearchParams = await searchParams

  const brand = resolvedSearchParams?.brand
  const theme = resolvedSearchParams?.theme
  const page = Number(resolvedSearchParams?.page ?? 1)


  // 🔹 Fetch category meta
  const category = await getCategoryBySlug(slug)
  if (!category) return notFound()

  // 🔹 Fetch curated brands for this category
  const brands = await getBrandsByCategory(slug)

  // 🔹 Fetch curated themes
  const themes = await getThemesByCategory(slug)

  const showProducts = Boolean(brand || theme)

  let products = null

  if (showProducts) {
    products = await getProducts({
      category: slug,
      brand,
      theme,
      page,
      limit: 24,
    })
  }

  return (
    <main>

      {/* 1️⃣ Hero */}
      <CategoryHero category={category} />

      {/* 2️⃣ Editorial Overview */}
      <PageSection rhythm="editorial">
        <EditorialOverview category={category} />
      </PageSection>

      {/* 3️⃣ Explore by Brand */}
      {!showProducts && (
        <PageSection rhythm="editorial">
          <ExploreBrands slug={slug} brands={brands} />
        </PageSection>
      )}

      {/* 4️⃣ Explore by Theme */}
      {!showProducts && themes.length > 0 && (
        <PageSection rhythm="editorial">
          <ExploreThemes slug={slug} themes={themes} />
        </PageSection>
      )}

      {/* 5️⃣ Products (Conditional) */}
      {showProducts && (
        <PageSection rhythm="editorial">
          <ProductResults
            products={products}
            page={page}
          />
        </PageSection>
      )}

    </main>
  )
}
