type Props = {
  category?: string
  brand?: string[]
  theme?: string[]
}

function formatLabel(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

function formatList(values?: string[]) {
  if (!values || values.length === 0) return ""

  const formatted = values.map(formatLabel)

  if (formatted.length === 1) return formatted[0]

  if (formatted.length === 2) return `${formatted[0]} & ${formatted[1]}`

  return `${formatted[0]} +${formatted.length - 1} more`
}

export function ProductsHeader({ category, brand, theme }: Props) {
  let title = "The Curated Collection"
  let description =
    "Discover our meticulously curated selection of designer pieces."

  if (category) {
    const formatted = formatLabel(category)
    title = formatted
    description = `Explore our exclusive collection of ${formatted}.`
  }

  if (brand && brand.length > 0) {
    const formatted = formatList(brand)
    title = formatted
    description = `Discover the latest pieces from ${formatted}.`
  }

  if (theme && theme.length > 0) {
    const formatted = formatList(theme)
    title = `${formatted} Collection`
  }

  return (
    <div className="max-w-2xl space-y-4 mb-16">
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="text-neutral-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}