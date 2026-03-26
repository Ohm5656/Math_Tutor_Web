import type { Metadata } from "next";

import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";
import { getCourseBySlug } from "@/data/courses";

export const metadata: Metadata = {
  title: "ชำระเงินไม่สำเร็จ",
  description: "หน้าสำหรับแจ้งว่าการชำระเงินยังไม่สมบูรณ์และสามารถกลับไปทำรายการใหม่ได้"
};

type PaymentFailedPageProps = {
  searchParams?: Promise<{
    course?: string;
  }>;
};

export default async function PaymentFailedPage({ searchParams }: PaymentFailedPageProps) {
  const params = await searchParams;
  const course = params?.course ? getCourseBySlug(params.course) : undefined;

  return (
    <SectionContainer className="page-hero pattern-dots pt-12 sm:pt-16">
      <GlassCard className="mx-auto max-w-3xl p-8 text-center sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#fee2e2,#fff1f2)] text-3xl text-rose-600 shadow-sm">
          !
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight">การชำระเงินยังไม่สมบูรณ์</h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">
          ระบบยังไม่ได้รับการยืนยันการชำระเงิน
          {course ? ` สำหรับคอร์ส ${course.title}` : ""}
          คุณสามารถกลับไปตรวจสอบข้อมูลแล้วลองทำรายการอีกครั้งได้ทันที
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <PremiumButton href={course ? `/checkout?course=${course.slug}` : "/checkout"} size="lg">
            ลองชำระเงินอีกครั้ง
          </PremiumButton>
          <PremiumButton href="/courses" size="lg" variant="secondary">
            กลับไปเลือกคอร์ส
          </PremiumButton>
        </div>
        <div className="mt-6 rounded-[24px] bg-slate-50/90 px-5 py-5 text-left text-sm leading-7 text-slate-500">
          หากรายการยังไม่สำเร็จ คุณสามารถตรวจสอบข้อมูลอีกครั้งแล้วลองดำเนินการใหม่ได้ทันที
        </div>
      </GlassCard>
    </SectionContainer>
  );
}
