"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Body } from "@/components/ui/Typography"

/**
 * ExpandableDescription — collapsed by default so a long description never
 * buries the Up Next continuation that follows it on mobile. Mirrors the
 * YouTube description drawer.
 */
export function ExpandableDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col items-start gap-2">
      <Body
        className={cn(
          "max-w-prose text-base leading-relaxed",
          !expanded && "line-clamp-3"
        )}
      >
        {text}
      </Body>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="font-sans text-sm font-medium text-neutral-500 hover:text-neutral-900"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  )
}
