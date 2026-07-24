"use client"

import { useRouter, useSearchParams } from "next/navigation"
import type { ReactNode } from "react"

/**
 * @deprecated Use BrandsSortDropdown directly in BrandsLayout.
 * This component is kept temporarily for backwards compatibility
 * but is no longer rendered in the BLP.
 */
type BrandSortOption = {
  key: string
  label: string
}

export function BrandsToolbar({ sorting, rightSlot }: { sorting: BrandSortOption[]; rightSlot?: ReactNode }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)

    router.push(`/brands?${params.toString()}`)
  }

  return (
    <div className="flex justify-between items-center">
      <span aria-hidden="true" />

      <div className="flex items-center gap-4">
        <select
          value={searchParams.get("sort") || ""}
          onChange={(e) => handleChange(e.target.value)}
          className="text-sm text-neutral-600 hover:text-neutral-900 transition"
        >
          {sorting?.map((s) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>

        {rightSlot}
      </div>
    </div>
  )
}
