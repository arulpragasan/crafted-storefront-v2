"use client"

import { useState } from "react"

const CATEGORY_MAP: Record<string, string[]> = {
  Jewellery: ["Earrings", "Necklaces"],
  Apparel: ["Bridal Wear", "Occasion Wear"],
}

const BRANDS = [
  "Crafted Studio",
  "Tarun Tahiliani",
  "Label One",
]

export function ProductFilters() {
  const [category, setCategory] = useState<string>("")
  const subcategories = category ? CATEGORY_MAP[category] : []

  return (
    <div className="rounded-2xl bg-neutral-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* ========================
            Category
        ======================== */}
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            Category
          </p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 p-2 text-sm bg-white"
          >
            <option value="">All categories</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Apparel">Apparel</option>
          </select>
        </div>

        {/* ========================
            Sub-category (dependent)
        ======================== */}
        <div className={subcategories.length === 0 ? "opacity-40" : ""}>
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            Sub-category
          </p>
          <select
            disabled={subcategories.length === 0}
            className="w-full rounded-lg border border-neutral-200 p-2 text-sm bg-white"
          >
            <option>
              {subcategories.length === 0
                ? "Select category first"
                : "All sub-categories"}
            </option>

            {subcategories.map((sub) => (
              <option key={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* ========================
            Brand (independent)
        ======================== */}
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            Brand
          </p>
          <select className="w-full rounded-lg border border-neutral-200 p-2 text-sm bg-white">
            <option>All brands</option>
            {BRANDS.map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* ========================
            Price
        ======================== */}
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            Price
          </p>
          <select className="w-full rounded-lg border border-neutral-200 p-2 text-sm bg-white">
            <option>Any</option>
            <option>Under ₹10,000</option>
            <option>₹10,000 – ₹25,000</option>
          </select>
        </div>
      </div>
    </div>
  )
}