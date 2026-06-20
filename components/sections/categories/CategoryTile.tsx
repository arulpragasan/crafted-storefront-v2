"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { CardHeading } from "@/components/ui/Typography"

type CategoryTileProps = {
  name: string
  image: string
  href: string
  className?: string
}

export function CategoryTile({
  name,
  image,
  href,
  className,
}: CategoryTileProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative block overflow-hidden rounded-xl bg-neutral-100 aspect-square",
        className
      )}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 50vw"
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <CardHeading as="h3" tone="inverse">
          {name}
        </CardHeading>
      </div>
    </Link>
  )
}
