"use client"

import { Caption } from "@/components/ui/Typography"
import Link from "next/link"

type Message = {
  id?: number | string
  title?: string
  text?: string
  body?: string
}

type Brand = {
  slug: string
  name: string
}

type Props = {
  brand: Brand
  messages?: Message[]
}

export function FromTheAtelier({ brand, messages = [] }: Props) {
  const featured = messages[0]
  const quoteText = featured?.text || featured?.body || null

  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Section Label */}
        <Caption className="uppercase tracking-widest text-neutral-400">
          From the Atelier
        </Caption>

        {/* Editorial Quote */}
        {quoteText ? (
          <blockquote className="space-y-8">
            <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-extralight leading-[1.4] tracking-tight text-neutral-800 italic">
              &ldquo;{quoteText}&rdquo;
            </p>

            {featured?.title && (
              <footer className="text-sm tracking-wide text-neutral-400 uppercase">
                — {featured.title}
              </footer>
            )}
          </blockquote>
        ) : (
          <p className="text-xl md:text-2xl font-extralight text-neutral-600 leading-relaxed">
            Begin a conversation with {brand.name}.
          </p>
        )}

        {/* CTA */}
        <div>
          <Link
            href={`/brands/${brand.slug}/conversation`}
            className="inline-flex items-center gap-2 text-sm text-neutral-900 border border-neutral-900 px-8 py-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            Start Conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
