import {
  ContentCard,
  ContentIconCnt,
  ContentIconDiv,
  ContentTitle,
  ContentMain,
  ICardColor,
} from "../styles/CardStyle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { useQueryClient } from "react-query";
import {
  IContentCategory,
  QUERY_FILTER_KEYS,
  QUERY_KEYS,
} from "../utils/callApi";
import { Link } from "react-router-dom";

export default function ContentCards({
  commonColor,
  index,
  category,
}: ICardColor) {
  const queryClient = useQueryClient();
  const value = QUERY_KEYS.list(QUERY_FILTER_KEYS[index!][0]);
  const cachedData: IContentCategory[] = queryClient.getQueryData(value)!;

  return (
    <>
      {cachedData?.map((data) => (
        <Link
          to={`/${category?.replace(" 5", "").toLowerCase()}/${data.id}`}
          state={{ cardId: data.id }}
        >
          <ContentCard key={data.id}>
            <ContentTitle>{data.title}</ContentTitle>
            {data.text ? (
              <ContentMain>{removeHTMLEntities(data.text)}</ContentMain>
            ) : null}
            <ContentIconDiv>
              <FavoriteIcon htmlColor={commonColor} fontSize="small" />
              <ContentIconCnt commonColor={commonColor}>
                {data.score ?? 0}
              </ContentIconCnt>
              <CommentIcon htmlColor={commonColor} fontSize="small" />
              <ContentIconCnt commonColor={commonColor}>
                {data.descendants ?? 0}
              </ContentIconCnt>
            </ContentIconDiv>
          </ContentCard>
        </Link>
      ))}
    </>
  );
}
// 특수문자 제거
const removeHTMLEntities = (textData: string): string => {
  let result = textData.slice(0, 300);
  result = result.replaceAll(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
  result = result.replaceAll(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
  result = result.replaceAll("&#x27;", "'");
  return `${result}...`;
};
