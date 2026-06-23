type Props = {
  category?: string
  brand?: string[]
  theme?: string[]
}

function formatLabel(value: string) {
  const segment = value.includes("/") ? value.split("/").pop()! : value

  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

function formatList(values?: string[]) {
  if (!values || values.length === 0) return ""

  const formatted = values.map(formatLabel)

  if (formatted.length === 1) return formatted[0]

  if (formatted.length === 2) return `${formatted[0]} & ${formatted[1]}`

  return `${formatted.slice(0, 2).join(", ")} & more`
}

import { Body, Headline } from "@/components/ui/Typography"

export function ProductsHeader({ category, brand, theme }: Props) {
  let title = "The Collection"
  let description: string | null = null

  if (category) {
    title = formatLabel(category)
  }

  if (theme && theme.length > 0) {
    const formatted = formatList(theme)
    title = category
      ? `${formatLabel(category)} — ${formatted}`
      : `${formatted} Collection`
  }

  if (brand && brand.length > 0) {
    const formatted = formatList(brand)
    title = formatted
    description = `Pieces from ${formatted}.`
  }

  return (
    <div className="max-w-2xl space-y-4 mb-16">
      <Headline size="title" className="tracking-tight">
        {title}
      </Headline>

      {description && (
        <Body className="text-neutral-500">
          {description}
        </Body>
      )}
    </div>
  )
}
