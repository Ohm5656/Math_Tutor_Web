import Link from "next/link";

import { MobileNavLoader } from "@/components/layout/mobile-nav-loader";
import { BrandMark } from "@/components/ui/brand-mark";
import { PremiumButton } from "@/components/ui/premium-button";

const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "คอร์ส", href: "/courses" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "รีวิว", href: "/#reviews" },
  { label: "ติดต่อ", href: "/contact" },
  { label: "นโยบาย", href: "/policies" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="app-shell">
        <div className="glass-card pattern-dots relative flex h-[78px] items-center justify-between gap-4 px-4 sm:px-5">
          <div className="absolute inset-x-8 top-0 h-px animated-border" />

          <Link href="/" className="group flex items-center gap-3">
            <BrandMark />
            <div>
              <p className="text-sm font-semibold text-ink-900 transition duration-300 group-hover:text-brand-700">Prime Math Academy</p>
              <p className="text-xs tracking-[0.18em] text-slate-400 transition duration-300 group-hover:translate-x-0.5 group-hover:text-slate-500">
                math with clarity
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} prefetch className="nav-link hover:-translate-y-0.5">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <PremiumButton href="/checkout" size="lg">
              สมัครเรียน
            </PremiumButton>
          </div>

          <MobileNavLoader items={navItems} />
        </div>
      </div>
    </header>
  );
}
