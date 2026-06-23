"use client"

import { useRouter, useSearchParams } from "next/navigation"

type Option = {
  slug: string
  name: string
  count: number
}

type Props = {
  title: string
  options: Option[]
  param: string
}

import { Caption } from "@/components/ui/Typography"

export function FilterGroup({ title, options, param }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selected = searchParams.get(param)

  function toggleFilter(value: string) {
    const params = new URLSearchParams(searchParams)

    if (params.get(param) === value) {
      params.delete(param)
    } else {
      params.set(param, value)
    }

    params.set("page", "1")

    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <h4 className="text-xs uppercase tracking-widest text-neutral-400">
        {title}
      </h4>

      <div className="space-y-2">
        {options.map((option) => {
          const isActive = selected === option.slug

          return (
            <button
              key={option.slug}
              onClick={() => toggleFilter(option.slug)}
              className={`
                flex w-full items-center justify-between text-sm text-left group py-1
                transition-colors duration-200
                ${isActive
                  ? "text-black font-medium"
                  : "text-neutral-500 hover:text-black"
                }
              `}
            >
              <span className="capitalize">
                {option.name}
              </span>

              <Caption
                className={`
                  tabular-nums transition
                  ${isActive
                    ? "text-neutral-900"
                    : "text-neutral-400 group-hover:text-neutral-600"
                  }
                `}
              >
                {option.count}
              </Caption>
            </button>
          )
        })}
      </div>
    </div>
  )
}
