import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: '#FFE6E0',
          200: '#FFCDC1',
          300: '#FFB4A1',
          400: '#FF9B82',
          500: '#FE7750',
          600: '#E66648',
          700: '#CC563F',
          800: '#B34537',
          900: '#99352F',
        },
        secondary: {
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
          950: '#1E1E1E',
          1000: '#0A0A0A',
        },
    },
    },
  },
  plugins: [],
};
export default config;
