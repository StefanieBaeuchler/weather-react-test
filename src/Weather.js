import React, { useState } from "react";
import axios from "axios";
import FriendlyDate from "./FriendlyDate";
import WeatherForecast from "./WeatherForecast";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function displayTemperature(response) {
    let icon = response.data.condition.icon;
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      imgUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "ee4b35717d055b166do409ddtcf1532a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(displayTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                onChange={displayCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FriendlyDate date={weatherData.date} />{" "}
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left "
              />
              <div className="float-left">
                <WeatherTemperature celsius={weatherData.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
        <WeatherForecast icon={weatherData.imgUrl} city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
