import { Caption, Body } from "@/components/ui/Typography"

type Props = {
  description: string
}

export function AboutTheMaison({ description }: Props) {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <Caption className="uppercase tracking-widest text-neutral-400">
          About the Maison
        </Caption>

        <Body className="text-neutral-700 leading-relaxed whitespace-pre-line">
          {description}
        </Body>
      </div>
    </section>
  )
}
