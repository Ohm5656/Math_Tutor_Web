import Link from "next/link";

import { PremiumButton } from "@/components/ui/premium-button";
import { CourseCard } from "@/components/ui/course-card";
import { ElevationCard } from "@/components/ui/elevation-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { courses } from "@/data/courses";
import { siteFaqs, testimonials, trustPoints, tutors } from "@/data/site";
import { cn } from "@/lib/utils";

const featureCards = [
  {
    label: "01",
    title: "เข้าใจเป็นลำดับ",
    description: "เริ่มจากพื้นฐานที่จำเป็น แล้วค่อยต่อยอดสู่โจทย์ที่ยากขึ้นอย่างมั่นใจ"
  },
  {
    label: "02",
    title: "เพิ่มเกรดได้จริง",
    description: "วางแผนบทเรียนให้สอดคล้องกับเป้าหมาย ทั้งการเรียนในโรงเรียนและการสอบสำคัญ"
  },
  {
    label: "03",
    title: "พร้อมสอบเข้า",
    description: "ฝึกโจทย์แบบมีทิศทาง รู้จุดเน้น และบริหารเวลาในห้องสอบได้ดีขึ้น"
  },
  {
    label: "04",
    title: "เรียนได้ทุกวัน",
    description: "ทบทวนได้ตามเวลาที่สะดวก จังหวะการเรียนยืดหยุ่น แต่ยังคงมาตรฐานที่ชัดเจน"
  }
];

