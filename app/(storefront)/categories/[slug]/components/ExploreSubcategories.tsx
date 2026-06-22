import Link from "next/link"

import { CategoryDetailSubcategory } from "@/lib/api/categories"

type ExploreSubcategoriesProps = {
  subcategories: CategoryDetailSubcategory[]
}

export default function ExploreSubcategories({
  subcategories,
}: ExploreSubcategoriesProps) {
  if (!subcategories || subcategories.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Explore Subcategories</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.id}
            href={`/products?category=${subcategory.permalink}`}
            className="group block rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {subcategory.image_url && (
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={subcategory.image_url}
                  alt={subcategory.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900">
                {subcategory.name}
              </h3>
              {subcategory.description && (
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {subcategory.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
