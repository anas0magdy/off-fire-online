/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ef4444", // اللون الأحمر بتاع اللوجو
        dark: "#0b1120",    // الخلفية الغامقة
        card: "#1e293b",    // لون الكروت
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'], // الخط العربي
        oswald: ['Oswald', 'sans-serif'], // الخط الإنجليزي للوجو
      }
    },
  },
  plugins: [],
}