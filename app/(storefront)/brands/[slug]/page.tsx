import { notFound } from "next/navigation"
import { Page } from "@/components/layout/Page"
import { BrandDetailsLayout } from "@/features/brand-details/layout/BrandDetailsLayout"
import { API_BASE_URL } from "@/lib/config/publicUrls"

export const revalidate = 3600

async function getBrandData(slug: string) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/v2/storefront/brands/${slug}`,
      {
        next: { revalidate: 3600 }
      }
    )

    if (!res.ok) return null

    return res.json()
  } catch (error) {
    console.error("Failed to fetch brand:", error)
    return null
  }
}

export default async function BrandDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  // ✅ IMPORTANT: unwrap params
  const { slug } = await params

  const data = await getBrandData(slug)

  if (!data?.brand) {
    notFound()
  }

  return (
    <Page>
      <BrandDetailsLayout data={data} />
    </Page>
  )
}
