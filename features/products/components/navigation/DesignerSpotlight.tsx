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
      const updated = activeBrands.filter((b) => b !== slug)
      setBrand(updated.length > 0 ? updated : null)
    } else {
      setBrand([...activeBrands, slug])
    }
  }

  return (
    <div className="mb-16 space-y-6">

      <h3 className="text-xs uppercase tracking-widest text-neutral-400">
        Designer Spotlight
      </h3>

      <div className="flex flex-wrap gap-4">
        {designers.map((designer) => {
          const isActive = activeBrands.includes(designer.slug)

          return (
            <button
              key={designer.slug}
              onClick={() => handleSelect(designer.slug)}
              className={`
                px-4 py-2
                border text-sm
                transition-all duration-200
                ${isActive
                  ? "border-black text-black font-medium"
                  : "border-neutral-200 text-neutral-600 hover:border-black hover:text-black"
                }
              `}
            >
              {designer.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
