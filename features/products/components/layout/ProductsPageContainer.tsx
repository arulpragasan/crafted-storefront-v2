"use client"

import { useState } from "react"
import { useProducts } from "@/features/products/context/products"
import {
  ProductsHeader,
  ProductsLayout,
  ProductsSidebar,
  ProductsGridSection,
  ProductsToolbar,
} from "@/features/products/components/layout"

import {
  CategoryNavigation,
  DesignerSpotlight,
} from "@/features/products/components/navigation"

export function ProductsPageContainer() {
  const [showFilters, setShowFilters] = useState(true)

  const { navigation, query } = useProducts()

  return (

    <div className="space-y-10 lg:space-y-12">

      <CategoryNavigation
        categories={navigation?.categories}
        subcategories={navigation?.subcategories}
        currentCategory={query.category}
        currentSubcategory={query.subcategory}
      />

      {/* Header */}
      <div className="px-6 lg:px-8">
        <ProductsHeader
          category={query.category}
          brand={query.brand}
          theme={query.theme}
        />
      </div>

      {/* Optional spotlight */}
      <div className="px-6 lg:px-8">
        <DesignerSpotlight />
      </div>

      {/* Toolbar */}
      <div className="px-6 lg:px-8">
        <ProductsToolbar
          showFilters={showFilters}
          onToggleFilters={() =>
            setShowFilters((prev) => !prev)
          }
        />
      </div>

      {/* Layout */}
      <ProductsLayout
        showFilters={showFilters}
        sidebar={<ProductsSidebar />}
      >
        <ProductsGridSection />
      </ProductsLayout>

    </div>
  )
}