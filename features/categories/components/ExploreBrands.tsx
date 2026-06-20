import Link from "next/link"
import { SectionTitle } from "@/components/ui/Typography"
import { sectionHeaderSpacingClass } from "@/styles/design-system/spacing"

type Brand = {
  slug: string
  name: string
  image: string
}

type ExploreBrandsProps = {
  slug: string
  brands: Brand[]
}

export default function ExploreBrands({ slug, brands }: ExploreBrandsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle
        as="h2"
        size="section"
        className={sectionHeaderSpacingClass.toEditorialGrid}
      >
        Explore by Brand
      </SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {brands.slice(0, 8).map((brand) => (
          <Link
            key={brand.slug}
            href={`/categories/${slug}?brand=${brand.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
            </div>

            <p className="mt-4 font-medium">
              {brand.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href={`/brands?category=${slug}`}
          className="text-sm text-neutral-500"
        >
          View all brands →
        </Link>
      </div>
    </div>
  )
}
