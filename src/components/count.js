import React, { useState, useRef, useEffect } from "react";
import "./css/count.css";

const Countdown = () => {
  const countDate = new Date("August 05, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  let gap = countDate - now;

  const dayMath = Math.floor(gap / (24 * 60 * 60 * 1000));
  const hourMath = Math.floor((gap % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minMath = Math.floor((gap % (60 * 60 * 1000)) / (60 * 1000));
  const secMath = Math.floor((gap % (60 * 1000)) / 1000);

  const [day, setDay] = useState(dayMath);
  const [hour, setHour] = useState(hourMath);
  const [minute, setMinute] = useState(minMath);
  const [sec, setSec] = useState(secMath);

  const data = [
    { name: "days", value: day },
    { name: "hours", value: hour },
    { name: "minutes", value: minute },
    { name: "seconds", value: sec },
  ];

  const getData = () => {
    const countDate = new Date("August 05, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    let gap = countDate - now;

    const dayMath = Math.floor(gap / (24 * 60 * 60 * 1000));
    const hourMath = Math.floor(
      (gap % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minMath = Math.floor((gap % (60 * 60 * 1000)) / (60 * 1000));
    const secMath = Math.floor((gap % (60 * 1000)) / 1000);
    setDay(dayMath);
    setHour(hourMath);
    setMinute(minMath);
    setSec(secMath);
  };

  setInterval(() => {
    getData();
  }, 1000);

  return (
    <div className="container">
      {data.map((value, index) => {
        return <Count key={index} value={value.value} name={value.name} />;
      })}
    </div>
  );
};

const Count = ({ value, name }) => {
  const topCard = useRef();
  const botCard = useRef();
  const [prev, setPrev] = useState();

  useEffect(() => {
    topCard.current.style.backgroundColor = "hsl(236, 21%, 35%)";
    topCard.current.style.transition = "250ms ease-in";
    topCard.current.style.transform = "rotateX(90deg)";

    botCard.current.style.transition = "150ms ease-out";
    setTimeout(() => {
      topCard.current.style.backgroundColor = null;

      botCard.current.style.transform = "rotateX(0)";
      botCard.current.style.backgroundColor = "hsl(236, 21%, 26%)";
    }, 250);
    setTimeout(() => {
      topCard.current.style.transition = null;
      topCard.current.style.transform = null;

      botCard.current.style.backgroundColor = null;
      botCard.current.style.transition = null;
      botCard.current.style.transform = null;
      setPrev(value);
    }, 400);
  }, [value]);

  return (
    <div>
      <div className="count_container">
        <div ref={topCard} className="count_top">
          <span></span>
          <span></span>
          <p>{prev < 10 ? "0" + prev : prev}</p>
        </div>
        <div className="count_bottom">
          <span></span>
          <span></span>
          <p>{prev < 10 ? "0" + prev : prev}</p>
        </div>
        <div className="count_underTop">
          <div>
            <span></span>
            <span></span>
            <p>{value < 10 ? "0" + value : value}</p>
          </div>
        </div>
        <div ref={botCard} className="count_underBot">
          <div>
            <span></span>
            <span></span>
            <p>{value < 10 ? "0" + value : value}</p>
          </div>
        </div>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Countdown;
