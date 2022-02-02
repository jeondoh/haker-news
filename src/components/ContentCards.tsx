import {
  ContentIconDiv,
  ContentMain,
  ContentTitle,
  ContentCard,
  ContentIconCnt,
} from "../styles/CardStyle";
import { ICardColor } from "../styles/CardStyle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { useQueryClient } from "react-query";
import { IContentCategory, queryKeys } from "../utils/callApi";

export default function ContentCards({ commonColor, index }: ICardColor) {
  const queryClient = useQueryClient();
  const keys = Object.keys(queryKeys);
  const value = queryKeys[keys[index!]];
  const cachedData: IContentCategory[] = queryClient.getQueryData(value)!;

  return (
    <>
      {cachedData?.map((data) => (
        <ContentCard key={data.id}>
          <ContentTitle>{data.title}</ContentTitle>
          <ContentMain></ContentMain>
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
