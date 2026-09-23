import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-4xl font-bold text-slate-950">
          ✓
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          HasteyCyber
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Payment Successful!
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Thank you for purchasing the HasteyCyber Nmap Practical Lab for
          Beginners.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-left">
          <h2 className="text-2xl font-bold">
            Your Nmap Practical Lab
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Your payment has been completed. Your practical cybersecurity
            workbook will be available here for download.
          </p>

          <div className="mt-6 rounded-xl border border-cyan-400/20 bg-slate-950 p-5">
            <p className="text-sm font-semibold text-cyan-400">
              PRODUCT
            </p>

            <p className="mt-2 font-bold">
              HasteyCyber Nmap Practical Lab for Beginners
            </p>

            <p className="mt-2 text-sm text-slate-500">
              8 modules • 18 hands-on exercises • Cheat Sheet • Answer Guide
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <p className="text-sm font-semibold text-yellow-400">
              DOWNLOAD DELIVERY
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Your secure download link will appear here after the payment
              delivery system is connected.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/products/nmap-lab"
            className="rounded-lg bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Back to Nmap Lab
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-slate-700 px-6 py-4 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Back to HasteyCyber
          </Link>
        </div>

      </div>
    </main>
  );
}
