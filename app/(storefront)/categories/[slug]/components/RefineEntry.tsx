import Link from "next/link"

type RefineEntryProps = {
  href: string
}

export default function RefineEntry({ href }: RefineEntryProps) {
  return (


    <div className="text-center">
      <p className="text-sm text-neutral-500">
        Looking for something specific?
      </p>

      <Link href={href}>
        Refine your selection →
      </Link>
    </div>

  )
}
