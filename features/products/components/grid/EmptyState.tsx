import { CardTitle, Muted } from "@/components/ui/Typography"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

      <CardTitle className="mb-3">
        Nothing here yet
      </CardTitle>

      <Muted className="mb-8 max-w-sm">
        No pieces match the current selection. Try adjusting your filters or explore another collection.
      </Muted>

      <a
        href="/products"
        className="text-sm underline underline-offset-4 decoration-neutral-300 hover:decoration-black hover:text-black transition-colors duration-200"
      >
        View all pieces
      </a>

    </div>
  )
}
