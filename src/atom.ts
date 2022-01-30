import { atom } from "recoil";

/* 라이트&다크 모드 */
export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
