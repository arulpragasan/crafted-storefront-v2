"use client"

import { createContext, useContext } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { parseProductsQuery } from "@/lib/utils/parseProductsQuery"
import { buildProductsUrl } from "@/lib/utils/buildProductsUrl"

type ProductsContextValue = {
  products: any[]
  filters: any
  meta: any
  navigation?: any
}

const ProductsContext = createContext<ProductsContextValue | null>(null)

export function ProductsProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ProductsContextValue
}) {
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error("useProducts must be used inside ProductsProvider")
  }

  const router = useRouter()
  const searchParams = useSearchParams()

  const paramsObject: Record<string, string> = {}

  searchParams.forEach((value, key) => {
    paramsObject[key] = value
  })

  const query = parseProductsQuery(paramsObject)

  function push(updates: Record<string, string[] | string | null>) {
    const url = buildProductsUrl(searchParams, updates)
    router.push(url, { scroll: false }) // 🔥 important
  }

  // ✅ MULTI-SELECT SETTERS

  function setBrand(values: string[]) {
    push({ brand: values })
  }

  function setTheme(values: string[]) {
    push({ theme: values })
  }

  function setOccasion(values: string[]) {
    push({ occasion: values })
  }

  function setCategory(slug: string) {
    push({
      category: slug,
      subcategory: null,
    })
  }

  function setSubcategory(slug: string) {
    push({
      subcategory: slug,
    })
  }

  function setSort(sort: string) {
    push({ sort })
  }

  function clearFilter(key: string) {
    push({
      [key]: null,
    })
  }

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())

    router.push(`/products?${params.toString()}`)
  }

  return {
    ...context,
    query,
    setSort,
    setBrand,
    setTheme,
    setOccasion,
    setCategory,
    setSubcategory,
    clearFilter,
    goToPage,
  }
}