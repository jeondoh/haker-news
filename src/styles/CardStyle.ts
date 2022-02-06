import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 631px;
  background-color: ${(props) => props.theme.bgColor};
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: ${(props) => props.theme.textBoldColor};
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;
/* 타이틀 카드(메인페이지) 인터페이스 */
export interface ICardColor {
  commonColor: string;
  index?: number;
  category?: string;
}
/* 타이틀 카드(메인페이지) */
export const TitleCard = styled.div<ICardColor>`
  position: relative;
  width: 335px;
  height: 63.04px;
  background-color: ${(props) => props.commonColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
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
  box-shadow: 0 4px 4px ${(props) => props.theme.cardShadow};
  border-radius: 20px;
  background-color: ${(props) => props.theme.bodyBgColor};
`;
/* 내용 카드 > 제목 */
export const ContentTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.textBoldColor};
`;
/* 내용 카드 > 내용 */
export const ContentMain = styled.p`
  padding-top: 13px;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.textBoldColor};
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
export const CategoryPagWrapper = styled.div`
  width: 100%;
  font-family: Pretendard, sans-serif;
`;

/* 카테고리별 색상 인터페이스 */
export interface ICategoryColor {
  categoryColor: string;
}
/* 카테고리페이지 > 타이틀 */
export const CategoryPageTitle = styled.div<ICategoryColor>`
  height: 56px;
  border-bottom: 0.2px solid lightgray;
  span {
    display: flex;
    padding: 10px 0 10px 20px;
    align-items: center;
    font-weight: bold;
    font-size: 36px;
    line-height: 100%;
    color: ${(props) => props.categoryColor};
  }
`;
/* 카테고리페이지 > 카드 */
export const CategoryPageContentCard = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 1px auto;
  padding: 20px;
  background-color: ${(props) => props.theme.bodyBgColor};
  border-bottom: 0.2px solid lightgray;
  &:last-child {
    border-bottom: none;
  }
`;
/* 카테고리페이지 > 게시글 URL */
export const CategoryPageNewsUrl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  max-width: 371px;
  height: 20px;
  border: 1px solid #909090;
  border-radius: 12.5px;
  margin: 10px 0;
  cursor: pointer;
  span {
    font-weight: bold;
    font-size: 10px;
    color: ${(props) => props.theme.textColor};
  }
`;
/* 카테고리페이지 > 부제목 */
export const CategoryPageNewsTitle = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;
  color: ${(props) => props.theme.textBoldColor};
  margin: 10px 0;
`;
/* 카테고리페이지 > 정보 */
export const CategoryPageNewsInfo = styled.p`
  font-size: 10px;
  line-height: 110%;
  margin: 10px 0;
  span {
    font-weight: bold;
  }
`;
/* 무한스크롤 인식 DIV */
export const CategoryInfiniteDiv = styled.div`
  width: 100%;
  height: 120px;
`;
