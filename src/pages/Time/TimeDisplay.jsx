import React from "react";

const TimeDisplay = ({ time }) => {
  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeDisplay;
