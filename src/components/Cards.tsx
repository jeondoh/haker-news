import TitleCards from "./TitleCards";
import ContentCards from "./ContentCards";
import {
  getTitleInfo,
  ICard,
  QUERY_KEYS,
  useHomeAPIData,
} from "../utils/callApi";
import Loading from "./Loading";
import { useQuery } from "react-query";

export default function Cards() {
  // 카테고리별 카드 정보 가져오기
  const { data: titleData } = useQuery<ICard[]>(
    QUERY_KEYS.list("title"),
    () => getTitleInfo(),
    // 변하지 않는 데이터기 때문에 캐싱 무제한 지정
    { staleTime: Infinity, cacheTime: Infinity }
  );
  // API 데이터 불러오기
  const { isLoading } = useHomeAPIData();

  return (
    <>
      {isLoading ? (
        titleData?.map((cardData, index) => (
          <div key={cardData.category}>
            <TitleCards {...cardData} />
            <ContentCards
              commonColor={cardData.color}
              index={index}
              category={cardData.category}
            />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}
