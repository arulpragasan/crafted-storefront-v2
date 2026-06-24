"use client"

import { useState } from "react"
import { RequestQuoteModal } from "./RequestQuoteModal"

type Theme = {
  name: string
  slug: string
}

type Occasion = {
  name: string
  slug: string
}

type Props = {
  product: any
  options: any[]
  variants: any[]
  variantIndex: Record<string, any>
  themes?: Theme[]
  occasions?: Occasion[]
}

export function ProductInfo({
  product,
  themes = [],
  occasions = [],
}: Props) {
  const [quoteOpen, setQuoteOpen] = useState(false)

  const brandName = product.brand?.name
  const productName = product.name
  const price = product.price
  const shortDescription =
    product.short_description || product.description

  const metadata = [
    ...themes.map((t) => t.name),
    ...occasions.map((o) => o.name),
  ]

  return (
    <div className="flex flex-col gap-10 py-4">

      {/* Brand */}
      {brandName && (
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">
            {brandName}
          </p>
        </div>
      )}

      {/* Product */}
      <div className="space-y-5">

        <h1 className="font-serif text-4xl leading-none tracking-tight text-black lg:text-5xl">
          {productName}
        </h1>

        {price && (
          <p className="text-lg text-neutral-700">
            {price}
          </p>
        )}

      </div>

      {/* Intro */}
      {shortDescription && (
        <div className="max-w-md">
          <p className="text-[15px] leading-8 text-neutral-600">
            {shortDescription
              .split("\n")[0]
              .trim()}
          </p>
        </div>
      )}

      {/* Metadata */}
      {metadata.length > 0 && (
        <div className="border-t border-neutral-200 pt-6">

          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-neutral-400">
            Collection Notes
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-neutral-600">
            {metadata.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}
          </div>

        </div>
      )}

      {/* CTA */}
      <div className="border-t border-neutral-200 pt-8">

        <button
          onClick={() => setQuoteOpen(true)}
          className="
            w-full
            border
            border-black
            bg-black
            py-4
            text-xs
            uppercase
            tracking-[0.22em]
            text-white
            transition-colors
            duration-200
            hover:bg-neutral-900
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-black
            focus-visible:ring-offset-2
          "
        >
          Request Quote
        </button>

      </div>

      <RequestQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={productName}
        brandName={brandName}
      />

    </div>
  )
}