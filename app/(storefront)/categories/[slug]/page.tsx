import { notFound } from "next/navigation"

import { PageSection } from "@/components/layout/PageSection"
import { Container } from "@/components/layout/Container"
import { EditorialRail } from "@/features/categories/components/rail/EditorialRail"

import CategoryHero from "./components/CategoryHero"
import EditorialOverview from "./components/EditorialOverview"
import ExploreThemes from "./components/ExploreThemes"
import RefineEntry from "./components/RefineEntry"

import {
  getCategoryBySlug,
  getThemesByCategory,
  getBrandsByCategory,
} from "@/lib/api/categories"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params

  const category = await getCategoryBySlug(slug)

  if (!category) {
    return notFound()
  }

  const [themes, brands] = await Promise.all([
    getThemesByCategory(slug),
    getBrandsByCategory(slug),
  ])

  return (
    <main>
      {/* 1. Hero */}
      <CategoryHero category={category} />

      {/* 2. Editorial Introduction */}
      <PageSection rhythm="editorial">
        <EditorialOverview category={category} />
      </PageSection>

      {/* 3. Explore by Theme */}
      <PageSection rhythm="editorial">
        <Container size="wide">
          <ExploreThemes slug={slug} themes={themes} />
        </Container>
      </PageSection>

      {/* 4. Explore by Brand */}
      <EditorialRail
        title="Explore by Brand"
        items={brands}
        getHref={(brand) => `/products?category=${slug}&brand=${brand.slug}`}
      />

      {/* 5. Refine Entry */}
      <PageSection rhythm="editorial">
        <Container size="wide">
          <RefineEntry href={`/products?category=${slug}&refine=1`} />
        </Container>
      </PageSection>
    </main>
  )
}