import { useEffect, useState } from "react";

export default function useTimer() {
  // setInterval 시간 status
  const [intervalTime, setIntervalTime] = useState(60000);
  // 실시간 가져오기(분단위) 커스텀 훅
  const [timer, setTimer] = useState("00:00");
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`);
  };
  const startTimer = () => {
    setInterval(currentTimer, intervalTime);
  };

  useEffect(() => {
    // 최초 1회 실행
    currentTimer();
    console.log("최초1회실행");
  }, []);

  // intervalTime 만큼 반복실행
  startTimer();

  return [timer, setIntervalTime];
}
