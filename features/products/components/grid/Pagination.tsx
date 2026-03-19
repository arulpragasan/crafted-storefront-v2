"use client"

import { useProducts } from "@/features/products/context/products"

type Props = {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: Props) {
  const { goToPage } = useProducts()

  if (!totalPages || totalPages <= 1) {
    return null
  }

  const pages: number[] = []

  const start = Math.max(1, currentPage - 2)
  const end = Math.min(totalPages, currentPage + 2)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center gap-2 pt-10">

      {currentPage > 1 && (
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="px-3 py-1 text-sm text-neutral-500 hover:text-black"
        >
          Prev
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-1 text-sm transition ${
            page === currentPage
              ? "font-medium text-black"
              : "text-neutral-500 hover:text-black"
          }`}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={() => goToPage(currentPage + 1)}
          className="px-3 py-1 text-sm text-neutral-500 hover:text-black"
        >
          Next
        </button>
      )}

    </div>
  )
}