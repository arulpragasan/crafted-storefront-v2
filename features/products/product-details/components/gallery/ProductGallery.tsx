"use client"

import { useState } from "react"
import Image from "next/image"

type Props = {
  images: string[]
}

export function ProductGallery({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const validImages = images.filter(
    (image): image is string =>
      typeof image === "string" &&
      image.trim().length > 0
  )

  const hasImages = validImages.length > 0
  const hasMultiple = validImages.length > 1

  if (!hasImages) {
    return (
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src="/images/placeholder.png"
          alt="Product image"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
        />
      </div>
    )
  }

  const currentImage =
    validImages[currentIndex] || "/images/placeholder.png"

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={
            currentImage && currentImage.trim().length > 0
              ? currentImage
              : "/images/placeholder.png"
          }
          alt="Product image"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
        />
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {validImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`View image ${index + 1}`}
              className={`
                relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-lg border transition-all
                focus:outline-none focus-visible:ring-2 focus-visible:ring-black
                ${
                  index === currentIndex
                    ? "border-black opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                }
              `}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}