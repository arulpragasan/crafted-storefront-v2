import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-32 border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">

        {/* Top area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl tracking-wide font-semibold">
              Crafted
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              A virtual-event-first platform for discovering fashion,
              brands, and stories in an editorial experience.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-4 text-sm">
            <h4 className="text-neutral-900 font-medium">Explore</h4>

            <ul className="space-y-2 text-neutral-600">
              <li><Link href="/brands" className="hover:text-black">Brands</Link></li>
              <li><Link href="/products" className="hover:text-black">Products</Link></li>
              <li><Link href="/programs" className="hover:text-black">Programs</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-4 text-sm">
            <h4 className="text-neutral-900 font-medium">Account</h4>

            <ul className="space-y-2 text-neutral-600">
              <li><Link href="/profile" className="hover:text-black">Profile</Link></li>
              <li><Link href="#" className="hover:text-black">Support</Link></li>
              <li><Link href="#" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-20 pt-8 border-t text-xs text-neutral-400 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Crafted. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-neutral-700">Privacy</Link>
            <Link href="#" className="hover:text-neutral-700">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}