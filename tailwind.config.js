/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "site-blue": "#48b4c3",
        "site-text-grey": "#828282",
      }
    },
    container: {
      padding: "2rem",      
    },
    screens:{
      sm: {'max': '640px'},
      md: {'max': '1024px',
            'min': '640px'} ,
      lg: {'min': '1300px'} ,
    }
  },
  plugins: [],
}

