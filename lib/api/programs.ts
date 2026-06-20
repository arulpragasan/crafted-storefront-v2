const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"

export async function getPrograms(params?: Record<string, string>) {
  const query = new URLSearchParams(params).toString()

  const res = await fetch(
    `${API_BASE_URL}/api/v2/storefront/programs?${query}`,
    { cache: "no-store" }
  )

  return res.json()
}

export async function getProgram(slug: string) {
  const res = await fetch(
    `${API_BASE_URL}/api/v2/storefront/programs/${slug}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch program: ${slug}`)
  }

  return res.json()
}
