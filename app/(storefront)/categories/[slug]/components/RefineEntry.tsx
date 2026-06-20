import Link from "next/link"

import { Body } from "@/components/ui/Typography"

type RefineEntryProps = {
  href: string
}

export default function RefineEntry({ href }: RefineEntryProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Body tone="muted">Looking for something specific?</Body>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-500"
      >
        Refine your selection
        <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
