import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function displayForecast(response) {

  }
  let apiKey = "ee4b35717d055b166do409ddtcf1532a";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="forecast mt-4">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div>
            {" "}
            <img src={props.icon} alt="" width="55px" />
          </div>
          <span className="max-temp">19°C</span>
          <span className="min-temp">19°F</span>
        </div>
      </div>
    </div>
  );
}
