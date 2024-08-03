import React from 'react'
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Profile1 from "../assests/Profile1.jpg"
import Arrow1 from '../assests/arrow-1.svg';
import Arrow2 from '../assests/arrow-2.svg';
import star from '../assests/star.svg';
import useScroll from '../helper/UseScroll.jsx'

const HomeIntroComponent = () => {

        const scrollY = useScroll();
      
        const translateEffect = {
          transform: `translateY(${scrollY * 0.1}px)`
        };
        const translateEffectUp = {
            transform: `translateY(${-scrollY * 0.1}px)`
          };
  return (
    <>
    {/* Desktop View */}
    <div className='hidden container mx-auto w-full animate-fade-in h-[590px] lg:flex items-center justify-center relative'>
        <div style={translateEffect} className='absolute top-20 left-32'>
            <img src={Arrow2}/>
        </div>
        <div style={translateEffect} className='absolute bottom-20 right-32'>
            <img src={Arrow1}/>
        </div>
        <div className='container bg-white w-[80%] h-[80%] flex '>
            <div className='container w-[4%] flex justify-center items-center'>
                <div className='h-[100px] text-2xl flex flex-col justify-between'>
                    <a href="https://www.instagram.com/__rzhi__/" target="_blank" className='cursor-pointer'><FaInstagram/></a>
                    <a href="https://wa.me/919597835933" target="_blank" className='cursor-pointer'><FaWhatsapp/></a>
                    <a href="https://www.linkedin.com/in/rohitkrishna-s/" target="_blank" className='cursor-pointer'><FaLinkedin/></a>
                </div>
            </div>
            <div className='container flex justify-center items-center'>
                <div className='w-[50%] pl-36 flex flex-col gap-3'>
                    <div className='flex gap-1'>
                        <p className='text-xl flex items-end'>Hi, I'm </p><h2 className='text-4xl font-bold'>Rohit Krishna</h2>
                    </div>
                    <div className='flex gap-4'>                     
                        <p className='text-lg before-content relative flex items-center gap-2'>Developer</p>
                    </div>
                    <div className='mb-6'>
                        <p>I'm creative developer based in India, and I'm<br/>very passionate and dedicated to my work.</p>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Say Hello<span className='text-xl'><FaTelegramPlane/></span></button>
                    </div>
                </div>
                <div className='w-[50%] flex items-center pl-20'>
                    <img src={Profile1} width={300} className="blob-effect"/>
                </div>
            </div>
        </div>
    </div>
    {/* ipad View */}
    <div className='hidden lg:hidden container mx-auto w-full animate-fade-in h-[580px] md:flex items-center justify-center relative'>
        <div style={translateEffect} className='absolute top-10 right-10'>
            <img src={star} width={50}/>
        </div>
        <div style={translateEffectUp} className='absolute bottom-4 left-12'>
            <img src={Arrow2} width={80}/>
        </div>
        <div className='container w-[90%] h-[90%] flex '>
            <div className='container w-[4%] flex h-full'>
                <div className='h-[100px] text-2xl flex flex-col justify-between'>
                    <a href="https://www.instagram.com/__rzhi__/" target="_blank" className='cursor-pointer'><FaInstagram/></a>
                    <a href="https://wa.me/919597835933" target="_blank" className='cursor-pointer'><FaWhatsapp/></a>
                    <a href="https://www.linkedin.com/in/rohitkrishna-s/" target="_blank" className='cursor-pointer'><FaLinkedin/></a>
                </div>
            </div>
            <div className='container flex flex-col justify-center items-center'>
                <div className='w-full max-h-[50%] h-full flex justify-center items-center'>
                    <img src={Profile1} width={220} className="blob-effect"/>
                </div>
                <div className='w-full flex flex-col gap-3 items-center'>
                    <div className='flex gap-1'>
                        <p className='text-lg flex items-end'>Hi, I'm </p><h2 className='text-3xl font-bold'>Rohit Krishna</h2>
                    </div>
                    <div className='flex gap-4'>                     
                        <p className='text-lg before-content relative flex items-center gap-2'>Developer</p>
                    </div>
                    <div className='mb-2'>
                        <p>I'm creative developer based in India, and I'm<br/>very passionate and dedicated to my work.</p>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Say Hello<span className='text-xl'><FaTelegramPlane/></span></button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    {/* mobile view */}
    <div className='md:hidden container mx-auto w-full animate-fade-in h-[580px] flex items-center justify-center relative'>
        <div style={translateEffect} className='absolute top-10 right-10'>
            <img src={star} width={50}/>
        </div>
        <div style={translateEffectUp} className='absolute bottom-4 left-12'>
            <img src={Arrow2} width={80}/>
        </div>
        <div className='container w-[90%] h-[90%] flex '>
            <div className='container w-[4%] flex h-full'>
                <div className='h-[100px] text-2xl flex flex-col justify-between'>
                    <a href="https://www.instagram.com/__rzhi__/" target="_blank" className='cursor-pointer'><FaInstagram/></a>
                    <a href="https://wa.me/919597835933" target="_blank" className='cursor-pointer'><FaWhatsapp/></a>
                    <a href="https://www.linkedin.com/in/rohitkrishna-s/" target="_blank" className='cursor-pointer'><FaLinkedin/></a>
                </div>
            </div>
            <div className='container flex flex-col justify-center items-center'>
                <div className='w-full max-h-[50%] h-full flex justify-center items-center'>
                    <img src={Profile1} width={220} className="blob-effect"/>
                </div>
                <div className='w-full flex flex-col gap-3 items-center'>
                    <div className='flex gap-1'>
                        <p className='text-lg flex items-end'>Hi, I'm </p><h2 className='text-3xl font-bold'>Rohit Krishna</h2>
                    </div>
                    <div className='flex gap-4'>                     
                        <p className='text-lg before-content relative flex items-center gap-2'>Developer</p>
                    </div>
                    <div className='mb-2 px-4'>
                        <p className='text-justify text-[14px]'>I'm creative developer based in India, and I'm very passionate and dedicated to my work.</p>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Say Hello<span className='text-xl'><FaTelegramPlane/></span></button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeIntroComponent