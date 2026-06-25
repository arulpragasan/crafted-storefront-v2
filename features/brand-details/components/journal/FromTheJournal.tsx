import Link from "next/link"
import clsx from "clsx"
import { Caption } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type Blog = {
  id: number | string
  slug?: string
  title: string
  excerpt?: string
  image_url?: string | null
  cover_image?: string | null
}

type Props = {
  blogs: Blog[]
  brandSlug: string
}

export function FromTheJournal({ blogs, brandSlug }: Props) {
  const stories = blogs.slice(0, 3)
  const featured = stories[0]
  const supporting = stories.slice(1)

  if (!featured) return null

  const featuredImage = featured.cover_image || featured.image_url
  const featuredHref = featured.slug
    ? `/journal/${featured.slug}`
    : `/brands/${brandSlug}/journal/${featured.id}`

  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Title */}
        <Caption className="uppercase tracking-widest text-neutral-400">
          From the Journal
        </Caption>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Featured Story */}
          <Link href={featuredHref} className="group block space-y-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-neutral-100">
              {featuredImage ? (
                <img
                  src={getImageUrl(featuredImage)}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl text-neutral-300">
                    {featured.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 group-hover:text-neutral-600 transition">
                {featured.title}
              </h3>

              {featured.excerpt && (
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              )}

              <span className="inline-block text-sm text-neutral-900 underline underline-offset-4 group-hover:text-neutral-600 transition">
                Read Story →
              </span>
            </div>
          </Link>

          {/* Supporting Stories */}
          {supporting.length > 0 && (
            <div className="flex flex-col gap-12 justify-center">
              {supporting.map((story) => {
                const storyImage = story.cover_image || story.image_url
                const storyHref = story.slug
                  ? `/journal/${story.slug}`
                  : `/brands/${brandSlug}/journal/${story.id}`

                return (
                  <Link
                    key={story.id}
                    href={storyHref}
                    className="group flex gap-6 items-start"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-28 w-28 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                      {storyImage ? (
                        <img
                          src={getImageUrl(storyImage)}
                          alt={story.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-2xl text-neutral-300">
                            {story.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div className="space-y-2 min-w-0">
                      <h4 className="text-base md:text-lg font-light tracking-tight text-neutral-900 group-hover:text-neutral-600 transition line-clamp-2">
                        {story.title}
                      </h4>

                      {story.excerpt && (
                        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                          {story.excerpt}
                        </p>
                      )}

                      <span className="inline-block text-xs text-neutral-900 underline underline-offset-4 group-hover:text-neutral-600 transition">
                        Read Story →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
