"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const criticalRoutes = ["/", "/courses", "/about", "/contact", "/policies", "/checkout"];

export function RoutePrefetchProvider() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const win = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (
          callback: IdleRequestCallback,
          options?: IdleRequestOptions
        ) => number;
        cancelIdleCallback?: (handle: number) => void;
      };

    const routesToPrefetch = criticalRoutes.filter((route) => route !== pathname);

    const prefetchRoutes = () => {
      routesToPrefetch.forEach((route) => {
        router.prefetch(route);
      });
    };

    if (win.requestIdleCallback) {
      const idleId = win.requestIdleCallback(prefetchRoutes, { timeout: 1500 });
      return () => win.cancelIdleCallback?.(idleId);
    }

    const timeoutId = globalThis.setTimeout(prefetchRoutes, 300);
    return () => globalThis.clearTimeout(timeoutId);
  }, [pathname, router]);

  return null;
}
