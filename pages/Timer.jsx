import React, { useEffect, useState } from "react";

function Timer({ guessCoords, timerDone }) {
  const [timeLeft, setTimeLeft] = useState(30); // Your default timer

  useEffect(() => {
    if (timerDone) {
      setTimeLeft(0); // Set to 0 when submit is clicked
      return;
    }

    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, timerDone]);

  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
      Time Left: {timeLeft}
    </div>
  );
}

export default Timer;
