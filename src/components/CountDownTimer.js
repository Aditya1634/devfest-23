import React, { useEffect, useState } from 'react';
import '../styles/CountDownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('December 30, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
      <div className="timer-item">
        <div className="timer-number">{timeLeft.days}</div>
        <div className="timer-label">Days</div>
      </div>
      <span>:</span>
      <div className="timer-item">
        <div className="timer-number">{timeLeft.hours}</div>
        <div className="timer-label">Hours</div>
      </div>
      <span>:</span>
      <div className="timer-item">
        <div className="timer-number">{timeLeft.minutes}</div>
        <div className="timer-label">Minutes</div>
      </div>
      <span>:</span>
      <div className="timer-item">
        <div className="timer-number">{timeLeft.seconds}</div>
        <div className="timer-label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
