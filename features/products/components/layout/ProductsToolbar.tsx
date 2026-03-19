type Props = {
  showFilters: boolean
  onToggleFilters: () => void
}

export function ProductsToolbar({
  showFilters,
  onToggleFilters,
}: Props) {
  return (
    <div className="flex items-center justify-between border-b pb-4">

      <button onClick={onToggleFilters} className="text-sm font-medium tracking-wide">
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="text-sm text-neutral-500">
        {/*{count} items*/}
      </div>

      <button className="text-sm hover:text-black transition">
        Sort ↓
      </button>

    </div>
  )
}


