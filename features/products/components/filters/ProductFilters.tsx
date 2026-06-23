"use client"

import { FilterSection } from "./FilterSection"
import { FilterItem } from "./FilterItem"
import { useProductFilters } from "./useProductFilters"

function normalizeToArray(val: string | string[] | undefined): string[] {
  if (!val) return []
  if (typeof val === "string") {
    return val.includes(",") ? val.split(",") : [val]
  }
  return val
}

export function ProductFilters() {
  const { filters, query, toggle } = useProductFilters()

  const activeBrands = normalizeToArray(query.brand)
  const activeThemes = normalizeToArray(query.theme)
  const activeOccasions = normalizeToArray(query.occasion)

  return (
    <div className="space-y-10 text-sm">

      <FilterSection title="Brand">
        {filters?.brands?.map((b) => (
          <FilterItem
            key={b.slug}
            label={b.name}
            count={b.count}
            active={activeBrands.includes(b.slug)}
            onClick={() => toggle("brand", b.slug)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Theme">
        {filters?.themes?.map((t) => (
          <FilterItem
            key={t.slug}
            label={t.name}
            count={t.count}
            active={activeThemes.includes(t.slug)}
            onClick={() => toggle("theme", t.slug)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Occasion">
        {filters?.occasions?.map((o) => (
          <FilterItem
            key={o.slug}
            label={o.name}
            count={o.count}
            active={activeOccasions.includes(o.slug)}
            onClick={() => toggle("occasion", o.slug)}
          />
        ))}
      </FilterSection>

    </div>
  )
}