export default function HomePage() {
  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <div>
      <SectionContainer className="page-hero pattern-dots overflow-hidden pt-8 sm:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.94fr,1.06fr] lg:gap-10">
          <div className="relative">
            <span className="eyebrow fade-up">Online Math Academy</span>
            <p className="fade-up fade-up-delay-1 mt-6 text-3xl font-semibold leading-none text-brand-600 sm:mt-7 sm:text-5xl">
              Prime Math
            </p>
            <h1 className="thai-heading fade-up fade-up-delay-2 mt-4 max-w-4xl text-[2.2rem] font-semibold leading-[1.06] text-slate-950 sm:text-[4.2rem]">
              เรียนคณิตให้เข้าใจจริง
              <br />
              เก็บเกรดได้
              <br />
              และพร้อมสอบมากขึ้น
            </h1>
            <p className="fade-up fade-up-delay-3 mt-5 max-w-2xl text-[15px] leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
              คอร์สออนไลน์ที่ออกแบบให้เรียนง่าย เป็นลำดับ และใช้ได้จริงทั้งในห้องเรียน การสอบเข้า และการทบทวนก่อนสอบ
            </p>

            <div className="fade-up fade-up-delay-4 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <PremiumButton href="/courses" size="lg" className="w-full sm:w-auto">
                ดูคอร์สเรียน
              </PremiumButton>
              <PremiumButton href="/checkout" variant="secondary" size="lg" className="w-full sm:w-auto">
                สมัครเรียน
              </PremiumButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-sm font-semibold text-slate-600 transition duration-300 hover:text-brand-700 sm:px-2"
              >
                พูดคุยกับทีมแอดมิน
              </Link>
            </div>

            <div className="fade-up fade-up-delay-4 mt-8 flex flex-wrap gap-3">
              {["เพิ่มเกรด", "สอบเข้า", "เรียนแบบเป็นระบบ"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/80 bg-white/85 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur sm:px-4 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[ 
                ["12+ ปี", "ดูแลการเรียนคณิตแบบเป็นระบบ ทั้งเพิ่มเกรดและเตรียมสอบ"],
                ["Clear Path", "คอร์สสั้น กระชับ และเรียงลำดับให้ตัดสินใจเลือกได้ง่าย"]
              ].map(([title, description], index) => (
                <GlassCard
                  key={title}
                  stagger={index === 0 ? 1 : 2}
                  className={cn("hover-lift p-5", index === 1 && "fade-up-delay-1")}
                >
                  <p className="text-lg font-semibold text-ink-900">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="relative fade-up fade-up-delay-2">
            <div className="soft-motion absolute -left-8 top-10 h-28 w-28 rounded-full bg-brand-200/50 blur-3xl" />
            <div className="soft-motion absolute -right-2 bottom-10 h-32 w-32 rounded-full bg-sky-200/45 blur-3xl" />

            <div className="hero-soft-panel relative overflow-hidden rounded-[28px] border border-white/80 p-3 shadow-[0_40px_100px_-42px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:rounded-[36px] sm:p-5">
              <div className="hero-device relative overflow-hidden rounded-[24px] px-4 pb-5 pt-6 text-white shadow-[0_32px_70px_-36px_rgba(37,99,235,0.6)] sm:rounded-[32px] sm:px-8 sm:pb-8 sm:pt-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_22%)]" />
                <div className="relative z-[1] flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                      Prime Math Class
                    </p>
                    <h2 className="thai-heading mt-3 text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-4xl">
                      ที่ไหน เมื่อไร
                      <br />
                      ก็เรียนคณิตได้
                    </h2>
                  </div>
                  <div className="hero-chip hidden sm:block">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Mode</p>
                    <p className="mt-2 text-sm font-semibold text-white">Online</p>
                  </div>
                </div>

                <div className="relative z-[1] mt-10 sm:mt-12">
                  <div className="max-w-[430px]">
                    <p className="text-sm font-medium text-white/72">Structured online learning for grades, exams, and confidence.</p>
                  </div>

                  <div className="mt-6 rounded-[28px] border border-white/16 bg-white/12 p-3 backdrop-blur-md sm:mt-8 sm:p-4">
                    <div className="rounded-[24px] bg-white/95 p-5 text-slate-900 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.34)] sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Student Journey
                          </p>
                          <p className="mt-3 text-lg font-semibold leading-snug text-slate-900 sm:text-[1.35rem]">
                            เรียนเป็นลำดับ เห็นผลชัด
                            <br />
                            และกลับมาทบทวนได้ทุกเมื่อ
                          </p>
                        </div>
                        <div className="rounded-[20px] bg-slate-100 px-4 py-3 text-right">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Access</p>
                          <p className="mt-2 text-lg font-semibold text-brand-700">24 ชม.</p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[
                          ["ปรับพื้นฐาน", "Clear Basics"],
                          ["ฝึกโจทย์", "Smart Practice"],
                          ["ก่อนสอบ", "Exam Ready"]
                        ].map(([title, text]) => (
                          <div key={title} className="hero-metric-card">
                            <p className="text-sm font-semibold text-ink-900">{title}</p>
                            <p className="mt-2 text-sm text-slate-500">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

        
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <SectionHeader
          eyebrow="Why Prime Math"
          title="การเรียนคณิตที่ชัดเจน ดูสบายตา และเข้าใจได้จริง"
          description="ข้อมูลสั้น อ่านง่าย และเน้นสิ่งสำคัญที่ช่วยให้ตัดสินใจได้เร็วขึ้น"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, index) => (
            <ElevationCard key={feature.title} hover stagger={(index + 1) as 1 | 2 | 3 | 4} className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dbeafe,#eff6ff)] text-sm font-semibold text-brand-700">
                {feature.label}
              </div>
              <h3 className="thai-heading mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">{feature.description}</p>
            </ElevationCard>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Course Collection"
            title="คอร์สคณิตศาสตร์ที่เลือกได้ตามเป้าหมาย"
            description="ทั้งเพิ่มเกรด สอบเข้า และตะลุยโจทย์ในแต่ละช่วงชั้น"
          />
          <PremiumButton href="/courses" variant="secondary">
            ดูคอร์สทั้งหมด
          </PremiumButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <div className="grid gap-8 lg:grid-cols-[0.94fr,1.06fr]">
          <div>
            <span className="eyebrow">Why Families Choose Us</span>
            <h2 className="thai-heading mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              เหตุผลที่ผู้ปกครองและนักเรียนไว้ใจ Prime Math Academy
            </h2>
            <p className="mt-5 text-lg text-slate-500">
              เพราะการเรียนที่ดีควรชัดเจน เป็นระบบ และเห็นพัฒนาการได้จริง
            </p>

            <GlassCard className="mt-6 p-6" stagger={1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Featured Tutors
              </p>
              <div className="mt-5 space-y-4">
                {tutors.map((tutor) => (
                  <div key={tutor.id} className="flex items-start gap-4 rounded-[24px] bg-slate-50/90 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dbeafe,#eff6ff)] text-sm font-semibold text-brand-700">
                      {tutor.name.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{tutor.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{tutor.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trustPoints.map((point, index) => (
              <GlassCard key={point.title} className="p-6" stagger={(index + 1) as 1 | 2 | 3 | 4}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  0{index + 1}
                </p>
                <h3 className="thai-heading mt-4 text-xl font-semibold text-ink-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{point.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="reviews">
        <SectionHeader
          eyebrow="Voices of Confidence"
          title="รีวิวจากผู้เรียนและผู้ปกครอง"
          description="คะแนนดีขึ้น เข้าใจมากขึ้น และมั่นใจมากขึ้น"
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              stagger={((index % 4) + 1) as 1 | 2 | 3 | 4}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <div className="grid gap-10 lg:grid-cols-[0.88fr,1.12fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="คำถามสำคัญก่อนเริ่มเรียน"
            description="ตอบสั้น กระชับ และตรงกับสิ่งที่ผู้เรียนอยากรู้"
          />
          <FaqAccordion items={siteFaqs} />
        </div>
      </SectionContainer>

      <SectionContainer>
        <GlassCard className="overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.02fr,0.98fr]">
            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <span className="eyebrow">Ready to Begin</span>
              <h2 className="thai-heading mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                เริ่มต้นเส้นทางการเรียนคณิตที่เหมาะกับเป้าหมายของคุณ
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-500">
                ไม่ว่าจะต้องการเพิ่มเกรด เตรียมสอบเข้า หรือปูพื้นฐานใหม่ เรามีคอร์สที่ออกแบบมาให้เรียนต่อได้จริง
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PremiumButton href="/checkout" size="lg">
                  สมัครเรียนทันที
                </PremiumButton>
                <PremiumButton href="/contact" variant="secondary" size="lg">
                  คุยกับทีมงาน
                </PremiumButton>
              </div>
            </div>
            <div className="hero-device px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                Learning Highlights
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "บทเรียนเป็นลำดับ เหมาะกับทั้งผู้เรียนที่ต้องการปูพื้นฐานและผู้ที่เตรียมสอบ",
                  "เรียนออนไลน์ได้ทุกวัน พร้อมเอกสารและแบบฝึกหัดสำหรับทบทวนต่อเนื่อง",
                  "มีทีมงานช่วยแนะนำคอร์สให้เหมาะกับระดับชั้นและเป้าหมายของผู้เรียน"
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/15 bg-white/10 px-5 py-4 backdrop-blur">
                    <p className="text-sm leading-7 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </SectionContainer>
    </div>
  );
}
