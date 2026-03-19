"use client"

import { GalleryProvider } from "../context/GalleryContext"
import { GalleryRail } from "./GalleryRail"
import { GalleryLayout } from "./GalleryLayout"
import { ProductImageZoom } from "./ProductImageZoom"
import { FullscreenGallery } from "./FullscreenGallery"

export function ProductGallery({ images = [] }) {

  if (!images.length) return null

  return (
    <GalleryProvider images={images}>

      <GalleryLayout />

      <FullscreenGallery />

    </GalleryProvider>
  )
}