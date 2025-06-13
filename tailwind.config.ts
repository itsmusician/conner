import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const { createThemes } = require('tw-colors');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      size: {
        'logo': '18vw',
      },
      spacing: {
        'nav': '4vw',
      },
      animation: {
        'scroll-logos': 'scroll-logos 60s linear infinite',
        'bubble': 'bubble 4s linear infinite',
      },
      keyframes: {
        "scroll-logos": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "bubble": {
          from: { transform: 'translateY(100vh)' },
          to: { transform: 'translateY(-100vh)' },
        }
      }
    },
  },
  plugins: [
    createThemes({
      civiltwilight: {
        'base-light': '#FBEEDD',
        'base-dark': '#3C473E',
        'text-accent': '#3C473E',
        'text-nav': '#3C473E',
        'g0': '#624CB9',
        'g1': '#C079AA',
        'g2': '#FFBCA0',
        'g3': '#FFCBAA',
        'g4': '#FFDCD2',
        'g5': '#FBEEDD',
      },
      redshift: {
        'base-light': '#FBEEDD',
        'base-dark': '#534064',
        'text-accent': '#E8E0C3',
        'text-nav': '#E8E0C3',
        'g0': '#DF432E',
        'g1': '#F55536',
        'g2': '#F96E3C',
        'g3': '#F58340',
        'g4': '#F69A40',
        'g5': '#F8B23E',
      },
      seafloor: {
        'base-light': '#FBEEDD',
        'base-dark': '#585347',
        'text-accent': '#E8E0C3',
        'text-nav': '#E8E0C3',
        'g0': '#033F63',
        'g1': '#28666E',
        'g2': '#7C9885',
        'g3': '#B5B682',
        'g4': '#DAC98D',
        'g5': '#FEDC97',
      },
      mauve: {
        'base-light': '#FBEEDD',
        'base-dark': '#2E3749',
        'text-accent': '#E8E0C3',
        'text-nav': '#E8E0C3',
        'g0': '#373335',
        'g1': '#4C3F47',
        'g2': '#6B5162',
        'g3': '#866277',
        'g4': '#B18396',
        'g5': '#C99DA3',
      },
      pine: {
        'base-light': '#FBEEDD',
        'base-dark': '#2E3749',
        'text-accent': '#E8E0C3',
        'text-nav': '#E8E0C3',
        'g0': '#19231A',
        'g1': '#203423',
        'g2': '#274226',
        'g3': '#304E21',
        'g4': '#3A5716',
        'g5': '#4D6224',
      },
      yuzu: {
        'base-light': '#FBEEDD',
        'base-dark': '#15312C',
        'text-accent': '#15312C',
        'text-nav': '#15312C',
        'g0': '#DB961E',
        'g1': '#E9AB2B',
        'g2': '#F7C038',
        'g3': '#FAD24F',
        'g4': '#FFE27A',
        'g5': '#FBE79B',
      },
      eclipsebloom: {
        'base-light': '#FBEEDD',
        'base-dark': '#151712',
        'text-accent': '#E8E0C3',
        'text-nav': '#E8E0C3',
        'g0': '#312C75',
        'g1': '#6E4B9A',
        'g2': '#BD63AE',
        'g3': '#F975A8',
        'g4': '#FD95B2',
        'g5': '#FBB3C2',
      },
      frut: {
        'base-light': '#FFFFFF',
        'base-dark': '#010A36',
        'text-accent': '#010A36',
        'text-nav': '#010A36',
        'g0': '#0330FC',
        'g1': '#68D0FC',
        'g2': '#FFFFFF',
        'g3': '#FFFFFF',
        'g4': '#FFFFFF',
        'g5': '#FFFFFF',
      },
    }, {
      defaultTheme: 'frut'
    })
  ],
};

export default config;
