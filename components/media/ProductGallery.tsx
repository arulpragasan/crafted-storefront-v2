"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"

type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string }

type ProductGalleryProps = {
  media: MediaItem[]
}

export function ProductGallery({ media }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = media[activeIndex]

  return (
    <div className="flex gap-6">
      {/* ========================
          Thumbnails
      ======================== */}
      <div className="flex flex-col gap-3">
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={clsx(
              "w-16 h-20 rounded-lg overflow-hidden border transition-opacity",
              i === activeIndex
                ? "border-neutral-900 opacity-100"
                : "border-neutral-200 opacity-60 hover:opacity-90"
            )}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-100">
                Video
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ========================
          Main Media
      ======================== */}
      <div className="flex-1 rounded-2xl overflow-hidden bg-neutral-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full"
          >
            {active.type === "image" ? (
              <img
                src={active.src}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={active.src} />
              </video>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}