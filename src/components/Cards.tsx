import { useEffect, useState } from "react";
import titleCardData, { ICard } from "../utils/TitleCardData";
import TitleCards from "./TitleCards";
import ContentCards from "./ContentCards";
import { useHomeAPIData } from "../utils/callApi";
import Loading from "./Loading";

export default function Cards() {
  // 카테고리별 카드 정보 status
  const [titleData, setTitleData] = useState<ICard[]>([]);
  // API 데이터 불러오기
  const { isLoading } = useHomeAPIData();
  // 카테고리별 카드 정보 가져오기
  useEffect(() => {
    setTitleData(() => titleCardData());
    console.log("GET TITLE CARD");
  }, []);

  return (
    <>
      {isLoading ? (
        titleData?.map((cardData, index) => (
          <div key={cardData.category}>
            <TitleCards {...cardData} />
            <ContentCards commonColor={cardData.color} index={index} />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}
