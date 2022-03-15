/* 카테고리별 API */
import { useQueries } from "react-query";
import {
  getHomeCategoryId,
  QUERY_FILTER_KEYS,
  QUERY_KEYS,
} from "../utils/callApi";

/**
 * 카테고리별 API 커스텀 훅
 * ###Return : isLoading, resultData
 * @isLoading(boolean) isFetching 여부
 * @resultData(UseQueryResult<any[], unknown>) 각 카테고리별 데이터
 **/
export function useHomeAPIData() {
  const resultData = useQueries([
    {
      queryKey: QUERY_KEYS.list(QUERY_FILTER_KEYS[0][0]),
      queryFn: () => getHomeCategoryId(QUERY_FILTER_KEYS[0][1]),
      // 윈도우를 포커스 했을때 refetch 되지 않음. (default : true)
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5분
      cacheTime: 600000, // 10분
    },
    {
      queryKey: QUERY_KEYS.list(QUERY_FILTER_KEYS[1][0]),
      queryFn: () => getHomeCategoryId(QUERY_FILTER_KEYS[1][1]),
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5분
      cacheTime: 600000, // 10분
    },
    {
      queryKey: QUERY_KEYS.list(QUERY_FILTER_KEYS[2][0]),
      queryFn: () => getHomeCategoryId(QUERY_FILTER_KEYS[2][1]),
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5분
      cacheTime: 600000, // 10분
    },
    {
      queryKey: QUERY_KEYS.list(QUERY_FILTER_KEYS[3][0]),
      queryFn: () => getHomeCategoryId(QUERY_FILTER_KEYS[3][1]),
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5분
      cacheTime: 600000, // 10분
    },
    {
      queryKey: QUERY_KEYS.list(QUERY_FILTER_KEYS[4][0]),
      queryFn: () => getHomeCategoryId(QUERY_FILTER_KEYS[4][1]),
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5분
      cacheTime: 600000, // 10분
    },
  ]);
  const isLoading: boolean = !resultData.some((result) => result.isFetching);
  return { isLoading, resultData };
}
