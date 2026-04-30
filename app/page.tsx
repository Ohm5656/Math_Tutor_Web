import dynamic from "next/dynamic";
import Link from "next/link";

import { PremiumButton } from "@/components/ui/premium-button";
import { CourseCard } from "@/components/ui/course-card";
import { ElevationCard } from "@/components/ui/elevation-card";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { courses } from "@/data/courses";
import { siteFaqs, testimonials } from "@/data/site";

const NeonOrbField = dynamic(() => import("@/components/ui/neon-orb-field").then(m => m.NeonOrbField));
const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then(m => m.FaqAccordion));
const TestimonialCard = dynamic(() => import("@/components/ui/testimonial-card").then(m => m.TestimonialCard));
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

export default function HomePage() {
  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <div>
      <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0">
          {/* Gradients to blend the image into the white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/0 z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent z-10 lg:hidden pointer-events-none" />
          <img 
            src="/images/hero-bg.png" 
            alt="Prime Math Workspace" 
            className="h-full w-full object-cover object-left opacity-20 lg:object-center lg:opacity-100"
            style={{ maskImage: "linear-gradient(to right, transparent, black 15%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%)" }} 
          />
        </div>

        <div className="app-shell relative z-[1]">
          <div className="grid lg:grid-cols-2 lg:gap-10">
            <div className="relative max-w-2xl lg:max-w-xl lg:py-10">
              <span className="eyebrow fade-up">Prime Math Academy</span>
              <h1 className="thai-heading text-balance fade-up fade-up-delay-1 mt-5 text-4xl font-bold leading-[1.15] text-slate-950 sm:mt-7 sm:text-5xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.1]">
                เรียนคณิตให้เข้าใจจริง<br className="hidden sm:block" />
                <span className="text-brand-600"> เก็บเกรดได้ พร้อมสอบมากขึ้น</span>
              </h1>
              <p className="text-pretty fade-up fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
                คอร์สออนไลน์ที่ออกแบบให้เรียนง่าย เป็นลำดับ และใช้ได้จริงทั้งในห้องเรียน การสอบเข้า และการทบทวนก่อนสอบ
              </p>

              <div className="fade-up fade-up-delay-3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
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
            {/* Empty div to balance the grid and push text to the left */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

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
