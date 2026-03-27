"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/ui/brand-mark";
import { PremiumButton } from "@/components/ui/premium-button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-ink-900 shadow-panel backdrop-blur"
      >
        <span className="relative h-4 w-5">
          <span
            className={cn(
              "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition",
              open && "top-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition",
              open && "top-2 -rotate-45"
            )}
          />
        </span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="ปิดเมนู"
            className="fixed inset-0 z-[59] bg-slate-950/26 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div
            id="mobile-nav-panel"
            className="fixed inset-x-3 top-[88px] z-[60] max-h-[calc(100dvh-104px)] overflow-y-auto rounded-[28px] border border-white/80 bg-white/[0.96] p-4 shadow-[0_32px_80px_-30px_rgba(15,23,42,0.34)] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))]" />
            <div className="absolute inset-x-4 top-0 h-px animated-border" />

            <div className="relative mb-4 flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <div>
                <p className="text-sm font-semibold text-ink-900">Prime Math Academy</p>
                <p className="text-xs text-slate-500">Mathematics Excellence Platform</p>
              </div>
            </div>

            <nav className="relative flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl border px-4 py-3.5 text-[15px] font-medium transition duration-200",
                    pathname === item.href
                      ? "border-slate-200/90 bg-slate-50/90 text-ink-900 shadow-sm"
                      : "border-transparent bg-white/50 text-slate-600 hover:border-slate-200 hover:bg-slate-50/90 hover:text-ink-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="relative mt-4 border-t border-slate-100 pt-4">
              <PremiumButton href="/courses" className="w-full">
                สมัครเรียน
              </PremiumButton>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
