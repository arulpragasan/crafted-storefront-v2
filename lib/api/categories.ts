import { API_BASE_URL } from "@/lib/config/publicUrls"

export type CategorySubcategory = {
  id: number
  name: string
  permalink: string
  href: string
}

export type Category = {
  id: number
  position: number

  name: string
  permalink: string
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
  permalink: string
}

type RawCategory = {
  id: number
  position?: number | null
  name: string
  permalink: string
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

function categoryHref(permalink: string) {
  return permalink.startsWith("/") ? permalink : `/${permalink}`
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
    permalink: category.permalink,
    href: categoryHref(category.permalink),

    description: categoryDescription(category),

    imageUrl: category.media?.cover_image?.url ?? null,

    subcategories:
      category.subcategories?.map((subcategory) => ({
        id: subcategory.id,
        name: subcategory.name,
        permalink: subcategory.permalink,
        href: categoryHref(subcategory.permalink),
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

export type CategoryDetailSubcategory = {
  id: number
  name: string
  permalink: string
  description?: string | null
  image_url?: string | null
}

export type CategoryDetail = {
  id: number
  name: string
  permalink: string
  description: string

  media?: {
    cover_image?: {
      url: string
    }
  }

  editorial?: {
    introduction?: string
  }

  explore: {
    subcategories: CategoryDetailSubcategory[]
  }

  refine: {
    enabled: boolean
  }
}

export async function getCategoryBySlug(
  slug: string
): Promise<CategoryDetail | null> {
  const res = await fetch(
    `${API_BASE_URL}/api/v2/storefront/categories/${slug}.json`,
    {
      next: { revalidate: 60 },
    }
  )

  if (!res.ok) {
    return null
  }

  return res.json()
}
