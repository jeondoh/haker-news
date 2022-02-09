import {
  CommentContent,
  CommentListWrapper,
  CommentUserId,
  CommentUserInfo,
  CommentUserProfile,
  CommentWriteTime,
} from "../styles/DetailCardStyle";
import { getDiffCurrentTime, removeHTMLEntities } from "../utils/utilsFn";
import { useEffect, useState } from "react";
import { getAPIById, IContentCategory } from "../utils/callApi";
import Comments from "./Comments";
import { Link } from "react-router-dom";

interface IComments {
  commentId: number;
  newsId: number;
}

export default function Comment({ commentId, newsId }: IComments) {
  const [data, setData] = useState<IContentCategory>();

  useEffect(() => {
    const detailData: Promise<IContentCategory> = getAPIById(commentId);
    detailData.then((value) => {
      setData(value);
    });
  }, [commentId]);

  return (
    <CommentListWrapper>
      {data && data.text ? (
        <>
          <CommentUserInfo>
            {newsId === data.parent ? (
              <CommentUserProfile
                src={require("../images/userProfile.png")}
                alt="Profile"
              />
            ) : (
              <CommentUserProfile
                src={require("../images/reply.png")}
                alt="Reply"
              />
            )}
            <CommentUserId>
              <Link to={`/user/${data.by}`}>{data.by}</Link>
            </CommentUserId>
          </CommentUserInfo>
          <CommentContent>
            {removeHTMLEntities(data.text, false)}
          </CommentContent>
          <CommentWriteTime>{getDiffCurrentTime(data.time)}</CommentWriteTime>
          {data.kids ? <Comments kidsIdArr={data.kids} newsId={0} /> : null}
        </>
      ) : null}
    </CommentListWrapper>
  );
}
