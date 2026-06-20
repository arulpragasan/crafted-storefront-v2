import clsx from "clsx"

type Props = {
  children: React.ReactNode
  className?: string
}

export function EditorialGrid({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14 md:gap-x-10 md:gap-y-16",
        className,
      )}
    >
      {children}
    </div>
  )
}
