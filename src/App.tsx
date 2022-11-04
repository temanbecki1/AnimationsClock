import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const secondHand = document.querySelector(".seconds--hand");
  const [second, setSecond] = useState(0);

  const updateClock = () => {
    secondHand.style.transform = `rotate(${second * 6}deg)`;
  };

  const startClock = () => {
    setSecond((second + 1) % 60);
  };
  //Initial render
  useEffect(() => {
    startClock();
  }, []);

  //Force rerender when second is updated
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((second + 1) % 60);
      updateClock();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [second, updateClock]);

  return (
    <div className="App">
      <svg className="clockface" viewBox="-50 -50 100 100">
        <circle className="clock-face ring--seconds" r="48" pathLength="60" />
        <circle
          className="clock-face "
          r="48"
          pathLength="12"
          strokeDasharray=".1 .9"
          strokeDashoffset=".05"
        />
        <g className="seconds--hand">
          <line className="second" y1="10" y2="-38" />
          <line className="second-counterweight" y1="10" y2="2" />
        </g>
      </svg>
    </div>
  );
}
