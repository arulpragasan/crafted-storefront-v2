import { Section, Container, Grid } from "@/components/layout"
import { Headline } from "@/components/ui/Typography"

import { RailCard } from "./RailCard"
import type { DiscoveryItem } from "@/lib/api/categories"

type EditorialRailProps<T extends DiscoveryItem> = {
  title: string
  items: T[]
  getHref: (item: T) => string
}

export function EditorialRail<T extends DiscoveryItem>({
  title,
  items,
  getHref,
}: EditorialRailProps<T>) {
  if (!items.length) return null

  return (
    <Section>
      <Container size="wide">
        <Headline as="h2" className="mb-10 md:mb-16">
          {title}
        </Headline>

        <Grid variant="lookbook" gap="normal">
          {items.map((item) => (
            <RailCard key={item.slug} item={item} href={getHref(item)} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
