export function buildProductsUrl(
  current: URLSearchParams,
  updates: Record<string, string[] | string | null>
) {
  const params = new URLSearchParams(current)

  Object.entries(updates).forEach(([key, value]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      params.delete(key)
    } else if (Array.isArray(value)) {
      params.set(key, value.join(","))
    } else {
      params.set(key, value)
    }
  })

  params.delete("page")

  return `/products?${params.toString()}`
}