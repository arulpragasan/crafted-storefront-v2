"use client"

import { useProducts } from "@/features/products/context/products"

export function ActiveFilters() {
  const { query, setBrand, setTheme, setOccasion } = useProducts()

  const normalize = (val: string | string[] | undefined): string[] => {
    if (!val) return []
    if (typeof val === "string") {
      return val.includes(",") ? val.split(",") : [val]
    }
    return val
  }

  const filters = [
    { key: "brand", values: normalize(query.brand) },
    { key: "theme", values: normalize(query.theme) },
    { key: "occasion", values: normalize(query.occasion) },
  ]

  const activeFilters = filters.flatMap((f) =>
    f.values.map((value) => ({
      key: f.key,
      value,
    }))
  )

  if (!activeFilters.length) return null

  function removeFilter(key: string, value: string) {
    const current = normalize(query[key as keyof typeof query])
    const updated = current.filter((v) => v !== value)
    const result = updated.length > 0 ? updated : null

    if (key === "brand") setBrand(result)
    if (key === "theme") setTheme(result)
    if (key === "occasion") setOccasion(result)
  }

  function clearAll() {
    setBrand(null)
    setTheme(null)
    setOccasion(null)
  }

  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-sm">
      <span className="text-neutral-400 uppercase tracking-wider text-xs">
        Filtered by
      </span>

      {activeFilters.map((filter, index) => (
        <button
          key={`${filter.key}-${filter.value}`}
          onClick={() => removeFilter(filter.key, filter.value)}
          className="group inline-flex items-center gap-1.5 text-neutral-800 hover:text-black transition-colors duration-200"
        >
          <span className="capitalize underline underline-offset-4 decoration-neutral-300 group-hover:decoration-black transition-colors duration-200">
            {filter.value.replace(/-/g, " ")}
          </span>
          <span className="text-neutral-400 group-hover:text-black transition-colors text-xs">
            ×
          </span>
          {index < activeFilters.length - 1 && (
            <span className="text-neutral-300 ml-2 select-none">/</span>
          )}
        </button>
      ))}

      <button
        onClick={clearAll}
        className="ml-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-black transition-colors duration-200"
      >
        Clear all
      </button>
    </div>
  )
}
