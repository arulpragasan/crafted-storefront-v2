import { Body, Display, Meta } from "@/components/ui/Typography"

export function CategoriesEditorialHero() {
  return (
    <div className="max-w-4xl space-y-8">
      <Meta>Crafted Categories</Meta>

      <Display as="h1" className="max-w-3xl">
        Curated worlds shaped through craftsmanship, atmosphere, and intentional design.
      </Display>

      <Body className="max-w-2xl">
        Move through considered categories as editorial chapters, each one composed around material presence, ceremony, and the rhythm of discovery.
      </Body>
    </div>
  )
}
