import { useEffect, useState } from "react";

// 카테고리 URL 가져오기
export const subTitleUrl = (urlStr: string): string => {
  const reUrl = urlStr?.match(/^(http(s)?:\/\/)([a-z0-9-_.]*)/);
  if (reUrl) {
    return reUrl[0].replace(/^((http)(s)?:\/\/)?(www\.)?/, "");
  }
  return "";
};
// 현재시간과 작성시간 시간 차이 return 함수
export const getDiffCurrentTime = (unixTime: number): string => {
  // 데이터가 Unix 시간으로 들어옴
  const now = new Date();
  const writeDate = new Date(unixTime * 1000);
  const diffTime = now.getTime() - writeDate.getTime();
  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinute = Math.floor(diffTime / (1000 * 60));

  let resultDiff = `${diffMinute} m ago`;
  if (diffMinute >= 60) {
    resultDiff = `${diffHour} h ago`;
    if (diffHour >= 24) {
      resultDiff = `${diffDay} d ago`;
    }
  }
  return resultDiff;
};
// 시간변환
export const replaceUnixTime = (unixTime: number): string => {
  // 데이터가 Unix 시간으로 들어옴
  const writeDate = new Date(unixTime * 1000);
  const getMonth = (writeDate.getMonth() + 1).toString().padStart(2, "0");
  const getDay = writeDate.getDay().toString().padStart(2, "0");
  const getHours = writeDate.getHours().toString().padStart(2, "0");
  const getMinutes = writeDate.getMinutes().toString().padStart(2, "0");

  return `${writeDate.getFullYear()}/${getMonth}/${getDay} ${getHours}:${getMinutes}`;
};
// 특수문자 제거
export const removeHTMLEntities = (
  textData: string,
  isSlice: boolean
): string => {
  if (textData) {
    let result = isSlice ? textData.slice(0, 300) : textData;
    result = result.replaceAll(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, " ");
    result = result.replaceAll(
      /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
      " "
    );
    result = result.replaceAll("&#x27;", "'");
    return `${result}...`;
  }
  return "";
};
/**
 * 현재시간 가져오기(분단위) 커스텀 훅
 * ###Return : timer, setIntervalTime
 * @timer(string) 현재시간
 * @setIntervalTime(function) 함수실행 반복시간을 설정할 수 있는 함수
 **/

export default function useTimer() {
  // setInterval 시간 status
  const [intervalTime, setIntervalTime] = useState(60000);
  const [timer, setTimer] = useState("00:00");
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`);
  };
  const startTimer = () => {
    setInterval(currentTimer, intervalTime);
  };

  useEffect(() => {
    // 최초 1회 실행
    currentTimer();
  }, []);

  // intervalTime 만큼 반복실행
  startTimer();

  return { timer, setIntervalTime };
}
