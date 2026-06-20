"use client"

import Image from "next/image"
import { useGallery } from "../context/GalleryContext"
import { getImageUrl } from "@/lib/utils/getImageUrl"

export function GalleryRail() {

  const { images, activeIndex, setActiveIndex } = useGallery()

  return (
    <div className="flex flex-col gap-4 sticky top-32">

      {images.map((img, i) => (

        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`relative w-[72px] aspect-[3/4] overflow-hidden border
          ${i === activeIndex ? "border-black" : "border-transparent"}`}
        >

          <Image
            src={getImageUrl(img.url)}
            alt=""
            fill
            sizes="72px"
            className="object-cover"
          />

        </button>

      ))}

    </div>
  )
}
