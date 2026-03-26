"use client";

import { RoutePrefetchProvider } from "@/components/providers/route-prefetch-provider";
import { ScrollRevealProvider } from "@/components/providers/scroll-reveal-provider";

export function AppShellEnhancements() {
  return (
    <>
      <RoutePrefetchProvider />
      <ScrollRevealProvider />
    </>
  );
}
