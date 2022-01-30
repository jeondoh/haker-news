import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 631px;
  background-color: ${(props) => props.theme.bgColor};
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/* 타이틀 카드(메인페이지) 인터페이스 */
interface ITitleCard {
  commonColor: string;
}

/* 타이틀 카드(메인페이지) */
export const TitleCard = styled.div<ITitleCard>`
  position: relative;
  width: 335px;
  height: 63.04px;
  background-color: ${(props) => props.commonColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  flex: none;
  flex-grow: 0;
  order: 1;
  margin: 16px auto;
  &:first-child {
    margin-top: 41px;
  }
`;
/* 타이틀 카드 내 카테고리 제목 */
export const TitleCard_Category = styled.span`
  position: absolute;
  width: 75px;
  height: 20px;
  left: 19px;
  top: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
`;
/* 타이틀 카드 내 부카테고리 제목 */
export const TitleCard_SubCategory = styled.span`
  position: absolute;
  max-width: 140px;
  height: 12px;
  left: 19px;
  top: 36px;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  text-align: left;
  color: #ffffff;
`;
/* 타이틀 카드 내 버튼 */
export const TitleCard_Btn = styled.button<ITitleCard>`
  position: absolute;
  width: 70px;
  height: 30px;
  left: 245px;
  top: 17px;
  background-color: #ffffff;
  border: none;
  border-radius: 121px;
  cursor: pointer;
  ${(props) =>
    props.children &&
    css`
      color: ${props.commonColor};
    `}
`;
/* 내용 카드 */
export const ContentCard = styled.div`
  height: auto;
  width: 335px;
  margin: 16px auto;
  padding: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  flex: none;
  order: 3;
  flex-grow: 0;
  background-color: ${(props) => props.theme.cardBgColor};
`;
