import React, { useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-router-dom'

const ProjectDetails = ({project,onClose}) => {

  return (
    <>
    {/* // Desktop */}
    <div className='fixed w-full h-full top-0 left-0 right-0 bottom-0 hidden lg:flex justify-center items-center bg-gray-200 bg-opacity-50'>
      <div className='w-[70%] h-[500px] rounded-lg shadow-lg bg-white flex border border-gray-400'>
        <div className='w-[40%] h-full flex justify-center border border-r-gray-400 items-center'>
          <img src={project?.projectImage} className='h-full'/>
        </div>
        <div className='flex-1 relative px-6 py-24'>
          <button onClick={onClose} className='absolute top-0 right-0 p-6 text-2xl hover:text-red-600'><IoMdClose/></button>
          <h2 className='uppercase text-xl font-semibold'>{project?.name}</h2>
          <p className='text-[10px]'>Created by : <span className='text-blue-500'>{project?.createdBy}</span></p>
          <p className='my-8 text-sm text-justify'>{project?.description}</p>
          <Link to={project.linkPage}><button className='bg-[rgb(20,20,20)] hover:bg-black text-white text-sm px-4 py-2 rounded-lg'>Go to Project</button></Link>
        </div>
      </div>
    </div>
    {/* // Mobile view */}
    <div className='fixed w-full h-full top-0 left-0 right-0 bottom-0 lg:hidden flex justify-center items-center bg-gray-200 bg-opacity-50'>
      <div className='mt-8 w-[90%] h-[600px] rounded-lg relative shadow-lg bg-white flex flex-col'>
      <button onClick={onClose} className='absolute top-0 right-0 p-4 text-2xl hover:text-red-600'><IoMdClose/></button>
        <div className='w-full h-[40%] flex justify-center items-center'>
          <img src={project?.projectImage} className='h-full'/>
        </div>
        <div className='flex-1 px-6 py-2'>
          <h2 className='uppercase text-xl font-semibold'>{project?.name}</h2>
          <p className='text-[10px]'>Created by : <span className='text-blue-500'>{project?.createdBy}</span></p>
          <p className='mt-2 mb-6 text-xs text-justify'>{project?.description}</p>
          <Link to={project.linkPage}><button className='bg-[rgb(20,20,20)] hover:bg-black text-white text-sm px-4 py-2 rounded-lg'>Go to Project</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails