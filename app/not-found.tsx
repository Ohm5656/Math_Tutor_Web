import { GlassCard } from "@/components/ui/glass-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionContainer } from "@/components/ui/section-container";

export default function NotFound() {
  return (
    <SectionContainer className="page-hero pattern-dots pt-12 sm:pt-16">
      <GlassCard className="mx-auto max-w-2xl p-8 text-center sm:p-12">
        <h1 className="text-4xl font-semibold leading-tight">ไม่พบหน้าที่คุณกำลังมองหา</h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">
          ลิงก์นี้อาจถูกเปลี่ยนแปลงหรือไม่มีอยู่ในระบบแล้ว คุณสามารถกลับไปยังหน้าหลักหรือหน้าคอร์สเรียนเพื่อเริ่มต้นใหม่ได้
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PremiumButton href="/">กลับหน้าแรก</PremiumButton>
          <PremiumButton href="/courses" variant="secondary">
            ไปที่คอร์สเรียน
          </PremiumButton>
        </div>
      </GlassCard>
    </SectionContainer>
  );
}
