/** @type {import('tailwindcss').Config} */
// for angular app using css template
module.exports =  {content: [
  './src/**/*.{html,ts}',
],
theme: {
  extend: {
    
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lg2': '1250px',
      'xl': '1280px',
      '2xl': '1400px',
      '3xl': '1500px',
    },
    colors:{
      "green2":"#86C55A",
      "black34":'#343434',
      "black1b":"#1B1B1B",
      "black2":"#12141D",
      "gray":"#667085",
      "gray2":"#717171",
      "gray3":"#ADADAD",
      "gray4":"#f5f5f5",
      "blue2":"#05ABC9",
      "red2":"#f44336",
      
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      s15: '15px',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '34px',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
},
plugins: [],}

 

