import type { Metadata } from "next";

import { ElevationCard } from "@/components/ui/elevation-card";
import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "นโยบาย",
  description: "ศูนย์รวมเอกสารนโยบายและข้อมูลทางกฎหมายของ Prime Math Academy"
};

export default function PoliciesPage() {
  return (
    <div>
      <SectionContainer className="page-hero pattern-dots pt-8 sm:pt-10">
        <GlassCard className="spotlight-panel p-6 sm:p-8 lg:p-10">
          <SectionHeader
            eyebrow="Policy Center"
            title="ศูนย์รวมเอกสารทางกฎหมายในรูปแบบที่อ่านง่ายและดูเป็นมืออาชีพ"
            description="รวมเอกสารสำคัญที่ผู้เรียนและผู้ปกครองควรทราบก่อนสมัครเรียน"
          />
        </GlassCard>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "นโยบายความเป็นส่วนตัว",
              description: "อธิบายการเก็บ ใช้ และคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งานและผู้เรียน",
              href: "/policies/privacy"
            },
            {
              title: "นโยบายการคืนเงิน",
              description: "รายละเอียดเงื่อนไขการขอคืนเงิน การยกเลิกคำสั่งซื้อ และขั้นตอนพิจารณา",
              href: "/policies/refund"
            },
            {
              title: "เงื่อนไขการใช้งาน",
              description: "ข้อกำหนดการใช้เว็บไซต์ บริการ และการสมัครเรียนคอร์สออนไลน์ของสถาบัน",
              href: "/terms"
            }
          ].map((item) => (
            <ElevationCard key={item.title} hover className="flex h-full flex-col p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Legal Document
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">{item.description}</p>
              <PremiumButton href={item.href} variant="secondary" className="mt-6">
                อ่านรายละเอียด
              </PremiumButton>
            </ElevationCard>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
