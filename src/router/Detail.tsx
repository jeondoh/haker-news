import { useParams } from "react-router-dom";
import { getContentCategoryId, IContentCategory } from "../utils/callApi";
import { useEffect, useState } from "react";
import {
  CardInfoWrapper,
  CommentContent,
  CommentList,
  CommentListWrapper,
  CommentUserId,
  CommentUserInfo,
  CommentUserProfile,
  CommentWrapper,
  CommentWriteTime,
  DetailCardCommentInfo,
  DetailCardInfo,
  DetailCardMain,
  DetailCardTitle,
  DetailCardWrapper,
} from "../styles/DetailCardStyle";
import Loading from "../components/Loading";
import { getDiffCurrentTime, removeHTMLEntities } from "../utils/utilsFn";

export default function Detail() {
  const [data, setData] = useState<IContentCategory>();
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  const paramId: number = Number(params.id);
  // 데이터 fetch
  // 단건 데이터 조회기 때문에 react-query 사용하지 않음
  useEffect(() => {
    const detailData: Promise<IContentCategory> = getContentCategoryId(paramId);
    detailData
      .then((value) => {
        setData(value);
      })
      .then(() => setLoading(false));
  }, [paramId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <DetailCardWrapper>
          <CardInfoWrapper>
            <DetailCardTitle>{data!.title}</DetailCardTitle>
            <DetailCardInfo>
              {getDiffCurrentTime(data!.time)} <span>by {data!.by}</span>
            </DetailCardInfo>
            <DetailCardMain>
              {removeHTMLEntities(data!.text, false)}
            </DetailCardMain>
            <DetailCardCommentInfo>
              {data!.descendants} comments
            </DetailCardCommentInfo>
          </CardInfoWrapper>
          {/* 댓글 */}
          <CommentWrapper>
            <CommentList>
              <CommentListWrapper>
                <CommentUserInfo>
                  <CommentUserProfile
                    src={require("../images/userProfile.png")}
                    alt="Profile"
                  />
                  <CommentUserId>Ask</CommentUserId>
                </CommentUserInfo>
                <CommentContent>
                  내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                </CommentContent>
                <CommentWriteTime>
                  13 m ago
                  {/*{getDiffCurrentTime(data!.time)}*/}
                </CommentWriteTime>
              </CommentListWrapper>
            </CommentList>
          </CommentWrapper>
        </DetailCardWrapper>
      )}
    </>
  );
}
