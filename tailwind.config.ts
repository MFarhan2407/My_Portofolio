import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#FF0033',
        primaryBlue: '#00AAFF',
        accentWhite: '#E6F0FF',
        glass: 'rgba(255,255,255,0.04)'
      },
    },
  },
  plugins: [],
}
export default config
