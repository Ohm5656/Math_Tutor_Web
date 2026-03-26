import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { ElevationCard } from "@/components/ui/elevation-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { cn, formatPrice } from "@/lib/utils";
import { Course } from "@/types";

const posterThemeByCategory: Record<Course["category"], string> = {
  ประถม: "course-poster-primary",
  มัธยมต้น: "course-poster",
  มัธยมปลาย: "course-poster-advanced",
  เตรียมสอบเข้า: "course-poster-secondary",
  ตะลุยโจทย์: "course-poster"
};

function clampClass(lines: number) {
  return `[display:-webkit-box] [-webkit-line-clamp:${lines}] [-webkit-box-orient:vertical] overflow-hidden`;
}

export function CourseCard({ course }: { course: Course }) {
  const posterTheme = posterThemeByCategory[course.category] ?? "course-poster";

  return (
    <ElevationCard hover className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative isolate min-h-[368px] overflow-hidden p-5 sm:min-h-[392px] sm:p-6">
        <div className={cn("absolute inset-0", posterTheme)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="absolute -right-12 top-12 h-40 w-40 rounded-full border border-white/10 bg-white/10 blur-2xl" />
        <div className="absolute -left-8 bottom-16 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

        <div className="relative z-[1] flex h-full flex-col text-white transition duration-500 md:group-hover:translate-y-2 md:group-hover:opacity-0">
          <div className="flex items-start justify-between gap-4">
            <Badge className="border-white/18 bg-white/12 text-white">{course.category}</Badge>
            <div className="rounded-[22px] bg-white px-4 py-3 text-right shadow-[0_18px_40px_-20px_rgba(15,23,42,0.3)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">เริ่มต้น</p>
              <p className="mt-1 text-lg font-semibold text-brand-700">{formatPrice(course.price)}</p>
            </div>
          </div>

          <div className="mt-10 max-w-[88%]">
            <p className="text-xs uppercase tracking-[0.3em] text-white/65">Featured Program</p>
            <h3
              className={cn(
                "thai-heading mt-4 min-h-[136px] text-[1.9rem] font-semibold leading-[1.08] text-white sm:text-[2.15rem]",
                clampClass(4)
              )}
            >
              {course.title}
            </h3>
          </div>

          <div className="mt-auto grid grid-cols-3 gap-3 pt-8">
            <div className="rounded-[22px] border border-white/16 bg-white/12 px-4 py-4 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">Duration</p>
              <p className="mt-3 text-base font-semibold text-white">{course.duration}</p>
            </div>
            <div className="rounded-[22px] border border-white/16 bg-white/12 px-4 py-4 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">Lessons</p>
              <p className="mt-3 text-base font-semibold text-white">{course.lessons} บท</p>
            </div>
            <div className="rounded-[22px] border border-white/16 bg-white/12 px-4 py-4 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">Level</p>
              <p className="mt-3 text-base font-semibold text-white">{course.level}</p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-500 md:block md:group-hover:opacity-100">
          <div className="course-hover-layer absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.24))]" />
          <div className="relative z-[1] flex h-full flex-col justify-between p-5 sm:p-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Quick View</p>
              <h4 className={cn("thai-heading mt-4 text-[1.45rem] font-semibold leading-[1.12] text-white", clampClass(2))}>
                {course.title}
              </h4>
            </div>

            <div className="space-y-4">
              <p className={cn("text-sm leading-7 text-white/88", clampClass(3))}>{course.shortDescription}</p>
              <div className="rounded-[22px] border border-white/14 bg-white/12 px-4 py-4 backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">Focus</p>
                <p className={cn("mt-2 text-sm font-medium leading-6 text-white", clampClass(2))}>{course.highlight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 text-slate-500">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
          <p className="text-sm">{course.level}</p>
        </div>

        <p className={cn("mt-4 text-sm leading-7 text-slate-500", clampClass(3))}>{course.shortDescription}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {course.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Start at</p>
            <p className="mt-2 text-2xl font-semibold text-brand-700">{formatPrice(course.price)}</p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <Link
              href={`/courses/${course.slug}`}
              prefetch
              className="text-sm font-semibold text-ink-900 transition duration-300 group-hover:text-brand-700"
            >
              ดูรายละเอียด
            </Link>
            <PremiumButton href={`/checkout?course=${course.slug}`} size="sm">
              สมัครเรียน
            </PremiumButton>
          </div>
        </div>
      </div>
    </ElevationCard>
  );
}
