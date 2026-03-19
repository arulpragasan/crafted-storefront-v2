"use client"

import { createContext, useContext, useState } from "react"

const GalleryContext = createContext(null)

export function GalleryProvider({ images, children }) {

  const [activeIndex, setActiveIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const value = {
    images,
    activeIndex,
    setActiveIndex,
    fullscreen,
    openFullscreen: () => setFullscreen(true),
    closeFullscreen: () => setFullscreen(false)
  }

  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  )
}

export function useGallery() {
  const ctx = useContext(GalleryContext)

  if (!ctx) {
    throw new Error("useGallery must be used inside GalleryProvider")
  }

  return ctx
}