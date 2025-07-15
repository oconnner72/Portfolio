/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Car/motorcycle inspired color palette
        "racing-red": "#DC143C",
        "midnight-black": "#0F0F0F",
        "chrome-silver": "#C0C0C0",
        "engine-orange": "#FF6B35",
        "speed-blue": "#1E40AF",
        "electric-green": "#10B981",
        "carbon-gray": "#374151",
        "leather-brown": "#8B4513",
        "neon-yellow": "#FBBF24",
      },
      fontFamily: {
        racing: ["Orbitron", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-fast": "pulse 1s ease-in-out infinite",
        "bounce-subtle": "bounce 2s ease-in-out infinite",
        "slide-in": "slideIn 0.8s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        neon: "0 0 20px rgba(59, 130, 246, 0.5)",
        glow: "0 0 30px rgba(16, 185, 129, 0.3)",
      },
    },
  },
  plugins: [],
};
