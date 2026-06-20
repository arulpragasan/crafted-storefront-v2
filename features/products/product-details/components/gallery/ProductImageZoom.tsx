"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type ProductImageZoomProps = {
  src: string
  onClick?: () => void
}

export function ProductImageZoom({ src, onClick }: ProductImageZoomProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%")
  const imageSrc = getImageUrl(src)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {

    const rect = containerRef.current?.getBoundingClientRect()

    if (!rect) return

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setBackgroundPosition(`${x}% ${y}%`)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="relative aspect-[3/4] overflow-hidden cursor-zoom-in"
    >

      {/* base image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width:1024px)100vw,50vw"
        priority
        className="object-cover"
      />

      {/* zoom overlay */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "200%",
          backgroundPosition: backgroundPosition
        }}
      />

    </div>
  )
}
