import { Headline } from "@/components/ui/Typography"
import { ProgramCard } from "@/features/programs/components/ProgramCard"
import type {
  ProgramCardData
} from "@/features/sessions/types"

/**
 * MoreFromBrand — other programs from the same brand. Full-width band below
 * the two-column reading area. Reuses the storefront ProgramCard so the
 * session page resolves back into the same discovery grammar as the rest of
 * the site. (There is intentionally no "More From Program" — Up Next covers
 * sibling sessions already.)
 */
export function MoreFromBrand({
  programs,
  brandName,
}: {
  programs: ProgramCardData[]
  brandName: string
}) {
  if (programs.length === 0) return null

  return (
    <section>
      <Headline className="mb-10 md:mb-14">More from {brandName}</Headline>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <ProgramCard
            key={p.id}
            program={{
              id: p.id,
              name: p.name,
              slug: p.slug,
              cover_image_url: p.cover_image_url ?? undefined,
              session_count: p.session_count,
              speaker_count: p.speaker_count,
            }}
            showBrand={false}
          />
        ))}
      </div>
    </section>
  )
}
