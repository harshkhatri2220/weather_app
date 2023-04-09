import React from 'react'
import { UilTear,UilWind,UilSun,UilSunset, UilArrowUp ,UilArrowDown} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherServices'


const TempratureAndDetails = ({weatherPassed:{details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,timezone} } , {unitsPassed} ) => {
  return (
    <div className=' flex justify-center flex-col  mb-0  h-48'>
      
      <p className='  text-cyan-400  text-2xl my-6   mx-auto'>{details}</p>


      <div className=' flex flex-row  justify-between text-white items-center' >
        <div> <img src={iconUrlFromCode(icon)} alt=" shit" /></div>
        <div className=' text-3xl'>{temp.toFixed()}˚ 
        </div>    

        {/* {(unitsPassed=='metric') ? ('C') : ('F')}   tried but not worked */}

        {/* toFixed() decimal hatane ke liye */}
        <div className=' font-light '> 
           
            <p> <UilTear className=" inline-block mx-1"/>Humidity: <p className=' inline-block  font-semibold'> {humidity.toFixed()}% </p></p>
            <p> <UilWind className=" inline-block mx-1"/> Wind: <p className=' inline-block  font-semibold'>  {speed.toFixed()}km/h</p></p>
        </div>
      </div>

      <div  className='  my-5 flex  justify-between items-center  text-white text-sm  '>
        <p className=' flex flex-row  items-center  justify-between  '> <UilSun size={20} className=" inline-block  mr-1"/>Rise : <p className=' font-semibold   ml-2'>{formatToLocalTime(sunrise,timezone , "hh:mm a")} </p>  
        </p>
        <p>|</p>
        <p className='  flex flex-row  items-center'> <UilSunset size={20} className=" inline-block mr-1"/>Set : <span className=' font-semibold   ml-2'>{formatToLocalTime(sunset,timezone , "hh:mm a")} </span> 
        </p>
         
        <p className='  flex flex-row  items-center'> <UilArrowUp size={20} className=" inline-block mr-1"/>High : <span className=' font-semibold ml-2'>{temp_max.toFixed()}˚</span>
        </p>
        <p>|</p>
        <p className='  flex flex-row  items-center'> <UilArrowDown size={20} className=" inline-block mr-1 "/>Low : <span className=' font-semibold ml-2 '>{temp_min.toFixed()}˚</span> 
        </p>
        
      </div>
    </div>
  )
}

export default TempratureAndDetails
