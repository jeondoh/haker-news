import styled, { css } from "styled-components";
import { invertScale } from "framer-motion/types/value/use-inverted-scale";
import { inherits } from "util";

export const Wrapper = styled.div`
  position: relative;
  padding: 0 10px;
  width: 100%;
  height: 83px;
  bottom: 0;
  border-radius: 0 0 50px 50px;
  overflow: hidden;
  border-top: 1px solid #808080;
`;
export const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 51px;
`;
export const WrapperImg = styled.div`
  cursor: pointer;
`;

/* 하단바 이미지 */
const filterInvert = css`
  filter: invert();
`;

export const Img = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  ${(props) => (props.theme.isDark ? filterInvert : "")};
`;
/* 하단바 이미지 글자 */
export const ImgText = styled.p`
  width: 31px;
  text-align: center;
  vertical-align: bottom;
  font-size: 8.5px;
  line-height: 10px;
  color: ${(props) => props.theme.textColor};
`;
