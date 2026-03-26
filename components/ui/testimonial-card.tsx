import { Testimonial } from "@/types";

export function TestimonialCard({
  testimonial,
  stagger
}: {
  testimonial: Testimonial;
  stagger?: 1 | 2 | 3 | 4;
}) {
  const initials = testimonial.name.slice(0, 2);

  return (
    <article
      className="elevation-card reveal-on-scroll reveal-up h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-premium"
      data-stagger={stagger}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-ink-900">{testimonial.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dbeafe,#ecfeff)] text-sm font-semibold text-brand-700">
          {initials}
        </div>
      </div>
      <div className="mt-6 flex gap-1 text-brand-600">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-slate-600">“{testimonial.quote}”</p>
      <div className="mt-6 rounded-[24px] bg-[linear-gradient(135deg,rgba(219,234,254,0.72),rgba(236,253,245,0.72))] px-4 py-4 text-sm font-semibold text-ink-900">
        {testimonial.result}
      </div>
    </article>
  );
}
