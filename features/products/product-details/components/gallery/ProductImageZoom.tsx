"use client"

import Image from "next/image"
import { useRef, useState } from "react"

export function ProductImageZoom({ src, onClick }) {

  const containerRef = useRef(null)
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%")

  function handleMouseMove(e) {

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
        src={src}
        alt=""
        fill
        sizes="(max-width:1024px)100vw,50vw"
        priority
        unoptimized
        className="object-cover"
      />

      {/* zoom overlay */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none"
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "200%",
          backgroundPosition: backgroundPosition
        }}
      />

    </div>
  )
}