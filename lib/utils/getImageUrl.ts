import { ASSET_BASE_URL } from "@/lib/config/publicUrls"

const LOOPBACK_IP = ["127", "0", "0", "1"].join(".")

function isLocalBackendUrl(url: URL) {
  return url.hostname === "localhost" || url.hostname === LOOPBACK_IP
}

export function getImageUrl(path?: string | null) {
  if (!path) return "/images/placeholder.png"

  if (path.startsWith("/images/")) return path

  if (path.startsWith("http")) {
    const url = new URL(path)

    if (isLocalBackendUrl(url)) {
      return `${ASSET_BASE_URL}${url.pathname}${url.search}`
    }

    return path
  }

  return `${ASSET_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
