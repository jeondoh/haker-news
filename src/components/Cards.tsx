import { useEffect, useState } from "react";
import TitleCardData, { ITitleCard } from "../utils/TitleCardData";
import TitleCards from "./TitleCards";
import ContentCards from "./ContentCards";

export default function Cards() {
  const [titleData, setTitleData] = useState<ITitleCard[]>([]);

  // 카테고리별 카드 정보 가져오기
  useEffect(() => {
    setTitleData(() => TitleCardData());
    console.log("GET TITLE CARD");
  }, []);

  return (
    <>
      {/* titleData : 메인에 보여질 TOP NEW ASK SHOW JOBS 카드배열 */}
      {titleData?.map((data) => (
        <div key={data.category}>
          <TitleCards {...data} />
          <ContentCards color={data.color} />
        </div>
      ))}
    </>
  );
}
