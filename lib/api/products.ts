import { API_BASE_URL } from "@/lib/config/publicUrls"

export type Product = {
  id: number
  slug: string
  name: string

  brand: {
    name: string
    slug: string
  }

  category: {
    name: string
    slug: string
  }

  subcategory: {
    name: string
    slug: string
  }

  theme: {
    name: string
    slug: string
  }

  occasion: {
    name: string
    slug: string
  }

  image_url: string
}

export type FilterOption = {
  slug: string
  name: string
  count: number
}

export type ProductFilters = {
  brands: FilterOption[]
  themes: FilterOption[]
  occasions: FilterOption[]
}

export type ProductNavigationItem = {
  slug: string
  name: string
}

export type ProductNavigation = {
  categories: ProductNavigationItem[]
  subcategories: ProductNavigationItem[]
}

export type ProductMeta = {
  page: number
  per_page: number
  total_pages: number
  total_count: number
}

export type ProductsResponse = {
  products: Product[]
  filters: ProductFilters
  navigation: ProductNavigation
  meta: ProductMeta
}

type GetProductsParams = {
  category?: string
  subcategory?: string
  brand?: string[]
  theme?: string[]
  occasion?: string[]
  sort?: string
  page?: number
}

export async function getProducts(
  params: GetProductsParams = {}
): Promise<ProductsResponse> {
  const searchParams = new URLSearchParams()

  if (params.category) {
    searchParams.set("category", params.category)
  }

  if (params.subcategory) {
    searchParams.set("subcategory", params.subcategory)
  }

  if (params.brand?.length) {
    searchParams.set("brand", params.brand.join(","))
  }

  if (params.theme?.length) {
    searchParams.set("theme", params.theme.join(","))
  }

  if (params.occasion?.length) {
    searchParams.set("occasion", params.occasion.join(","))
  }

  if (params.sort) {
    searchParams.set("sort", params.sort)
  }

  if (params.page) {
    searchParams.set("page", params.page.toString())
  }

  const queryString = searchParams.toString()

  const url = `${API_BASE_URL}/api/v2/storefront/products${
    queryString ? `?${queryString}` : ""
  }`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}