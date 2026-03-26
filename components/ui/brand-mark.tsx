import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] shadow-glow",
        className
      )}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.36),transparent_38%)]" />
      <span className="absolute h-5 w-5 rounded-full border border-white/40" />
      <span className="relative text-sm font-bold text-white">π</span>
    </div>
  );
}
