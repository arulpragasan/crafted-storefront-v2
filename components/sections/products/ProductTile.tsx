"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { CardHeading, Meta } from "@/components/ui/Typography"

type ProductTileProps = {
  name: string
  image: string
  price: string
  href: string
  featured?: boolean
  className?: string
}

export function ProductTile({
  name,
  image,
  price,
  href,
  featured = false,
  className,
}: ProductTileProps) {
  return (
    <Link
      href={href}
      className={clsx("group block", className)}
    >
      <div
        className={clsx(
          "relative overflow-hidden rounded-2xl bg-neutral-100",
          featured ? "aspect-[4/5]" : "aspect-[3/4]"
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      <div className="mt-4 space-y-1">
        <CardHeading as="h3">{name}</CardHeading>
        <Meta>{price}</Meta>
      </div>
    </Link>
  )
}
