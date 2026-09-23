import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Hastey<span className="text-cyan-400">Cyber</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Practical cybersecurity learning, resources, tools, and
              hands-on labs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Learn</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <Link href="/learn" className="block hover:text-cyan-400">
                Learning
              </Link>

              <Link href="/blog" className="block hover:text-cyan-400">
                Blog
              </Link>

              <Link href="/tools" className="block hover:text-cyan-400">
                Tools
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Products</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <Link href="/products" className="block hover:text-cyan-400">
                All Products
              </Link>

              <Link
                href="/products/nmap-lab"
                className="block hover:text-cyan-400"
              >
                Nmap Practical Lab
              </Link>

              <Link
                href="/free-resources"
                className="block hover:text-cyan-400"
              >
                Free Resources
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">HasteyCyber</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <Link href="/about" className="block hover:text-cyan-400">
                About
              </Link>

              <Link href="/recommended" className="block hover:text-cyan-400">
                Recommended
              </Link>

              <Link href="/contact" className="block hover:text-cyan-400">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-600">
          © {new Date().getFullYear()} HasteyCyber. Learn • Hack • Secure.
        </div>
      </div>
    </footer>
  );
}
