import styled from "styled-components";

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
export const Wrapper_Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 51px;
`;
export const Wrapper_Img = styled.div`
  cursor: pointer;
`;

/* 하단바 이미지 */
export const Img = styled.img`
  display: block;
  width: 32px;
  height: 32px;
`;
/* 하단바 이미지 글자 */
export const Img_Text = styled.p`
  width: 31px;
  text-align: center;
  vertical-align: bottom;
  font-size: 8.5px;
  line-height: 10px;
  color: ${(props) => props.theme.textColor};
`;
