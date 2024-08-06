import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const HomeProjectComponent = () => {
  return (
   <>
    {/* // Desktop view */}
    <div className='hidden container mx-auto w-full animate-fade-in h-[300px] lg:flex flex-col justify-center items-center'>
        <div>
            <h2 className='text-3xl font-bold'>
                Project
            </h2>
        </div>
        <div className='mt-8 flex flex-col justify-center items-center gap-4'>
            <p>Explore our cutting-edge projects and stay updated with the latest developments.
            Click here to dive into our live project showcase and see the innovation in action!</p>
            <Link to={'projects'}><button className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Projects<span className='text-xl'><FaTelegramPlane/></span></button></Link>
        </div>
    </div>
    {/* // Mobile view */}
    <div className='md:hidden container mx-auto w-full animate-fade-in h-[300px] flex flex-col justify-center items-center'>
        <div>
            <h2 className='text-3xl font-bold'>
                Project
            </h2>
        </div>
        <div className='mt-8 flex flex-col justify-center items-center gap-4 px-5 text-justify'>
            <p className='text-sm'>Explore our cutting-edge projects and stay updated with the latest developments.
            Click here to dive into our live project showcase and see the innovation in action!</p>
            <Link to={'projects'}><button className='flex items-center gap-2 mt-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Projects<span className='text-xl'><FaTelegramPlane/></span></button></Link>
        </div>
    </div>
   </>
  )
}

export default HomeProjectComponent