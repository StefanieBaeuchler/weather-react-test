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
    
    return <ForecastDate date={forecastData[0]} />;
  } else {
    let apiKey = "ee4b35717d055b166do409ddtcf1532a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
