import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'gray-dark': '#010812',
        'blue-dark': '#0b212f',
        'blue-medium': '#44586a',
        'blue-light': '#a2b4c3',
        'gray-light': '#cdd4db',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/background.svg')",
      },
    }
  },
  plugins: [],
};
export default config;
