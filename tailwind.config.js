module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    extend: {
      container: {
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        "black-900": "#1C1C1C",
        "black-800": "#2D2D2D",
        green: "#62DB54",
        blue: "#09ACF5",
      },
      fontSize: {
        'sm':'0.875rem',
        'lg': '1.125rem',
        '2xl': '1.5rem',
        '5xl':'3rem',
      },
      // fontFamily: {
      //   'display': ['Azeret Mono','Noto Sans TC', ...defaultTheme.fontFamily.mono],
      // },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require ( 'tailwind-scrollbar' ) , ],
};
