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

export type ProductMeta = {
  page: number
  per_page: number
  total_pages: number
  total_count: number
}

export type ProductsResponse = {
  products: Product[]
  filters: ProductFilters
  meta: ProductMeta
}

type GetProductsParams = {
  category?: string
  brand?: string
  theme?: string
  occasion?: string
  page?: number
}

export async function getProducts(
  params: GetProductsParams = {}
): Promise<ProductsResponse> {
  const searchParams = new URLSearchParams()

  if (params.category) searchParams.set("category", params.category)
  if (params.brand) searchParams.set("brand", params.brand)
  if (params.theme) searchParams.set("theme", params.theme)
  if (params.occasion) searchParams.set("occasion", params.occasion)
  if (params.page) searchParams.set("page", params.page.toString())

  const url = `${API_BASE_URL}/api/v2/storefront/products?${searchParams.toString()}`

  const res = await fetch(url, {
    next: { revalidate: 60 } // cache for 60 seconds
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}
