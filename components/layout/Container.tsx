import clsx from "clsx"
import React from "react"
import { containerPaddingClass, containerWidthClass } from "@/styles/design-system/spacing"

type ContainerSize = "narrow" | "content" | "wide" | "full"

type ContainerProps = {
  children: React.ReactNode
  size?: ContainerSize
  className?: string
}

export function Container({
  children,
  size = "content",
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        containerPaddingClass,
        containerWidthClass[size],
        className
      )}
    >
      {children}
    </div>
  )
}
