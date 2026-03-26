import type { Metadata } from "next";

import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";

export const metadata: Metadata = {
  title: "แดชบอร์ดผู้เรียน",
  description: "หน้า placeholder สำหรับพื้นที่ผู้เรียนหลังสมัครและชำระเงินสำเร็จ"
};

export default function DashboardPlaceholderPage() {
  return (
    <SectionContainer className="page-hero pattern-dots pt-10 sm:pt-14">
      <GlassCard className="mx-auto max-w-4xl p-8 sm:p-10">
        <span className="eyebrow">Student Dashboard Placeholder</span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight">
          พื้นที่ผู้เรียน
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">
          หน้านี้เตรียมไว้สำหรับ dashboard หลังบ้าน เช่น รายการคอร์สที่ซื้อแล้ว ประวัติการชำระเงิน
          หน้านี้จัดไว้สำหรับรวมคอร์สที่สมัครแล้ว ตารางเรียน รายละเอียดการเข้าเรียน และประกาศจากสถาบัน
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["คอร์สของฉัน", "ดูรายวิชาที่สมัครและความคืบหน้าการเรียน"],
            ["สถานะการชำระเงิน", "แสดงรายการชำระสำเร็จหรือรอดำเนินการ"],
            ["เอกสารและประกาศ", "ใช้เป็นศูนย์กลางการสื่อสารกับผู้เรียน"]
          ].map(([title, description]) => (
            <div key={title} className="rounded-[24px] bg-slate-50/90 p-5">
              <p className="text-lg font-semibold text-ink-900">{title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <PremiumButton href="/courses">กลับไปดูคอร์สเรียน</PremiumButton>
          <PremiumButton href="/contact" variant="secondary">
            ติดต่อทีมงาน
          </PremiumButton>
        </div>
      </GlassCard>
    </SectionContainer>
  );
}
