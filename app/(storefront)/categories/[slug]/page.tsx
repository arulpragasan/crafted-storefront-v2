import { notFound } from "next/navigation"

import { PageSection } from "@/components/layout/PageSection"
import { Container } from "@/components/layout/Container"

import CategoryHero from "./components/CategoryHero"
import EditorialOverview from "./components/EditorialOverview"
import ExploreSubcategories from "./components/ExploreSubcategories"
import RefineEntry from "./components/RefineEntry"

import { getCategoryBySlug } from "@/lib/api/categories"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params

  const category = await getCategoryBySlug(slug)

  if (!category) {
    return notFound()
  }

  return (
    <main>
      {/* 1. Hero */}
      <CategoryHero category={category} />

      {/* 2. Editorial Introduction */}
      <PageSection rhythm="editorial">
        <EditorialOverview category={category} />
      </PageSection>

      {/* 3. Explore by Subcategory */}
      <PageSection rhythm="editorial">
        <Container size="wide">
          <ExploreSubcategories subcategories={category.explore.subcategories} />
        </Container>
      </PageSection>

      {/* 4. Refine Entry */}
      <PageSection rhythm="editorial">
        <Container size="wide">
          <RefineEntry href={`/products?category=${slug}&refine=1`} />
        </Container>
      </PageSection>
    </main>
  )
}
