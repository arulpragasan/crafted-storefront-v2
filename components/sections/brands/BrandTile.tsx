"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { CardHeading } from "@/components/ui/Typography"

type BrandTileProps = {
  name: string
  image: string
  href: string
  featured?: boolean
  className?: string
}

export function BrandTile({
  name,
  image,
  href,
  featured = false,
  className,
}: BrandTileProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative block overflow-hidden rounded-2xl bg-neutral-100",
        featured ? "aspect-[3/4] lg:aspect-auto lg:h-full" : "aspect-[3/4]",
        className
      )}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <CardHeading as="h3" tone="inverse">
          {name}
        </CardHeading>
      </div>
    </Link>
  )
}
