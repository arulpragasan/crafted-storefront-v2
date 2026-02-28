"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid } from "@/components/layout/Grid"
import { ProductCard } from "@/components/commerce/ProductCard"
import { ProductFilters } from "./ProductFilters"
import { Typography } from "@/components/ui/Typography"
import { SlidersHorizontal } from "lucide-react"

type Product = {
  id: number
  name: string
  brand?: string
  price?: number | string
  image: string
  href: string
}

type ProductsClientProps = {
  products: Product[]
}

const filterMotion = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.18, ease: "easeIn" },
  },
}

export function ProductsClient({ products }: ProductsClientProps) {
  const [showFilters, setShowFilters] = useState(false)

  // optional, editorial context
  const collectionLabel = "Autumn / Winter 2025"

  return (
    <>
	  {/* ========================
	      Header
	  ======================== */}
	  <div className="mb-space-8">
	    <div className="flex flex-col gap-2">
	      <p className="text-xs uppercase tracking-wider text-neutral-500">
	        {collectionLabel}
	      </p>

	      <div className="flex items-end justify-between gap-6">
	        <Typography as="h1">Collections</Typography>

	        <button
	          onClick={() => setShowFilters((v) => !v)}
	          className="
	            inline-flex items-center gap-2
	            text-sm
	            text-neutral-500
	            hover:text-neutral-900
	            transition-colors
	          "
	        >
	          <SlidersHorizontal size={14} />
	          <span>Filter</span>
	        </button>
	      </div>
	    </div>
	  </div>

	  {/* ========================
	      Filters
	  ======================== */}
	  <AnimatePresence initial={false}>
	    {showFilters && (
	      <motion.div
	        className="mb-space-7"
	        variants={filterMotion}
	        initial="hidden"
	        animate="visible"
	        exit="exit"
	      >
	        <ProductFilters />
	      </motion.div>
	    )}
	  </AnimatePresence>

	  {/* ========================
	      Products Grid
	  ======================== */}
	  <Grid columns={3} gap="loose">
	    {products.map((product) => (
	      <ProductCard key={product.id} {...product} />
	    ))}
	  </Grid>
	</>
  )
}