import React, { useState } from 'react'
import Weather from '../components/Weather'


export default function WeatherContainer() {

    const API_KEY = ""

    const [city, setCity] = useState("")
    const [temperature, setTemperature] = useState("")

    async function handleCityChange(city){

        setCity(city)
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + city + "&aqi=no")
        const data = await response.json()
        setTemperature(data.current.temp_c)

    }

    return (
        <div className='weather-container'>
            <input id="inputTbx" type="text"></input>
            <button onClick={() => handleCityChange(document.getElementById("inputTbx").value)}>Submit</button>

            {temperature && <Weather temperature={temperature}/>}
        </div>
    )
}
