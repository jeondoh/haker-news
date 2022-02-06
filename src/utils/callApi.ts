import { useInfiniteQuery, useQueries, useQueryClient } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

/* 공통 API PATH */
const BASE_PATH = "https://hacker-news.firebaseio.com/v0";
/* API 인터페이스(:id 조회시) */
export interface IContentCategory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
/* 카테고리 */
export interface ICard {
  color: string;
  category: string;
  subCategory: string;
}
/* filter 목록 */
export const QUERY_FILTER_KEYS: string[][] = [
  ["top", "topstories"],
  ["new", "newstories"],
  ["ask", "askstories"],
  ["show", "showstories"],
  ["job", "jobstories"],
];
/* react-query key 인터페이스 */
interface IQueryArrFn {
  (): string[];
}
interface IQueryArrListFn {
  (filters: string): (string | object)[];
}
interface IQueryArrDetailFn {
  (id: string | number): (string | number)[];
}
interface IQueryArr {
  all: string[];
  lists: IQueryArrFn;
  list: IQueryArrListFn;
  details: IQueryArrFn;
  detail: IQueryArrDetailFn;
}
/* react-query key 모음, 효율적 관리를 위해 함수로 나눔 */
export const QUERY_KEYS: IQueryArr = {
  all: ["stories"],
  lists: () => [...QUERY_KEYS.all, "list"],
  list: (filters: string) => [...QUERY_KEYS.lists(), { filters }],
  details: () => [...QUERY_KEYS.all, "detail"],
  detail: (id: string | number) => [...QUERY_KEYS.details(), id],
};
/* 카테고리별 카드 정보 가져오기(임의로 json 만듬) */
export function getTitleInfo() {
  return axios
    .get("https://jeondoh.github.io/FC_Lecture/100_jsonFile/titleCardData.json")
    .then((value) => value.data);
}
/* 카테고리별 API Fetch */
const getHomeCategoryId = async (category: string) => {
  const data = await axios
    .get(`${BASE_PATH}/${category}.json?limitToFirst=5&orderBy="$key"`)
    .then((value) => value.data);
  return await getContentCategory(data);
};
/* 카테고리별 내용 API Fetch (getHomeCategoryId 에서 콜백 호출) */
const getContentCategory = async (idArr: Array<number>) => {
  return await Promise.all(
    idArr.map((id) => {
      return axios
        .get(`${BASE_PATH}/item/${id}.json`)
        .then((value) => value.data);
    })
  );
};
/* 카테고리별 API */
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
/**
 * 카테고리별 카드 정보 불러오기 커스텀 훅
 * ###Return : titleArr
 * @titleArr(ICard | undefined) url 파라메터에 해당되는 ICard 객체, undefined 예외처리 필요
 **/
export function useGetCategoryTitle() {
  const queryClient = useQueryClient();
  const params = useParams();
  const currentTitle: string = params.pageName!;

  const getCachedTitleData: ICard[] | undefined = queryClient.getQueryData(
    QUERY_KEYS.list("title")
  );

  const titleArr: ICard | undefined = getCachedTitleData?.find((ele) =>
    ele.category.includes(currentTitle)
  );
  return titleArr;
}
/* 카테고리 페이지 infiniteQuery 인터페이스 */
interface IInfiniteCategory {
  category: string;
  pageParam: number;
}
/* 카테고리 페이지 fetch Infinite */
const getInfiniteCategoryId = async ({
  category,
  pageParam = 1,
}: IInfiniteCategory) => {
  const startPage = (pageParam - 1) * 10;
  const endPage = startPage + 10;

  const data = await axios
    .get(`${BASE_PATH}/${category}.json?page=${pageParam}`)
    .then((value) => value.data.slice(startPage, endPage));
  return await getContentCategory(data);
};
/**
 * 카테고리 페이지 infiniteQuery, paging 10개씩 불러오는 커스텀 훅
 * ###Return : isFetching, data
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
        // 10페이지로 제한
        if (pages.length < 10) {
          return pages.length + 1;
        }
        return undefined;
      },
      staleTime: 300000, // 5분
      cacheTime: 600000, // 10분
    }
  );
  return { isFetching, data, hasNextPage, fetchNextPage };
}
