"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Caption } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type RelatedBrand = {
  slug: string
  name: string
  logo_url?: string | null
}

type RelatedBrandsProps = {
  brands?: RelatedBrand[]
}

export function RelatedBrands({ brands }: RelatedBrandsProps) {
  if (!brands || brands.length === 0) return null

  return (
    <section className="py-24 md:py-32">

      <div className="px-6 md:px-12 lg:px-24">

        {/* Label */}
        <div className="mb-12 text-center">
          <Caption>Discover More Designers</Caption>
        </div>

        {/* Grid */}
        <div className="flex justify-center gap-8 md:gap-12 flex-wrap">

          {brands.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={`/brands/${b.slug}`} className="group block">

                <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden">

                  <Image
                    src={getImageUrl(b.logo_url)}
                    alt={b.name}
                    fill
                    className="
                      object-cover
                      grayscale
                      group-hover:grayscale-0
                      transition duration-500
                    "
                  />

                </div>

                <Caption className="mt-4 text-center block">
                  {b.name}
                </Caption>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}
