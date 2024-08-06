import React, { useState } from 'react'
import HomeLogo from '../assests/HomeLogo.png'
import {Link} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import MobileSidebar from './MobileSidebar';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='mx-auto w-full h-16 bg-white fixed flex items-center lg:px-32 px-8 justify-between z-50 border-b-2'>
        <div className=''>
            <Link to={'/'}>
                <img src={HomeLogo} width={80}/>
            </Link>
        </div>
        <div>
            <ul className='hidden md:flex gap-10 text-md font-medium'>
                <Link to={'/'} className='text-[rgb(20,20,20)] hover:text-black hover:font-semibold'>Home</Link>
                <Link to={'/about'} className='text-[rgb(20,20,20)] hover:text-black hover:font-semibold'>About</Link>
                <Link to={'skills'} className='text-[rgb(20,20,20)] hover:text-black hover:font-semibold'>Skills</Link>
                <Link to={'/projects'} className='text-[rgb(20,20,20)] hover:text-black hover:font-semibold'>Projects</Link>
                <Link to={'/contact'} className='text-[rgb(20,20,20)] hover:text-black hover:font-semibold'>Contact</Link>
            </ul>
        </div>
        <div className='md:hidden text-3xl transition-all'>
            {
                openMenu ? (
                    <IoMdClose onClick={()=> setOpenMenu(false)}/>
                ) : (
                    <IoMenu onClick={()=> setOpenMenu(true)}/>
                )
            }
        </div>
        {
            openMenu && (
                <MobileSidebar onClose={()=> setOpenMenu(false)}/>
            )
        }
    </div>
  )
}

export default Header