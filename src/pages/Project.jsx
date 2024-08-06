import React, { useEffect, useState } from 'react'
import ProjectCard from '../pageComponents/ProjectCard.jsx'
import ProjectList from '../helper/ProjectList.jsx'

const Project = () => {

  useEffect(()=> {
    setData(ProjectList)
  },[])

  const[data, setData] = useState([])
  return (
    <div className=''>
      <div className='container mx-auto flex justify-center items-center h-20'>
        <h2 className='font-bold text-2xl'>Projects</h2>
      </div>
      <div className='py-8 px-20 grid lg:grid-flow-col lg:grid-rows-2 justify-center items-center gap-10'>
      {
        data?.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))
      }
      </div>
    </div>
  )
}

export default Project