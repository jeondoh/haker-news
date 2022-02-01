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
import {
  getContentCategory,
  IContentCategory,
  queryKeys,
} from "../utils/callApi";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function ContentCards({ commonColor, index }: ICardColor) {
  const [contentData, setContentData] = useState<IContentCategory[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const queryClient = useQueryClient();
  const keys = Object.keys(queryKeys);
  const value = queryKeys[keys[index!]];
  const cachedData: Array<number> = queryClient.getQueryData(value)!;

  useEffect(() => {
    (async () => {
      const resultData: IContentCategory[] = await getContentCategory(
        cachedData
      );
      setContentData(resultData);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {!isLoading ? (
        contentData?.map((data) => (
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
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}
