/* ======================================================
   Types
====================================================== */

export interface Category {
  slug: string
  title: string
  image: string
  shortDescription: string
  editorialText: string
}

export interface Brand {
  slug: string
  name: string
  image: string
  logo?: string
}

export interface Theme {
  slug: string
  name: string
  image: string
  descriptor?: string
}

export interface Occasion {
  slug: string
  name: string
  image: string
}

/** Shared shape consumed by the generic editorial rail. */
export type DiscoveryItem = {
  slug: string
  name: string
  image: string
}

type Product = {
  id: number
  name: string
  brand: string
  category: string
  theme?: string
  image: string
}

/* ======================================================
   Mock Database
====================================================== */

const categories: Category[] = [
  {
    slug: "wedding-wear",
    title: "Wedding Wear",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000",
    shortDescription:
      "Timeless silhouettes crafted for ceremonial elegance.",
    editorialText:
      "Wedding wear in Crafted reflects heritage techniques, modern form, and intentional storytelling. It is not about volume, but refinement.",
  },
  {
    slug: "couture",
    title: "Couture",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2000",
    shortDescription: "One-of-a-kind pieces shaped entirely by hand.",
    editorialText:
      "Couture is the slowest expression of craft — measured in hours, not units. Each piece is a singular conversation between maker and material.",
  },
  {
    slug: "runway",
    title: "Runway",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2000",
    shortDescription: "The collections that define each season's direction.",
    editorialText:
      "Runway captures intent before it reaches the world — the clearest statement of where a house believes design is going next.",
  },
  {
    slug: "bridal",
    title: "Bridal",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000",
    shortDescription: "Considered design for the most personal of occasions.",
    editorialText:
      "Bridal design balances ceremony and self. Restraint and ornament held in the same breath, made to be remembered.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000",
    shortDescription: "The details that complete a point of view.",
    editorialText:
      "Accessories carry disproportionate weight — the smallest objects that shift the whole composition. Craft lives in the detail.",
  },
  {
    slug: "menswear",
    title: "Menswear",
    image:
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=2000",
    shortDescription: "Structured tailoring and quiet, deliberate form.",
    editorialText:
      "Menswear here is built on proportion and material honesty — garments designed to be worn for years, not seasons.",
  },
  {
    slug: "emerging-designers",
    title: "Emerging Designers",
    image:
      "https://images.unsplash.com/photo-1520975682031-a27f2a36a6b3?q=80&w=2000",
    shortDescription: "New voices reshaping the language of craft.",
    editorialText:
      "Emerging designers work without the weight of legacy — and often arrive at the most honest, unexpected ideas in the room.",
  },
  {
    slug: "heritage",
    title: "Heritage",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000",
    shortDescription: "Techniques carried forward across generations.",
    editorialText:
      "Heritage is craft with memory — methods refined over decades, held intact and reinterpreted for the present.",
  },
]

const brands: Brand[] = [
  {
    slug: "manish-malhotra",
    name: "Manish Malhotra",
    image:
      "https://images.unsplash.com/photo-1520975922071-4c9f2f8f4a1c?q=80&w=1200",
  },
  {
    slug: "sabyasachi",
    name: "Sabyasachi",
    image:
      "https://images.unsplash.com/photo-1495121605193-b116b5b09a9f?q=80&w=1200",
  },
  {
    slug: "rahul-mishra",
    name: "Rahul Mishra",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
  },
  {
    slug: "anamika-khanna",
    name: "Anamika Khanna",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200",
  },
  {
    slug: "raw-mango",
    name: "Raw Mango",
    image:
      "https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1200",
  },
]

const themes: Theme[] = [
  {
    slug: "heritage-craft",
    name: "Heritage Craft",
    image:
      "https://images.unsplash.com/photo-1520975922071-4c9f2f8f4a1c?q=80&w=1600",
    descriptor: "Hand techniques carried across generations.",
  },
  {
    slug: "modern-minimal",
    name: "Minimal Elegance",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600",
    descriptor: "Restraint, proportion, and quiet form.",
  },
  {
    slug: "modern-ceremony",
    name: "Modern Ceremony",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
    descriptor: "Tradition reframed for the present.",
  },
  {
    slug: "contemporary-design",
    name: "Contemporary Design",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600",
    descriptor: "New silhouettes for a new vocabulary.",
  },
]

const occasions: Occasion[] = [
  {
    slug: "wedding",
    name: "Wedding",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600",
  },
  {
    slug: "gala",
    name: "Gala",
    image:
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=1600",
  },
  {
    slug: "festive",
    name: "Festive",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600",
  },
  {
    slug: "everyday",
    name: "Everyday",
    image:
      "https://images.unsplash.com/photo-1483118714900-540cf339fd46?q=80&w=1600",
  },
]

const products: Product[] = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  name: `Bridal Look ${i + 1}`,
  brand: i % 2 === 0 ? "manish-malhotra" : "sabyasachi",
  category: "wedding-wear",
  theme: i % 3 === 0 ? "heritage-craft" : "modern-minimal",
  image: `https://picsum.photos/600/800?random=${i + 20}`,
}))

/* ======================================================
   API Mock Functions
====================================================== */

export async function getCategories() {
  return categories
}

export async function getThemes() {
  return themes
}

export async function getOccasions() {
  return occasions
}

export async function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null
}

export async function getBrandsByCategory(slug: string) {
  // In real API, you'd filter by category relation
  return brands.slice(0, 8)
}

export async function getThemesByCategory(slug: string) {
  return themes
}

type ProductQuery = {
  category: string
  brand?: string
  theme?: string
  page?: number
  limit?: number
}

export async function getProducts({
  category,
  brand,
  theme,
  page = 1,
  limit = 24,
}: ProductQuery) {
  let filtered = products.filter((p) => p.category === category)

  if (brand) {
    filtered = filtered.filter((p) => p.brand === brand)
  }

  if (theme) {
    filtered = filtered.filter((p) => p.theme === theme)
  }

  const start = (page - 1) * limit
  const end = start + limit

  const paginated = filtered.slice(start, end)

  return {
    items: paginated,
    hasNext: end < filtered.length,
  }
}
