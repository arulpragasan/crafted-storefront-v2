export default function CategoryHero({ category }: any) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <img
        src={category.image}
        className="absolute inset-0 w-full h-full object-cover"
        alt={category.name}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-white">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">
          {category.title}
        </h1>

        <p className="max-w-xl text-lg">
          {category.shortDescription}
        </p>
      </div>
    </section>
  )
}