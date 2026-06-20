"use client"

import Image from "next/image"
import Link from "next/link"
import { CardTitle, Caption } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type EditorialItem = {
  slug: string
  title: string
  image_url?: string | null
}

type EditorialProps = {
  items: EditorialItem[]
}

export function Editorial({ items }: EditorialProps) {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        <div className="mb-12">
          <Caption className="text-white/60">Editorial</Caption>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {items.map((item) => (
            <Link key={item.slug} href={`/editorial/${item.slug}`} className="group">

              <div className="relative aspect-[4/5]">
                <Image
                  src={getImageUrl(item.image_url)}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
              </div>

              <CardTitle className="mt-4">{item.title}</CardTitle>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}
