import {
  CategoryPageContentCard,
  CategoryPageNewsInfo,
  CategoryPageNewsTitle,
  CategoryPageNewsUrl,
  CategoryPageTitle,
  CategoryPagWrapper,
} from "../styles/CardStyle";
import {
  IContentCategory,
  useGetCategoryInfo,
  useInfiniteQueryCategory,
} from "../utils/callApi";

export default function Page() {
  const { currentTitle, titleArr } = useGetCategoryInfo();
  const { isFetching, data, hasNextPage, fetchNextPage } =
    useInfiniteQueryCategory(currentTitle.toLowerCase());

  return (
    <CategoryPagWrapper>
      <CategoryPageTitle categoryColor={titleArr?.color ?? "#FF6600"}>
        <span>{currentTitle}</span>
      </CategoryPageTitle>
      {!isFetching
        ? data?.pages.map((group: IContentCategory[]) => {
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
                <CategoryPageNewsTitle>{value.title}</CategoryPageNewsTitle>
                <CategoryPageNewsInfo>
                  {value.score} points <span>by {value.by}</span>
                  <br />
                  {getDiffCurrentTime(value.time)}{" "}
                  {getArrayLength(value.kids) ?? 0} comments
                </CategoryPageNewsInfo>
              </CategoryPageContentCard>
            ));
          })
        : null}
      {hasNextPage && !isFetching ? (
        <button onClick={() => fetchNextPage()}>sdfs</button>
      ) : null}
    </CategoryPagWrapper>
  );
}

// 카테고리 URL 가져오기
const subTitleUrl = (urlStr: string): string => {
  const reUrl = urlStr?.match(/^(http(s)?:\/\/)([a-z0-9-_.]*)/);
  if (reUrl) {
    return reUrl[0].replace(/^((http)(s)?:\/\/)?(www\.)?/, "");
  }
  return "";
};

// comment 길이 return 함수
const getArrayLength = (kidsArr: number[]): number => kidsArr?.length;

// 현재시간과 작성시간 시간 차이 return 함수
const getDiffCurrentTime = (unixTime: number): string => {
  // 데이터가 Unix 시간으로 들어옴
  const now = new Date();
  const writeDate = new Date(unixTime * 1000);
  const diffTime = now.getTime() - writeDate.getTime();
  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinute = Math.floor(diffTime / (1000 * 60));

  let resultDiff = `${diffMinute} m ago`;
  if (diffMinute >= 60) {
    resultDiff = `${diffHour} h ago`;
    if (diffHour >= 24) {
      resultDiff = `${diffDay} d ago`;
    }
  }
  return resultDiff;
};
