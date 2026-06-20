import { API_BASE_URL } from "@/lib/config/publicUrls"

export async function getProduct(slug: string) {
    try {
        const res = await fetch(`${API_BASE_URL}/api/v2/storefront/products/${slug}`, {
            next: { revalidate: 3600 }
        })

        if (!res.ok) {
            return null
        }

        return await res.json()
    } catch (error) {
        console.error(`Failed to fetch product data for slug: ${slug}`, error)
        return null
    }
}
