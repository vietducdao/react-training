import React, { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";

// dinh nghia
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Hàm để cập nhật thời gian
    const updateClock = () => {
      setTime(new Date());
    };

    // intervalId de update time/s
    const intervalId = setInterval(updateClock, 1000);

    // clean up interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // ham rong de chay khi unmount

  return (
    <div>
      <TimeDisplay time={time} />
    </div>
  );
};

export default Clock;
