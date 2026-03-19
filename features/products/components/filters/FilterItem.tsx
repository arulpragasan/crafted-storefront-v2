type Props = {
  label: string
  count?: number
  active?: boolean
  onClick?: () => void
}

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
          : "text-neutral-600 hover:text-black"}
      `}
    >
      {/* Left side */}
      <span className="flex items-center gap-3">

        {/* Active indicator (luxury dot) */}
        <span
          className={`
            h-1.5 w-1.5 rounded-full transition-all duration-200
            ${active ? "bg-black scale-100" : "bg-neutral-300 scale-75 group-hover:scale-100"}
          `}
        />

        <span className="capitalize">
          {label}
        </span>
      </span>

      {/* Count */}
      {count !== undefined && (
        <span
          className={`
            text-xs tabular-nums transition
            ${active
              ? "text-black"
              : "text-neutral-400 group-hover:text-neutral-600"}
          `}
        >
          {count}
        </span>
      )}
    </button>
  )
}