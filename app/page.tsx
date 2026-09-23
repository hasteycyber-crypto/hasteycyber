export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Cybersecurity • Linux • Networking
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Learn Cybersecurity
            <span className="block text-cyan-400">by Doing.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Practical cybersecurity learning, hands-on labs, useful resources,
            and tools for people building real-world security skills.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/products"
              className="rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Products
            </a>

            <a
              href="/free-resources"
              className="rounded-lg border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400"
            >
              Get Free Resources
            </a>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Build skills that actually matter.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <div className="mb-5 text-3xl">🐧</div>

              <h3 className="text-xl font-bold">Linux</h3>

              <p className="mt-3 text-slate-400">
                Master the Linux fundamentals used throughout cybersecurity.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <div className="mb-5 text-3xl">🌐</div>

              <h3 className="text-xl font-bold">Networking</h3>

              <p className="mt-3 text-slate-400">
                Understand networks, protocols, ports, routing, and traffic.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <div className="mb-5 text-3xl">🛡️</div>

              <h3 className="text-xl font-bold">Cybersecurity</h3>

              <p className="mt-3 text-slate-400">
                Practice security concepts through authorized hands-on labs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Product
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Nmap Practical Lab
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Build practical Nmap skills through structured, hands-on
                network discovery and security scanning exercises in an
                authorized lab environment.
              </p>

              <a
                href="/products/nmap-lab"
                className="mt-8 inline-block rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Product
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="mb-4 text-sm text-slate-500">
                WHAT YOU&apos;LL PRACTICE
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>✓ Host discovery</li>
                <li>✓ Port scanning</li>
                <li>✓ Service detection</li>
                <li>✓ Scan interpretation</li>
                <li>✓ Practical challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resource */}
      <section className="bg-cyan-400 text-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest">
            Free Resource
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Get the Nmap Beginner Cheat Sheet
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-800">
            Join the HasteyCyber email list and receive practical cybersecurity
            resources, tutorials, and new product updates.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-5 py-3.5 outline-none"
            />

            <button
              type="submit"
              className="rounded-lg bg-slate-950 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Get Free Resource
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-700">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          HasteyCyber Blog
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Learn something new.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 p-6">
            <p className="text-sm text-slate-500">NMAP</p>

            <h3 className="mt-3 text-xl font-bold">
              Nmap Host Discovery Explained
            </h3>

            <p className="mt-3 text-slate-400">
              Understand how host discovery works and how to practice it safely.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 p-6">
            <p className="text-sm text-slate-500">LINUX</p>

            <h3 className="mt-3 text-xl font-bold">
              Linux Commands for Beginners
            </h3>

            <p className="mt-3 text-slate-400">
              Build the command-line skills you need for cybersecurity.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 p-6">
            <p className="text-sm text-slate-500">NETWORKING</p>

            <h3 className="mt-3 text-xl font-bold">
              Understanding Ports and Services
            </h3>

            <p className="mt-3 text-slate-400">
              Learn why ports matter when analyzing networked systems.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
