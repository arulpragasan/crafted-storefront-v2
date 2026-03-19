"use client"

import { useProducts } from "@/features/products/context/products"

export function useProductCount() {
  const { meta } = useProducts()
  return meta?.total_count || 0
}