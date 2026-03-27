import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type NeonOrbFieldVariant = "course-showcase" | "course-page" | "faq-section" | "footer";

type NeonOrbFieldProps = {
  variant: NeonOrbFieldVariant;
  className?: string;
};

type OrbSpec = {
  size: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  delay: string;
  duration: string;
  opacity: number;
  core: string;
  rim: string;
  halo: string;
  blur: string;
};

const orbPresets: Record<NeonOrbFieldVariant, OrbSpec[]> = {
  "course-showcase": [
    {
      size: "10rem",
      top: "2rem",
      right: "-1rem",
      delay: "-1.2s",
      duration: "10.4s",
      opacity: 0.88,
      core: "rgba(0, 255, 136, 0.82)",
      rim: "rgba(192, 255, 226, 0.98)",
      halo: "rgba(0, 224, 255, 0.18)",
      blur: "22px"
    },
    {
      size: "4.8rem",
      top: "8rem",
      left: "-0.8rem",
      delay: "-3.6s",
      duration: "8.8s",
      opacity: 0.72,
      core: "rgba(0, 255, 136, 0.74)",
      rim: "rgba(240, 255, 248, 0.92)",
      halo: "rgba(171, 255, 225, 0.24)",
      blur: "18px"
    },
    {
      size: "3.4rem",
      bottom: "7rem",
      right: "18%",
      delay: "-2.2s",
      duration: "7.4s",
      opacity: 0.68,
      core: "rgba(0, 255, 136, 0.68)",
      rim: "rgba(246, 255, 251, 0.9)",
      halo: "rgba(0, 224, 255, 0.14)",
      blur: "16px"
    },
    {
      size: "6.2rem",
      bottom: "-1rem",
      left: "12%",
      delay: "-4.8s",
      duration: "11.6s",
      opacity: 0.54,
      core: "rgba(0, 255, 136, 0.62)",
      rim: "rgba(219, 255, 236, 0.84)",
      halo: "rgba(49, 94, 251, 0.12)",
      blur: "20px"
    }
  ],
  "course-page": [
    {
      size: "12rem",
      top: "2.5rem",
      right: "-2rem",
      delay: "-0.8s",
      duration: "12s",
      opacity: 0.86,
      core: "rgba(0, 255, 136, 0.8)",
      rim: "rgba(236, 255, 247, 0.96)",
      halo: "rgba(0, 224, 255, 0.2)",
      blur: "24px"
    },
    {
      size: "5.5rem",
      top: "24%",
      left: "-1rem",
      delay: "-2.9s",
      duration: "8.6s",
      opacity: 0.7,
      core: "rgba(0, 255, 136, 0.7)",
      rim: "rgba(239, 255, 247, 0.94)",
      halo: "rgba(171, 255, 225, 0.24)",
      blur: "18px"
    },
    {
      size: "3.2rem",
      top: "42%",
      right: "9%",
      delay: "-4.2s",
      duration: "7.1s",
      opacity: 0.64,
      core: "rgba(0, 255, 136, 0.68)",
      rim: "rgba(245, 255, 250, 0.88)",
      halo: "rgba(49, 94, 251, 0.14)",
      blur: "14px"
    },
    {
      size: "7rem",
      bottom: "14%",
      left: "7%",
      delay: "-1.7s",
      duration: "10.8s",
      opacity: 0.58,
      core: "rgba(0, 255, 136, 0.72)",
      rim: "rgba(241, 255, 248, 0.9)",
      halo: "rgba(0, 224, 255, 0.12)",
      blur: "20px"
    },
    {
      size: "9rem",
      bottom: "-2rem",
      right: "18%",
      delay: "-5.1s",
      duration: "13.4s",
      opacity: 0.52,
      core: "rgba(0, 255, 136, 0.62)",
      rim: "rgba(224, 255, 238, 0.86)",
      halo: "rgba(49, 94, 251, 0.16)",
      blur: "22px"
    }
  ],
  "faq-section": [
    {
      size: "7rem",
      top: "8%",
      left: "-1.5rem",
      delay: "-1.4s",
      duration: "9.8s",
      opacity: 0.5,
      core: "rgba(0, 255, 136, 0.68)",
      rim: "rgba(238, 255, 248, 0.92)",
      halo: "rgba(171, 255, 225, 0.18)",
      blur: "18px"
    },
    {
      size: "4rem",
      top: "38%",
      right: "11%",
      delay: "-3.1s",
      duration: "7.6s",
      opacity: 0.46,
      core: "rgba(0, 255, 136, 0.62)",
      rim: "rgba(245, 255, 250, 0.86)",
      halo: "rgba(0, 224, 255, 0.12)",
      blur: "14px"
    },
    {
      size: "8.2rem",
      bottom: "-2rem",
      right: "-1.5rem",
      delay: "-5s",
      duration: "11.8s",
      opacity: 0.42,
      core: "rgba(0, 255, 136, 0.58)",
      rim: "rgba(226, 255, 239, 0.82)",
      halo: "rgba(49, 94, 251, 0.12)",
      blur: "20px"
    }
  ],
  footer: [
    {
      size: "10rem",
      top: "-2rem",
      right: "12%",
      delay: "-0.8s",
      duration: "11.6s",
      opacity: 0.72,
      core: "rgba(0, 255, 136, 0.82)",
      rim: "rgba(238, 255, 248, 0.96)",
      halo: "rgba(0, 224, 255, 0.18)",
      blur: "22px"
    },
    {
      size: "5.2rem",
      top: "26%",
      left: "4%",
      delay: "-3.2s",
      duration: "8.2s",
      opacity: 0.56,
      core: "rgba(0, 255, 136, 0.66)",
      rim: "rgba(240, 255, 249, 0.88)",
      halo: "rgba(171, 255, 225, 0.14)",
      blur: "16px"
    },
    {
      size: "7.4rem",
      bottom: "14%",
      right: "-1.5rem",
      delay: "-4.8s",
      duration: "10.8s",
      opacity: 0.5,
      core: "rgba(0, 255, 136, 0.64)",
      rim: "rgba(230, 255, 242, 0.84)",
      halo: "rgba(49, 94, 251, 0.12)",
      blur: "18px"
    },
    {
      size: "3.4rem",
      bottom: "8%",
      left: "32%",
      delay: "-2.4s",
      duration: "7s",
      opacity: 0.44,
      core: "rgba(0, 255, 136, 0.6)",
      rim: "rgba(246, 255, 251, 0.8)",
      halo: "rgba(0, 224, 255, 0.1)",
      blur: "12px"
    }
  ]
};

export function NeonOrbField({ variant, className }: NeonOrbFieldProps) {
  return (
    <div className={cn("neon-orb-field", `neon-orb-field-${variant}`, className)} aria-hidden="true">
      {orbPresets[variant].map((orb, index) => {
        const style = {
          width: orb.size,
          height: orb.size,
          top: orb.top,
          right: orb.right,
          bottom: orb.bottom,
          left: orb.left,
          opacity: orb.opacity,
          animationDelay: orb.delay,
          animationDuration: orb.duration,
          "--orb-core": orb.core,
          "--orb-rim": orb.rim,
          "--orb-halo": orb.halo,
          "--orb-blur": orb.blur
        } as CSSProperties;

        return <span key={`${variant}-orb-${index}`} className="neon-orb" style={style} />;
      })}
    </div>
  );
}
