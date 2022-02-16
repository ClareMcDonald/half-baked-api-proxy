import React from 'react';

function parseTime(dt) {
  return new Date(dt * 1000).toUTCString();
}

export default function ForecastList({ weather }) {
  return (
    <div>
      {weather.map((weatherItem, i) => <div className="weather-item" key={weatherItem.dt + i}>
        <h3>Date: {parseTime(weatherItem.dt)}</h3>
        <p>Clouds: {weatherItem.clouds}</p>
        <p>Humidity: {weatherItem.humidity}</p>
        <p>{weatherItem.weather[0].description}</p>
      </div>)}
    </div>
  );
}
