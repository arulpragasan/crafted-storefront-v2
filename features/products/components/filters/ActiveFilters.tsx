"use client"

import { useProducts } from "@/features/products/context/products"

export function ActiveFilters() {
  const { query, setBrand, setTheme, setOccasion } = useProducts()

  // 🔥 Normalize values to always be arrays
  const normalize = (val: string | string[] | undefined) => {
    if (!val) return []

    // 🔥 Handle comma-separated string
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

    if (key === "brand") setBrand(updated)
    if (key === "theme") setTheme(updated)
    if (key === "occasion") setOccasion(updated)
  }

  function clearAll() {
    setBrand([])
    setTheme([])
    setOccasion([])
  }

  return (
    <div className="flex flex-wrap items-center gap-3">

      {activeFilters.map((filter) => (
        <button
          key={`${filter.key}-${filter.value}`}
          onClick={() => removeFilter(filter.key, filter.value)}
          className="
            group flex items-center gap-2
            px-3.5 py-1.5
            text-sm
            rounded-full border
            border-neutral-300
            bg-white
            hover:border-black
            transition-all duration-200
          "
        >
          <span className="capitalize">
            {filter.value.replace("-", " ")}
          </span>

          <span className="text-neutral-400 group-hover:text-black transition">
            ✕
          </span>
        </button>
      ))}

      <button
        onClick={clearAll}
        className="text-sm text-neutral-500 hover:text-black transition underline underline-offset-4"
      >
        Clear all
      </button>

    </div>
  )
}