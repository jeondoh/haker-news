import {
  CategoryPageContentCard,
  CategoryPageTitle,
  CategoryPageNewsUrl,
  CategoryPagWrapper,
  CategoryPageNewsTitle,
  CategoryPageNewsInfo,
} from "../styles/CardStyle";
import { useGetCategoryInfo, useInfiniteQueryCategory } from "../utils/callApi";

export default function Page() {
  const { currentTitle, titleArr } = useGetCategoryInfo();
  const { isFetching, data, hasNextPage, fetchNextPage } =
    useInfiniteQueryCategory(currentTitle.toLowerCase());

  return (
    <CategoryPagWrapper>
      <CategoryPageTitle categoryColor={titleArr?.color ?? "#FF6600"}>
        <span>{currentTitle}</span>
      </CategoryPageTitle>
      <CategoryPageContentCard>
        <CategoryPageNewsUrl>
          <span>500</span>
        </CategoryPageNewsUrl>
        <CategoryPageNewsTitle>The Curse of NixOS</CategoryPageNewsTitle>
        <CategoryPageNewsInfo>
          118 points by menoniac
          <br />
          1d ago 75 comments
        </CategoryPageNewsInfo>
      </CategoryPageContentCard>
      <button onClick={() => fetchNextPage()}>sdfs</button>
    </CategoryPagWrapper>
  );
}
