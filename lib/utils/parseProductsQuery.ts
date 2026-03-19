export type ProductsQuery = {
  category?: string
  subcategory?: string
  brand?: string[]
  theme?: string[]
  occasion?: string[]
  sort?: string
  page: number
}

type RawParams = Record<string, string | string[] | undefined>

function getParam(params: RawParams, key: string): string | undefined {
  const value = params[key]

  if (Array.isArray(value)) return value[0]
  if (typeof value === "string") return value

  return undefined
}

function parseArray(value?: string): string[] {
  if (!value) return []
  return value.split(",").filter(Boolean)
}

function parsePage(value?: string): number {
  const page = Number(value)
  if (!Number.isFinite(page) || page < 1) return 1
  return Math.floor(page)
}

export function parseProductsQuery(params: RawParams): ProductsQuery {
  return {
    category: getParam(params, "category"),
    subcategory: getParam(params, "subcategory"),
    brand: parseArray(getParam(params, "brand")),
    theme: parseArray(getParam(params, "theme")),
    occasion: parseArray(getParam(params, "occasion")),
    sort: getParam(params, "sort"),
    page: parsePage(getParam(params, "page")),
  }
}