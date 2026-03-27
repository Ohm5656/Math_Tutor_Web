import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "reveal-on-scroll reveal-up",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={cn(
          "section-title-glow thai-heading text-balance mt-4 text-[1.9rem] font-semibold leading-[1.15] sm:mt-5 sm:text-[2.3rem] sm:leading-[1.16] lg:text-[2.5rem]",
          align === "center" ? "mx-auto max-w-[16ch]" : "max-w-[18ch]"
        )}
      >
        {title}
      </h2>
      <p className="text-pretty mt-3 max-w-[40rem] text-sm leading-7 text-slate-500 sm:mt-4 sm:text-[15px]">
        {description}
      </p>
    </div>
  );
}
