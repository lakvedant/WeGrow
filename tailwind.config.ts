import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          50: '#F5F5F5',
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          90: '#141414',
          100: '#F9F9F9'
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          20: '#52BEFF',
          50: '#309BDC',
          100: '#012269'
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/home-page.png')",
        'bg-img-2': "url('/g.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        'xs': '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },

      spacing: {
        'worksButtonx' : '884px',
        'worksButtony' : '398px'
      }
    },
  },
  plugins: [],
};
export default config;
