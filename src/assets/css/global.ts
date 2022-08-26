import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.8rem;
  }
`;

export const globalMainTheme = {
  colors: {
    primary: {
      default: "#2A82B4",
      darker: "#154C81",
      dark: "#082656",
      lighter: "#7DCEE8",
      light: "#D4F6FB",
    },
    secondary: {
      default: "#C15492",
      darker: "#A53D83",
      dark: "#6F1A64",
      lighter: "#D97DA8",
      light: "#F8C0CF",
    },
    black: "#333333",
    light: "#EEEEEE",
    white: "#FFFFF",
    danger: "#E22C26",
    ok: "#3D9E2C",
    warning: "#FDBC40",
    info: "#3CB2EA",
  },
};
