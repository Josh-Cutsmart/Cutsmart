"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ClipboardList, Factory, FolderKanban, LayoutDashboard, LogOut, ReceiptText } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/sales", label: "Sales", icon: ReceiptText },
  { href: "/cutlists/initial", label: "Initial Cutlist", icon: ClipboardList },
  { href: "/cutlists/production", label: "Production", icon: Factory },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout, isDemoMode } = useAuth();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#e0f2fe_0%,_#f8fafc_55%,_#fef3c7_100%)]">
      <header className="border-b border-slate-200/80 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-[var(--brand)] p-2 text-white">
              <Building2 size={16} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">CutSmart</p>
              <p className="text-sm font-semibold text-slate-900">Web Workspace</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="hidden md:inline">{user?.displayName}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-wide">
              {user?.role ?? "guest"}
            </span>
            {isDemoMode && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800">
                Demo data mode
              </span>
            )}
            <Button variant="ghost" size="sm" onClick={() => void logout()}>
              <LogOut size={14} className="mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 md:grid-cols-[220px_1fr] md:px-6">
        <aside className="rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-sm">
          <nav className="space-y-1">
            {nav.map((item) => {
              const active = pathname?.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition",
                    active
                      ? "bg-[var(--brand)]/10 text-[var(--brand-strong)]"
                      : "text-slate-700 hover:bg-slate-100",
                  )}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/projects/prj_1001"
              className="mt-2 flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              <FolderKanban size={16} />
              Project Details
            </Link>
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
