import { buildBrandsUrl, BrandsQuery } from "../utils/buildBrandsUrl"
import { API_BASE_URL } from "@/lib/config/publicUrls"

export async function fetchBrands(query: BrandsQuery) {
  const url = buildBrandsUrl(query)

  const res = await fetch(`${API_BASE_URL}${url}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch brands")
  }

  return res.json()
}
