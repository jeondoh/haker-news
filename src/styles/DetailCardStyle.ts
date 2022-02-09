import styled from "styled-components";

/* 디테일 페이지 Wrapper */
export const DetailCardWrapper = styled.div`
  font-family: Pretendard, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  background-color: ${(props) => props.theme.bgColor};
`;
export const CardInfoWrapper = styled.div`
  padding: 20px;
`;
/* 디테일 페이지 타이틀 */
export const DetailCardTitle = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 110%;
  padding: 10px 0;
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
export const CommentWrapper = styled.div`
  height: auto;
  margin-left: 10px;
`;
/* 댓글 List Wrapper */
export const CommentListWrapper = styled.div`
  padding: 15px 10px;
`;
/* 댓글 작성자 정보 */
export const CommentUserInfo = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: auto;
  height: 20px;
`;
/* 댓글 작성자 프로필 사진 */
export const CommentUserProfile = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`;
/* 댓글 작성자 */
export const CommentUserId = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 140%;
  margin-left: 6px;
`;
/* 댓글 내용 */
export const CommentContent = styled.p`
  font-size: 14px;
  line-height: 140%;
  margin: 10px 0;
`;
/* 댓글 작성 시간 */
export const CommentWriteTime = styled.p`
  font-size: 12px;
  line-height: 110%;
  color: ${(props) => props.theme.textColor};
`;
