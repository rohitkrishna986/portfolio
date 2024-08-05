import React from 'react'
import HomeIntroComponent from '../pageComponents/HomeIntroComponent'
import { BsArrowDownCircle } from "react-icons/bs";
import HomeAboutComponent from '../pageComponents/HomeAboutComponent';
import HomeSkillsComponent from '../pageComponents/HomeSkillsComponent';
import HomeQualificationComponent from '../pageComponents/HomeQualificationComponent';


const Home = () => {
  return (
    <div>
      <HomeIntroComponent/>
      <div className='w-full flex items-center justify-center'>
          <span className='text-2xl animate-bounce'><BsArrowDownCircle/></span>
      </div>
      <HomeAboutComponent/>
      <div className='h-[50px]'></div>
      <HomeSkillsComponent/>
      <HomeQualificationComponent/>
    </div>
  )
}

export default Home