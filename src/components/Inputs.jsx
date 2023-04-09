import React, { useState } from 'react'
import { UilSearch ,UilLocationPoint } from '@iconscout/react-unicons'
const Inputs = ({setUnitsPassed , unitsPassed , setCityPassed}) => {

  const [cityForSearch , setCityForSearch  ] = useState("");

  const handleOnClickOnSearch = ()=>{
     if(cityForSearch !== ''){ setCityPassed({q:cityForSearch})} 
  }

  const handleOnClickLocation =()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude

        setCityPassed({lat,lon,})
            })
    }
  }

  const handleOnClickUnits = (e) =>{

    const  currentUnit = e.currentTarget.name;
    if(currentUnit !== unitsPassed ){setUnitsPassed(currentUnit)}
  }

  return (
    <div className='flex  flex-row  justify-center my-6'>

            <div className=' flex flex-row  w-3/4 space-x-4 justify-center  items-center' >

            <input
            value={cityForSearch} 
            onChange={(e)=>{setCityForSearch(e.currentTarget.value)}}
            type="text"
            placeholder='search for city...'
            className=' text-xl capitalize focus:outline-none  placeholder:lowercase font-light px-2 w-[75%]' />

                <UilSearch 
                onClick={handleOnClickOnSearch} size={20} className="  text-white   hover:scale-125 transition ease-out cursor-pointer "/>
                <UilLocationPoint  onClick={handleOnClickLocation} size={20}  className=" text-white hover:scale-125 transition ease-out cursor-pointer" />

            </div>
            <div className=' text-white flex flex-row w-1/4 space-x-4 justify-center'>
                <button  
                name="metric" className=' text-lg  hover:scale-125 transition ease-out cursor-pointer'
                onClick={handleOnClickUnits}>˚C</button>
                <p>|</p>
                <button
                name="imperial"
                 className=' text-lg  hover:scale-125 transition ease-out cursor-pointer'
                 onClick={handleOnClickUnits}>˚F</button>
                 
            </div>
    </div>
  )
}

export default Inputs
