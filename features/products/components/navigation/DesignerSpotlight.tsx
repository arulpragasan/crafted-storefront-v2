"use client"

import { useProducts } from "@/features/products/context/products"

export function DesignerSpotlight() {
  const { products, query, setBrand } = useProducts()

  const designers = Array.from(
    new Map(
      products
        ?.filter((p) => p.brand)
        .map((p) => [p.brand!.slug, p.brand])
    ).values()
  ).slice(0, 6)

  if (!designers.length) return null

  const normalize = (val: string | string[] | undefined): string[] => {
    if (!val) return []
    if (typeof val === "string") {
      return val.includes(",") ? val.split(",") : [val]
    }
    return val
  }

  const activeBrands = normalize(query.brand)

  function handleSelect(slug: string) {
    if (activeBrands.includes(slug)) {
      const updated = activeBrands.filter((brand) => brand !== slug)
      setBrand(updated)
    } else {
      setBrand([...activeBrands, slug])
    }
  }

  return (
    <nav className="mb-12" aria-label="Featured designers">

      <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-5">
        Featured Designers
      </h3>

      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
        {designers.map((designer, index) => {
          const isActive = activeBrands.includes(designer.slug)

          return (
            <span key={designer.slug} className="inline-flex items-baseline gap-6">
              <button
                onClick={() => handleSelect(designer.slug)}
                className={`
                  text-lg lg:text-xl tracking-wide
                  transition-all duration-200
                  ${isActive
                    ? "text-black underline underline-offset-8 decoration-1"
                    : "text-neutral-400 hover:text-black"
                  }
                `}
              >
                {designer.name}
              </button>
              {index < designers.length - 1 && (
                <span className="text-neutral-200 select-none" aria-hidden="true">
                  /
                </span>
              )}
            </span>
          )
        })}
      </div>
    </nav>
  )
}
