import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_#e0f2fe_0%,_#f8fafc_55%,_#fef3c7_100%)] px-4">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-xl backdrop-blur">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">CutSmart</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Web Workspace</h1>
        <p className="mt-3 text-sm text-slate-600">
          Your Next.js app is ready. Sign in to continue with dashboard, project details, sales, and cutlist workflows.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex h-10 items-center rounded-md bg-[var(--brand)] px-4 text-sm font-medium text-white transition hover:bg-[var(--brand-strong)]"
          >
            Go to Login
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Open Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
