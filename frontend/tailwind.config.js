/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0B0F17",
          panel: "#111827",
          border: "#1F2937",
          accent: "#10B981", // Emerald
          warning: "#F59E0B",
          danger: "#EF4444",
          cyan: "#06B6D4",
          blue: "#3B82F6",
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

