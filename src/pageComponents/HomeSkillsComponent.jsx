import React from 'react'
import boyImage from '../assests/boyImage.jpg'
import { FaCss3Alt, FaGithub, FaHtml5, FaJava, FaNode, FaNpm, FaPython, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiVite } from "react-icons/si";
import { IoCloudCircleSharp, IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import arrow1 from '../assests/arrow-2.svg'
import star from '../assests/star.svg'
import { BiLogoPostgresql } from "react-icons/bi";


const HomeSkillsComponent = () => {
  return (
    <>
    {/* // Desktop view */}
    <div className='hidden container mx-auto w-full animate-fade-in h-[650px] lg:flex items-center justify-center relative'>
        <div className='container w-[80%] h-[80%] flex '>
            <div className='w-[40%] h-full flex justify-center items-center relative'>
                <div className='absolute top-10 left-0'>
                    <img src={arrow1} width={100} />
                </div>
                <div className='absolute bottom-10 right-10'>
                    <img src={star} width={50} />
                </div>
                <div className=''>
                    <h2 className='text-3xl text-center font-bold'>Skills</h2>
                    <p className='text-sm font-light text-center'>Languages</p>
                    <p className='text-[11px] mt-5 text-justify'>Proficient in front-end development with HTML, CSS, React, Tailwind CSS, 
                        and Next.js, and skilled in back-end technologies including Express.js, Node.js, 
                        and REST API design. Experienced with databases such as PostgreSQL, MongoDB, and 
                        Firebase, and adept at using GitHub for version control. Versatile in programming 
                        with JavaScript, Python, and Java.</p>
                    <p className='text-[9px] text-red-600'>(Note : Hover on elements)</p>
                </div>
            </div>
            <div className='flex flex-1 relative '>
                <div className='absolute group top-36 left-64 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-500'><FaReact/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>REACT JS</p>
                </div>
                <div className='absolute group top-36 right-64 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center'><RiNextjsFill/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>NEXT JS</p>
                </div>
                <div className='absolute group bottom-36 left-64 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-green-600'><SiMongodb/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>MONGO DB</p>
                </div>
                <div className='absolute group bottom-36 right-64 hover:scale-125 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center'><SiExpress/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>EXPRESS JS</p>
                </div>
                <div className='absolute group top-60 left-52 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-red-600'><FaHtml5/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>HTML 5</p>
                </div>
                <div className='absolute group top-60 right-52 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-600'><FaCss3Alt/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>CSS 3</p>
                </div>
                <div className='absolute group top-10 left-[350px] hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-green-600'><FaNode /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>NODE JS</p>
                </div>
                <div className='absolute group bottom-10 left-[350px] hover:scale-125 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-blue-600'><RiTailwindCssFill /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>TAILWIND CSS</p>
                </div>
                <div className='absolute group top-40 left-24 hover:scale-125 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-purple-600'><SiVite /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>VITE JS</p>
                </div>
                <div className='absolute group bottom-40 left-24 hover:scale-125 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-gray-900'><FaGithub /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>GITHUB</p>
                </div>
                <div className='absolute group top-40 right-24 hover:scale-125 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-yellow-400'><IoLogoJavascript /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>JAVASCRIPT</p>
                </div>
                <div className='absolute group bottom-40 right-24 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-orange-600'><IoLogoFirebase /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>Firebase</p>
                </div>
                <div className='absolute group top-[50px] left-52 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-800'><FaPython /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>PYTHON</p>
                </div>
                <div className='absolute group bottom-[50px] left-52 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-900'><FaJava /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>JAVA</p>
                </div>
                <div className='absolute group top-[50px] right-52 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-gray-800'><IoCloudCircleSharp /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>Firebase</p>
                </div>
                <div className='absolute group bottom-[50px] right-52 hover:scale-125 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-900'><BiLogoPostgresql /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>PSQL</p>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='rounded-full border-2 border-black' src={boyImage} width={150}/>
                </div>
            </div>
        </div>
    </div>
    {/* Mobile view */}
    <div className='md:hidden container mx-auto w-full animate-fade-in h-[650px] flex items-center justify-center relative'>
        <div className='container w-full h-full flex flex-col'>
            <div>
            <h2 className='text-3xl text-center font-bold'>Skills</h2>
            <p className='text-sm font-light text-center'>Languages</p>
            </div>
        
            <div className='h-full w-full flex relative '>
                <div className='absolute group top-28 left-28 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-500'><FaReact/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>REACT</p>
                </div>
                <div className='absolute group bottom-28 left-28 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center'><RiNextjsFill/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>NEXT</p>
                </div>
                <div className='absolute group top-28 right-28 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-green-600'><SiMongodb/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>MONGO</p>
                </div>
                <div className='absolute group bottom-28 right-28 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center'><SiExpress/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>EXPRESS</p>
                </div>
                <div className='absolute group top-40 left-16 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-red-600'><FaHtml5/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>HTML</p>
                </div>
                <div className='absolute group top-40 right-16 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-600'><FaCss3Alt/></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>CSS</p>
                </div>
                <div className='absolute group bottom-16 left-[180px] flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-green-600'><FaNode /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>NODE</p>
                </div>
                <div className='absolute group top-16 left-[180px] flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-blue-600'><RiTailwindCssFill /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>TAILWIND</p>
                </div>
                <div className='absolute group top-10 left-28 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-purple-600'><SiVite /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>VITE</p>
                </div>
                <div className='absolute group top-10 right-28 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-gray-900'><FaGithub /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>GITHUB</p>
                </div>
                <div className='absolute group bottom-10 left-28 flex flex-col items-center'>
                    <span className='text-3xl w-full flex justify-center hover:text-yellow-400'><IoLogoJavascript /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>JAVASCRIPT</p>
                </div>
                <div className='absolute group bottom-10 right-28 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-orange-600'><IoLogoFirebase /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>FIREBASE</p>
                </div>
                <div className='absolute group top-20 left-10 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-800'><FaPython /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>PYTHON</p>
                </div>
                <div className='absolute group top-20 right-10 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-900'><FaJava /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>JAVA</p>
                </div>
                <div className='absolute group bottom-20 left-10 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-gray-800'><IoCloudCircleSharp /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>API</p>
                </div>
                <div className='absolute group bottom-20 right-10 flex flex-col items-center'>
                    <span className='text-4xl w-full flex justify-center hover:text-blue-900'><BiLogoPostgresql /></span>
                    <p className='hidden group-hover:flex text-[8px] font-medium text-center'>PSQL</p>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='rounded-full border-2 border-black' src={boyImage} width={100}/>
                </div>
            </div>
            <div className='h-[80%] flex justify-center relative'>
                <div className='px-8'>
                    
                    <p className='text-[12px] text-justify'>Proficient in front-end development with HTML, CSS, React, Tailwind CSS, 
                        and Next.js, and skilled in back-end technologies including Express.js, Node.js, 
                        and REST API design. Experienced with databases such as PostgreSQL, MongoDB, and 
                        Firebase, and adept at using GitHub for version control. Versatile in programming 
                        with JavaScript, Python, and Java.</p>
                    <p className='text-[9px] text-red-600'>(Note : Hover on elements)</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeSkillsComponent