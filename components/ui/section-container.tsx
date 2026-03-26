import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  innerClassName,
  id
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("page-section section-space", className)}>
      <div className={cn("app-shell", innerClassName)}>{children}</div>
    </section>
  );
}
