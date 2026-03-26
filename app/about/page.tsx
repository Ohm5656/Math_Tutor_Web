import type { Metadata } from "next";

import { ElevationCard } from "@/components/ui/elevation-card";
import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { tutors, trustPoints } from "@/data/site";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "ข้อมูลสถาบัน Prime Math Academy วิสัยทัศน์ ทีมผู้สอน และเหตุผลที่ครอบครัวไว้วางใจ"
};

export default function AboutPage() {
  return (
    <div>
      <SectionContainer className="page-hero pattern-dots pt-8 sm:pt-10">
        <GlassCard className="spotlight-panel p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
            <SectionHeader
              eyebrow="About Prime Math Academy"
              title="สถาบันคณิตศาสตร์ที่ให้ความสำคัญกับความเข้าใจจริงและผลลัพธ์ของผู้เรียน"
              description="เราเชื่อว่าการเรียนคณิตศาสตร์ที่ดีต้องทั้งเข้าใจง่าย วางระบบชัดเจน และทำให้ผู้เรียนรู้สึกมั่นใจพอที่จะพัฒนาต่อได้จริง"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["พันธกิจ", "ทำให้คณิตศาสตร์เป็นวิชาที่ผู้เรียนเข้าใจและกล้าเผชิญโจทย์จริง"],
                ["วิสัยทัศน์", "เป็นแบรนด์กวดวิชาคณิตศาสตร์ออนไลน์ที่ครอบครัวไทยไว้วางใจในระยะยาว"]
              ].map((item) => (
                <div key={item[0]} className="rounded-[24px] bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-lg font-semibold text-ink-900">{item[0]}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <ElevationCard className="p-7 sm:p-8">
            <h2 className="text-2xl font-semibold">ภาพรวมสถาบัน</h2>
            <p className="mt-4 text-base leading-8 text-slate-500">
              Prime Math Academy ก่อตั้งขึ้นเพื่อช่วยให้นักเรียนไทยเรียนคณิตศาสตร์อย่างเข้าใจจริง ไม่ใช่เพียงจำสูตร
              เราออกแบบหลักสูตรออนไลน์ให้มีจังหวะที่เหมาะกับแต่ละช่วงวัย และสร้างประสบการณ์ที่ทั้งผู้เรียนและผู้ปกครองรู้สึกไว้วางใจได้
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["หลักสูตรเป็นระบบ", "รู้ว่าควรเริ่มจากจุดไหนและต่อยอดอย่างไร"],
                ["การสื่อสารชัดเจน", "ข้อมูลคอร์ส การสมัครเรียน และการติดต่ออ่านง่ายและเข้าใจตรงกัน"]
              ].map(([title, description]) => (
                <div key={title} className="rounded-[24px] bg-slate-50/90 p-5">
                  <p className="text-lg font-semibold text-ink-900">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </ElevationCard>

          <GlassCard className="p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Why Trust Matters
            </p>
            <div className="mt-5 space-y-4">
              {trustPoints.map((point) => (
                <div key={point.title} className="rounded-[24px] bg-white/80 px-5 py-5 shadow-sm">
                  <p className="text-lg font-semibold text-ink-900">{point.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{point.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Teaching Team"
            title="ทีมผู้สอนที่มีทั้งประสบการณ์ เนื้อหาแน่น และการอธิบายที่ผู้เรียนตามทัน"
            description="ผู้สอนแต่ละท่านมีจุดเด่นชัดเจนในด้านการออกแบบเนื้อหา เทคนิคการทำโจทย์ และการช่วยให้นักเรียนเห็นภาพรวมของวิชาได้ดีขึ้น"
          />
          <PremiumButton href="/courses" variant="secondary">
            ดูคอร์สเรียน
          </PremiumButton>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {tutors.map((tutor) => (
            <ElevationCard key={tutor.id} hover className="p-7">
              <p className="text-sm font-semibold text-brand-700">{tutor.title}</p>
              <h3 className="mt-3 text-2xl font-semibold">{tutor.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">{tutor.bio}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-ink-900">คุณวุฒิและประสบการณ์</h4>
                  <div className="mt-3 space-y-2">
                    {tutor.credentials.map((credential) => (
                      <p key={credential} className="text-sm leading-7 text-slate-600">
                        • {credential}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink-900">ความเชี่ยวชาญ</h4>
                  <div className="mt-3 space-y-2">
                    {tutor.expertise.map((expertise) => (
                      <p key={expertise} className="text-sm leading-7 text-slate-600">
                        • {expertise}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ElevationCard>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
