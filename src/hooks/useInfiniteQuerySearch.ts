import { useInfiniteQuery } from "react-query";
import { getInfiniteSearchData, ISearch, QUERY_KEYS } from "../utils/callApi";

/**
 * 검색 infiniteQuery, paging 불러오는 커스텀 훅
 * ###Return : isFetching, data, hasNextPage, fetchNextPage
 * @isFetching(boolean) 쿼리 fetching 여부
 * @data(any[]) api 호출 결과 data
 * @hasNextPage(boolean) 다음페이지가 있는지 체크 여부
 * @fetchNextPage(function) 다음 페이지로 이동 함수
 **/
export function useInfiniteQuerySearch(queryString: string) {
  const listName = `search/${queryString}`;
  const { isFetching, data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    ISearch[]
  >(
    QUERY_KEYS.list(listName),
    ({ pageParam }) => getInfiniteSearchData({ queryString, pageParam }),
    {
      getNextPageParam: (_lastPage, pages) => {
        return _lastPage.length !== 0 ? pages.length + 1 : undefined;
      },
      refetchOnWindowFocus: false,
      staleTime: 60000, // 1분
      cacheTime: 120000, // 2분
    }
  );
  return { isFetching, data, hasNextPage, fetchNextPage };
}
