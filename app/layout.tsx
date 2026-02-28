import "./globals.css"

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