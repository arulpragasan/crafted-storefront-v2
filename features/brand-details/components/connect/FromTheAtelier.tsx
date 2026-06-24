"use client"

import { Caption, Body } from "@/components/ui/Typography"
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
  const messageText = featured?.text || featured?.body || null

  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Caption className="uppercase tracking-widest text-neutral-400">
          From the Atelier
        </Caption>

        {messageText && (
          <blockquote className="space-y-4">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800 italic">
              &ldquo;{messageText}&rdquo;
            </p>

            {featured?.title && (
              <footer className="text-sm text-neutral-500">
                — {featured.title}
              </footer>
            )}
          </blockquote>
        )}

        {!messageText && (
          <Body className="text-neutral-600">
            Start a conversation with {brand.name}.
          </Body>
        )}

        <Link
          href={`/brands/${brand.slug}/conversation`}
          className="inline-block text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition"
        >
          Continue the Conversation
        </Link>
      </div>
    </section>
  )
}
