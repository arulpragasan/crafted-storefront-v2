import Image from "next/image"

import { CategoryDetail } from "@/lib/api/categories"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type CategoryHeroProps = {
  category: CategoryDetail
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  const imageUrl = category.media?.cover_image?.url
    ? getImageUrl(category.media.cover_image.url)
    : null

  if (!imageUrl) {
    return (
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-4 text-base text-gray-600 md:text-lg max-w-2xl mx-auto">
              {category.description}
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="aspect-[16/7] w-full relative md:aspect-[21/9]">
        <Image
          src={imageUrl}
          alt={category.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-4xl px-4 pb-8 md:pb-12">
          <h1 className="text-2xl font-semibold tracking-tight text-white md:text-5xl">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-2 text-sm text-white/85 md:text-lg max-w-2xl">
              {category.description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
