import { useQueries } from "react-query";

const BASE_PATH = "https://hacker-news.firebaseio.com/v0";

/* 카테고리별 API Fetch */
export function getCategoryIds(category: string) {
  return fetch(`${BASE_PATH}/${category}.json`).then((res) => res.json());
}
/* 카테고리별 API */
export function GetAPIDatas() {
  return useQueries([
    {
      queryKey: ["getTopId", "top-stories"],
      queryFn: () => getCategoryIds("topstories"),
    },
    {
      queryKey: ["getNewId", "new-stories"],
      queryFn: () => getCategoryIds("newstories"),
    },
    {
      queryKey: ["getAskId", "ask-stories"],
      queryFn: () => getCategoryIds("askstories"),
    },
    {
      queryKey: ["getShowId", "show-stories"],
      queryFn: () => getCategoryIds("showstories"),
    },
    {
      queryKey: ["getJobId", "job-stories"],
      queryFn: () => getCategoryIds("jobstories"),
    },
  ]);
}
