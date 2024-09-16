import React, { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // update tgian/giay
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // clear khi component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Current Time: {currentTime.toLocaleTimeString()}</h1>
    </div>
  );
};

export default TimeDisplay;
