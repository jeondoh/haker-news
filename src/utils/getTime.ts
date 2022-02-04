import { useEffect, useState } from "react";

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
