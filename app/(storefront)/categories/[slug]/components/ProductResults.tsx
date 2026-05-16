import Link from "next/link"

type Product = {
  id: string | number
  image: string
  name: string
}

type ProductResultsProps = {
  products: {
    items: Product[]
    hasNext: boolean
  }
  page: number
}

export default function ProductResults({
  products,
  page,
}: ProductResultsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {products.items.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-2xl"
            />
            <p className="mt-4">{product.name}</p>
          </div>
        ))}
      </div>

      {/* Pagination only */}
      <div className="mt-16 flex justify-center gap-6">
        {page > 1 && (
          <Link href={`?page=${page - 1}`}>
            Previous
          </Link>
        )}
        {products.hasNext && (
          <Link href={`?page=${page + 1}`}>
            Next
          </Link>
        )}
      </div>

    </div>
  )
}
