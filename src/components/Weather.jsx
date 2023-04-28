import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import BasicInfo from './BasicInfo';

export default function Weather(props) {
  return (


    <div>
      <div className='flex-grow ml-auto max-w-xl'>
        <div className='backdrop-brightness-75 w-full h-screen'>

          <div>

            <div className='flex justify-end'>

              <input className="bg-transparent border-b border-gray-350 hover:animate-pulse focus:outline-none flex-grow mr-5 mt-8 text-white ml-5" id="inputTbx" type="text"></input>
              <button className="flex-shrink-0 flex items-center justify-center w-14 h-14 mr-4 rounded-full bg-yellow-50 hover:bg-sky-200 mt-4" onClick={() => props.onCityChange(document.getElementById("inputTbx").value)}><AiOutlineSearch size={35} /></button>

            </div>

            {/* cards go here */}
            <div className='border rounded m-5 p-3 text-white font-extralight'>
              <span className='flex justify-center font-semibold underline'>{props.text}</span>
              {props.weatherData &&
                <>
                  <span className='block'>Temperature: {props.weatherData.current?.temp_c || 'N/A'} °C</span>
                  <span className='block'>Country: {props.weatherData.location?.country || 'N/A'}</span>
                  <span className='block'>Region: {props.weatherData.location?.region || 'N/A'}</span>
                  <span className='block'>City: {props.weatherData.location?.name || 'N/A'}</span>
                  <span className='block'>Current Time: {props.weatherData.location?.localtime || 'N/A'}</span>
                  <span className='block'>Last Updated: {props.weatherData.current?.last_updated || 'N/A'}</span>
                </>
              }
            </div>

          </div>
        </div>
      </div>
      <BasicInfo city={props.city} weatherData={props.weatherData}/>
    </div>




  )
}
