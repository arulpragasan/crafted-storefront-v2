import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { ProductCard } from "@/components/commerce/ProductCard"
import { Typography } from "@/components/ui/Typography"
import { ProductGallery } from "@/components/media/ProductGallery"

export default function ProductDetailPage() {
  // mock data (visual only)
  const product = {
    name: "Ivory Hand-Embroidered Lehenga",
    brand: "Crafted Studio",
    collection: "Autumn / Winter 2025",
    price: "On request",
    description:
      "An exquisite hand-embroidered lehenga crafted in ivory silk, inspired by heritage motifs and contemporary silhouettes.",
    images: [
      "https://picsum.photos/900/1200?random=1",
      "https://picsum.photos/900/1200?random=2",
    ],
  }

  const media = [
    { type: "image", src: "https://picsum.photos/900/1200?random=1" },
    { type: "image", src: "https://picsum.photos/900/1200?random=2" },
    { type: "video", src: "/videos/look.mp4" },
  ]

  const related = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    name: `Look ${i + 1}`,
    brand: "Crafted Studio",
    image: `https://picsum.photos/600/800?random=${i + 30}`,
    href: "#",
  }))

  return (
    <Section>
      <Container size="wide">
        {/* ========================
            HERO
        ======================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <ProductGallery media={media} />

          {/* Context */}
          <div className="flex flex-col gap-6 md:pt-20">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              {product.brand}
            </p>

            <Typography as="h1">
              {product.name}
            </Typography>

            <p className="text-sm text-neutral-500">
              {product.collection}
            </p>

            {product.price && (
              <p className="text-lg text-neutral-900">
                {product.price}
              </p>
            )}

            {/* ========================
                Description (belongs here)
            ======================== */}
            <div className="pt-space-6 max-w-md">
              <p className="text-neutral-600 leading-relaxed text-base">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* ========================
            RELATED
        ======================== */}
        <div className="mt-space-12">
          <Typography as="h2">
            Related Looks
          </Typography>

          <div className="mt-space-7">
            <Grid columns={3} gap="loose">
              {related.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </Section>
  )
}