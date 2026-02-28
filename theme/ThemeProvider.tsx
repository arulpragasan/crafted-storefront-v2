"use client"

import React, { createContext, useContext } from "react"
import { WeddingAtelierTheme } from "./weddingAtelier"

type Theme = typeof WeddingAtelierTheme

const ThemeContext = createContext<Theme>(WeddingAtelierTheme)

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContext.Provider value={WeddingAtelierTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}