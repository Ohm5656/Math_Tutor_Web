import Link from "next/link";

import { PremiumButton } from "@/components/ui/premium-button";
import { CourseCard } from "@/components/ui/course-card";
import { ElevationCard } from "@/components/ui/elevation-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { GlassCard } from "@/components/ui/glass-card";
import { HeroEnergyScene } from "@/components/ui/hero-energy-scene";
import { NeonOrbField } from "@/components/ui/neon-orb-field";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { courses } from "@/data/courses";
import { siteFaqs, testimonials } from "@/data/site";
import { formatPrice } from "@/lib/utils";

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

const heroJourneyHighlights = [
  ["ปรับพื้นฐาน", "Clear Basics"],
  ["ฝึกโจทย์", "Smart Practice"],
  ["ก่อนสอบ", "Exam Ready"]
] as const;

const heroFloatingOrbs = [
  "hero-floating-orb-a",
  "hero-floating-orb-b",
  "hero-floating-orb-c",
  "hero-floating-orb-d",
  "hero-floating-orb-e",
  "hero-floating-orb-f"
] as const;

export default function HomePage() {
  const featuredCourses = courses.filter((course) => course.featured);
  const heroCourseShowcase = featuredCourses.slice(0, 6);
  const heroSignals = [
    {
      label: "Featured",
      value: `6 คอร์ส`,
      description: "คอร์สเด่นที่คัดมาแล้วว่าตอบโจทย์ผู้เรียนได้จริงในแต่ละช่วงชั้น"
    },
    {
      label: "Levels",
      value: "ประถม-มัธยมปลาย",
      description: "ครอบคลุมตั้งแต่ปูพื้นฐานถึงเตรียมสอบ"
    },
    {
      label: "Access",
      value: "Replay",
      description: "เรียนและกลับมาทบทวนตามจังหวะตัวเอง"
    }
  ];

  return (
    <div>
      <SectionContainer className="page-hero pattern-dots overflow-hidden pt-8 sm:pt-10">
        <div className="hero-floating-field" aria-hidden="true">
          {heroFloatingOrbs.map((orbClass) => (
            <span key={orbClass} className={`hero-floating-orb ${orbClass}`} />
          ))}
        </div>

        <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-[0.94fr,1.06fr] lg:gap-10">
          <div className="relative">
            <span className="eyebrow fade-up">Prime Math Academy</span>
            <p className="fade-up fade-up-delay-1 mt-5 max-w-none text-[2rem] font-semibold leading-none text-brand-600 sm:mt-7 sm:max-w-none sm:text-5xl">
              Prime Math Academy
            </p>
            <h1 className="thai-heading fade-up fade-up-delay-2 mt-4 max-w-none text-[1.95rem] font-semibold leading-[1.02] text-slate-950 sm:max-w-[10.4ch] sm:text-[4rem] sm:leading-[1.04] lg:text-[4.35rem]">
              <span className="block sm:inline">เรียนคณิตให้เข้าใจจริง</span>
              <span className="block sm:inline sm:ml-[0.18em]">เก็บเกรดได้</span>
              <span className="block sm:inline sm:ml-[0.18em]">พร้อมสอบมากขึ้น</span>
            </h1>
            <p className="text-pretty fade-up fade-up-delay-3 mt-5 max-w-none pr-2 text-base leading-8 text-slate-500 sm:mt-6 sm:max-w-[34rem] sm:pr-0 sm:text-lg sm:leading-8">
              คอร์สออนไลน์ที่ออกแบบให้เรียนง่าย เป็นลำดับ และใช้ได้จริงทั้งในห้องเรียน การสอบเข้า และการทบทวนก่อนสอบ
            </p>

            <div className="fade-up fade-up-delay-4 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <PremiumButton href="/courses" size="lg" className="w-full sm:w-auto">
                ดูคอร์สเรียน
              </PremiumButton>
              <PremiumButton href="/about" variant="secondary" size="lg" className="w-full sm:w-auto">
                เกี่ยวกับเรา
              </PremiumButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-start text-sm font-semibold text-slate-600 transition duration-300 hover:text-brand-700 sm:justify-center sm:px-2"
              >
                พูดคุยกับทีมแอดมิน
              </Link>
            </div>

          </div>

          <HeroEnergyScene className="fade-up fade-up-delay-2">
            <div className="hero-soft-panel relative overflow-hidden rounded-[28px] border border-white/80 p-2.5 shadow-[0_40px_100px_-42px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:rounded-[36px] sm:p-4">
              <div className="hero-device hero-tilt-surface relative overflow-hidden rounded-[24px] px-4 pb-4 pt-5 text-white shadow-[0_32px_70px_-36px_rgba(37,99,235,0.6)] sm:rounded-[32px] sm:px-7 sm:pb-6 sm:pt-7">
                <div className="hero-sheen absolute inset-0" />
                <div className="hero-grid-lines absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_22%)]" />

                <div className="hero-card-layer hero-card-layer-near relative z-[1] flex items-start justify-between gap-4">
                  <div>
                    <p className="hero-card-layer hero-card-layer-far text-xs font-semibold uppercase tracking-[0.32em] text-white/85 [text-shadow:0_6px_20px_rgba(0,0,0,0.28)]">
                      Prime Math Class
                    </p>
                    <h2 className="thai-heading mt-3 text-2xl font-semibold leading-[1.08] text-white sm:mt-4 sm:text-4xl">
                      ที่ไหน เมื่อไร
                      <br />
                      ก็เรียนคณิตได้
                    </h2>
                  </div>

                  <div className="hero-card-layer hero-card-layer-mid hero-chip hidden sm:block">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/78 [text-shadow:0_6px_18px_rgba(0,0,0,0.2)]">Mode</p>
                    <p className="mt-2 text-sm font-semibold text-white [text-shadow:0_8px_22px_rgba(0,0,0,0.28)]">Online</p>
                  </div>
                </div>

                <div className="relative z-[1] mt-7 sm:mt-8">
                  <div className="hero-card-layer hero-card-layer-mid max-w-[28rem]">
                    <p className="text-sm font-medium leading-7 text-white/90 [text-shadow:0_8px_24px_rgba(1,12,22,0.3)] sm:text-[15px]">
                      เลือกคอร์สคณิตที่เหมาะกับช่วงชั้น เป้าหมาย และสไตล์การเรียนของผู้เรียนได้ในที่เดียว
                    </p>
                  </div>

                  <div className="hero-card-layer hero-card-layer-front hero-orb-panel mt-5 sm:mt-6">
                    <div className="hero-orb-stage">
                      <div className="hero-orb-ambient hero-orb-ambient-a" />
                      <div className="hero-orb-ambient hero-orb-ambient-b" />
                      <div className="hero-orb-floor" />
                      <div className="hero-orb-shadow" />
                      <div className="hero-orb-ring hero-orb-ring-a" />
                      <div className="hero-orb-ring hero-orb-ring-b" />
                      <div className="hero-orb-ring hero-orb-ring-c" />

                      <div className="hero-orb-sphere">
                        <div className="hero-orb-glow" />
                        <div className="hero-orb-core">
                          <div className="hero-orb-inner" />
                          <div className="hero-orb-highlight" />
                        </div>
                        <div className="hero-orb-shell" />
                      </div>

                      <div className="hero-orb-satellite hero-orb-satellite-a" />
                      <div className="hero-orb-satellite hero-orb-satellite-b" />
                      <div className="hero-orb-satellite hero-orb-satellite-c" />

                      <div className="hero-orb-copy">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/68">Featured Courses</p>
                        <p className="mt-3 text-lg font-semibold text-white sm:text-[1.4rem]">คอร์สคณิตแนะนำในเว็บไซต์</p>
                        <div className="mt-3 space-y-2.5">
                          {heroCourseShowcase.map((course) => (
                            <div key={course.id} className="hero-course-preview-card">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-100/72">{course.category}</p>
                                  <p className="mt-1 text-sm font-semibold leading-5 text-white">{course.title}</p>
                                </div>
                                <p className="whitespace-nowrap text-xs font-semibold text-emerald-50/86">
                                  {formatPrice(course.price)}
                                </p>
                              </div>
                              <p className="mt-1.5 text-[11px] leading-5 text-white/70">
                                {course.level} • {course.duration}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hero-signal-strip hero-card-layer hero-card-layer-mid mt-3.5 sm:mt-4">
                    {heroSignals.map((signal) => (
                      <div key={signal.label} className="hero-signal-card">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-50/80">{signal.label}</p>
                        <p className="mt-1.5 text-base font-semibold text-white sm:text-lg">{signal.value}</p>
                        <p className="mt-1.5 text-[11px] leading-5 text-white/90 sm:text-xs">{signal.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hero-card-layer hero-card-layer-front mt-4 rounded-[28px] border border-white/16 bg-white/12 p-2.5 backdrop-blur-md sm:mt-5 sm:p-3">
                  <div className="rounded-[24px] bg-white/95 p-4 text-slate-900 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.34)] sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                          Student Journey
                        </p>
                        <p className="text-balance mt-2.5 max-w-[17ch] text-base font-semibold leading-snug text-slate-900 sm:text-[1.18rem]">
                          เรียนเป็นลำดับ
                          <br />
                          เห็นผลชัด
                          <br />
                          กลับมาทบทวนได้ทุกเมื่อ
                        </p>
                      </div>

                      <div className="hero-card-layer hero-card-layer-far rounded-[20px] bg-slate-100 px-4 py-3 text-right">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Access</p>
                        <p className="mt-2 text-lg font-semibold text-brand-700">24 ชม.</p>
                      </div>
                    </div>

                    <div className="hero-journey-grid mt-4 grid gap-2.5 sm:grid-cols-3">
                      {heroJourneyHighlights.map(([title, text]) => (
                        <div key={title} className="hero-card-layer hero-card-layer-far hero-metric-card">
                          <p className="text-sm font-semibold text-ink-900">{title}</p>
                          <p className="mt-2 text-sm text-slate-500">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HeroEnergyScene>
        </div>
      </SectionContainer>

      <SectionContainer className="section-contrast">
        <SectionHeader
          eyebrow="Why Prime Math"
          title=""
          description=""
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

      <SectionContainer className="relative isolate overflow-hidden">
        <NeonOrbField variant="course-showcase" />
        <div className="relative z-[1]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Course Collection"
              title=""
              description=""
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
        </div>
      </SectionContainer>

      

      <SectionContainer id="reviews">
        <SectionHeader
          eyebrow="Voices of Confidence"
          title="รีวิวจากผู้เรียนและผู้ปกครอง"
          description=""
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

      <SectionContainer className="section-contrast relative isolate overflow-hidden">
        <NeonOrbField variant="faq-section" />
        <div className="relative z-[1] grid gap-10 lg:grid-cols-[0.88fr,1.12fr]">
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
              <h2 className="thai-heading text-balance mt-5 max-w-[16ch] text-[1.95rem] font-semibold leading-[1.14] sm:text-4xl">
                เริ่มต้นเส้นทางการเรียนคณิตที่เหมาะกับเป้าหมายของคุณ
              </h2>
              <p className="text-pretty mt-5 max-w-2xl text-lg text-slate-500">
                ไม่ว่าจะต้องการเพิ่มเกรด เตรียมสอบเข้า หรือปูพื้นฐานใหม่ เรามีคอร์สที่ออกแบบมาให้เรียนต่อได้จริง
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PremiumButton href="/courses" size="lg">
                  เลือกคอร์สเพื่อสมัคร
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
