"use client"

import { useProducts } from "@/features/products/context/products"

import type { ProductFilters } from "@/lib/api/products"
import type { ProductsQuery } from "@/lib/utils/parseProductsQuery"

type FilterKey = "brand" | "theme" | "occasion"

type UseProductFiltersResult = {
  filters: ProductFilters
  query: ProductsQuery
  toggle: (key: FilterKey, value: string) => void
  normalize: (val?: string[] | string) => string[]
}

export function useProductFilters(): UseProductFiltersResult {
  const {
    filters,
    query,
    setBrand,
    setTheme,
    setOccasion,
  } = useProducts()

  const normalize = (
    val?: string[] | string
  ): string[] => {
    if (!val) return []

    return Array.isArray(val) ? val : [val]
  }

  const toggle = (
    key: FilterKey,
    value: string
  ) => {
    const current = normalize(query[key])

    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value]

    if (key === "brand") setBrand(updated)
    if (key === "theme") setTheme(updated)
    if (key === "occasion") setOccasion(updated)
  }

  return {
    filters,
    query,
    toggle,
    normalize,
  }
}