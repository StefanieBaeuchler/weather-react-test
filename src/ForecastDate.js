import React from "react";

export default function ForecastDate(props) {
  function day() {
    let date = new Date(props.date.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }


  return (
    <div className="forecast mt-4">
      <div className="row">
        <div className="col">
          <div className="forecast-day">
            {day()}
          </div>
          <div>
            {" "}
            <img
              src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.date.condition.icon}.png`}
              alt=""
            />
          </div>
          <span className="max-temp">
            {Math.round(props.date.temperature.maximum)}°C
          </span>
          <span className="min-temp">
            {Math.round(props.date.temperature.minimum)}°F
          </span>
        </div>
      </div>
    </div>
  );
}
