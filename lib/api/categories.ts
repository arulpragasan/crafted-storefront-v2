import { API_BASE_URL } from "@/lib/config/publicUrls"

export type CategorySubcategory = {
  id: number
  name: string
  slug: string
  href: string
}

export type Category = {
  id: number
  position: number

  name: string
  slug: string
  href: string

  description: string

  imageUrl: string | null

  subcategories: CategorySubcategory[]
}

export type CategoriesPageData = {
  type: "category"
  categories: Category[]
}

type RawCategoryMedia = {
  cover_image?: {
    url?: string | null
  } | null
}

type RawCategorySubcategory = {
  id: number
  name: string
  slug: string
}

type RawCategory = {
  id: number
  position?: number | null
  name: string
  slug: string
  description?: string | null
  media?: RawCategoryMedia
  subcategories?: RawCategorySubcategory[] | null
}

type CategoriesApiResponse = {
  data: {
    type: "category"
    items: RawCategory[]
  }
}

function categoryHref(slug: string) {
  return slug.startsWith("/") ? slug : `/${slug}`
}

function categoryDescription(category: RawCategory) {
  return (
    category.description?.trim() ||
    `Explore ${category.name.toLowerCase()} through creators, themes, and curated collections.`
  )
}

function transformCategory(category: RawCategory): Category {
  return {
    id: category.id,
    position: category.position ?? 0,

    name: category.name,
    slug: category.slug,
    href: categoryHref(category.slug),

    description: categoryDescription(category),

    imageUrl: category.media?.cover_image?.url ?? null,

    subcategories:
      category.subcategories?.map((subcategory) => ({
        id: subcategory.id,
        name: subcategory.name,
        slug: subcategory.slug,
        href: categoryHref(subcategory.slug),
      })) ?? [],
  }
}

function transformCategoriesResponse(
  response: CategoriesApiResponse
): CategoriesPageData {
  return {
    type: response.data.type,
    categories: [...response.data.items]
      .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
      .map(transformCategory),
  }
}

export async function getCategories(): Promise<CategoriesPageData> {
  const res = await fetch(
    `${API_BASE_URL}/api/v2/storefront/categories.json`,
    {
      next: { revalidate: 60 },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  const data = (await res.json()) as CategoriesApiResponse

  return transformCategoriesResponse(data)
}