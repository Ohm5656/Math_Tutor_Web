"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));

    if (!elements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.classList.remove("reveal-pending");
        element.classList.add("is-visible");
      });
      return;
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    elements.forEach((element) => {
      element.classList.remove("reveal-pending");
      element.classList.remove("is-visible");
      const rect = element.getBoundingClientRect();

      if (rect.top < viewportHeight * 0.92) {
        element.classList.add("is-visible");
      } else {
        element.classList.add("reveal-pending");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    elements.forEach((element) => {
      if (element.classList.contains("reveal-pending")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
