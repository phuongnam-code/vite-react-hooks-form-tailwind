import { useState, useEffect } from "react";

export const useDate = () => {
  const locale = 'en-US';
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  const day = currentTime.toLocaleDateString(locale, { weekday: 'long' });

  const date = `${day}, ${currentTime.getDate()} ${currentTime.toLocaleDateString(locale, { month: 'long' })}, ${currentTime.getFullYear()}`;

  const time = currentTime.toLocaleTimeString(locale, {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  const hour = currentTime.getHours();
  const wish = `${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}`;



  return {
    date,
    time,
    wish,
  };
};
