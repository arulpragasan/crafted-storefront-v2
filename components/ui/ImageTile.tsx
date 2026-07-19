"use client"

import Image from "next/image"
import clsx from "clsx"
import {
  imagePresentationClass,
  overlayPresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"
import { transitionClass } from "@/styles/design-system/motion"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type Props = {
  src: string
  alt: string
  aspect?: "portrait" | "square" | "landscape" | "editorial"
  priority?: boolean
  sizes?: string
}

export function ImageTile({
  src,
  alt,
  aspect = "portrait",
  priority,
  sizes,
}: Props) {
  const imageSrc = getImageUrl(src)

  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "landscape"
      ? "aspect-[4/3]"
      : aspect === "editorial"
      ? "aspect-[4/5]"
      : "aspect-[3/4]"

  return (
    <div
      className={clsx(
        "group relative",
        surfacePresentationClass.imageTile,
        aspectClass
      )}
    >
      {/* image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={clsx(
          imagePresentationClass.cover,
          imagePresentationClass.hoverZoomEaseOut
        )}
      />

      {/* overlay */}
      <div className={overlayPresentationClass.tileHoverWash} />
    </div>
  )
}
