import styled, { css } from "styled-components";

const InvertDarkColor = css`
  background-color: slategray;
  border: slategray;
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.15);
  &:hover {
    filter: brightness(1.5);
  }
`;

const InvertLightColor = css`
  background-color: ghostwhite;
  border: ghostwhite;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    filter: brightness(0.8);
  }
`;

export const FloatDiv = styled.div`
  position: absolute;
  bottom: 100px;
  right: 10px;
  width: 40px;
`;
export const FloatWrapper = styled.div`
  position: fixed;
  width: 40px;
  height: 90px;
`;
/* 다크모드 토글 버튼 */
export const ThemeToggleBtn = styled.button`
  cursor: pointer;
  z-index: 999;
  font-size: 14px;
  width: 100%;
  height: 40px;
  border-radius: 30px;
  ${(props) => (props.theme.isDark ? InvertDarkColor : InvertLightColor)};
`;
/* 최상위로 이동 버튼 */
export const ShowTopBtn = styled.button`
  cursor: pointer;
  z-index: 999;
  width: 100%;
  height: 40px;
  border-radius: 30px;
  margin-top: 8px;
  ${(props) => (props.theme.isDark ? InvertDarkColor : InvertLightColor)};
`;
