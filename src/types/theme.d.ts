import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        default: string;
        darker: string;
        dark: string;
        lighter: string;
        light: string;
      };
      secondary: {
        default: string;
        darker: string;
        dark: string;
        lighter: string;
        light: string;
      };
      black: string;
      light: string;
      white: string;
      danger: string;
      ok: string;
      warning: string;
      info: string;
    };
  }
}
