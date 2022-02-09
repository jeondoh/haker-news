import { Link, useParams } from "react-router-dom";
import { getAPIById, IContentCategory } from "../utils/callApi";
import { useEffect, useState } from "react";
import {
  CardInfoWrapper,
  DetailCardCommentInfo,
  DetailCardInfo,
  DetailCardMain,
  DetailCardTitle,
  DetailCardWrapper,
} from "../styles/DetailCardStyle";
import Loading from "../components/Loading";
import { getDiffCurrentTime, removeHTMLEntities } from "../utils/utilsFn";
import Comments from "../components/Comments";

export default function Detail() {
  const [data, setData] = useState<IContentCategory>();
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  const paramId: number = Number(params.id);
  // 데이터 fetch
  // 단건 데이터 조회기 때문에 react-query 사용하지 않음
  useEffect(() => {
    const detailData: Promise<IContentCategory> = getAPIById(paramId);
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
              {getDiffCurrentTime(data!.time)}{" "}
              <Link to={`/user/${data!.by}`}>
                <span>by {data!.by}</span>
              </Link>
            </DetailCardInfo>
            <DetailCardMain>
              {removeHTMLEntities(data!.text, false)}
            </DetailCardMain>
            <DetailCardCommentInfo>
              {data!.descendants ?? 0} comments
            </DetailCardCommentInfo>
          </CardInfoWrapper>
          {/* 댓글 */}
          <Comments kidsIdArr={data!.kids} newsId={paramId} />
        </DetailCardWrapper>
      )}
    </>
  );
}
