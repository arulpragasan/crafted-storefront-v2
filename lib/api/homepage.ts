// lib/api/homepage.ts

import { HomepageResponse } from "@/types/homepage"
import { API_BASE_URL } from "@/lib/config/publicUrls"

export async function getHomepage(): Promise<HomepageResponse> {
  const res = await fetch(
    `${API_BASE_URL}/api/v2/storefront/homepage.json`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch homepage")
  }

  return res.json()
}
