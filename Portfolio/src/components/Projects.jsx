/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
function Projects() {
  const [project, setProject] = useState([])
  
useEffect(()=>{
  const findProject = async() =>{
    try {
      const response = await axios.get('/data.json')
      const data = await response.data
      setProject(data)

  } 

  catch (error){
  console.error('No Results',error)
  }
  }
  findProject()
}, [])

  return (
    <>
      <hr className='border-[1px] md:border-none mx-5'/>
        <div className='font-custom bg-lightBlack text-lightGrey pb-20 xl:px-32 lg:px-20 md:px-12 px-6'>
          <div className='md:pb-10 pt-10'>
            <nav className='flex justify-between '>
              <h1 className='text-[35px] md:text-[52px] lg:text-[68px] text-[700] leading-[88px] tracking-[2.5px] '>Projects</h1>
              <h3 className="text-[13px] md:text-[16px] text-[700] leading-[26px] tracking-[2.3px] py-8 md:py-12 lg:py-14 underline hover:text-cyan underline-offset-8  decoration-cyan "><Link to="/contactforms">CONTACT ME</Link></h3>
            </nav>
          </div>
          <div className='cards grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
            {project.map((item,index) => (
              <div key={index}>
                <Card  key={item} item={item} />
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Projects
