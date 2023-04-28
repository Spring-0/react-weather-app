import React, { useEffect, useState } from 'react'
import Weather from '../components/Weather'


export default function WeatherContainer() {

    const API_KEY = ""

    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState({})


    async function handleCityChange(city){
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + city + "&aqi=no")
        const data = await response.json()
        document.getElementById("inputTbx").value = ""

        setCity(city)
        setWeatherData(data)

    }


    // Load default value on component mount
    useEffect(() => {
        handleCityChange("New York")
    }, [])


    return (
        <div className='weather-container'>
            <Weather onCityChange={handleCityChange} city={city} weatherData={weatherData}/>
        </div>
    )
}
