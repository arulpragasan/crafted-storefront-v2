export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

      <h3 className="text-lg font-medium text-neutral-900 mb-2">
        No products found
      </h3>

      <p className="text-sm text-neutral-500 mb-6 max-w-sm">
        Try adjusting your filters or explore other collections to find something you love.
      </p>

      <a
        href="/products"
        className="text-sm underline underline-offset-4 hover:text-black transition"
      >
        Explore all products
      </a>

    </div>
  )
}