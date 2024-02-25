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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '-100': '-100px',
        '-120': '-120px',
        '-140': '-140px',
       
      },
      translate: {
        '-20.5': '-20.5px',
        '-21': '-21px',
        '-21.5': '-21.5px',
        '-22': '-22px',
        '-22.5': '-22.5px',
        '-23': '-23px',
        '-23.5': '-23.5px',
        '-24': '-24px',
        '-24.5': '-24.5px',
        '-25': '-25px',

        
        // Add as many as you need
      }
    },
  },
  plugins: [],
};
export default config;
