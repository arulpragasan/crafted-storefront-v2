"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { SectionTitle } from "@/components/ui/Typography"
import {
  surfacePresentationClass,
  imagePresentationClass,
} from "@/styles/design-system/presentation"
import { cardContentSpacingClass } from "@/styles/design-system/spacing"

export type DiscoveryItem = {
  name: string
  slug: string
  image: string
}

type RailCardProps = {
  item: DiscoveryItem
  href: string
  className?: string
}

export function RailCard({ item, href, className }: RailCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900",
        className
      )}
    >
      <article className={cardContentSpacingClass.mediaToCopy}>
        <div
          className={clsx(
            "relative aspect-[4/3]",
            surfacePresentationClass.imageTile
          )}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 30vw, 80vw"
            className={clsx(
              imagePresentationClass.cover,
              imagePresentationClass.hoverZoomEaseOut,
              "motion-reduce:transition-none motion-reduce:transform-none"
            )}
          />
        </div>

        <SectionTitle as="h3" size="card">
          {item.name}
        </SectionTitle>
      </article>
    </Link>
  )
}