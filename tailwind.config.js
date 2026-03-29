/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "temple-brown": "#5C2D0E",
        "temple-cream": "#FDF4E7",
        "temple-gold": "#D97C2A",
        "temple-dark": "#3B1A05",
        background: "#FFFAF4",
        foreground: "#1A0A00",
      },
      fontFamily: {
        caslon: ['"Adobe Caslon Pro"', '"Big Caslon"', "Georgia", "serif"],
        manrope: ["Manrope", "Inter", "sans-serif"],
      },
      keyframes: {
        "slide-up": { "0%": { transform: "translateY(100%)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        shimmer: "shimmer 1.5s infinite linear",
      },
    },
  },
  plugins: [],
};
