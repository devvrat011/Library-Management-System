import React from 'react'
import FrontPhoto from '../../Images/landingpage_photo.png'

function Home() {
  return (
    <div>
        <div className='flex justify-evenly'>
            <div className='flex flex-col justify-center gap-4 w-[45%] '>
                <div className='text-white text-lg md:text-4xl'>Good books don't give up all their secrets at once.</div>
                <div className='text-white text-md md:text-xl'>A small river named Duden flows by their place and supplies it with the necessary regelia.</div>
                <button className='text-white text-md md:text-[110%] w-[60%] md:w-[30%] bg-red-600 cursor-pointer p-2 rounded-lg'>Order Now!</button>
            </div>
            <div className='h-[40%] w-[38%]'><img src={FrontPhoto}/></div>
        </div>
    </div>
  )
}

export default Home