import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/ui/course-card";
import { ElevationCard } from "@/components/ui/elevation-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";
import { courses, getCourseBySlug } from "@/data/courses";
import { tutors } from "@/data/site";
import { formatPrice } from "@/lib/utils";

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "ไม่พบคอร์ส" };
  }

  return {
    title: course.title,
    description: course.shortDescription
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const tutor = tutors.find((item) => item.id === course.tutorId);
  const relatedCourses = courses
    .filter((item) => item.slug !== course.slug && item.category === course.category)
    .slice(0, 3);

  return (
    <div>
      <SectionContainer className="page-hero pattern-dots pt-8 sm:pt-10">
        <GlassCard className="spotlight-panel overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>{course.category}</Badge>
                <Badge>{course.level}</Badge>
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
                {course.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">{course.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["ราคา", formatPrice(course.price)],
                ["ระยะเวลา", course.duration],
                ["บทเรียน", `${course.lessons} บท`]
              ].map(([title, value]) => (
                <div key={title} className="rounded-[24px] bg-slate-50/90 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                    {title}
                  </p>
                  <p className={title === "ราคา" ? "mt-3 text-lg font-semibold text-brand-700" : "mt-3 text-lg font-semibold text-ink-900"}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <ElevationCard className="p-7 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Course Overview
              </p>
              <h2 className="mt-4 text-2xl font-semibold">ภาพรวมหลักสูตร</h2>
              <p className="mt-4 text-base leading-8 text-slate-500">{course.highlight}</p>
            </ElevationCard>

            <ElevationCard className="p-7 sm:p-8">
              <h2 className="text-2xl font-semibold">ผลลัพธ์ที่ผู้เรียนจะได้รับ</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-[24px] bg-slate-50/90 px-5 py-5">
                    <p className="text-sm leading-7 text-slate-600">{outcome}</p>
                  </div>
                ))}
              </div>
            </ElevationCard>

            <ElevationCard className="p-7 sm:p-8">
              <h2 className="text-2xl font-semibold">เหมาะสำหรับใคร</h2>
              <div className="mt-6 space-y-3">
                {course.suitableFor.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[24px] bg-slate-50/90 px-5 py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-600" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </ElevationCard>

            <ElevationCard className="p-7 sm:p-8">
              <h2 className="text-2xl font-semibold">โครงสร้างบทเรียน</h2>
              <div className="mt-6 space-y-4">
                {course.curriculum.map((lesson, index) => (
                  <div key={lesson.title} className="rounded-[24px] border border-slate-200/70 bg-white px-5 py-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dbeafe,#ecfeff)] text-sm font-semibold text-brand-700">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-ink-900">{lesson.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-500">{lesson.summary}</p>
                  </div>
                ))}
              </div>
            </ElevationCard>
          </div>

          <div className="space-y-6">
            <GlassCard className="sticky top-28 p-7 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Course Plan
              </p>
              <h2 className="mt-4 text-2xl font-semibold">สมัครเรียนคอร์สนี้</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                ดูรายละเอียดคอร์ส ราคา และสิ่งที่จะได้รับก่อนตัดสินใจสมัคร
              </p>
              <div className="mt-6 rounded-[28px] bg-[linear-gradient(145deg,#0f172a_0%,#1d4ed8_100%)] px-6 py-6 text-white">
                <p className="text-sm text-white/70">ราคาเรียน</p>
                <p className="mt-3 text-4xl font-semibold text-white [text-shadow:0_10px_30px_rgba(15,23,42,0.32)] sm:text-[2.85rem]">{formatPrice(course.price)}</p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  `${course.lessons} บทเรียนแบบเป็นระบบ`,
                  `ระยะเวลาเรียน ${course.duration}`,
                  "เอกสารสรุปและแบบฝึกหัดพร้อมทบทวน",
                  "รองรับ flow สมัครและชำระเงินหน้าเว็บ"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 space-y-3">
                <PremiumButton href={`/checkout?course=${course.slug}`} size="lg" className="w-full">
                  สมัครเรียนคอร์สนี้
                </PremiumButton>
                <PremiumButton href="/contact" variant="secondary" size="lg" className="w-full">
                  ปรึกษาก่อนสมัคร
                </PremiumButton>
              </div>
            </GlassCard>

            {tutor ? (
              <ElevationCard className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Lead Tutor
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{tutor.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{tutor.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-500">{tutor.bio}</p>
                <div className="mt-5 space-y-2">
                  {tutor.credentials.map((credential) => (
                    <p key={credential} className="text-sm leading-7 text-slate-600">
                      • {credential}
                    </p>
                  ))}
                </div>
              </ElevationCard>
            ) : null}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[0.86fr,1.14fr]">
          <div>
            <span className="eyebrow">FAQ & Notes</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight">
              ข้อควรรู้เพิ่มเติมก่อนเริ่มเรียน
            </h2>
            <p className="mt-5 text-lg text-slate-500">
              หากต้องการวางแผนคอร์สหลายระดับต่อเนื่อง ทีมงานสามารถช่วยแนะนำโครงเส้นทางการเรียนให้เหมาะกับผู้เรียนได้
            </p>
          </div>
          <FaqAccordion items={course.faq} />
        </div>
      </SectionContainer>

      {relatedCourses.length > 0 ? (
        <SectionContainer className="section-contrast">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Related Programs</span>
              <h2 className="mt-5 text-3xl font-semibold">คอร์สที่เกี่ยวข้องในหมวดเดียวกัน</h2>
            </div>
            <PremiumButton href="/courses" variant="secondary">
              ดูคอร์สทั้งหมด
            </PremiumButton>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedCourses.map((relatedCourse) => (
              <CourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </SectionContainer>
      ) : null}
    </div>
  );
}
