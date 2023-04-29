import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import BasicInfo from './BasicInfo';
import Card from './Card';
import Notification from './Notification';
import { motion } from "framer-motion";

export default function Weather(props) {

  return (

    <div>
      <div className='flex-grow ml-auto max-w-xl'>
        <div className='backdrop-brightness-75 w-full h-screen'>

          {props.weatherData.error?.code === 1006 && (
            
            <motion.div className='w-full flex justify-end p-3 bottom-0 fixed' 
            initial={{ y:-10, opacity: 0, scale:0 }}
            animate={{ opacity: 1, scale: 1}}
            exit={{ scale: 0, opacity: 1 }}
            transition={{ duration: 0.5}}
            >
              <Notification text="That is unavailable" />
            </motion.div>
          )}


          <div>

            <div className='flex justify-end mb-14'>

              <input placeholder='Another location' className="bg-transparent border-b border-gray-350 hover:animate-pulse focus:outline-none flex-grow mr-5 mt-8 text-white ml-5" id="inputTbx" type="text"></input>
              <button className="flex-shrink-0 flex items-center justify-center w-14 h-14 mr-4 rounded-full bg-yellow-50 hover:bg-sky-200 mt-4" onClick={() => props.onCityChange(document.getElementById("inputTbx").value)}><AiOutlineSearch size={35} /></button>

            </div>

            {/* cards go here */}
            <div>
              <Card weatherData={props.weatherData} dataType="overview" />
              <Card weatherData={props.weatherData} dataType="wind" />
              <Card weatherData={props.weatherData} dataType="atmosphericConditions" />
            </div>

          </div>
        </div>
      </div>
      <BasicInfo city={props.city} weatherData={props.weatherData} />
    </div>




  )
}
