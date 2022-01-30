import {
  TitleCard,
  TitleCard_Btn,
  TitleCard_Category,
  TitleCard_SubCategory,
} from "../styles/CardStyle";
import { ITitleCard } from "../utils/TitleCardData";

export default function TitleCards({
  category,
  subCategory,
  color,
}: ITitleCard) {
  return (
    <TitleCard commonColor={color}>
      <TitleCard_Category>{category}</TitleCard_Category>
      <TitleCard_SubCategory>{subCategory}</TitleCard_SubCategory>
      <TitleCard_Btn commonColor={color}>More</TitleCard_Btn>
    </TitleCard>
  );
}
