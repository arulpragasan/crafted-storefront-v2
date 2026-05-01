export async function getPrograms(params?: Record<string, string>) {
  const query = new URLSearchParams(params).toString()

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v2/storefront/programs?${query}`,
    { cache: "no-store" }
  )

  return res.json()
}