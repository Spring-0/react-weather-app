import React from 'react'

export default function BasicInfo(props) {
  return (
    <div className="fixed bottom-0 text-white flex items-center m-10">
      <span className='text-9xl'>{props.weatherData.current?.temp_c || "x"}<span className="text-6xl align-top">°C</span></span>
      <div className="ml-5">
        <span className='text-2xl'>{props.weatherData.location?.name || "x"}</span>
        <span className='text-l block'>{props.weatherData.location?.localtime || "10:05 - Monday, 9 Sep '23"}</span>
      </div>
    </div>
  )
}
