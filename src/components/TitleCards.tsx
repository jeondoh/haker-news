import {
  TitleCard,
  TitleCardBtn,
  TitleCardCategory,
  TitleCardSubCategory,
} from "../styles/CardStyle";
import { ICard } from "../utils/callApi";
import { Link } from "react-router-dom";

export default function TitleCards({ category, subCategory, color }: ICard) {
  return (
    <TitleCard commonColor={color}>
      <TitleCardCategory>{category}</TitleCardCategory>
      <TitleCardSubCategory>{subCategory}</TitleCardSubCategory>
      <TitleCardBtn commonColor={color}>
        <Link to={`/${category.replace(" 5", "").toLowerCase()}`}>More</Link>
      </TitleCardBtn>
    </TitleCard>
  );
}
