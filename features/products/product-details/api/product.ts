export async function getProduct(slug: string) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

    try {
        const res = await fetch(`${baseUrl}/api/v2/storefront/products/${slug}`, {
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
