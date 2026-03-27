import type { Metadata } from "next";
import Link from "next/link";

import { CourseCard } from "@/components/ui/course-card";
import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { courseCategories, courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { CourseCategory } from "@/types";

export const metadata: Metadata = {
  title: "คอร์สเรียน",
  description: "รวมคอร์สคณิตศาสตร์ออนไลน์สำหรับนักเรียนประถม มัธยมต้น มัธยมปลาย และคอร์สเตรียมสอบ"
};

type CoursesPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  const requestedCategory = params?.category as CourseCategory | undefined;
  const selectedCategory =
    requestedCategory && courseCategories.includes(requestedCategory)
      ? requestedCategory
      : "ทั้งหมด";

  const filteredCourses =
    selectedCategory === "ทั้งหมด"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div>
      <SectionContainer className="page-hero pattern-dots pt-8 sm:pt-10">
        <GlassCard className="spotlight-panel overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.8fr] lg:items-end">
            <SectionHeader
              eyebrow="Course Programs"
              title="หลักสูตรคณิตศาสตร์ที่ออกแบบเพื่อผลลัพธ์และความเชื่อมั่นของผู้เรียน"
              description="เลือกคอร์สตามระดับชั้นหรือเป้าหมายการเรียน ตั้งแต่การปูพื้นฐาน เพิ่มเกรด ไปจนถึงโปรแกรมเตรียมสอบแบบเข้มข้น"
            />
          
          </div>
        </GlassCard>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <div className="-mx-1 overflow-x-auto pb-2">
          <div className="flex w-max min-w-full items-center gap-3 px-1">
            {courseCategories.map((category) => {
              const isActive = selectedCategory === category;
              const href = category === "ทั้งหมด" ? "/courses" : `/courses?category=${encodeURIComponent(category)}`;

              return (
                <Link
                  key={category}
                  href={href}
                  prefetch={false}
                  className={cn(
                    "whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300 sm:px-5",
                    isActive
                      ? "bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] text-white shadow-glow"
                      : "border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-slate-300 hover:text-ink-900"
                  )}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            แสดงผล
            {" "}
            <span className="font-semibold text-ink-900">{filteredCourses.length}</span>
            {" "}
            หลักสูตรในหมวด
            {" "}
            <span className="font-semibold text-ink-900">{selectedCategory}</span>
          </p>
          <PremiumButton href="/contact" variant="secondary" className="w-full sm:w-auto">
            ปรึกษาก่อนสมัคร
          </PremiumButton>
        </div>

        <div id="course-results" className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} compactOnMobile />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
