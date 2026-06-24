"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Text, Caption } from "@/components/ui/Typography"

type FilterItem = {
  slug: string
  name: string
  count: number
}

type Filters = {
  categories?: FilterItem[]
  themes?: FilterItem[]
  occasions?: FilterItem[]
}

const COLLAPSED_COUNT = 5

export function BrandsFilters({ filters }: { filters: Filters }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // --- helpers ---
  const getValues = (key: string): string[] => {
    const value = searchParams.get(key)
    return value ? value.split(",") : []
  }

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const values = new Set(getValues(key))

    if (values.has(value)) {
      values.delete(value)
    } else {
      values.add(value)
    }

    if (values.size === 0) {
      params.delete(key)
    } else {
      params.set(key, Array.from(values).join(","))
    }

    params.set("page", "1")
    router.push(`/brands?${params.toString()}`)
  }

  const clearAll = () => {
    router.push("/brands")
  }

  const hasActiveFilters = ["category", "theme", "occasion"].some(
    (key) => getValues(key).length > 0
  )

  // --- UI ---
  return (
    <div className="space-y-8 text-sm">
      {/* Clear All */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-neutral-500 hover:text-neutral-900 transition"
        >
          Clear all
        </button>
      )}

      {/* Sections */}
      <FilterSection
        title="Categories"
        items={filters.categories}
        paramKey="category"
        getValues={getValues}
        onToggle={updateFilter}
      />

      <FilterSection
        title="Themes"
        items={filters.themes}
        paramKey="theme"
        getValues={getValues}
        onToggle={updateFilter}
      />

      <FilterSection
        title="Occasions"
        items={filters.occasions}
        paramKey="occasion"
        getValues={getValues}
        onToggle={updateFilter}
      />
    </div>
  )
}

function FilterSection({
  title,
  items,
  paramKey,
  getValues,
  onToggle,
}: {
  title: string
  items?: FilterItem[]
  paramKey: string
  getValues: (key: string) => string[]
  onToggle: (key: string, value: string) => void
}) {
  const [expanded, setExpanded] = useState(false)

  if (!items || items.length === 0) return null

  const activeValues = getValues(paramKey)
  const hasMore = items.length > COLLAPSED_COUNT
  const visibleItems = expanded ? items : items.slice(0, COLLAPSED_COUNT)

  return (
    <div className="space-y-3">
      {/* Section Title */}
      <Caption>{title}</Caption>

      {/* Items */}
      <div className="space-y-2">
        {visibleItems.map((item) => {
          const active = activeValues.includes(item.slug)

          return (
            <button
              key={item.slug}
              onClick={() => onToggle(paramKey, item.slug)}
              className="flex items-center gap-2 text-left w-full group"
            >
              {/* Dot indicator */}
              <span
                className={`
                  h-1.5 w-1.5 rounded-full
                  ${active ? "bg-neutral-900" : "bg-transparent"}
                `}
              />

              {/* Text */}
              <Text
                className={`
                  transition
                  ${
                    active
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-600 group-hover:text-neutral-900"
                  }
                `}
              >
                {item.name}
              </Text>

              {/* Count */}
              <Caption>({item.count})</Caption>
            </button>
          )
        })}
      </div>

      {/* View All / Show Less toggle */}
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-xs text-neutral-500 hover:text-neutral-900 transition"
        >
          {expanded ? "Show Less" : "View All"}
        </button>
      )}
    </div>
  )
}
