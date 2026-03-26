import type { Metadata } from "next";

import { ElevationCard } from "@/components/ui/elevation-card";
import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: "ติดต่อ Prime Math Academy เพื่อสอบถามคอร์สเรียน วางแผนการเรียน หรือขอคำแนะนำก่อนสมัคร"
};

const fieldClassName =
  "h-12 w-full rounded-2xl border border-slate-200/80 bg-white/95 px-4 text-sm text-ink-900 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.12)] outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

export default function ContactPage() {
  return (
    <div>
      <SectionContainer className="page-hero pattern-dots pt-8 sm:pt-10">
        <GlassCard className="spotlight-panel p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.85fr]">
            <SectionHeader
              eyebrow="Contact Prime Math Academy"
              title="พูดคุยกับทีมงานเพื่อเลือกคอร์สที่เหมาะกับเป้าหมายของผู้เรียน"
              description="หากต้องการคำแนะนำด้านระดับคอร์ส การเตรียมสอบ หรือการวางเส้นทางการเรียนอย่างจริงจัง ทีมงานพร้อมช่วยประเมินเบื้องต้นให้"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["ตอบไว", "พร้อมช่วยแนะนำคอร์สที่เหมาะกับพื้นฐานจริงของผู้เรียน"],
                ["ติดต่อสะดวก", "ข้อมูลติดต่อครบถ้วนสำหรับผู้เรียนและผู้ปกครอง"]
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
        <div className="grid gap-8 lg:grid-cols-[1.02fr,0.98fr]">
          <form className="space-y-6">
            <GlassCard className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">ส่งข้อความถึงทีมงาน</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-2.5 block text-sm font-medium text-slate-600">ชื่อผู้ติดต่อ</span>
                  <input className={fieldClassName} placeholder="ชื่อ - นามสกุล" />
                </label>
                <label>
                  <span className="mb-2.5 block text-sm font-medium text-slate-600">อีเมล</span>
                  <input type="email" className={fieldClassName} placeholder="name@example.com" />
                </label>
                <label>
                  <span className="mb-2.5 block text-sm font-medium text-slate-600">เบอร์โทรศัพท์</span>
                  <input className={fieldClassName} placeholder="08x-xxx-xxxx" />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2.5 block text-sm font-medium text-slate-600">หัวข้อที่ต้องการสอบถาม</span>
                  <input
                    className={fieldClassName}
                    placeholder="เช่น ต้องการคำแนะนำคอร์ส ม.ต้น หรือคอร์สเตรียมสอบ"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2.5 block text-sm font-medium text-slate-600">รายละเอียดเพิ่มเติม</span>
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 text-sm text-ink-900 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.12)] outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                    placeholder="แจ้งเป้าหมายของผู้เรียน ระดับชั้น หรือเรื่องที่อยากเน้นเป็นพิเศษ"
                  />
                </label>
              </div>
              <div className="mt-6">
                <PremiumButton size="lg">ส่งข้อความ</PremiumButton>
              </div>
            </GlassCard>
          </form>

          <div className="space-y-6">
            <ElevationCard className="p-6 sm:p-7">
              <h2 className="text-2xl font-semibold">ข้อมูลการติดต่อ</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-500">
                <p>
                  <span className="font-semibold text-ink-900">โทรศัพท์:</span> {contactInfo.phone}
                </p>
                <p>
                  <span className="font-semibold text-ink-900">Line Official:</span> {contactInfo.line}
                </p>
                <p>
                  <span className="font-semibold text-ink-900">อีเมล:</span> {contactInfo.email}
                </p>
                <p>
                  <span className="font-semibold text-ink-900">ที่อยู่:</span> {contactInfo.address}
                </p>
              </div>
              <div className="mt-6 rounded-[24px] bg-slate-50/90 p-5">
                <h3 className="text-lg font-semibold">เวลาทำการ</h3>
                <div className="mt-3 space-y-2 text-sm leading-7 text-slate-500">
                  {contactInfo.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </div>
            </ElevationCard>

            <GlassCard className="overflow-hidden p-0">
              <div className="border-b border-slate-100 px-6 py-5">
                <h2 className="text-2xl font-semibold">ตำแหน่งที่ตั้ง</h2>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  พื้นที่นี้สามารถแทนที่ด้วย Google Maps Embed หรือ iframe จากบริการแผนที่จริงได้ทันที
                </p>
              </div>
              <div className="flex min-h-[280px] items-center justify-center bg-[linear-gradient(145deg,#0f172a_0%,#1d4ed8_56%,#0f766e_100%)] px-6 py-10 text-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    Map Placeholder
                  </p>
                  <p className="mt-4 text-lg leading-8 text-white">{contactInfo.address}</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
