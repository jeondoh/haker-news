import {
  TitleCard,
  TitleCardBtn,
  TitleCardCategory,
  TitleCardSubCategory,
} from "../styles/CardStyle";
import { ICard } from "../utils/TitleCardData";

export default function TitleCards({ category, subCategory, color }: ICard) {
  return (
    <TitleCard commonColor={color}>
      <TitleCardCategory>{category}</TitleCardCategory>
      <TitleCardSubCategory>{subCategory}</TitleCardSubCategory>
      <TitleCardBtn commonColor={color}>More</TitleCardBtn>
    </TitleCard>
  );
}
