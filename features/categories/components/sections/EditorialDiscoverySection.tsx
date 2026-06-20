import Image from "next/image"
import clsx from "clsx"
import { Body, Caption, Meta, SectionTitle } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import {
  imagePresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"

export type EditorialDiscoveryItem = {
  id: string
  label: string
  title: string
  description: string
  imageUrl: string
}

type EditorialDiscoverySectionProps = {
  eyebrow: string
  title: string
  description: string
  items: EditorialDiscoveryItem[]
}

export function EditorialDiscoverySection({
  eyebrow,
  title,
  description,
  items,
}: EditorialDiscoverySectionProps) {
  return (
    <div className="space-y-14">
      <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-end">
        <div className="space-y-5">
          <Meta>{eyebrow}</Meta>
          <SectionTitle as="h2" size="section">
            {title}
          </SectionTitle>
        </div>

        <Body className="max-w-xl md:ml-auto">{description}</Body>
      </div>

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {items.map((item, index) => (
          <article
            key={item.id}
            className={clsx(
              "space-y-5",
              index === 1 && "md:mt-16",
              index === 2 && "md:mt-6"
            )}
          >
            <div
              className={clsx(
                "relative aspect-[5/6] overflow-hidden rounded-2xl bg-neutral-100",
                surfacePresentationClass.imageNeutral
              )}
            >
              <Image
                src={getImageUrl(item.imageUrl)}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className={imagePresentationClass.cover}
              />
            </div>

            <div className="space-y-2">
              <Caption>{item.label}</Caption>
              <SectionTitle as="h3" size="card">
                {item.title}
              </SectionTitle>
              <Body>{item.description}</Body>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
