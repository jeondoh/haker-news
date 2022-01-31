import { useEffect, useState } from "react";
import TitleCardData, { ICard } from "../utils/TitleCardData";
import TitleCards from "./TitleCards";
import ContentCards from "./ContentCards";
import { GetAPIDatas } from "../utils/callApi";

export default function Cards() {
  // 카테고리별 카드 정보 status
  const [titleData, setTitleData] = useState<ICard[]>([]);
  // API 로딩여부 status
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  // API 데이터 불러오기
  const resultData = GetAPIDatas();
  // 카테고리별 카드 정보 가져오기
  useEffect(() => {
    setTitleData(() => TitleCardData());
    console.log("GET TITLE CARD");
  }, []);
  // 카테고리별 API 결과
  useEffect(() => {
    console.log(resultData);
    setIsLoadingAll(() => !resultData.some((result) => result.isLoading));
    console.log(isLoadingAll); // isLoadingAll : true = 최종완료
  }, [isLoadingAll, resultData]);

  return (
    <>
      {/* titleData : 메인에 보여질 TOP NEW ASK SHOW JOBS 카드배열 */}
      {titleData?.map((cardData) => (
        <div key={cardData.category}>
          <TitleCards {...cardData} />
          <ContentCards commonColor={cardData.color} />
        </div>
      ))}
    </>
  );
}
