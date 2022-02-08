import { IContentCategory, useInfiniteQueryCategory } from "../utils/callApi";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Loading from "./Loading";
import {
  CategoryInfiniteDiv,
  CategoryPageContentCard,
  CategoryPageNewsInfo,
  CategoryPageNewsTitle,
  CategoryPageNewsUrl,
} from "../styles/CardStyle";
import { Link } from "react-router-dom";
import { getDiffCurrentTime, subTitleUrl } from "../utils/utilsFn";

interface IPages {
  currentTitle: string;
}

export default function Pages({ currentTitle }: IPages) {
  const { isFetching, data, hasNextPage, fetchNextPage } =
    useInfiniteQueryCategory(currentTitle.toLowerCase());

  // 무한 스크롤을 위한 ref
  const [ref, inView] = useInView();
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
        data?.pages.map((group: IContentCategory[]) => {
          return group.map((value) => (
            <CategoryPageContentCard key={value.id}>
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
                  to={`/${currentTitle.toLowerCase()}/${value.id}`}
                  state={{ cardId: value.id }}
                >
                  {value.title}
                </Link>
              </CategoryPageNewsTitle>
              <CategoryPageNewsInfo>
                {value.score} points{" "}
                <Link to={`/user/${value.by}`}>
                  <span>by {value.by}</span>
                </Link>
                <br />
                {getDiffCurrentTime(value.time)} {value.descendants ?? 0}{" "}
                comments
              </CategoryPageNewsInfo>
            </CategoryPageContentCard>
          ));
        })
      )}
      {hasNextPage ? (
        <CategoryInfiniteDiv ref={ref}>
          <Loading />
        </CategoryInfiniteDiv>
      ) : null}
    </>
  );
}
