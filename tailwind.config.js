/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A",
          secondary: "#FACC15",
          light: "#F3F4F6",
          dark: "#111827",
        },
      },
    },
    plugins: [],
  };
  