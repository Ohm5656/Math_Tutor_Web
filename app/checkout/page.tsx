import type { Metadata } from "next";

import { CheckoutForm } from "@/components/sections/checkout-form";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { courses, getCourseBySlug } from "@/data/courses";

export const metadata: Metadata = {
  title: "สมัครเรียนและชำระเงิน",
  description: "กรอกข้อมูลผู้เรียนและดำเนินการสมัครคอร์สคณิตศาสตร์ออนไลน์"
};

type CheckoutPageProps = {
  searchParams?: Promise<{
    course?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const selectedCourse = params?.course ? getCourseBySlug(params.course) : courses[0];
  const fallbackCourse = selectedCourse ?? courses[0];

  return (
    <div>
      <SectionContainer className="page-hero pattern-dots pt-8 sm:pt-10">
        <GlassCard className="spotlight-panel p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr] lg:items-end">
            <SectionHeader
              eyebrow="Secure Enrollment"
              title="สมัครเรียนอย่างง่าย ชัดเจน และสะดวก"
              description="กรอกข้อมูลผู้เรียน ตรวจสอบคอร์สที่เลือก และดำเนินการชำระเงินได้ในไม่กี่ขั้นตอน"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["สมัครง่าย", "ฟอร์มสั้น อ่านง่าย และจัดลำดับข้อมูลชัดเจน"],
                ["ชำระสะดวก", "ตรวจสอบรายละเอียดคอร์สและยอดชำระได้ก่อนยืนยันรายการ"]
              ].map(([title, description]) => (
                <div key={title} className="rounded-[24px] bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-lg font-semibold text-ink-900">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <CheckoutForm course={fallbackCourse} />
      </SectionContainer>
    </div>
  );
}
