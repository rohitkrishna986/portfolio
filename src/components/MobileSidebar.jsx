import React from 'react'
import { Link } from 'react-router-dom'

const MobileSidebar = ({onClose}) => {
  return (
    <div className='bg-white fixed top-16 bottom-0 right-0 left-0 w-full h-full z-10 rounded-md shadow-md'>
        <div className='p-4 mt-5 flex flex-col gap-5 text-[20px]'>
            <Link to={'/'} onClick={onClose} className='border-b border-gray-400 w-full text-center pb-2'>Home</Link>
            <Link to={'/about'} onClick={onClose} className='border-b border-gray-400 w-full text-center pb-2'>About</Link>
            <Link to={'skills'} onClick={onClose} className='border-b border-gray-400 w-full text-center pb-2'>Skills</Link>
            <Link to={'/projects'} onClick={onClose} className='border-b border-gray-400 w-full text-center pb-2'>Project</Link>
            <Link to={'/contact'} onClick={onClose} className='border-b border-gray-400 w-full text-center pb-2'>Contact</Link>
        </div>
    </div>
  )
}

export default MobileSidebar