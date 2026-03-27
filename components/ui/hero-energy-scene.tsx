"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

type HeroEnergySceneProps = {
  children: ReactNode;
  className?: string;
};

const particles = [
  { left: "18%", delay: "0s", duration: "7.2s", size: "0.4rem" },
  { left: "24%", delay: "-1.8s", duration: "8.6s", size: "0.55rem" },
  { left: "31%", delay: "-3.1s", duration: "6.7s", size: "0.34rem" },
  { left: "39%", delay: "-0.9s", duration: "9.2s", size: "0.48rem" },
  { left: "46%", delay: "-2.6s", duration: "7.8s", size: "0.3rem" },
  { left: "53%", delay: "-4.3s", duration: "8.1s", size: "0.45rem" },
  { left: "61%", delay: "-1.2s", duration: "6.4s", size: "0.52rem" },
  { left: "68%", delay: "-3.7s", duration: "8.8s", size: "0.38rem" },
  { left: "74%", delay: "-2.2s", duration: "7.4s", size: "0.42rem" },
  { left: "81%", delay: "-4.9s", duration: "9.5s", size: "0.32rem" }
];

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function HeroEnergyScene({ children, className }: HeroEnergySceneProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const particleStyles = useMemo(
    () =>
      particles.map(
        (particle) =>
          ({
            "--particle-left": particle.left,
            "--particle-delay": particle.delay,
            "--particle-duration": particle.duration,
            "--particle-size": particle.size
          }) as CSSProperties
      ),
    []
  );

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateScroll = () => {
      const rect = scene.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);
      const drift = (progress - 0.45) * 56;

      scene.style.setProperty("--hero-scroll-progress", progress.toFixed(3));
      scene.style.setProperty("--hero-scroll-shift", `${drift.toFixed(2)}px`);
    };

    if (!prefersReducedMotion) {
      updateScroll();

      const handleScroll = () => {
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
        }

        frameRef.current = window.requestAnimationFrame(updateScroll);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll);

      return () => {
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
        }

        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }

    scene.style.setProperty("--hero-scroll-progress", "0");
    scene.style.setProperty("--hero-scroll-shift", "0px");
  }, []);

  const updatePointer = (event: PointerEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const bounds = scene.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    const centeredX = relativeX - 0.5;
    const centeredY = relativeY - 0.5;

    scene.style.setProperty("--pointer-x", `${(relativeX * 100).toFixed(2)}%`);
    scene.style.setProperty("--pointer-y", `${(relativeY * 100).toFixed(2)}%`);
    scene.style.setProperty("--pointer-shift-x", centeredX.toFixed(3));
    scene.style.setProperty("--pointer-shift-y", centeredY.toFixed(3));
    scene.style.setProperty("--card-tilt-x", `${(-centeredY * 12).toFixed(2)}deg`);
    scene.style.setProperty("--card-tilt-y", `${(centeredX * 16).toFixed(2)}deg`);
  };

  const resetPointer = () => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    scene.style.setProperty("--pointer-x", "50%");
    scene.style.setProperty("--pointer-y", "50%");
    scene.style.setProperty("--pointer-shift-x", "0");
    scene.style.setProperty("--pointer-shift-y", "0");
    scene.style.setProperty("--card-tilt-x", "0deg");
    scene.style.setProperty("--card-tilt-y", "0deg");
  };

  return (
    <div
      ref={sceneRef}
      className={cn("hero-energy-scene", className)}
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
    >
      <div className="hero-energy-backdrop" aria-hidden="true" />
      <div className="hero-energy-glow hero-energy-glow-top" aria-hidden="true" />
      <div className="hero-energy-glow hero-energy-glow-bottom" aria-hidden="true" />

      <div className="hero-energy-stream" aria-hidden="true">
        <div className="hero-energy-core" />
        <div className="hero-energy-thread hero-energy-thread-a" />
        <div className="hero-energy-thread hero-energy-thread-b" />
        <div className="hero-energy-thread hero-energy-thread-c" />
        <div className="hero-energy-wave hero-energy-wave-a" />
        <div className="hero-energy-wave hero-energy-wave-b" />
      </div>

      <div className="hero-energy-particles" aria-hidden="true">
        {particleStyles.map((style, index) => (
          <span key={`hero-particle-${index}`} className="hero-energy-particle" style={style} />
        ))}
      </div>

      <div className="hero-card-shell">{children}</div>
    </div>
  );
}
