const PRODUCTION_ORIGIN = "https://api.craftedminds.in"

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "")
}

export const API_BASE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_API_URL || PRODUCTION_ORIGIN
)

export const ASSET_BASE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_ASSET_URL || API_BASE_URL
)

