import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const CurrentWeather = () => {
  const { weatherData,unit, setUnit, celsiusToFahrenheit } = useContext(WeatherContext);

  if (!weatherData || !weatherData.location) {
    return <div className="loading" style={{margin: '10px'}}>Loading...</div>;
  }

  let temperature;
  if (unit === "celsius") {
    temperature = weatherData.forecast;
  } else {
    temperature = celsiusToFahrenheit(weatherData.forecast);
  }
  const toggleUnit = () => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  }

return (
  <div className='currentWeather'>
    <h2>{weatherData.location}</h2>
    <p><span>Today's forecast:</span> {temperature}
      <button onClick={toggleUnit}>
        {unit === "celsius" ? "℉" : "℃"}
      </button>
    </p>
    <p><span>Humidity:</span> {weatherData.humidity}%</p>
    <p><span>Wind speed:</span> {weatherData.wind}m/s</p>
    <p><span>Description:</span> {weatherData.description}</p>

  </div>
);
};

export default CurrentWeather;
