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

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="เปิดเมนู"
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-ink-900 shadow-panel backdrop-blur"
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
        <div className="absolute inset-x-5 top-[86px] z-40 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-premium backdrop-blur-2xl">
          <div className="absolute inset-x-5 top-0 h-px animated-border" />
          <div className="mb-5 flex items-center gap-3">
            <BrandMark className="h-10 w-10" />
            <div>
              <p className="text-sm font-semibold text-ink-900">Prime Math Academy</p>
              <p className="text-xs text-slate-500">Mathematics Excellence Platform</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <PremiumButton href="/checkout" className="w-full">
              สมัครเรียน
            </PremiumButton>
          </div>
        </div>
      ) : null}
    </div>
  );
}
