import {
  TitleCard,
  TitleCard_Categroy,
  TitleCard_SubCategroy,
  TitleCard_Btn,
} from "../styles/CardStyle";
import { useEffect, useState } from "react";
import TitleCardData, { ITitleCard } from "../utils/TitleCardData";

export default function TitleCards() {
  const [titleData, setTitleData] = useState<ITitleCard[]>([]);
  useEffect(() => {
    setTitleData(() => TitleCardData());
  }, []);

  return (
    <>
      {titleData?.map((data) => (
        <TitleCard key={data.category} commonColor={data.color}>
          <TitleCard_Categroy>{data.category}</TitleCard_Categroy>
          <TitleCard_SubCategroy>{data.subCategory}</TitleCard_SubCategroy>
          <TitleCard_Btn commonColor={data.color}>More</TitleCard_Btn>
        </TitleCard>
      ))}
    </>
  );
}
