// import { Section } from "@/components/layout/Section"
// import { Container } from "@/components/layout/Container"
// import { Grid } from "@/components/layout/Grid"
// import { ImageTile } from "@/components/ui/ImageTile"
// import { Subtitle, Title } from "@/components/ui/Typography"
// import Link from "next/link"

// const categories = [
//   {
//     id: "runway",
//     title: "Runway",
//     image:
//       "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "couture",
//     title: "Couture",
//     image:
//       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "bridal",
//     title: "Bridal",
//     image:
//       "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "accessories",
//     title: "Accessories",
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "menswear",
//     title: "Menswear",
//     image:
//       "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: "emerging-designers",
//     title: "Emerging Designers",
//     image:
//       "https://images.unsplash.com/photo-1520975682031-a27f2a36a6b3?q=80&w=1200&auto=format&fit=crop",
//   },
// ]

// export default function CategoriesPage() {
//   return (
//     <Section>
//       <Container>
//         {/* Section 1: Page Intro */}
//         <div className="max-w-[720px]">
//           <Title>
//             Categories
//           </Title>
//         </div>

//         {/* Section 2: Categories Gallery */}
//         <div className="mt-space-7">
//           <Grid columns={3}>
//             {categories.map((category) => (
//               <Link key={category.id} href={`/categories/${category.id}`} className="block focus:outline-none">
//                 <div className="flex flex-col gap-4">
//                   <ImageTile src={category.image} alt={category.title} aspect="portrait" />
//                   <Subtitle>{category.title}</Subtitle>
//                 </div>
//               </Link>
//             ))}
//           </Grid>
//         </div>
//       </Container>
//     </Section>
//   )
// }


import { CategoriesPageContainer } from "@/features/categories/components/layout/CategoriesPageContainer"
import { getCategories } from "@/lib/api/categories"

export default async function CategoriesPage() {
  const { categories } = await getCategories()

  return <CategoriesPageContainer categories={categories} />
}