import React, { useState } from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import flowerLine from '../assests/flowerLine.png'
import Arrow1 from '../assests/arrow-1.svg';
import Arrow2 from '../assests/arrow-2.svg';

const HomeQualificationComponent = () => {
    const [eduToExp, setEduToExp] = useState(false)
  return (
    <>
    {/* // Desktop view */}
    <div className='hidden container mx-auto w-full animate-fade-in h-[640px] lg:flex items-center justify-center relative'>
        <div className='absolute bottom-32 left-32'>
            <img src={Arrow2} width={100}/>
        </div>
        <div className='absolute top-20 right-32'>
            <img src={Arrow1}/>
        </div>
        <div className='w-[60%] h-[80%] flex flex-col'>
            <div className='w-full h-[20%] gap-1 flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold'>Qualification</h2>
                <div className='mt-5 flex'>
                    <button onClick={()=>setEduToExp(false)} className='px-4 py-2 text-xs bgcolor flex font-medium border-r border-black items-center gap-2 hover:bg-slate-100'><span className='text-lg'><FaBookOpen/></span>EDUCATION</button>
                    <button onClick={()=>setEduToExp(true)} className='px-4 py-2 text-xs bgcolor font-medium flex items-center gap-2 hover:bg-slate-100'><span className='text-lg'><MdOutlineWork /></span>EXPERIENCE</button>
                </div>
            </div>  
            <div className='w-full h-full flex flex-1 justify-center items-center'>
                {
                    !eduToExp ? (
                        <div className='container w-[70%] h-[80%] flex justify-between'>
                            <div className='flex flex-1 pt-5 pb-3 flex-col justify-between'>
                                <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                    <h2 className='font-medium text-sm'>10 th - SSLC (2017)</h2> 
                                    <p className='text-xs mt-2'>I completed my 10th grade at S.R.N.V. Higher Secondary School, where I achieved an 80% overall percentage.</p>
                                </div>
                                <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                    <h2 className='font-medium text-sm'>B.E - CSE (2023)</h2> 
                                    <p className='text-xs mt-2'>I completed my Bachelor of Engineering in Computer Science and Engineering with a CGPA of 7.5 from Nehru Institute of Engineering and Technology.</p>
                                </div>
                            </div>
                            <div className='w-[10%] py-4'>
                                <img src={flowerLine} />
                                <img src={flowerLine} />
                                <img src={flowerLine} />
                            </div>
                            <div className='flex flex-1 items-center'>
                                <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                    <h2 className='font-medium text-sm'>12 th - HSC (2019)</h2> 
                                    <p className='text-xs mt-2'>I completed my Class 12th at S.R.N.V Higher Secondary School, achieving an 60% in the Biology-Mathematics group.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='container w-[70%] h-[80%] flex justify-between'>
                            <div className='flex flex-1'>
                                <div className='text-justify h-fit border border-gray-400 rounded-lg shadow-md p-2'>
                                    <h2 className='font-medium text-md'>Network Engineer Intern</h2> 
                                    <p className='text-[12px] text-gray-600'>Prompt Info Tech | 2023 - Intern</p>
                                    <p className='text-[10px] mt-2'>Completed a CCNA-focused internship, gaining hands-on experience with
                                         networking fundamentals, Cisco routers, and switches. 
                                         Engaged in self-study and practice exams to build a strong 
                                         understanding of TCP/IP, subnetting, and routing protocols.</p>
                                </div>
                            </div>
                            <div className='w-[10%] py-4 flex flex-col justify-between'>
                                <img src={flowerLine} />
                                <img src={flowerLine} />
                            </div>
                            <div className='flex flex-1 items-end'>
                                <div className='text-justify h-fit border border-gray-400 rounded-lg shadow-md p-2'>
                                    <h2 className='font-medium text-md'>Web Application Developer</h2> 
                                    <p className='text-[12px] text-gray-600'>ABLEZ Soft Tech | 2023 - Present</p>
                                    <p className='text-[10px] mt-2'>Skilled in developing web applications using MongoDB, 
                                        Express.js, React.js, and Node.js. Lead the development of a MERN-based product for 
                                        our company, with expertise in MongoDB database design, query optimization, and data 
                                        security. Proficient in creating dynamic user interfaces with React.js, managing state 
                                        with Redux or Context API, and deploying MERN applications on cloud platforms like AWS 
                                        and DigitalOcean.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div> 
        </div>
    </div>
    {/* // Mobile view */}
    <div className='md:hidden container mx-auto w-full animate-fade-in h-[520px] flex justify-center relative'>
        <div className='flex flex-col'>
            <div className='w-full gap-1 flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold'>Qualification</h2>
                <div className='mt-5 flex'>
                    <button onClick={()=>setEduToExp(false)} className='px-4 py-2 text-xs flex font-medium border-r border-black items-center gap-2 hover:bg-slate-100'><span className='text-lg'><FaBookOpen/></span>EDUCATION</button>
                    <button onClick={()=>setEduToExp(true)} className='px-4 py-2 text-xs font-medium flex items-center gap-2 hover:bg-slate-100'><span className='text-lg'><MdOutlineWork /></span>EXPERIENCE</button>
                </div>
            </div>  
            <div className='w-full h-full flex flex-1 justify-center items-center'>
                {
                    !eduToExp ? (
                        <div className='container w-[90%] mt-16 h-full flex justify-between'>
                            <div className='flex flex-1 flex-col gap-4'>
                                <div className='flex'>
                                    <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                        <h2 className='font-medium text-sm'>10 th - SSLC (2017)</h2> 
                                        <p className='text-xs mt-2'>I completed my 10th grade at S.R.N.V. Higher Secondary School, 
                                            where I achieved an 80% overall percentage.</p>
                                    </div>
                                    <div className='flex'>
                                        <img src={flowerLine} width={100}/>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex'>
                                        <img src={flowerLine} width={100}/>
                                    </div>
                                    <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                        <h2 className='font-medium text-sm'>12 th - HSC (2019)</h2> 
                                        <p className='text-xs mt-2'>I completed my Class 12th at S.R.N.V
                                             Higher Secondary School, achieving an 60% in the Biology-Mathematics group.</p>
                                    </div>
                                </div>
                                <div className='flex'>                                    
                                    <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                        <h2 className='font-medium text-sm'>B.E - CSE (2023)</h2> 
                                        <p className='text-xs mt-2'>I completed my Bachelor of Engineering in Computer 
                                            Science and Engineering with a CGPA of 7.5 from Nehru Institute of Engineering 
                                            and Technology.</p>
                                    </div>
                                    <div className='flex'>
                                        <img src={flowerLine} width={100}/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ) : (
                        <div className='container w-[90%] h-full flex flex-col gap-8 mt-16'>
                            <div className='flex'>                                    
                                <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                    <h2 className='font-medium text-md'>Network Engineer Intern</h2> 
                                    <p className='text-[12px] text-gray-600'>Prompt Info Tech | 2023 - Intern</p>
                                    <p className='text-[10px] mt-2'>Completed a CCNA-focused internship, gaining hands-on experience with
                                         networking fundamentals, Cisco routers, and switches. 
                                         Engaged in self-study and practice exams to build a strong 
                                         understanding of TCP/IP, subnetting, and routing protocols.</p>
                                </div>
                                <div className='flex items-center'>
                                    <img src={flowerLine} width={150}/>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex items-center'>
                                    <img src={flowerLine} width={260}/>
                                </div>                                 
                                <div className='text-justify border border-gray-400 rounded-lg shadow-md p-2'>
                                    <h2 className='font-medium text-md'>Web Application Developer</h2> 
                                    <p className='text-[12px] text-gray-600'>ABLEZ Soft Tech | 2023 - Present</p>
                                    <p className='text-[10px] mt-2'>Skilled in developing web applications using MongoDB, 
                                        Express.js, React.js, and Node.js. Lead the development of a MERN-based product for 
                                        our company, with expertise in MongoDB database design, query optimization, and data 
                                        security. Proficient in creating dynamic user interfaces with React.js, managing state 
                                        with Redux or Context API, and deploying MERN applications on cloud platforms like AWS 
                                        and DigitalOcean.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div> 
        </div>
    </div>
    </>
  )
}

export default HomeQualificationComponent