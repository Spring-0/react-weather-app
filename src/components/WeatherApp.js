import React from 'react'
import WeatherContainer from '../containers/WeatherContainer'

export default function WeatherApp() {
  return (

    <div>

        <header>
            <h1>WeatherApp - Learning React</h1>
        </header>

        <main>
            <WeatherContainer />
        </main>

        <footer>
            <p>weather-app footer</p>
        </footer>

    </div>

  )
}
