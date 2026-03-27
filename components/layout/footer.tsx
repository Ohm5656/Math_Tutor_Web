import Link from "next/link";

import { NeonOrbField } from "@/components/ui/neon-orb-field";
import { BrandMark } from "@/components/ui/brand-mark";
import { contactInfo } from "@/data/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Refund Policy", href: "/policies/refund" },
  { label: "Terms", href: "/terms" }
];

export function Footer() {
  return (
    <footer className="section-space pb-8 pt-0">
      <div className="app-shell">
        <div className="relative isolate overflow-hidden rounded-[38px] bg-[linear-gradient(145deg,#4f86f7_0%,#3b82f6_48%,#2563eb_100%)] text-white shadow-[0_42px_120px_-56px_rgba(37,99,235,0.7)]">
          <NeonOrbField variant="footer" className="footer-orb-field" />
          <div className="relative z-[1] grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr,0.9fr] lg:px-10 lg:py-12">
            <div className="reveal-on-scroll reveal-left">
              <div className="flex items-center gap-3">
                <BrandMark />
                <div>
                  <h2 className="text-lg font-semibold text-white">Prime Math Academy</h2>
                  <p className="text-sm text-white/75">Premium online math learning</p>
                </div>
              </div>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/85">
                สถาบันคณิตศาสตร์ออนไลน์สำหรับการเพิ่มเกรด สอบเข้า และสร้างความเข้าใจจริง
              </p>

              <div className="mt-6 space-y-2 text-sm text-white/80">
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="reveal-on-scroll reveal-up" data-stagger="1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
                  Quick Links
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {footerLinks.map((link) => (
                     <Link
                       key={link.href}
                       href={link.href}
                        className="footer-link"
                      >
                        {link.label}
                      </Link>
                  ))}
                </div>
              </div>

              <div className="reveal-on-scroll reveal-up" data-stagger="2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
                  Legal
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {legalLinks.map((link) => (
                     <Link
                       key={link.href}
                       href={link.href}
                        className="footer-link"
                      >
                        {link.label}
                      </Link>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-white/15 bg-white/10 p-4 text-sm leading-7 text-white/80 backdrop-blur">
                  สมัครเรียนได้สะดวก ตรวจสอบคอร์สได้ชัดเจน และติดต่อทีมงานได้ทันที
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-[1] border-t border-white/12 px-6 py-4 text-sm text-white/70 sm:px-8 lg:px-10">
            © 2026 Prime Math Academy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
