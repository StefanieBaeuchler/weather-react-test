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
return <div className="forecast mt-4">
      <div className="row">
        {forecastData.map(function(dailyForecast, index){
          if (index < 5){
            return (
              <div className="col">
                <div className="forecast-day" key={index}>
                  <ForecastDate date={dailyForecast} />
                </div>
              </div>
            );
          }
          
        })}
        
    </div>
    </div>
  } else {
    let apiKey = "ee4b35717d055b166do409ddtcf1532a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
