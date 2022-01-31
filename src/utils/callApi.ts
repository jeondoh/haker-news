import { useQueries } from "react-query";

const BASE_PATH = "https://hacker-news.firebaseio.com/v0";

/* 카테고리별 API Fetch */
export function getCategoryIds(category: string) {
  return fetch(`${BASE_PATH}/${category}.json`).then((res) => res.json());
}
/* 카테고리별 API */
export function GetAPIData() {
  return useQueries([
    {
      queryKey: ["getTopId", "top-stories"],
      queryFn: () => getCategoryIds("topstories"),
      // 윈도우를 포커스 했을때 refetch 되지 않음. (default : true)
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ["getNewId", "new-stories"],
      queryFn: () => getCategoryIds("newstories"),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ["getAskId", "ask-stories"],
      queryFn: () => getCategoryIds("askstories"),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ["getShowId", "show-stories"],
      queryFn: () => getCategoryIds("showstories"),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ["getJobId", "job-stories"],
      queryFn: () => getCategoryIds("jobstories"),
      refetchOnWindowFocus: false,
    },
  ]);
}
