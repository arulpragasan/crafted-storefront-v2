type CraftStoryData = {
  title?: string
  description?: string
} | null

type Props = {
  story: CraftStoryData
}

export function CraftStory({ story }: Props) {
  if (!story) return null

  const { title, description } = story

  if (!description?.trim()) return null

  const paragraphs = description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <section className="border-t border-neutral-200 py-24">

      <div className="max-w-4xl">

        <h2 className="mb-8 text-xs uppercase tracking-widest text-neutral-400">
          {title?.trim() || "The Craft"}
        </h2>

        <div className="max-w-2xl space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-neutral-700"
            >
              {paragraph}
            </p>
          ))}
        </div>

      </div>

    </section>
  )
}