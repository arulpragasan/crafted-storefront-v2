"use client"

import { useProducts } from "@/features/products/context/products"

export function useProductFilters() {
  const { filters, query, setBrand, setTheme, setOccasion } = useProducts()

  const normalize = (val?: string[] | string) => {
    if (!val) return []
    return Array.isArray(val) ? val : [val]
  }

  const toggle = (
    key: "brand" | "theme" | "occasion",
    value: string
  ) => {
    const current = normalize(query[key])

    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
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