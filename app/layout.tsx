import "./globals.css"

import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { ThemeProvider } from "@/theme/ThemeProvider"

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://events.craftedminds.in"),

  title: {
    default: "Crafted — Curated Luxury Experiences",
    template: "%s | Crafted",
  },

  description:
    "Discover curated luxury fashion, designers, collections, and immersive digital experiences through Crafted.",

  icons: {
    icon: "/fav.svg",
    shortcut: "/fav.svg",
    apple: "/fav.svg",
  },

  openGraph: {
    type: "website",
    siteName: "Crafted",
    title: "Crafted — Curated Luxury Experiences",
    description:
      "Discover curated luxury fashion, designers, collections, and immersive digital experiences through Crafted.",
    url: "https://events.craftedminds.in",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}