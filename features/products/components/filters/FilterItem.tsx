type Props = {
  label: string
  count?: number
  active?: boolean
  onClick?: () => void
}

import { Caption } from "@/components/ui/Typography"

export function FilterItem({
  label,
  count,
  active = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        group flex w-full items-center justify-between
        py-1.5
        text-sm
        transition-all duration-200
        ${active
          ? "text-black font-medium"
          : "text-neutral-500 hover:text-black"}
      `}
    >
      <span className="capitalize">
        {label}
      </span>

      {count !== undefined && (
        <Caption
          className={`
            tabular-nums transition
            ${active
              ? "text-neutral-900"
              : "text-neutral-400 group-hover:text-neutral-600"}
          `}
        >
          {count}
        </Caption>
      )}
    </button>
  )
}
