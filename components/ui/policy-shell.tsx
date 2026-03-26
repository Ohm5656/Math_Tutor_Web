import { ReactNode } from "react";

import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";

interface PolicyShellProps {
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
}

export function PolicyShell({ title, description, updatedAt, children }: PolicyShellProps) {
  return (
    <SectionContainer className="page-hero pattern-dots">
      <div className="mx-auto max-w-5xl">
        <span className="eyebrow">เอกสารทางกฎหมาย</span>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <h1 className="thai-heading text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-500">{description}</p>
          </div>

          <GlassCard className="spotlight-panel p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Policy Status
            </p>
            <p className="mt-3 text-2xl font-semibold text-ink-900">ข้อมูลสำคัญสำหรับผู้เรียน</p>
            <p className="mt-3 text-sm leading-7 text-slate-500">อัปเดตล่าสุด: {updatedAt}</p>
            <PremiumButton href="/contact" variant="secondary" className="mt-5">
              สอบถามทีมงาน
            </PremiumButton>
          </GlassCard>
        </div>

        <article className="glass-card reveal-on-scroll reveal-up mt-10 max-w-none space-y-8 p-8 sm:p-10 lg:p-12 [&_h2]:thai-heading [&_h2]:text-[1.65rem] [&_h2]:font-semibold [&_h2]:text-ink-900 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink-900 [&_ol]:space-y-3 [&_ul]:space-y-3 [&_li]:text-base [&_li]:leading-8 [&_li]:text-slate-500 [&_p]:text-base [&_p]:leading-8 [&_p]:text-slate-500">
          {children}
        </article>
      </div>
    </SectionContainer>
  );
}
