import Link from "next/link";

const links = [
  { name: "Learn", href: "/learn" },
  { name: "Products", href: "/products" },
  { name: "Free Resources", href: "/free-resources" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/tools" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <div className="text-2xl font-bold tracking-tight text-white">
            Hastey<span className="text-cyan-400">Cyber</span>
          </div>

          <div className="text-[10px] font-medium tracking-[0.25em] text-slate-500">
            LEARN • HACK • SECURE
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/products/nmap-lab"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get the Lab
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 md:hidden"
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}

