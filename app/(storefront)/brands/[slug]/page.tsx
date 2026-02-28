import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { ProductCard } from "@/components/commerce/ProductCard"
import { Typography } from "@/components/ui/Typography"
import { ImageCard } from "@/components/media/ImageCard"

export default function BrandDetailPage() {
  // mock data (visual only)
  const brand = {
    name: "Crafted Studio",
    tagline: "Heritage craftsmanship. Contemporary silhouettes.",
    description:
      "Crafted Studio is a design house rooted in traditional techniques and reimagined through a modern lens. Each creation reflects a balance of heritage, craftsmanship, and refined storytelling.",
    image: "https://picsum.photos/900/1200?random=90",
  }

  const looks = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: `Look ${i + 1}`,
    brand: brand.name,
    image: `https://picsum.photos/600/800?random=${i + 60}`,
    href: "#",
  }))

  return (
    <Section>
      <Container size="wide">
        {/* ========================
            BRAND HERO
        ======================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand imagery */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand context */}
          <div className="flex flex-col gap-6 md:pt-20">
            <Typography as="h1">
              {brand.name}
            </Typography>

            <p className="text-sm text-neutral-500 max-w-md">
              {brand.tagline}
            </p>

            <div className="pt-space-4 max-w-md">
              <p className="text-neutral-600 leading-relaxed">
                {brand.description}
              </p>
            </div>
          </div>
        </div>

        {/* ========================
            FEATURED LOOKS
        ======================== */}
        <div className="mt-space-16">
          <Typography as="h2">
            Featured Looks
          </Typography>

          <div className="mt-space-8">
            <Grid columns={3} gap="loose">
              {looks.map((look) => (
                <ProductCard key={look.id} {...look} />
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </Section>
  )
}