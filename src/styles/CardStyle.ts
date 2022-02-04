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
export interface ICardColor {
  commonColor: string;
  index?: number;
}
/* 타이틀 카드(메인페이지) */
export const TitleCard = styled.div<ICardColor>`
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
export const TitleCardCategory = styled.span`
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
export const TitleCardSubCategory = styled.span`
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
export const TitleCardBtn = styled.button<ICardColor>`
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
  background-color: ${(props) => props.theme.bodyBgColor};
`;
/* 내용 카드 > 제목 */
export const ContentTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.textColor};
  align-self: stretch;
`;
/* 내용 카드 > 내용 */
export const ContentMain = styled.p`
  padding-top: 13px;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.textColor};
  flex: none;
  order: 1;
  flex-grow: 0;
  align-self: stretch;
`;
/* 내용 카드 > 좋아요, 댓글 Div */
export const ContentIconDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  font-size: 10px;
  svg {
    font-size: 15px;
  }
`;
/* 내용 카드 > 좋아요, 댓글 개수 */
export const ContentIconCnt = styled.span<ICardColor>`
  padding: 0 2px;
  color: ${(props) => props.commonColor};
`;
/* 카테고리페이지 > 부제목 인터페이스 */
interface IDetailSubTitle {
  titleColor: string;
}
/* 카테고리페이지 > 부제목 */
export const CategoryPageSubTitle = styled.div<IDetailSubTitle>`
  height: 56px;
  span {
    display: flex;
    padding: 10px 0 10px 20px;
    align-items: center;
    font-family: Pretendard, sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 100%;
    color: ${(props) => props.titleColor};
  }
  border-bottom: 0.2px solid lightgray;
`;
/* 카테고리페이지 > 카드 */
export const CategoryPageContentCard = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  margin: 1px auto;
  padding: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  background-color: ${(props) => props.theme.bodyBgColor};
`;
