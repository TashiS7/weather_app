import { useState, useEffect, createContext } from "react";

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
}

const fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5/9;
}

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("")
  const [unit, setUnit] = useState("celsius");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://localhost:8070/weather/${location}`);
        if(!response.ok){
          throw new Error(response.statusText);
        }
        const data = await response.json();
   console.log(data)
        setWeatherData({...data});
      } catch (error) {
        console.error(error)
      }
    }
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, location, setLocation, unit, setUnit, celsiusToFahrenheit, fahrenheitToCelsius }}>
      {children}
    </WeatherContext.Provider>
  )
};
