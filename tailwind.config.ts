import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b9d0ff",
          300: "#8ab0ff",
          400: "#5887ff",
          500: "#315efb",
          600: "#2348dc",
          700: "#1d3bb2",
          800: "#1d338c",
          900: "#1b2d72"
        },
        ink: {
          950: "#07111f",
          900: "#0b1c34",
          800: "#153155",
          700: "#24466d"
        },
        gold: {
          50: "#fff8e6",
          100: "#ffefc2",
          200: "#f8dd85",
          300: "#efc95d"
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', "ui-sans-serif", "system-ui", "sans-serif"],
        body: [
          'var(--font-body)',
          'var(--font-body-alt)',
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        premium: "0 36px 80px -32px rgba(15, 23, 42, 0.28)",
        panel: "0 24px 56px -24px rgba(15, 23, 42, 0.18)",
        glow: "0 18px 40px -18px rgba(37, 99, 235, 0.34)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(37, 99, 235, 0.16), transparent 34%), radial-gradient(circle at 78% 12%, rgba(16, 185, 129, 0.12), transparent 22%)",
        "premium-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55) 42%, rgba(224,231,255,0.55) 100%)",
        "navy-glow":
          "radial-gradient(circle at top right, rgba(59,130,246,0.24), transparent 28%), linear-gradient(135deg, #0f172a, #0b1220)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px) translateZ(0)", filter: "blur(0.5px)" },
          "100%": { opacity: "1", transform: "translateY(0) translateZ(0)", filter: "blur(0px)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
        "pulse-glow": "pulseGlow 7s ease-in-out infinite",
        "fade-up": "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        drift: "drift 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
