"use client"

import { useEffect, useState } from "react"

type Props = {
  productName: string
  brandName?: string
}

export function ProductFloatingBar({ productName, brandName }: Props) {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white border-b z-40 transition-transform duration-300
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex flex-col">
          {brandName && (
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              {brandName}
            </span>
          )}

          <span className="text-sm font-medium">
            {productName}
          </span>
        </div>

        <button className="border px-6 py-2 hover:bg-black hover:text-white transition">
          Request Price
        </button>

      </div>
    </div>
  )
}