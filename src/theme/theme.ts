import "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "#F5F5F5",
  textColor: "#909090",
  textBoldColor: "#000000",
  bodyBgColor: "#F7F7F7",
  cardShadow: "rgba(0, 0, 0, 0.15)",
  isDark: false,
};

export const darkTheme: DefaultTheme = {
  bgColor: "#2F3640",
  textColor: "whitesmoke",
  textBoldColor: "#FFFFFF",
  bodyBgColor: "transparent",
  cardShadow: "rgba(255, 255, 255, 0.15)",
  isDark: true,
};
