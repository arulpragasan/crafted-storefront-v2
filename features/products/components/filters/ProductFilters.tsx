"use client"

import { FilterSection } from "./FilterSection"
import { FilterItem } from "./FilterItem"
import { useProductFilters } from "./useProductFilters"

export function ProductFilters() {
  const { filters, query, toggle } = useProductFilters()

  return (
    <div className="space-y-10 text-sm">

      <FilterSection title="Brand">
        {filters?.brands?.map((b) => (
          <FilterItem
            key={b.slug}
            label={b.name}
            count={b.count}
            active={query.brand?.includes(b.slug)}
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
            active={query.theme?.includes(t.slug)}
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
            active={query.occasion?.includes(o.slug)}
            onClick={() => toggle("occasion", o.slug)}
          />
        ))}
      </FilterSection>

    </div>
  )
}