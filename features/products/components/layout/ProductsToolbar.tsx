type Props = {
  showFilters: boolean
  onToggleFilters: () => void
}

export function ProductsToolbar({
  showFilters,
  onToggleFilters,
}: Props) {
  return (
    <div className="flex items-center justify-between pb-4">

      <button
        onClick={onToggleFilters}
        className="text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200"
      >
        {showFilters ? "Hide Filters" : "Filters"}
      </button>

    </div>
  )
}
