import Link from "next/link"
import { SectionTitle } from "@/components/ui/Typography"
import { sectionHeaderSpacingClass } from "@/styles/design-system/spacing"

type Theme = {
  slug: string
  name: string
  image: string
}

type ExploreThemesProps = {
  slug: string
  themes: Theme[]
}

export default function ExploreThemes({ slug, themes }: ExploreThemesProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle
        as="h2"
        size="section"
        className={sectionHeaderSpacingClass.toEditorialGrid}
      >
        Explore by Theme
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-12">
        {themes.slice(0, 5).map((theme) => (
          <Link
            key={theme.slug}
            href={`/categories/${slug}?theme=${theme.slug}`}
            className="block rounded-2xl overflow-hidden"
          >
            <img
              src={theme.image}
              alt={theme.name}
              className="w-full h-72 object-cover"
            />
            <p className="mt-4 text-lg">
              {theme.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
