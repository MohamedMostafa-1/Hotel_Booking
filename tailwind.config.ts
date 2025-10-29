import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          light: "#FFF5E6", // خلفية عامة فاتحة
          sand: "#F4C27F", // لون رملي
          brown: "#8B5E3C", // بني صحراوي
          dark: "#3E2F27", // غامق للنصوص
        },
        sunset: {
          orange: "#E67E22", // برتقالي غروب
          burn: "#D35400", // برتقالي غامق Hover
        },
      },
    },
  },
  plugins: [],
};

export default config;
