import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDF7F3",
        blush: "#F4A7BB",
        mauveblush: "#E8A0BF",
        sand: "#E8D5C4",
        plum: "#B8A9C9",
        ink: "#2D2D2D",
        inkfade: "#5B5555"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"]
      },
      borderRadius: {
        blob1: "62% 38% 55% 45% / 45% 60% 40% 55%",
        blob2: "38% 62% 63% 37% / 41% 44% 56% 59%",
        blob3: "55% 45% 40% 60% / 60% 35% 65% 40%"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(14px, -18px) rotate(8deg)" }
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(-20px, 16px) rotate(-6deg)" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        }
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        driftSlow: "driftSlow 13s ease-in-out infinite",
        blink: "blink 1s step-start infinite"
      }
    }
  },
  plugins: []
};

export default config;
