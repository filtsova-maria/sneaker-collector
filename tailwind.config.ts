import type { Config } from 'tailwindcss'

export default {
  purge: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  content: {
    files: [
      './public/index.html',
      './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    relative: true
  },
  theme: {
    extend: {},
    colors: {
      focus: "#20A9F3",
      hover: "#373737",
      white: "#FFFFFF",
      black: "#191919",
      red: "#EF233C",
      gray: {
        50: "#808080",
        80: "#CCCCCC",
      },
      bg: "#EEEFF0"
    }
  },
  plugins: [],
} satisfies Config;