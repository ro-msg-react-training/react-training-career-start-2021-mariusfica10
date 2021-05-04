import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const themeApp = createMuiTheme({
  palette: {
    primary: {
      main: "#1E5FA4", //blue
      light: "#6BB7D0 ", //light blue
      dark: "#133C55", //dark blue
    },
    secondary: {
      light: "#f9c929", //light yellow
      main: "#FFFFFF", //pure white
      dark: "#f2ac0a", //dark yellow
    },
    background: {
      default: "#e9ebee",
    },
    text: {
      primary: "#133C55", //dark blue
    },
  },
});

export default themeApp;
