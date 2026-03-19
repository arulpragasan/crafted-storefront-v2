"use client"

import { ReactNode, useState } from "react"

type Props = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function FilterSection({
  title,
  children,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-neutral-200 pb-6">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          text-sm font-medium
          text-neutral-900
          pb-4
          group
        "
      >
        <span>{title}</span>

        {/* Chevron */}
        <span
          className={`
            text-lg leading-none transition-transform duration-300
            ${open ? "rotate-180" : "rotate-0"}
          `}
        >
          ⌄
        </span>
      </button>

      {/* Content */}
      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <div className="pt-2 space-y-3">
            {children}
          </div>
        </div>
      </div>

    </div>
  )
}