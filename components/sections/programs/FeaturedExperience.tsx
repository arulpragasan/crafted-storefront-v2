"use client"

import Image from "next/image"
import Link from "next/link"
import { Meta, Headline, Body, Caption } from "@/components/ui/Typography"

type Session = {
  title: string
  start_at: string
}

type FeaturedExperienceProps = {
  title: string
  description?: string
  image_url?: string
  slug: string
  sessions?: Session[]
}

export function FeaturedExperience({
  title,
  description,
  image_url,
  slug,
  sessions = [],
}: FeaturedExperienceProps) {
  const upcomingSessions = sessions.slice(0, 3)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">

      {/* Image — 60% visual weight on desktop */}
      {image_url && (
        <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 group">
          <Image
            src={image_url}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </div>
      )}

      {/* Content — 40% on desktop */}
      <div className={image_url ? "lg:col-span-2 space-y-8" : "lg:col-span-5 max-w-2xl space-y-8"}>

        <Meta>Featured Experience</Meta>

        <Headline as="h2">
          {title}
        </Headline>

        {description && (
          <Body>
            {description}
          </Body>
        )}

        {/* Session list */}
        {upcomingSessions.length > 0 && (
          <div className="space-y-4 pt-2">
            {upcomingSessions.map((session, index) => {
              const date = new Date(session.start_at)
              const time = date.toLocaleTimeString("en-IN", {
                hour: "numeric",
                minute: "2-digit",
              })
              const day = date.toLocaleDateString("en-IN", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })

              return (
                <div key={index} className="flex items-baseline gap-4">
                  <Caption variant="plain" tone="secondary" className="shrink-0 w-28">
                    {day} · {time}
                  </Caption>
                  <span className="text-neutral-900 text-sm font-medium">
                    {session.title}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/programs/${slug}`}
          className="inline-block text-sm tracking-widest uppercase border-b border-neutral-900 pb-1 transition-opacity hover:opacity-60"
        >
          View Program Schedule →
        </Link>

      </div>

    </div>
  )
}
