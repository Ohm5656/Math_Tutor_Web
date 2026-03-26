"use client";

import dynamic from "next/dynamic";

const MobileNav = dynamic(
  () => import("@/components/layout/mobile-nav").then((module) => module.MobileNav),
  {
    ssr: false,
    loading: () => null
  }
);

interface NavItem {
  label: string;
  href: string;
}

export function MobileNavLoader({ items }: { items: NavItem[] }) {
  return <MobileNav items={items} />;
}
