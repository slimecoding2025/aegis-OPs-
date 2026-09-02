/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0a0b0e",
        panel: "#10131a",
        "panel-raised": "#151923",
        line: "#1f2430",
        ink: "#e7ecf3",
        "ink-dim": "#8b95a7",
        "ink-faint": "#565f70",
        signal: {
          cyan: "#4ce0d2",
          violet: "#9b8cff",
          amber: "#ffb454",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-overlay":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        "glow-cyan": "0 0 40px -8px rgba(76,224,210,0.35)",
        "glow-violet": "0 0 40px -8px rgba(155,140,255,0.35)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
