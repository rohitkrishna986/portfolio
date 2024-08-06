import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import ProjectDetails from '../pageComponents/ProjectDetails.jsx'

const ProjectCard = ({project}) => {

  const[menu, setMenu] = useState(false)

  return (
    <div className='w-[300px] h-[350px] border border-gray-300 rounded-md shadow-md hover:shadow-2xl flex flex-col items-center justify-center'>
      <div className='text-4xl'>{project?.projectIcon}</div>
      <h2 className='mt-4 text-lg font-semibold uppercase'>{project?.name}</h2>
      <p className='text-xs mt-2 px-4 text-justify text-gray-700 line-clamp-3'>{project?.description}</p>
      <button onClick={()=> setMenu(true)} className='text-md mt-8 flex items-center gap-2 hover:translate-x-2 transition-all'>View more<span><FaArrowRight className='text-sm'/></span></button>
      {
        menu && (
          <ProjectDetails project={project} onClose={()=> setMenu(false)}/>
        )
      }
    </div>
  )
}

export default ProjectCard