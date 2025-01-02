/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1A75E8",  // Bright blue
        darkBlue: "#0F1137", // Deep navy
        grayBlue: "#AEB4C1", // Grayish blue
        lightGray: "#F5F6F8",
      },
    },
  },
  plugins: [],
};
