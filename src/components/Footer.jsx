import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import FooterLogo from '../assests/FooterLogo.png'
import { FaInstagram, FaLinkedin, FaRegCopyright, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container mx-auto h-[150px] bg-black transition-all text-white flex justify-center'>
      <div className='container w-[50%] h-full flex flex-col items-center'>
        <div className='mt-4'>
            <Link to={'/'}>
                <img src={FooterLogo} width={80}/>
            </Link>
        </div>
        <div className='mt-4'>
          <ul className='flex gap-5 text-[10px] text-gray-300 pl-2 font-medium'>
            <Link to={'/about'} className='hover:text-white cursor-pointer'>ABOUT</Link>
            <Link to={'/projects'} className='hover:text-white cursor-pointer'>PROJECT</Link>
            <Link to={'/contact'} className='hover:text-white cursor-pointer'>CONTACT</Link>
          </ul>
        </div>
        <div className='text-md flex gap-4 mt-4'>
            <a href="https://www.instagram.com/__rzhi__/" target="_blank" className='cursor-pointer hover:bg-white hover:text-black p-1 rounded-lg'><FaInstagram/></a>
            <a href="https://wa.me/919597835933" target="_blank" className='cursor-pointer hover:bg-white hover:text-black p-1 rounded-lg'><FaWhatsapp/></a>
            <a href="https://www.linkedin.com/in/rohitkrishna-s/" target="_blank" className='cursor-pointer hover:bg-white hover:text-black p-1 rounded-lg'><FaLinkedin/></a>
        </div>
        <div>
          <p className='flex items-center text-xs gap-2 mt-4'><span className='text-xs'><FaRegCopyright/></span>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer