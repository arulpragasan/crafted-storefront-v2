"use client"

import { ReactNode, useState } from "react"

type Props = {
  showFilters: boolean
  sidebar: ReactNode
  children: ReactNode
}

export function ProductsLayout({ showFilters, sidebar, children }: Props) {
  const [sidebarWidth, setSidebarWidth] = useState(260) // default luxury width

  return (
    <div className="flex gap-10">

      {/* Sidebar */}
      <div
        style={{
          width: showFilters ? sidebarWidth : 0,
        }}
        className={`
          relative
          overflow-hidden
          transition-all duration-300 ease-in-out
        `}
      >
        {showFilters && (
          <>
            <div className="pr-4">{sidebar}</div>

            {/* Resize handle */}
            <div
              onMouseDown={(e) => {
                const startX = e.clientX

                const onMove = (e: MouseEvent) => {
                  const delta = e.clientX - startX
                  setSidebarWidth((prev) =>
                    Math.min(360, Math.max(220, prev + delta))
                  )
                }

                const onUp = () => {
                  window.removeEventListener("mousemove", onMove)
                  window.removeEventListener("mouseup", onUp)
                }

                window.addEventListener("mousemove", onMove)
                window.addEventListener("mouseup", onUp)
              }}
              className="absolute top-0 right-0 w-2 h-full cursor-col-resize"
            />
          </>
        )}
      </div>

      {/* Grid */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

    </div>
  )
}