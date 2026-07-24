"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { useGallery } from "../context/GalleryContext"
import { getImageUrl } from "@/lib/utils/getImageUrl"

export function FullscreenGallery() {

  const {
    images,
    activeIndex,
    setActiveIndex,
    fullscreen,
    closeFullscreen
  } = useGallery()

  const touchStartX = useRef(0)

  function next() {
    setActiveIndex((activeIndex + 1) % images.length)
  }

  function prev() {
    setActiveIndex((activeIndex - 1 + images.length) % images.length)
  }

  // ✅ Hook always runs
  useEffect(() => {

    function handleKey(e: KeyboardEvent) {

      if (!fullscreen) return

      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") closeFullscreen()

    }

    window.addEventListener("keydown", handleKey)

    return () => window.removeEventListener("keydown", handleKey)

  }, [fullscreen, activeIndex])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {

    const delta = e.changedTouches[0].clientX - touchStartX.current

    if (delta > 50) prev()
    if (delta < -50) next()

  }

  // ✅ conditional return AFTER hooks
  if (!fullscreen) return null

  return (
    <div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* close */}
      <button
        onClick={closeFullscreen}
        className="absolute top-6 right-6 text-white text-xl"
      >
        ✕
      </button>

      {/* prev */}
      <button
        onClick={prev}
        className="absolute left-6 text-white text-3xl hidden md:block"
      >
        ←
      </button>

      {/* next */}
      <button
        onClick={next}
        className="absolute right-6 text-white text-3xl hidden md:block"
      >
        →
      </button>

      {/* image */}
      <div className="relative w-[80vw] h-[80vh] overflow-hidden">

        {images.map((img, i) => (

          <Image
            key={i}
            src={getImageUrl(img)}
            alt=""
            fill
            sizes="80vw"
            className={`object-contain absolute inset-0 transition-opacity duration-300
            ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
          />

        ))}

      </div>

      {/* index */}
      <div className="absolute bottom-8 text-white text-sm">
        {activeIndex + 1} / {images.length}
      </div>

    </div>
  )
}
