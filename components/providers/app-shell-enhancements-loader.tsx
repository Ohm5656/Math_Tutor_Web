"use client";

import dynamic from "next/dynamic";

const AppShellEnhancements = dynamic(
  () =>
    import("@/components/providers/app-shell-enhancements").then(
      (module) => module.AppShellEnhancements
    ),
  {
    ssr: false,
    loading: () => null
  }
);

export function AppShellEnhancementsLoader() {
  return <AppShellEnhancements />;
}
