"use client"

import { useState } from "react"
import { BrandsGrid } from "../grid/BrandsGrid"
import { BrandsFilters } from "../filters/BrandsFilters"
import { BrandsNavigation } from "../navigation/BrandsNavigation"
import { BrandsToolbar } from "../toolbar/BrandsToolbar"
import { FeaturedBrandCard } from "../grid/FeaturedBrandCard"
import { ActiveFiltersBar } from "../filters/ActiveFiltersBar"
import { Title, Muted, Caption } from "@/components/ui/Typography"

type BrandsLayoutProps = {
  data: any
}

export function BrandsLayout({ data }: BrandsLayoutProps) {
  const [showFilters, setShowFilters] = useState(true)

  const featured = data.brands?.[0]
  const rest = data.brands || []

  return (
    <div className="space-y-12">

      <div className="space-y-8">
        {/* Context + Hero */}
        <div className="space-y-3">
          <Title className="font-light text-neutral-900">
            Discover Brands
          </Title>

          <Muted className="max-w-xl">
            Curated designers redefining modern luxury.
          </Muted>
        </div>

        {/* Toolbar */}
        <BrandsToolbar
          sorting={data.sorting}
          rightSlot={
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          }
        />
      </div>

      {/* Featured */}
      {featured && (
        <section className="space-y-4">
          <Caption>Featured</Caption>

          <div className="-mx-4 md:-mx-6">
            <div className="max-w-6xl mx-auto">
              <FeaturedBrandCard brand={featured} />
            </div>
          </div>
        </section>
      )}

      {/* Main Layout */}
      <div className="flex gap-10">
        {/* Sidebar */}
        <aside
          className={`
            hidden lg:block transition-all duration-300
            ${showFilters ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"}
          `}
        >
          <BrandsFilters filters={data.filters} />
        </aside>

        {/* Grid Area */}
        <main className="flex-1 min-w-0 space-y-6">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <Caption>All Brands</Caption>

            {/* Toggle */}
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Active Filters */}
          <ActiveFiltersBar />

          {/* Grid */}
          <BrandsGrid brands={rest} />
        </main>
      </div>
    </div>
  )
}
