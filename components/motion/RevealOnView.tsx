"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  children: React.ReactNode
}

export function RevealOnView({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // ✅ Guard for SSR / hydration
    if (typeof window === "undefined") return
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  )
}