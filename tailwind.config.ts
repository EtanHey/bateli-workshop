import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "red-radial-gradient":"radial-gradient(ellipse at center,#ab170f 50%, #ffffff)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'signup-orange':'#AB5C0F',
        'red-color': "#ab170f",
        'title-green': '#97BDA0',
        'text-gray': '#585856',
      },
      boxShadow:{
        "orange-signup-button-inner":"inset 0px 0px 4px 1px #ffffff;",
        "red-signup-button-inner":"inset 0px 0px 5px 1px #ffffff;"
      }
    },
  },
  plugins: [],
};
export default config;