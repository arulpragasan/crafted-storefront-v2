"use client"

import Image from "next/image"
import { useGallery } from "../context/GalleryContext"

const IMAGE_HOST = process.env.NEXT_PUBLIC_IMAGE_HOST

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
            src={`${IMAGE_HOST}${img.url}`}
            alt=""
            fill
            sizes="72px"
            unoptimized
            className="object-cover"
          />

        </button>

      ))}

    </div>
  )
}