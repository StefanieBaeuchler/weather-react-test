import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastDate from "./ForecastDate";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast mt-4">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <div className="forecast-day" key={index}>
                    <ForecastDate date={dailyForecast} />
                  </div>
                </div>
              );
            } else {
              return null
            }
          })}
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
