import React from 'react'

const Forecast = ({title}) => {
  return (
    <div className=' text-white mt-2'>
     
      <p>{title}</p>

        <hr  className=' mt-2'/>

        <div className=' flex  justify-between items-center '>

            <div className=' flex flex-col items-center '> 
                <p className=' mt-1'>04:30 PM</p>
                <p className='my-1'> <img src="" alt="error" /></p>
                <p className=' font-semibold'>22˚</p>
            </div>
            <div className=' flex flex-col items-center '> 
                <p className=' mt-1'>04:30 PM</p>
                <p className='my-1'> <img src="" alt="error" /></p>
                <p className=' font-semibold'>22˚</p>
            </div>
            <div className=' flex flex-col items-center '> 
                <p className=' mt-1'>04:30 PM</p>
                <p className='my-1'> <img src="" alt="error" /></p>
                <p className=' font-semibold'>22˚</p>
            </div>
            <div className=' flex flex-col items-center '> 
                <p className=' mt-1'>04:30 PM</p>
                <p className='my-1'> <img src="" alt="error" /></p>
                <p className=' font-semibold'>22˚</p>
            </div>
            <div className=' flex flex-col items-center '> 
                <p className=' mt-1'>04:30 PM</p>
                <p className='my-1'> <img src="" alt="error" /></p>
                <p className=' font-semibold'>22˚</p>
            </div>

        </div>
    </div>
  )
}

export default Forecast
