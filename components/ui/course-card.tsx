"use client";

import Link from "next/link";
import { useId, useState } from "react";

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

type CourseCardProps = {
  course: Course;
  compactOnMobile?: boolean;
};

export function CourseCard({ course, compactOnMobile = false }: CourseCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const mobilePanelId = useId();
  const posterTheme = posterThemeByCategory[course.category] ?? "course-poster";

  return (
    <ElevationCard hover className="group flex h-full min-w-0 flex-col overflow-hidden p-0">
      <div
        className={cn(
          "relative isolate overflow-hidden",
          compactOnMobile ? "min-h-[248px] p-3 sm:min-h-[392px] sm:p-6" : "min-h-[320px] p-4 sm:min-h-[392px] sm:p-6"
        )}
      >
        <div className={cn("absolute inset-0", posterTheme)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="absolute -right-12 top-12 h-40 w-40 rounded-full border border-white/10 bg-white/10 blur-2xl" />
        <div className="absolute -left-8 bottom-16 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

        {!isQuickViewOpen ? (
          <button
            type="button"
            aria-expanded={isQuickViewOpen}
            aria-controls={mobilePanelId}
            onClick={() => setIsQuickViewOpen(true)}
            className="absolute inset-0 z-[2] flex items-end justify-end p-3 text-left md:hidden"
          >
          </button>
        ) : null}

        <div
          className={cn(
            "relative z-[1] flex h-full flex-col text-white transition duration-500",
            compactOnMobile && "sm:gap-0",
            isQuickViewOpen && "opacity-0 translate-y-2 md:translate-y-0 md:opacity-100",
            "md:group-hover:translate-y-2 md:group-hover:opacity-0"
          )}
          aria-hidden={isQuickViewOpen}
        >
          <div className="flex items-start justify-between gap-3">
            <Badge className="border-white/18 bg-white/12 text-white">{course.category}</Badge>
            <div
              className={cn(
                "bg-white text-right shadow-[0_18px_40px_-20px_rgba(15,23,42,0.3)]",
                compactOnMobile ? "rounded-[18px] px-3 py-2.5 sm:rounded-[22px] sm:px-4 sm:py-3" : "rounded-[22px] px-4 py-3"
              )}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-[11px]">เริ่มต้น</p>
              <p className={cn("mt-1 font-semibold text-brand-700", compactOnMobile ? "text-base sm:text-lg" : "text-lg")}>
                {formatPrice(course.price)}
              </p>
            </div>
          </div>

          <div className={cn(compactOnMobile ? "mt-5 max-w-full sm:mt-10 sm:max-w-[88%]" : "mt-8 max-w-[88%] sm:mt-10")}>
            <p className={cn("uppercase tracking-[0.3em] text-white/65", compactOnMobile ? "text-[10px] sm:text-xs" : "text-xs")}>
              Featured Program
            </p>
            <h3
              className={cn(
                "thai-heading text-balance mt-3 font-semibold leading-[1.12] text-white",
                compactOnMobile
                  ? cn("min-h-[76px] text-[1.15rem] sm:mt-4 sm:min-h-[136px] sm:text-[2.15rem]", clampClass(3))
                  : cn("min-h-[112px] text-[1.55rem] sm:mt-4 sm:min-h-[136px] sm:text-[2.15rem]", clampClass(4))
              )}
            >
              {course.title}
            </h3>
          </div>

          <div className={cn("mt-auto grid grid-cols-3", compactOnMobile ? "gap-1.5 pt-5 sm:gap-3 sm:pt-8" : "gap-2 pt-6 sm:gap-3 sm:pt-8")}>
            <div
              className={cn(
                "border border-white/16 bg-white/12 backdrop-blur-md",
                compactOnMobile ? "rounded-[16px] px-2.5 py-2.5 sm:rounded-[22px] sm:px-4 sm:py-4" : "rounded-[18px] px-3 py-3 sm:rounded-[22px] sm:px-4 sm:py-4"
              )}
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">Duration</p>
              <p className={cn("font-semibold text-white", compactOnMobile ? "mt-2 text-[0.95rem] leading-5 sm:mt-3 sm:text-base" : "mt-2 text-sm sm:mt-3 sm:text-base")}>
                {course.duration}
              </p>
            </div>
            <div
              className={cn(
                "border border-white/16 bg-white/12 backdrop-blur-md",
                compactOnMobile ? "rounded-[16px] px-2.5 py-2.5 sm:rounded-[22px] sm:px-4 sm:py-4" : "rounded-[18px] px-3 py-3 sm:rounded-[22px] sm:px-4 sm:py-4"
              )}
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">Lessons</p>
              <p className={cn("font-semibold text-white", compactOnMobile ? "mt-2 text-[0.95rem] leading-5 sm:mt-3 sm:text-base" : "mt-3 text-base")}>
                {course.lessons} บท
              </p>
            </div>
            <div
              className={cn(
                "border border-white/16 bg-white/12 backdrop-blur-md",
                compactOnMobile ? "rounded-[16px] px-2.5 py-2.5 sm:rounded-[22px] sm:px-4 sm:py-4" : "rounded-[18px] px-3 py-3 sm:rounded-[22px] sm:px-4 sm:py-4"
              )}
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">Level</p>
              <p className={cn("font-semibold text-white", compactOnMobile ? "mt-2 text-[0.95rem] leading-5 sm:mt-3 sm:text-base" : "mt-2 text-sm sm:mt-3 sm:text-base")}>
                {course.level}
              </p>
            </div>
          </div>
        </div>

        <div
          id={mobilePanelId}
          className={cn(
            "absolute inset-0 z-[3] p-3 transition duration-500 md:hidden",
            isQuickViewOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <div className="course-hover-layer absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.24))]" />

          <div className="relative z-[1] flex h-full flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">Quick View</p>
                <h4 className={cn("thai-heading text-balance mt-3 text-[1.08rem] font-semibold leading-[1.12] text-white", clampClass(3))}>
                  {course.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsQuickViewOpen(false)}
                className="rounded-full border border-white/20 bg-slate-950/18 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md"
              >
                ปิด
              </button>
            </div>

            <div className="space-y-3">
              <p className={cn("text-pretty text-sm leading-6 text-white/88", clampClass(4))}>{course.shortDescription}</p>
              <div className="rounded-[18px] border border-white/14 bg-white/12 px-4 py-3.5 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Focus</p>
                <p className={cn("mt-2 text-sm font-medium leading-6 text-white", clampClass(3))}>{course.highlight}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-500 md:block md:group-hover:opacity-100">
          <div className="course-hover-layer absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.24))]" />
          <div className="relative z-[1] flex h-full flex-col justify-between p-4 sm:p-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Quick View</p>
              <h4
                className={cn(
                  "thai-heading text-balance mt-3 text-[1.3rem] font-semibold leading-[1.14] text-white sm:mt-4 sm:text-[1.45rem]",
                  clampClass(2)
                )}
              >
                {course.title}
              </h4>
            </div>

            <div className="space-y-4">
              <p className={cn("text-pretty text-sm leading-6 text-white/88 sm:leading-7", clampClass(3))}>{course.shortDescription}</p>
              <div className="rounded-[18px] border border-white/14 bg-white/12 px-4 py-3.5 backdrop-blur-md sm:rounded-[22px] sm:py-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">Focus</p>
                <p className={cn("mt-2 text-sm font-medium leading-6 text-white", clampClass(2))}>{course.highlight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col", compactOnMobile ? "p-3 sm:p-6" : "p-4 sm:p-6")}>
        <div className="flex items-center gap-2 text-slate-500">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
          <p className={compactOnMobile ? "text-[13px] sm:text-sm" : "text-sm"}>{course.level}</p>
        </div>

        <p className={cn("text-pretty mt-3 text-slate-500", compactOnMobile ? cn("text-[13px] leading-6 sm:text-sm sm:leading-7", clampClass(2)) : cn("text-sm leading-7", clampClass(3)))}>
          {course.shortDescription}
        </p>

        <div className={cn("mt-4 flex flex-wrap gap-2", compactOnMobile && "hidden sm:flex")}>
          {course.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className={cn("mt-5 flex flex-col gap-3", compactOnMobile ? "sm:mt-8 sm:flex-row sm:items-end sm:justify-between" : "sm:mt-8 sm:flex-row sm:items-end sm:justify-between")}>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-[11px]">Start at</p>
            <p className={cn("mt-2 font-semibold text-brand-700", compactOnMobile ? "text-[1.45rem] sm:text-2xl" : "text-2xl")}>
              {formatPrice(course.price)}
            </p>
          </div>

          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:items-end">
            <Link
              href={`/courses/${course.slug}`}
              prefetch={false}
              className={cn(
                "font-semibold text-ink-900 transition duration-300 group-hover:text-brand-700 sm:text-right",
                compactOnMobile ? "text-[13px] sm:text-sm" : "text-sm"
              )}
            >
              ดูรายละเอียด
            </Link>
            <PremiumButton
              href={`/checkout?course=${course.slug}`}
              size="sm"
              prefetch={false}
              className={cn("w-full sm:w-auto", compactOnMobile && "h-9 px-3.5 text-[13px]")}
            >
              สมัครเรียน
            </PremiumButton>
          </div>
        </div>
      </div>
    </ElevationCard>
  );
}
