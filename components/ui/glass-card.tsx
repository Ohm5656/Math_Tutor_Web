import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  stagger?: 1 | 2 | 3 | 4;
}

export function GlassCard({ children, className, stagger }: GlassCardProps) {
  return (
    <div className={cn("glass-card reveal-on-scroll reveal-up", className)} data-stagger={stagger}>
      {children}
    </div>
  );
}
