"use client"

import Image from "next/image"
import Link from "next/link"

import { getImageUrl } from "@/lib/utils/getImageUrl"

import {
  Caption,
  Title,
  Body,
  Meta,
} from "@/components/ui/Typography"

type Session = {
  id: number
  name: string
  session_type?: string
}

type Brand = {
  name: string
}

type Program = {
  id: number
  slug: string
  name: string

  description?: string
  cover_image_url?: string

  brand?: Brand

  session_count?: number
  speaker_count?: number

  sessions?: Session[]
}

type Props = {
  title?: string

  program: Program

  showBrand?: boolean
  showDescription?: boolean
  showSessions?: boolean
}

export function ProgramSpotlight({
  title = "Programs",
  program,
  showBrand = true,
  showDescription = true,
  showSessions = true,
}: Props) {
  return (
    <section className="py-24 lg:py-32">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Label */}

        <Caption className="uppercase tracking-[0.18em] text-neutral-400 mb-10">
          {title}
        </Caption>

        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-20 items-center">

          {/* Image */}

          <Link
            href={`/programs/${program.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">

              <Image
                src={getImageUrl(program.cover_image_url)}
                alt={program.name}
                fill
                sizes="(min-width:1024px) 60vw,100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

            </div>
          </Link>

          {/* Content */}

          <div className="space-y-6">

            {showBrand && program.brand && (
              <Meta className="uppercase tracking-widest">
                {program.brand.name}
              </Meta>
            )}

            <Title className="leading-[1.05] text-neutral-900">
              {program.name}
            </Title>

            {showDescription && program.description && (
              <Body className="text-neutral-600 leading-relaxed">
                {program.description}
              </Body>
            )}

            {showSessions &&
              program.sessions &&
              program.sessions.length > 0 && (

                <div className="pt-2">

                  <Caption className="uppercase tracking-[0.18em] text-neutral-400 mb-5">
                    Featured Sessions
                  </Caption>

                  <div className="space-y-4">

                    {program.sessions.slice(0, 3).map((session) => (

                      <div
                        key={session.id}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />

                        <div>

                          <h3 className="text-base font-medium text-neutral-900">
                            {session.name}
                          </h3>

                          {session.session_type && (
                            <p className="mt-1 text-sm text-neutral-500 capitalize">
                              {session.session_type}
                            </p>
                          )}

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              )}

            <div className="flex flex-wrap gap-8 pt-2">

              {program.session_count ? (
                <Meta>{program.session_count} Sessions</Meta>
              ) : null}

              {program.speaker_count ? (
                <Meta>{program.speaker_count} Speakers</Meta>
              ) : null}

            </div>

            <Link
              href={`/programs/${program.slug}`}
              className="
                inline-flex
                items-center
                gap-2
                pt-2
                text-sm
                uppercase
                tracking-[0.18em]
                text-neutral-900
                transition-all
                hover:gap-3
              "
            >
              Explore Program

              <span aria-hidden>→</span>

            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}