import React from 'react'
import Profile1 from '../assests/Profile1.jpg'
import { GiAchievement } from "react-icons/gi";
import { MdContacts, MdFileDownloadDone } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import useScroll from '../helper/UseScroll';
import Swirly from '../assests/Swirly-Arrow.svg'

const HomeAboutComponent = () => {

  function downloadCV() {
    const fileId = "1px2VkkDtAXbiVcRRzcFvPLb5W-655iac";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Rohit-Krishna-CV.pdf";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  const scrollY = useScroll();
        
  const translateEffect = {
    transform: `translateX(${scrollY * 0.03}px)`
  };
  const translateEffectUp = {
    transform: `translateX(${-scrollY * 0.03}px)`
  };
  const translateEffectRight = {
    transform: `translateY(${-scrollY * 0.1}px)`
  };

  return (
    <>
      {/* Desktop */}
      <div className='hidden container mx-auto w-full animate-fade-in h-[640px] lg:flex items-center justify-center relative'>
          <div style={translateEffectRight} className='absolute top-40 left-28 -z-10'>
              <img src={Swirly} width={100}/>
          </div>
          <div className='container w-[80%] h-[80%]'>
            <div className='w-full h-[20%] gap-1 flex flex-col justify-center items-center'>
              <h2 className='text-3xl font-bold'>About Me</h2>
              <p className='text-sm font-light'>My Introduction</p>
            </div>
            <div className='flex w-full'>
              <div className='w-[40%] h-full'>
                <div className='w-full py-8 flex justify-center'>
                  <img src={Profile1} width={350} className='rounded-lg shadow-xl'/>
                </div>
              </div>
              <div className='flex flex-col flex-1 pt-4'>
                <div className='w-full flex justify-between px-32 py-6'>
                  <div style={translateEffectUp} className='w-32 h-24 rounded-lg border flex flex-col justify-center items-center shadow-md'>
                    <span className='text-2xl'><GiAchievement/></span>
                    <h2 className='text-md font-semibold'>Experience</h2>
                    <p className='text-xs font-light'>1+ years</p>
                  </div>
                  <div className='w-32 h-24 rounded-lg border flex flex-col justify-center items-center shadow-md'>
                    <span className='text-2xl'><MdFileDownloadDone/></span>
                    <h2 className='text-md font-semibold'>Completed</h2>
                    <p className='text-xs font-light'>10+ projects</p>
                  </div>
                  <div style={translateEffect} className='w-32 h-24 rounded-lg border flex flex-col justify-center items-center shadow-md'>
                    <span className='text-xl pb-1'><MdContacts/></span>
                    <h2 className='text-md font-semibold'>Contact</h2>
                    <p className='text-xs font-light'>Online 24/7</p>
                  </div>
                </div>
                <div className='p-8 mb-4 text-sm text-[rgb(20,20,20)]'>
                  <p className='text-justify'>
                    MERN Stack Developer with 1 year of hands-on experience in designing and implementing both frontend and backend solutions. Proven ability to deliver high-quality web applications by leveraging modern development practices and technologies.
                  </p>
                </div>
                <div className='w-full flex justify-center'>
                    <button onClick={downloadCV} className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Download CV<span className='text-xl'><IoDocumentTextOutline /></span></button>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* Desktop */}
      <div className='md:hidden container mx-auto w-full animate-fade-in h-[700px] flex items-center justify-center relative'>
          <div className='container w-[90%] h-full'>
            <div className='w-full h-[20%] gap-1 flex flex-col justify-center items-center'>
              <h2 className='text-3xl font-bold'>About Me</h2>
              <p className='text-sm font-light'>My Introduction</p>
            </div>
            <div className='flex w-full'>
              <div className='flex flex-col flex-1'>
                <div className='w-full flex flex-col items-center gap-2'>
                  <div className='w-32 h-24 rounded-lg border flex flex-col justify-center items-center shadow-md'>
                    <span className='text-2xl'><GiAchievement/></span>
                    <h2 className='text-md font-semibold'>Experience</h2>
                    <p className='text-xs font-light'>1+ years</p>
                  </div>
                  <div className='w-32 h-24 rounded-lg border flex flex-col justify-center items-center shadow-md'>
                    <span className='text-2xl'><MdFileDownloadDone/></span>
                    <h2 className='text-md font-semibold'>Completed</h2>
                    <p className='text-xs font-light'>10+ projects</p>
                  </div>
                  <div className='w-32 h-24 rounded-lg border flex flex-col justify-center items-center shadow-md'>
                    <span className='text-xl pb-1'><MdContacts/></span>
                    <h2 className='text-md font-semibold'>Contact</h2>
                    <p className='text-xs font-light'>Online 24/7</p>
                  </div>
                </div>
                <div className='p-8 text-sm text-[rgb(20,20,20)]'>
                  <p className='text-justify'>
                    MERN Stack Developer with 1 year of hands-on experience in designing and implementing both frontend and backend solutions. Proven ability to deliver high-quality web applications by leveraging modern development practices and technologies.
                  </p>
                </div>
                <div className='w-full flex justify-center'>
                    <button onClick={downloadCV} className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Download CV<span className='text-xl'><IoDocumentTextOutline /></span></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default HomeAboutComponent