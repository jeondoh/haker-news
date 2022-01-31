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

export default function ContentCards({ commonColor }: ICardColor) {
  return (
    <ContentCard>
      <ContentTitle>
        Nature Neuroscience offers open access publishing
      </ContentTitle>
      <ContentMain>
        The authors of primary research papers accepted by our journal have the
        opportunity to make their work freely available to all upon publication.
      </ContentMain>
      <ContentIconDiv>
        <FavoriteIcon htmlColor={commonColor} fontSize="small" />
        <ContentIconCnt commonColor={commonColor}>1235678</ContentIconCnt>
        <CommentIcon htmlColor={commonColor} fontSize="small" />
        <ContentIconCnt commonColor={commonColor}>3453455</ContentIconCnt>
      </ContentIconDiv>
    </ContentCard>
  );
}
