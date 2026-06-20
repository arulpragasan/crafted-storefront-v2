/* ======================================================
   Mock Database
====================================================== */

type Category = {
  slug: string
  title: string
  image: string
  shortDescription: string
  editorialText: string
}

type Brand = {
  slug: string
  name: string
  image: string
  logo: string
}

type Theme = {
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
]

const themes: Theme[] = [
  {
    slug: "heritage-craft",
    name: "Heritage Craft",
    image:
      "https://images.unsplash.com/photo-1520975922071-4c9f2f8f4a1c?q=80&w=1200",
  },
  {
    slug: "modern-minimal",
    name: "Modern Minimal",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
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
