"use client"

import { useSearchParams, useRouter } from "next/navigation"

const FILTER_KEYS = ["category", "theme", "occasion"]

export function ActiveFiltersBar() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Collect active filters
  const activeEntries = FILTER_KEYS.flatMap((key) => {
    const value = searchParams.get(key)
    if (!value) return []

    return value.split(",").map((v) => ({
      key,
      value: v,
    }))
  })

  if (activeEntries.length === 0) return null

  // Remove single filter value
  const removeFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const current = params.get(key)?.split(",") || []

    const next = current.filter((v) => v !== value)

    if (next.length === 0) {
      params.delete(key)
    } else {
      params.set(key, next.join(","))
    }

    params.set("page", "1")
    router.push(`/brands?${params.toString()}`)
  }

  // Clear all filters
  const clearAll = () => {
    router.push("/brands")
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600">
      {/* Active filters */}
      {activeEntries.map(({ key, value }) => (
        <button
          key={`${key}-${value}`}
          onClick={() => removeFilter(key, value)}
          className="hover:text-neutral-900 transition"
        >
          {formatLabel(value)} ×
        </button>
      ))}

      {/* Clear all */}
      <button
        onClick={clearAll}
        className="text-xs text-neutral-500 hover:text-neutral-900 ml-2"
      >
        Clear all
      </button>
    </div>
  )
}

// Format slug to readable label
function formatLabel(value: string) {
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}
