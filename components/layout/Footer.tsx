import Link from "next/link"
import { Container } from "@/components/layout/Container"

export function Footer() {
  return (
    <footer className="mt-40 border-t border-neutral-200 bg-white">
      <Container size="wide">
        <div className="py-28">

          {/* Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

            {/* Brand */}
            <div className="space-y-5">
              <h3 className="font-serif text-xl tracking-[0.2em]">
                CRAFTED
              </h3>

              <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                An editorial platform for discovering exceptional fashion houses,
                collections, and luxury experiences.
              </p>
            </div>

            {/* Explore */}
            <div className="space-y-5">
              <h4 className="text-sm tracking-wide text-neutral-800">
                Explore
              </h4>

              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <Link href="/events" className="transition-colors hover:text-black">
                    Events
                  </Link>
                </li>

                <li>
                  <Link href="/brands" className="transition-colors hover:text-black">
                    Designers
                  </Link>
                </li>

                <li>
                  <Link href="/collections" className="transition-colors hover:text-black">
                    Collections
                  </Link>
                </li>

                <li>
                  <Link href="/journal" className="transition-colors hover:text-black">
                    Journal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Crafted */}
            <div className="space-y-5">
              <h4 className="text-sm tracking-wide text-neutral-800">
                Crafted
              </h4>

              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <Link href="/partner" className="transition-colors hover:text-black">
                    Partner With Us
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="transition-colors hover:text-black">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="transition-colors hover:text-black">
                    About Crafted
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-neutral-200 pt-10 text-xs text-neutral-400 md:flex-row">

            <p>
              © {new Date().getFullYear()} Crafted. All rights reserved.
            </p>

            <div className="flex gap-8">
              <Link href="/privacy" className="transition-colors hover:text-neutral-700">
                Privacy
              </Link>

              <Link href="/terms" className="transition-colors hover:text-neutral-700">
                Terms
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </footer>
  )
}