import type { Metadata } from "next";
import Link from "next/link";

import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";
import { getCourseBySlug } from "@/data/courses";

export const metadata: Metadata = {
  title: "ชำระเงินสำเร็จ",
  description: "ยืนยันการสมัครเรียนและชำระเงินสำเร็จสำหรับคอร์สคณิตศาสตร์ออนไลน์"
};

type PaymentSuccessPageProps = {
  searchParams?: Promise<{
    course?: string;
  }>;
};

export default async function PaymentSuccessPage({ searchParams }: PaymentSuccessPageProps) {
  const params = await searchParams;
  const course = params?.course ? getCourseBySlug(params.course) : undefined;

  return (
    <SectionContainer className="page-hero pattern-dots pt-12 sm:pt-16">
      <GlassCard className="mx-auto max-w-3xl p-8 text-center sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#dbeafe,#ecfeff)] text-3xl text-brand-700 shadow-sm">
          ✓
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight">ชำระเงินและสมัครเรียนสำเร็จ</h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">
          ขอบคุณที่ไว้วางใจ Prime Math Academy
          {course ? ` สำหรับคอร์ส ${course.title}` : ""}
          ทีมงานจะส่งรายละเอียดการเข้าเรียนและขั้นตอนถัดไปตามช่องทางที่ลงทะเบียนไว้
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <PremiumButton href="/courses" size="lg">
            กลับไปดูคอร์สอื่น
          </PremiumButton>
          <PremiumButton href="/dashboard" size="lg" variant="secondary">
            ไปยังแดชบอร์ดผู้เรียน
          </PremiumButton>
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-500">
          หากต้องการใบเสร็จหรือเอกสารเพิ่มเติม สามารถติดต่อทีมงานได้ที่
          {" "}
          <Link href="/contact" className="font-semibold text-ink-900 hover:text-brand-700">
            หน้าติดต่อเรา
          </Link>
        </p>
      </GlassCard>
    </SectionContainer>
  );
}
