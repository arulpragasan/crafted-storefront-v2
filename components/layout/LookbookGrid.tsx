import clsx from "clsx"

type Props = {
  children: React.ReactNode[]
}

export function LookbookGrid({ children }: Props) {
  return (
    <div className="
      grid grid-cols-2 md:grid-cols-4
      gap-x-8 gap-y-16
    ">
      {children.map((child, index) => (
        <div
          key={index}
          className={clsx(
            index % 6 === 0 && "md:col-span-2 md:row-span-2"
          )}
        >
          {child}
        </div>
      ))}
    </div>
  )
}