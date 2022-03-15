import { useInfiniteQuery } from "react-query";
import { getInfiniteCategoryId, QUERY_KEYS } from "../utils/callApi";

/**
 * 카테고리 페이지 infiniteQuery, paging 불러오는 커스텀 훅
 * ###Return : isFetching, data, hasNextPage, fetchNextPage
 * @isFetching(boolean) 쿼리 fetching 여부
 * @data(any[]) api 호출 결과 data
 * @hasNextPage(boolean) 다음페이지가 있는지 체크 여부
 * @fetchNextPage(function) 다음 페이지로 이동 함수
 **/
export function useInfiniteQueryCategory(pageName: string) {
  const category: string = `${pageName}stories`;
  const { isFetching, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    QUERY_KEYS.detail(pageName),
    ({ pageParam }) => getInfiniteCategoryId({ category, pageParam }),
    {
      getNextPageParam: (_lastPage, pages) => {
        return _lastPage.length !== 0 ? pages.length + 1 : undefined;
      },
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5분
      cacheTime: 600000, // 10분
    }
  );
  return { isFetching, data, hasNextPage, fetchNextPage };
}
