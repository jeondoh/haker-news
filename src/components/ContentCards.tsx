import {
  ContentCard,
  ContentIconCnt,
  ContentIconDiv,
  ContentTitle,
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
        <ContentCard key={data.id}>
          <ContentTitle>
            <Link
              to={`/${category?.replace(" 5", "").toLowerCase()}/${data.id}`}
              state={{ cardId: data.id }}
            >
              {data.title}
            </Link>
          </ContentTitle>
          {/*<ContentMain></ContentMain>*/}
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
      ))}
    </>
  );
}
