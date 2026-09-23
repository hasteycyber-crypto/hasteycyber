import Link from "next/link";

const PAYPAL_URL =
  "https://www.paypal.com/ncp/payment/P2FRNKZE3Y3EE";

export default function NmapLabPage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                HasteyCyber Digital Product
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
                Nmap Practical Lab for Beginners
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                A hands-on workbook designed to help aspiring ethical hackers
                build practical Nmap skills through real exercises in an
                authorized lab environment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PAYPAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Get Instant Access
                </a>

                <a
                  href="#inside"
                  className="rounded-lg border border-slate-700 px-6 py-4 text-center font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  See What's Inside
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="rounded-full border border-slate-800 px-4 py-2">
                  8 Modules
                </span>
                <span className="rounded-full border border-slate-800 px-4 py-2">
                  18 Exercises
                </span>
                <span className="rounded-full border border-slate-800 px-4 py-2">
                  Cheat Sheet
                </span>
                <span className="rounded-full border border-slate-800 px-4 py-2">
                  Answer Guide
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  Practical Workbook
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Learn Nmap by doing.
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Move beyond theory with practical exercises covering host
                  discovery, port scanning, service detection, OS detection,
                  NSE, timing, reporting, and a final capstone lab.
                </p>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Digital workbook</span>
                    <span className="font-semibold text-white">
                      Instant access
                    </span>
                  </div>
                </div>

                <a
                  href={PAYPAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block rounded-lg bg-cyan-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Get Instant Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section
        id="inside"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            What's Inside
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A practical path from beginner to confident Nmap user.
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            The lab focuses on practical Nmap usage so you can learn how
            network discovery and scanning work in an authorized environment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Safe Lab Environment",
              description:
                "Learn how to build and use an isolated, authorized environment for Nmap practice.",
            },
            {
              number: "02",
              title: "Host Discovery",
              description:
                "Discover live hosts and understand the purpose of network discovery.",
            },
            {
              number: "03",
              title: "Port Scanning",
              description:
                "Practice different Nmap scanning techniques and understand what the results mean.",
            },
            {
              number: "04",
              title: "Service & Version Detection",
              description:
                "Identify services and their versions running on discovered ports.",
            },
            {
              number: "05",
              title: "OS Detection",
              description:
                "Learn how Nmap can attempt to identify the operating system of a target.",
            },
            {
              number: "06",
              title: "Nmap Scripting Engine",
              description:
                "Explore NSE scripts and understand how they extend Nmap capabilities.",
            },
            {
              number: "07",
              title: "Timing & Performance",
              description:
                "Understand timing techniques and how scan speed affects network activity.",
            },
            {
              number: "08",
              title: "Output & Reporting",
              description:
                "Save scan results and organize information for practical security work.",
            },
            {
              number: "09",
              title: "Capstone Lab",
              description:
                "Bring your skills together in a practical authorized scanning exercise.",
            },
          ].map((module) => (
            <div
              key={module.number}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <span className="text-sm font-bold text-cyan-400">
                MODULE {module.number}
              </span>

              <h3 className="mt-3 text-xl font-bold">
                {module.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Included */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Included
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Everything you need for the lab.
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Complete practical workbook",
                  "18 hands-on exercises",
                  "Nmap quick-reference cheat sheet",
                  "Complete answer guide",
                  "Practical lab workflow",
                  "Authorized and isolated lab guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-cyan-400">✓</span>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Learning Outcomes
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                What you'll be able to practice.
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Perform basic Nmap host discovery",
                  "Understand common port scanning techniques",
                  "Identify services and versions",
                  "Practice OS detection",
                  "Use Nmap Scripting Engine capabilities",
                  "Control scan timing and performance",
                  "Save and interpret scan output",
                  "Complete an end-to-end practical scanning lab",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Who It's For
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Built for cybersecurity beginners.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              This lab is designed for students, aspiring ethical hackers,
              cybersecurity beginners, and anyone who wants to build practical
              network scanning skills.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-xl font-bold">
              Estimated practical time
            </h3>

            <p className="mt-3 text-4xl font-bold text-cyan-400">
              4–6 hours
            </p>

            <p className="mt-3 leading-7 text-slate-400">
              Work through the exercises at your own pace and repeat the labs
              until the commands and concepts become familiar.
            </p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Safety & Ethics
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Practice responsibly.
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Only scan systems you own or have explicit permission to test.
            Use an isolated lab environment whenever possible. The purpose of
            this workbook is education, defensive security, and authorized
            ethical hacking practice.
          </p>
        </div>
      </section>

      {/* Purchase */}
      <section
        id="buy"
        className="bg-cyan-400 text-slate-950"
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest">
            HasteyCyber Nmap Practical Lab
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Start building your Nmap skills.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-800">
            Get the complete practical workbook and work through the labs at
            your own pace.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-slate-950 p-8 text-white">
            <p className="text-sm text-slate-500">
              DIGITAL PRODUCT
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Nmap Practical Lab
            </h3>

            <p className="mt-3 text-slate-400">
              Workbook + Exercises + Cheat Sheet + Answer Guide
            </p>

            <p className="mt-5 text-4xl font-bold text-cyan-400">
              $9.99
            </p>

            <a
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block w-full rounded-lg bg-cyan-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Buy Now — Get Instant Access
            </a>

            <p className="mt-4 text-xs text-slate-500">
              Secure checkout powered by PayPal.
            </p>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href="/products"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Products
        </Link>
      </section>
    </main>
  );
}
