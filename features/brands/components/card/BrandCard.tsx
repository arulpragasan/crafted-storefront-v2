"use client"

import Link from "next/link"
import clsx from "clsx"

import { ImageTile } from "@/components/ui/ImageTile"
import { SectionTitle, Caption } from "@/components/ui/Typography"

type BrandCardProps = {
  name: string
  image: string
  href: string
  tagline?: string
  aspect?: "portrait" | "square" | "landscape"
  className?: string
}

export function BrandCard({
  name,
  image,
  href,
  tagline,
  aspect = "portrait",
  className,
}: BrandCardProps) {
  return (
    <Link
      href={href}
      className={clsx("group block", className)}
    >
      <div className="overflow-hidden rounded-2xl">
        <ImageTile
          src={image}
          alt={name}
          aspect={aspect}
        />
      </div>

      <div className="mt-5 space-y-1.5">
        <SectionTitle as="h4">
          {name}
        </SectionTitle>

        {tagline && (
          <Caption
            className="
              max-w-xs
              line-clamp-2
              text-balance
            "
          >
            {tagline}
          </Caption>
        )}
      </div>
    </Link>
  )
}