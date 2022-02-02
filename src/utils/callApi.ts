import { useQueries } from "react-query";
import axios from "axios";

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
/* 쿼리 key 인터페이스 */
interface IQueryKey {
  [key: string]: string[];
}
/* 쿼리 key */
export const queryKeys: IQueryKey = {
  top: ["stories", "top-stories"],
  new: ["stories", "new-stories"],
  ask: ["stories", "ask-stories"],
  show: ["stories", "show-stories"],
  job: ["stories", "job-stories"],
};
/* 카테고리별 API Fetch */
const getHomeCategoryId = async (category: string) => {
  const data = await axios
    .get(`${BASE_PATH}/${category}.json`)
    .then((value) => value.data.slice(0, 5));
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
export function useHomeAPIData() {
  return useQueries([
    {
      queryKey: queryKeys.top,
      queryFn: () => getHomeCategoryId("topstories"),
      // 윈도우를 포커스 했을때 refetch 되지 않음. (default : true)
      refetchOnWindowFocus: false,
    },
    {
      queryKey: queryKeys.new,
      queryFn: () => getHomeCategoryId("newstories"),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: queryKeys.ask,
      queryFn: () => getHomeCategoryId("askstories"),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: queryKeys.show,
      queryFn: () => getHomeCategoryId("showstories"),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: queryKeys.job,
      queryFn: () => getHomeCategoryId("jobstories"),
      refetchOnWindowFocus: false,
    },
  ]);
}
