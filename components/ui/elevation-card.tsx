import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ElevationCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  stagger?: 1 | 2 | 3 | 4;
}

export function ElevationCard({
  children,
  className,
  hover = false,
  stagger
}: ElevationCardProps) {
  return (
    <div
      className={cn(
        "elevation-card reveal-on-scroll reveal-up",
        hover && "transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-premium",
        className
      )}
      data-stagger={stagger}
    >
      {children}
    </div>
  );
}
