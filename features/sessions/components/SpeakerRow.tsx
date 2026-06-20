import Image from "next/image"

import { getImageUrl } from "@/lib/utils/getImageUrl"
import { Caption } from "@/components/ui/Typography"
import type { Speaker } from "@/features/sessions/mock/session.mock"

/**
 * SpeakerRow — compact avatar + name + role, sits high (above the description).
 * Speakers are the human draw, so they outrank prose in reading order.
 * Horizontally scrollable on mobile, wraps on desktop.
 */
export function SpeakerRow({ speakers }: { speakers: Speaker[] }) {
  if (speakers.length === 0) return null

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4">
      {speakers.map((s) => {
        const role = [s.title, s.company].filter(Boolean).join(", ")
        return (
          <div key={s.id} className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-900/5">
              <Image
                src={getImageUrl(s.avatar_url)}
                alt={s.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-medium text-neutral-900">
                {s.name}
              </span>
              {role && (
                <Caption variant="plain" tone="secondary" className="text-xs">
                  {role}
                </Caption>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
