import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import ForecastDate from "./ForecastDate";

export default function WeatherForecast(props) {
  const [loaded, setloaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function displayForecast(response) {
  
    setForecastData(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast mt-4">
        <div className="row">
          <div className="col">
            <div className="forecast-day">
              <ForecastDate date={new Date(forecastData[0].time)} />
            </div>
            <div>
              {" "}
              <img
                src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecastData[0].condition.icon}.png`} alt=""
              />
            </div>
            <span className="max-temp">
              {Math.round(forecastData[0].temperature.maximum)}°C
            </span>
            <span className="min-temp">
              {Math.round(forecastData[0].temperature.minimum)}°F
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ee4b35717d055b166do409ddtcf1532a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
