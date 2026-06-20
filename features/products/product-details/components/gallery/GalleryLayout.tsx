"use client"

import { GalleryRail } from "./GalleryRail"
import { ProductImageZoom } from "./ProductImageZoom"
import { useGallery } from "../context/GalleryContext"
import { getImageUrl } from "@/lib/utils/getImageUrl"

export function GalleryLayout() {

  const { images, activeIndex, openFullscreen } = useGallery()

  const activeImage = images[activeIndex]

  return (
    <div className="grid grid-cols-[80px_1fr] gap-6">

      <GalleryRail />

      <ProductImageZoom
        src={getImageUrl(activeImage.url)}
        onClick={openFullscreen}
      />

    </div>
  )
}
