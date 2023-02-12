export const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#191923",
      dark: "#191923",
    },
    background: {
      default: "rgb(22, 28, 36)",
      mulled: "#4B406C",
      settingbg: "rgba(22, 28, 36, 0.8)",
    },
    color: {
      setting: "hsl(252, 15%, 65%)",
      bgBlack900: "#f2f2fc",
      bgBlack100: "#fdf9ff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: "red",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};
