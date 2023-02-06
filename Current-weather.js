import"./Current-weather.css"

import React from 'react'

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
        <div className="top">
            <div>
            <p className="city">{data.city}</p>
            <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}</p>
                <div className="details">
                    <div className="parameter-row">
                      <span className="parameter-label">Deatils</span>  
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure}</span>
                    </div> 
                </div>

            </div>
        </div>
       {/* img  */}
    </div>

  )
}

export default CurrentWeather