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
import { removeHTMLEntities } from "../utils/utilsFn";

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
          key={data.id}
          to={`/${category?.replace(" 5", "").toLowerCase()}/${data.id}`}
          state={{ cardId: data.id }}
        >
          <ContentCard>
            <ContentTitle>{data.title}</ContentTitle>
            {data.text ? (
              <ContentMain>{removeHTMLEntities(data.text, true)}</ContentMain>
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
