import { Hero } from "@/components/sections/Hero"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"

import { ImageCard } from "@/components/media/ImageCard"
import { BrandCard } from "@/components/commerce/BrandCard"
import { ProductCard } from "@/components/commerce/ProductCard"

export default function LandingPage() {
  /* ======================================================
     Mock data (visual only)
     Replace later with API
  ====================================================== */

  const categories = [
    {
      id: 1,
      title: "Designers",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
      href: "#",
    },
    {
      id: 2,
      title: "Runway Shows",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
      href: "#",
    },
    {
      id: 3,
      title: "Collections",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
      href: "#",
    },
  ]

  const brands = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: `Brand ${i + 1}`,
    tagline: "Runway Collection",
    image: `https://picsum.photos/600/800?random=${i + 10}`,
    href: "#",
  }))

  const products = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: `Look ${i + 1}`,
    brand: "Crafted Studio",
    price: 7999 + i * 500,
    image: `https://picsum.photos/600/800?random=${i + 30}`,
    href: "#",
  }))

  const programs = [
    { id: 1, title: "Opening Runway", time: "10:00 AM" },
    { id: 2, title: "Designer Talk", time: "12:30 PM" },
    { id: 3, title: "Collection Launch", time: "03:00 PM" },
    { id: 4, title: "Closing Show", time: "06:00 PM" },
  ]

  const sponsors = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: `Sponsor ${i + 1}`,
  }))

  return (
    <main>
      {/* ======================================================
          1. HERO
      ====================================================== */}
      <Hero
        title="Crafted Fashion Week 2026"
        subtitle="Discover designers. Experience stories."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000"
        primaryCta={{ label: "Enter Event", href: "#" }}
      />

      {/* ======================================================
          2. CATEGORIES
      ====================================================== */}
      <Section>
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Explore
          </h2>

          <Grid>
            {categories.map((item) => (
              <ImageCard key={item.id} {...item} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ======================================================
          3. BRANDS (horizontal lookbook)
      ====================================================== */}
      <Section>
        <Container size="wide">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Featured Designers
          </h2>

          <Grid scroll>
            {brands.map((brand) => (
              <BrandCard key={brand.id} {...brand} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ======================================================
          4. PRODUCTS
      ====================================================== */}
      <Section>
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Collections
          </h2>

          <Grid columns={3}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ======================================================
          5. PROGRAM
      ====================================================== */}
      <Section tone="muted">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Program
          </h2>

          <Grid columns={2} stagger="none">
            {programs.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-neutral-500">{p.time}</p>
                <h3 className="font-serif text-xl">{p.title}</h3>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ======================================================
          6. STORY
      ====================================================== */}
      <Section spacing="loose">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl">
              Where design meets story
            </h2>
            <p className="text-neutral-600">
              Crafted brings together designers, brands, and audiences
              into one immersive virtual runway experience.
            </p>
          </div>
        </Container>
      </Section>

      {/* ======================================================
          7. SPONSORS
      ====================================================== */}
      <Section spacing="tight">
        <Container size="wide">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-8">
            Partners
          </h3>

          <Grid gap="loose" stagger="none">
            {sponsors.map((s) => (
              <div
                key={s.id}
                className="text-center text-neutral-400 text-sm"
              >
                {s.name}
              </div>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  )
}