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
  const checkoutCourse = {
    id: fallbackCourse.id,
    slug: fallbackCourse.slug,
    title: fallbackCourse.title,
    shortDescription: fallbackCourse.shortDescription,
    level: fallbackCourse.level,
    duration: fallbackCourse.duration,
    lessons: fallbackCourse.lessons,
    price: fallbackCourse.price
  };

  return (
    <div>
      
      <SectionContainer className="section-contrast">
        <CheckoutForm course={checkoutCourse} />
      </SectionContainer>
    </div>
  );
}
