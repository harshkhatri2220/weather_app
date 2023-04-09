import React from 'react'
import { formatToLocalTime } from '../services/weatherServices'
const TimeAndLocation = ({weatherPassed:{dt,timezone,name,country}} ) => {
  return (
    <div className='  text-white flex   justify-center flex-col'>
      <div className='  text-lg flex justify-center my-2 mb-2 font-extralight'>

        <p>{formatToLocalTime(dt,timezone)}</p>
      </div>
      <div className='  flex justify-center text-3xl  font-medium'>
        {name},{country}
        
      </div>
    </div>
  )
}

export default TimeAndLocation
