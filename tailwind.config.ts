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
      /* ... */
    },
  },
  plugins: [
    createThemes({
      civiltwilight: {
        'base-light': '#FBEEDD',
        'base-dark': '#3C473E',
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
        'g0': '#373335',
        'g1': '#4C3F47',
        'g2': '#6B5162',
        'g3': '#866277',
        'g4': '#B18396',
        'g5': '#C99DA3',
      }
    }, {
      defaultTheme: 'civiltwilight'
    })
  ],
};

export default config;
