import { useEffect, useState } from "react";
import titleCardData, { ICard } from "../utils/TitleCardData";
import TitleCards from "./TitleCards";
import ContentCards from "./ContentCards";
import { useHomeAPIData } from "../utils/callApi";
import Loading from "./Loading";

export default function Cards() {
  // 카테고리별 카드 정보 status
  const [titleData, setTitleData] = useState<ICard[]>([]);
  // API 로딩여부 status
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  // API 데이터 불러오기
  const resultData = useHomeAPIData();
  // 카테고리별 카드 정보 가져오기
  useEffect(() => {
    setTitleData(() => titleCardData());
    console.log("GET TITLE CARD");
  }, []);
  // 카테고리별 API 결과
  useEffect(() => {
    // isLoadingAll : true = 최종 로딩 완료
    // console.log(resultData);
    setIsLoadingAll(() => !resultData.some((result) => result.isFetching));
  }, [isLoadingAll, resultData]);

  return (
    <>
      {isLoadingAll ? (
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
