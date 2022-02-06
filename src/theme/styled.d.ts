import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    textBoldColor: string;
    bgColor: string;
    bodyBgColor: string;
    cardShadow: string;
    isDark: boolean;
  }
}
