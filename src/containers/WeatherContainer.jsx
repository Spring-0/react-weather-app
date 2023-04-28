import React, { useState } from 'react'
import Weather from '../components/Weather'
import WeatherApp from '../components/WeatherApp'


export default function WeatherContainer() {

    const API_KEY = ""

    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState({})


    async function handleCityChange(city){
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + city + "&aqi=no")
        const data = await response.json()

        setCity(city)
        setWeatherData(data)

    }
    return (
        <div className='weather-container'>
            <Weather onCityChange={handleCityChange} city={city} weatherData={weatherData}/>
            {/* <WeatherApp onCityChange={handleCityChange} city={city} weatherData={weatherData}/> */}
        </div>
    )
}
