"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"

type GalleryContextValue = {
  images: string[]
  activeIndex: number
  setActiveIndex: (index: number) => void
  fullscreen: boolean
  openFullscreen: () => void
  closeFullscreen: () => void
}

type GalleryProviderProps = {
  images: string[]
  children: ReactNode
}

const GalleryContext = createContext<GalleryContextValue | null>(null)

export function GalleryProvider({
  images,
  children,
}: GalleryProviderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const value: GalleryContextValue = {
    images,
    activeIndex,
    setActiveIndex,
    fullscreen,
    openFullscreen: () => setFullscreen(true),
    closeFullscreen: () => setFullscreen(false),
  }

  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  )
}

export function useGallery() {
  const context = useContext(GalleryContext)

  if (!context) {
    throw new Error("useGallery must be used inside GalleryProvider")
  }

  return context
}