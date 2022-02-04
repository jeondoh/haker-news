import "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "#F5F5F5",
  textColor: "black",
  bodyBgColor: "#F7F7F7",
  isDark: false,
};

export const darkTheme: DefaultTheme = {
  bgColor: "#2F3640",
  textColor: "#FFFFFF",
  bodyBgColor: "transparent",
  isDark: true,
};
