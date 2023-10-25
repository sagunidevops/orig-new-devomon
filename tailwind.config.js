/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'custom-xsm': '576px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: {        
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "70px",
          "2xl": "6rem",
        },
      },
      boxShadow: {
        shadowPopup: ["box-shadow: 11px 11px 15px 0px #2253F54D;"],
        hero_btn_shadow: ["box-shadow: 0px 0px 0px 5px #2248C5, 0px 0px 17px 0px rgba(0, 0, 0, 0.30);"],
      },
      backgroundImage: {
        aboutBgImg: "url('./assets/images/png/about_bg_img.png')",
        comingSoonBgImg: "url('./assets/images/svg/coming_soon_logo.svg')",
        coming_soon_bg_img: "url('./assets/images/png/coming_soon_bg_img.png')",
        devomonCallistoBattelBg:
        "url('./assets/images/webp/devomon-callisto-battle-bg.webp')",
        latestNews_bg_img: "url('./assets/images/homepageImages/webp/latest_news.webp')",
        latestNews_bg_color: "url('./assets/images/homepageImages/svg/latest_news_bg.svg')"
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        raleway: ['"Raleway", sans-serif'],
        cinzel: ['"Cinzel", serif'],
      },
    },
  },
  plugins: [],
};
