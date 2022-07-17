import { useState, useEffect } from "react";
import CountDownBox from "./CountDownBox";
const Clock = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  let interval;
  const startTimer = () => {
    const countDownDate = new Date("July 31,2022 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      //   console.log(days);
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        // this stops Timer
        clearInterval(interval.current);
      } else {
        // this updates the Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  console.log(timerDays);
  return (
    <div className="flex  justify-around lg:justify-between lg:space-x-2 flex-wrap lg:px-12 gap-8">
      <CountDownBox number={timerDays} text="Days" />
      <CountDownBox number={timerHours} text="Hours" />
      <CountDownBox number={timerMinutes} text="Minutes" />
      <CountDownBox number={timerSeconds} text="Seconds" />
    </div>
  );
};
Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default Clock;
