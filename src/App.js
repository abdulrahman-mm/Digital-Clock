import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    let x = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(x);
  }, []);

  function formatHours(hours) {
    return hours > 12 ? hours - 12 : hours;
  }

  function formatHoursMinutesSeconds(number) {
    return number < 10 ? `0${number}` : number;
  }

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="container text-center p-3 rounded-3" style={{ maxWidth: "400px" }}>
        <h1>Digital Clock</h1>
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <div className="d-flex align-items-center">
              <h1 className="m-1">{formatHoursMinutesSeconds(formatHours(currentTime.getHours()))}</h1>
              <h1 className="m-1">:</h1>
              <h1 className="m-1">{formatHoursMinutesSeconds(currentTime.getMinutes())}</h1>
              <h1 className="m-1">:</h1>
              <h1 className="m-1">{formatHoursMinutesSeconds(currentTime.getSeconds())}</h1>
              <h1 className="m-1">{`${currentTime.getHours()}` >= 12 ? "PM" : "AM"}</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
              <h1 className="m-1">{day[currentTime.getDay()]}</h1>
              <h1 className="m-1">{currentTime.getDate()}</h1>
              <h1 className="m-1">{month[currentTime.getMonth()]}</h1>
              <h1 className="m-1">{currentTime.getFullYear()}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
