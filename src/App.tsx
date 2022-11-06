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
        <line className="tick" y1="42" y2="45" transform="rotate(0)" />
        <line className="tick" y1="42" y2="45" transform="rotate(6)" />
        <line className="tick" y1="42" y2="45" transform="rotate(12)" />
        <line className="tick" y1="42" y2="45" transform="rotate(18)" />
        <line className="tick" y1="42" y2="45" transform="rotate(24)" />
        <line className="tick" y1="42" y2="45" transform="rotate(30)" />
        <line className="tick" y1="35" y2="45" transform="rotate(36)" />
        <line className="tick" y1="42" y2="45" transform="rotate(42)" />
        <line className="tick" y1="42" y2="45" transform="rotate(48)" />
        <line className="tick" y1="42" y2="45" transform="rotate(54)" />
        <line className="tick" y1="35" y2="45" transform="rotate(60)" />
        <line className="tick" y1="42" y2="45" transform="rotate(66)" />
        <line className="tick" y1="42" y2="45" transform="rotate(72)" />
        <line className="tick" y1="42" y2="45" transform="rotate(78)" />
        <line className="tick" y1="42" y2="45" transform="rotate(84)" />
        <line className="tick" y1="35" y2="45" transform="rotate(90)" />
        <line className="tick" y1="42" y2="45" transform="rotate(96)" />
        <line className="tick" y1="42" y2="45" transform="rotate(102)" />
        <line className="tick" y1="42" y2="45" transform="rotate(108)" />
        <line className="tick" y1="42" y2="45" transform="rotate(114)" />
        <line className="tick" y1="35" y2="45" transform="rotate(120)" />
        <line className="tick" y1="42" y2="45" transform="rotate(126)" />
        <line className="tick" y1="42" y2="45" transform="rotate(132)" />
        <line className="tick" y1="42" y2="45" transform="rotate(138)" />
        <line className="tick" y1="42" y2="45" transform="rotate(144)" />
        <line className="tick" y1="35" y2="45" transform="rotate(150)" />
        <line className="tick" y1="42" y2="45" transform="rotate(156)" />
        <line className="tick" y1="42" y2="45" transform="rotate(162)" />
        <line className="tick" y1="42" y2="45" transform="rotate(168)" />
        <line className="tick" y1="42" y2="45" transform="rotate(174)" />
        <line className="tick" y1="35" y2="45" transform="rotate(180)" />
        <line className="tick" y1="42" y2="45" transform="rotate(186)" />
        <line className="tick" y1="42" y2="45" transform="rotate(192)" />
        <line className="tick" y1="42" y2="45" transform="rotate(198)" />
        <line className="tick" y1="42" y2="45" transform="rotate(204)" />
        <line className="tick" y1="35" y2="45" transform="rotate(210)" />
        <line className="tick" y1="42" y2="45" transform="rotate(216)" />
        <line className="tick" y1="42" y2="45" transform="rotate(222)" />
        <line className="tick" y1="42" y2="45" transform="rotate(228)" />
        <line className="tick" y1="42" y2="45" transform="rotate(234)" />
        <line className="tick" y1="35" y2="45" transform="rotate(240)" />
        <line className="tick" y1="42" y2="45" transform="rotate(246)" />
        <line className="tick" y1="42" y2="45" transform="rotate(252)" />
        <line className="tick" y1="42" y2="45" transform="rotate(258)" />
        <line className="tick" y1="42" y2="45" transform="rotate(264)" />
        <line className="tick" y1="35" y2="45" transform="rotate(270)" />
        <line className="tick" y1="42" y2="45" transform="rotate(276)" />
        <line className="tick" y1="42" y2="45" transform="rotate(282)" />
        <line className="tick" y1="42" y2="45" transform="rotate(288)" />
        <line className="tick" y1="42" y2="45" transform="rotate(294)" />
        <line className="tick" y1="35" y2="45" transform="rotate(300)" />
        <line className="tick" y1="42" y2="45" transform="rotate(306)" />
        <line className="tick" y1="42" y2="45" transform="rotate(312)" />
        <line className="tick" y1="42" y2="45" transform="rotate(318)" />
        <line className="tick" y1="42" y2="45" transform="rotate(324)" />
        <line className="tick" y1="35" y2="45" transform="rotate(330)" />
        <line className="tick" y1="42" y2="45" transform="rotate(336)" />
        <line className="tick" y1="42" y2="45" transform="rotate(342)" />
        <line className="tick" y1="42" y2="45" transform="rotate(348)" />
        <line className="tick" y1="42" y2="45" transform="rotate(354)" />
        <line className="tick" y1="35" y2="45" transform="rotate(360)" />
        <g className="seconds--hand">
          <line className="second" y1="10" y2="-38" />
          <line className="second-counterweight" y1="10" y2="2" />
        </g>
      </svg>
    </div>
  );
}
