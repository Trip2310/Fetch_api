
import './App.css';
import React, { useState } from 'react'
import Search from './Components/Search';
import Forecast from './Components/Forecast'
import CurrentWeather from './Components/Current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Components/Api';



const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const[forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData)=> {
  const [lat, lon]=searchData.value.split("");

  const currentWeatherFetch = fetch(
    '${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid={WEATHER_API_KEY}&units=metric'
    );
  const forecastFetch = fetch(
    '${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid={WEATHER_API_KEY}&units=metric'
    );
  
  Promise.all([currentWeatherFetch, forecastFetch])
   .then(async(response)=>{
    const weatherResponse = await response[0].json();
    const forecastResponse = await response[1].json();

    setCurrentWeather({ city: searchData.label ,...weatherResponse});
    setForecast({ city: searchData.label, ...forecastResponse});
   })
     .catch((err) => console.log(err));
  }
      console.log(currentWeather);
      console.log(forecast);

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}/>
      {CurrentWeather && <CurrentWeather data={currentWeather}/>}
      {Forecast&&<Forecast data={Forecast}/>}
      </div>
  )
}

export default App
