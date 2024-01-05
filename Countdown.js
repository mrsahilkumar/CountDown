import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (timeUnit) => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

  return (
    <div className="countdown-container">
      {time.total > 0 && (
        <div>
          {formatTime(time.days)} Days {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
        </div>
      )}
      {time.total <= 0 && (
        <div>Countdown Completed!</div>
      )}
    </div>
  );
};

export default Countdown;
