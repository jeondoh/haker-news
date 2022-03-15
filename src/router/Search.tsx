import {
  CategoryInfiniteDiv,
  CategoryPageContentCard,
  CategoryPageNewsInfo,
  CategoryPageNewsTitle,
  CategoryPageNewsUrl,
} from "../styles/CardStyle";
import { getDiffCurrentTime, subTitleUrl } from "../utils/utilsFn";
import { Link, useParams } from "react-router-dom";
import { ISearch } from "../utils/callApi";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { useInfiniteQuerySearch } from "../hooks/useInfiniteQuerySearch";

export default function Search() {
  const { queryString } = useParams();
  const { isFetching, data, hasNextPage, fetchNextPage } =
    useInfiniteQuerySearch(queryString!);

  // 무한 스크롤을 위한 ref
  const [viewRef, inView] = useInView();
  // 무한스크롤
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <>
      {data === undefined && isFetching ? (
        <Loading />
      ) : (
        <>
          {data?.pages.map((group: ISearch[]) => {
            return group.map((value) => (
              <CategoryPageContentCard key={value.objectID}>
                <CategoryPageNewsUrl>
                  <span>
                    <a
                      href={value.url}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                    >
                      {subTitleUrl(value.url)}
                    </a>
                  </span>
                </CategoryPageNewsUrl>
                <CategoryPageNewsTitle>
                  <Link
                    to={`/story/${value.objectID}`}
                    state={{ cardId: value.objectID }}
                  >
                    {value.title}
                  </Link>
                </CategoryPageNewsTitle>
                <CategoryPageNewsInfo>
                  {value.points} points{" "}
                  <Link to={`/user/${value.author}`}>
                    <span>by {value.author}</span>
                  </Link>
                  <br />
                  {getDiffCurrentTime(value.created_at_i)}{" "}
                  {value.num_comments ?? 0} comments
                </CategoryPageNewsInfo>
              </CategoryPageContentCard>
            ));
          })}
          {hasNextPage ? (
            <CategoryInfiniteDiv ref={viewRef}>
              <Loading />
            </CategoryInfiniteDiv>
          ) : null}
        </>
      )}
    </>
  );
}
