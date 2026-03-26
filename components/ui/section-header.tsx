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
      <h2 className="thai-heading mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-[40rem] text-[14px] leading-7 text-slate-500 sm:text-[15px]">
        {description}
      </p>
    </div>
  );
}
