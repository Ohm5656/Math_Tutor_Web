import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  prefetch?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const variantClasses = {
  primary:
    "bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_62%,#2563eb_100%)] text-white shadow-glow hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_-22px_rgba(37,99,235,0.5)]",
  secondary:
    "border border-slate-200/80 bg-white/90 text-ink-900 shadow-[0_14px_30px_-20px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:scale-[1.015] hover:border-slate-300 hover:shadow-panel",
  ghost:
    "bg-transparent text-slate-700 hover:bg-white/70 hover:text-ink-900",
  dark:
    "bg-[linear-gradient(135deg,#0f172a_0%,#111827_100%)] text-white hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-premium"
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base"
};

export function PremiumButton({
  children,
  className,
  href,
  prefetch = true,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  onClick
}: PremiumButtonProps) {
  const sharedClassName = cn(
    "group inline-flex items-center justify-center rounded-2xl font-semibold transition duration-300 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition before:duration-300 hover:before:opacity-100",
    "relative overflow-hidden",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100" />
      <span className="absolute inset-y-0 left-[-30%] w-24 -skew-x-[18deg] bg-white/20 opacity-0 blur-md transition duration-700 group-hover:left-[115%] group-hover:opacity-100" />
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} prefetch={prefetch} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={sharedClassName} type={type} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
