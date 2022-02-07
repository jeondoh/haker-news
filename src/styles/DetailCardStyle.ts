import styled from "styled-components";

/* 디테일 페이지 Wrapper */
export const DetailCardWrapper = styled.div`
  font-family: Pretendard, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  height: auto;
  background-color: ${(props) => props.theme.bgColor};
`;
/* 디테일 페이지 타이틀 */
export const DetailCardTitle = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 110%;
  margin: 10px 0;
`;
/* 디테일 페이지 글 정보 */
export const DetailCardInfo = styled.p`
  margin: 10px 0;
  font-size: 12px;
  line-height: 110%;
  color: ${(props) => props.theme.textColor};
  span {
    font-weight: bold;
  }
`;
/* 디테일 페이지 본문 */
export const DetailCardMain = styled.p`
  font-size: 14px;
  line-height: 140%;
  margin: 10px 0;
`;
/* 디테일 페이지 댓글수 */
export const DetailCardCommentInfo = styled.p`
  margin-top: 40px;
  font-size: 12px;
  line-height: 110%;
  color: ${(props) => props.theme.textColor};
  span {
    font-weight: bold;
  }
`;
/* 디테일 페이지 댓글 div */
export const DetailCardCommentDiv = styled.div`
  margin-top: 42px;
  height: auto;
`;
