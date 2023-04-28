import React from 'react'

export default function Card(props) {

    let data;

    if (props.dataType === 'overview') {
        data = (
            <>
                <div className='flex justify-between'>
                    <div>
                        <span className='font-semibold underline'>{props.weatherData.current?.condition.text || 'N/A'}</span>
                        <span className='block'>Temperature: {props.weatherData.current?.temp_c || 'N/A'} °C (feels like {props.weatherData.current?.feelslike_c || 'N/A'} °C)</span>
                        <span className='block'>Country: {props.weatherData.location?.country || 'N/A'}</span>
                        <span className='block'>Region: {props.weatherData.location?.region || 'N/A'}</span>
                        <span className='block'>Last Updated: {props.weatherData.current?.last_updated || 'N/A'}</span>
                    </div>
                    <img className='h-full w-32' src={props.weatherData.current?.condition.icon} alt='Weather icon' />
                </div>
            </>
        )
    } else if (props.dataType === 'wind') {
        data = (
            <>
                <span className='block'>Wind Speed: {props.weatherData.current?.wind_kph || 'N/A'} km/h</span>
                <span className='block'>Wind Direction: {props.weatherData.current?.wind_dir || 'N/A'}</span>
                <span className='block'>Gust Speed: {props.weatherData.current?.gust_kph || 'N/A'} km/h</span>
                <span className='block'>Pressure: {props.weatherData.current?.pressure_mb || 'N/A'} mb</span>
            </>
        )
    } else if (props.dataType === 'atmosphericConditions') {
        data = (
            <>
                <span className='block'>Humidity: {props.weatherData.current?.humidity || 'N/A'}%</span>
                <span className='block'>Cloud Cover: {props.weatherData.current?.cloud || '0'}%</span>
            </>
        )
    }


    return (
        <div className='border rounded m-5 p-3 text-white font-extralight animate-[wiggle_1s_ease-in-out_infinite]'>
            {data}
        </div>
    )
}
