"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function StickyBrandBar({ name }: { name: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: visible ? 0 : -60, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        fixed top-16 left-0 right-0 z-40
        bg-white/90 backdrop-blur
        border-b border-neutral-200
      "
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">

        {/* Brand */}
        <div className="text-xs tracking-[0.25em] uppercase text-neutral-700">
          {name}
        </div>

        {/* CTA */}
        <button
          className="
            text-sm
            px-4 py-1.5
            border border-neutral-900
            hover:bg-black hover:text-white
            transition
          "
        >
          Connect
        </button>

      </div>
    </motion.div>
  )
}