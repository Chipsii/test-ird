/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        tomato: {
          "100": "#e65527",
          "200": "rgba(230, 85, 39, 0.15)",
          "300": "rgba(221, 76, 65, 0.15)",
          "400": "rgba(230, 85, 39, 0.1)",
        },
        gray: {
          "100": "#2a2a2d",
          "200": "#101010",
          "300": "rgba(16, 16, 16, 0.65)",
          "400": "rgba(0, 0, 0, 0.1)",
          "500": "rgba(16, 16, 16, 0.1)",
          "600": "rgba(16, 16, 16, 0.5)",
          "700": "rgba(16, 16, 16, 0.7)",
          "800": "rgba(255, 255, 255, 0.05)",
          "900": "rgba(16, 16, 16, 0.05)",
        },
        "white-mode-main-text-color": "#212121",
        whitesmoke: {
          "100": "#f9f9fa",
          "200": "#f0f2f4",
          "300": "#eef0f2",
        },
        "label-light-primary": "#000",
        olivedrab: "rgba(104, 127, 42, 0.15)",
        orange: {
          "100": "#ffa202",
          "200": "rgba(255, 164, 40, 0.28)",
        },
        gainsboro: {
          "100": "#e3e3e6",
          "200": "#e1e1e2",
          "300": "#d9d9d9",
          "400": "rgba(232, 232, 232, 0.1)",
        },
        darkorange: "#f36c01",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "sf-subheadline-semibold": "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
        mini: "15px",
        "6xs": "7px",
        "6xl": "25px",
        "2xs": "11px",
        "8xs": "5px",
        "4xs": "9px",
        "lgi-3": "19.3px",
        "4xs-5": "8.5px",
        "11xs-8": "1.8px",
        "31xl": "50px",
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      mini: "15px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
