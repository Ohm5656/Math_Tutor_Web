"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { formatPrice } from "@/lib/utils";
import { createPaymentSession } from "@/services/payment";
import { Course } from "@/types";

const fieldClassName =
  "h-12 w-full rounded-2xl border border-slate-200/80 bg-white/95 px-4 text-sm text-ink-900 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.12)] outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

export function CheckoutForm({ course }: { course: Course }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [notes, setNotes] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!acceptedPolicy) {
      setErrorMessage("กรุณายอมรับเงื่อนไขและนโยบายก่อนดำเนินการชำระเงิน");
      return;
    }

    try {
      const session = await createPaymentSession({
        courseId: course.id,
        courseSlug: course.slug,
        studentName,
        studentEmail,
        studentPhone,
        gradeLevel,
        notes
      });

      startTransition(() => {
        router.push(session.paymentUrl);
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "ไม่สามารถเริ่มกระบวนการชำระเงินได้ในขณะนี้"
      );
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
      <form onSubmit={handleSubmit} className="fade-up space-y-6">
        <GlassCard className="overflow-hidden p-0">
          <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Student Form</Badge>
              <Badge>ข้อมูลผู้เรียน</Badge>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">ข้อมูลผู้เรียนและผู้ติดต่อ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              กรุณากรอกข้อมูลให้ครบถ้วน เพื่อใช้ยืนยันการสมัครเรียนและติดต่อประสานงาน
            </p>
          </div>

          <div className="grid gap-5 px-6 py-6 sm:grid-cols-2 sm:px-8 sm:py-8">
            <label className="sm:col-span-2">
              <span className="mb-2.5 block text-sm font-medium text-slate-600">
                ชื่อ - นามสกุลผู้เรียน
              </span>
              <input
                required
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
                className={fieldClassName}
                placeholder="เช่น เด็กชายธนกฤต วัฒนศิริ"
              />
            </label>

            <label>
              <span className="mb-2.5 block text-sm font-medium text-slate-600">อีเมลผู้ติดต่อ</span>
              <input
                required
                type="email"
                value={studentEmail}
                onChange={(event) => setStudentEmail(event.target.value)}
                className={fieldClassName}
                placeholder="name@example.com"
              />
            </label>

            <label>
              <span className="mb-2.5 block text-sm font-medium text-slate-600">เบอร์โทรศัพท์</span>
              <input
                required
                value={studentPhone}
                onChange={(event) => setStudentPhone(event.target.value)}
                className={fieldClassName}
                placeholder="08x-xxx-xxxx"
              />
            </label>

            <label>
              <span className="mb-2.5 block text-sm font-medium text-slate-600">ระดับชั้นปัจจุบัน</span>
              <input
                required
                value={gradeLevel}
                onChange={(event) => setGradeLevel(event.target.value)}
                className={fieldClassName}
                placeholder="เช่น ม.3"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-2.5 block text-sm font-medium text-slate-600">
                เป้าหมายหรือหมายเหตุเพิ่มเติม
              </span>
              <textarea
                rows={5}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="w-full rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 text-sm text-ink-900 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.12)] outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                placeholder="เช่น เพิ่มเกรดคณิต เตรียมสอบเข้า หรืออยากปูพื้นฐานบางบทเป็นพิเศษ"
              />
            </label>
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-7">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={acceptedPolicy}
              onChange={(event) => setAcceptedPolicy(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-700 focus:ring-brand-400"
            />
            <span className="text-sm leading-7 text-slate-500">
              ข้าพเจ้ายอมรับ
              {" "}
              <Link href="/terms" className="font-semibold text-ink-900 hover:text-brand-700">
                เงื่อนไขการใช้งาน
              </Link>
              {" "}
              และ
              {" "}
              <Link
                href="/policies/privacy"
                className="font-semibold text-ink-900 hover:text-brand-700"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              {" "}
              ของสถาบัน
            </span>
          </label>

          {errorMessage ? (
            <div className="mt-5 rounded-[22px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {errorMessage}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <PremiumButton type="submit" size="lg" disabled={isPending}>
              {isPending ? "กำลังดำเนินการ..." : "ดำเนินการชำระเงิน"}
            </PremiumButton>
            <PremiumButton href={`/courses/${course.slug}`} size="lg" variant="secondary">
              กลับไปดูรายละเอียดคอร์ส
            </PremiumButton>
          </div>
        </GlassCard>
      </form>

      <aside className="fade-up fade-up-delay-2 space-y-6">
        <GlassCard className="sticky top-28 p-6 sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            Order Summary
          </p>
          <div className="mt-5 rounded-[28px] bg-[linear-gradient(145deg,#0f172a_0%,#1d4ed8_100%)] px-6 py-6 text-white">
            <p className="text-sm text-white/70">คอร์สที่เลือก</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight">{course.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200">{course.shortDescription}</p>
          </div>

          <div className="mt-6 space-y-3 rounded-[24px] bg-slate-50/90 p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">ระดับ</span>
              <span className="font-semibold text-ink-900">{course.level}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">ระยะเวลา</span>
              <span className="font-semibold text-ink-900">{course.duration}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">จำนวนบทเรียน</span>
              <span className="font-semibold text-ink-900">{course.lessons} บท</span>
            </div>
          </div>

          <div className="mt-6 rounded-[28px] border border-slate-200/70 bg-white px-5 py-5 shadow-sm">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">ยอดชำระสำหรับคอร์สนี้</p>
                <p className="mt-2 text-4xl font-semibold text-ink-900">{formatPrice(course.price)}</p>
              </div>
              <Badge>ชำระครั้งเดียว</Badge>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {[
              "บทเรียนออนไลน์พร้อมดูย้อนหลัง",
              "เอกสารประกอบและแบบฝึกหัดครบถ้วน",
              "เหมาะสำหรับการเรียนต่อเนื่องและทบทวนก่อนสอบ"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </aside>
    </div>
  );
}
