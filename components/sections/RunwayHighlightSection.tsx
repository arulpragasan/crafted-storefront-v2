import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { FeaturedExperience } from "./programs/FeaturedExperience"

export default function RunwayHighlightSection({ item }) {
  if (!item) return null

  return (
    <Section rhythm="feature">
      <Container size="wide">
        <FeaturedExperience
          title={item.title}
          description={item.description}
          image_url={item.image_url || "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000"}
          slug={item.slug}
          sessions={item.sessions}
        />
      </Container>
    </Section>
  )
}
