import { Caption } from "@/components/ui/Typography"
import Link from "next/link"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type Program = {
  id: number | string
  slug?: string
  name: string
  description?: string
  cover_image?: string | null
  image_url?: string | null
  sessions_count?: number
  speakers_count?: number
}

type Props = {
  programs: Program[]
}

export function ConversationsAndEvents({ programs }: Props) {
  const featured = programs[0]

  if (!featured) return null

  const image = featured.cover_image || featured.image_url
  const href = featured.slug ? `/programs/${featured.slug}` : "#"

  const stats: string[] = []

  if (featured.sessions_count && featured.sessions_count > 0) {
    stats.push(
      `${featured.sessions_count} session${featured.sessions_count > 1 ? "s" : ""}`
    )
  }

  if (featured.speakers_count && featured.speakers_count > 0) {
    stats.push(
      `${featured.speakers_count} speaker${featured.speakers_count > 1 ? "s" : ""}`
    )
  }

  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Label */}
        <Caption className="uppercase tracking-widest text-neutral-400">
          Conversations &amp; Events
        </Caption>

        {/* Featured Program */}
        <Link href={href} className="group block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            {image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={getImageUrl(image)}
                  alt={featured.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            )}

            {/* Content */}
            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-neutral-900 group-hover:text-neutral-600 transition">
                {featured.name}
              </h3>

              {stats.length > 0 && (
                <p className="text-xs uppercase tracking-wider text-neutral-400">
                  {stats.join(" · ")}
                </p>
              )}

              {featured.description && (
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-4">
                  {featured.description}
                </p>
              )}

              <span className="inline-block text-sm text-neutral-900 underline underline-offset-4 group-hover:text-neutral-600 transition">
                Explore Program
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
