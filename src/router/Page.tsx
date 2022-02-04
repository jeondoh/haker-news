import {
  CategoryPageContentCard,
  CategoryPageSubTitle,
} from "../styles/CardStyle";
import { useLocation } from "react-router-dom";
import { useQueryClient } from "react-query";
import { ICard, QUERY_TITLE_KEY } from "../utils/callApi";

export default function Page() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const currentTitle = location.pathname.replace("/", "").toUpperCase();

  const getCachedTitleData: ICard[] | undefined =
    queryClient.getQueryData(QUERY_TITLE_KEY);

  const titleArr = getCachedTitleData?.find((ele) =>
    ele.category.includes(currentTitle)
  );

  return (
    <>
      <CategoryPageSubTitle titleColor={titleArr?.color ?? "#FF6600"}>
        <span>{currentTitle}</span>
      </CategoryPageSubTitle>
      <CategoryPageContentCard></CategoryPageContentCard>
    </>
  );
}
