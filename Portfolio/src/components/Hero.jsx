/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='font-custom bg-lightBlack text-lightGrey flex md:flex-row flex-col-reverse xl:px-32 lg:px-20 md:px-12 px-6 md:justify-between justify-center items-center md:pb-10'>
        <div className="mt-[450px] mb-32 md:my-[40px] lg:my-20 xl:my-24 md:text-start text-center ">
          <h1 className="xl:w-[800px] lg:w-[650px] md:w-[350px] xl:text-[80px] lg:text-[55px] md:text-[40px] text-[22px] text-[700]  lg:leading-[88px] tracking-[2.5px] mb-10">Nice to meet you! I'm <span className="underline underline-offset-8 underline-decoration-4 decoration-cyan ">Jecholiah Opare.</span></h1>
          <p className=" xl:w-[600px] lg:w-[500px] md:w-[350px] lg:text-[25px] md:text-[20px] text-[15px] text-[500] leading-[28px] mb-6 lg:mb-10">Based in Ghana, I am a junior front-end developer, I love to design websites that provide exceptional user-friendly interfaces.</p>
          <h3 className="text-[15px] text-[500] leading-[28px] tracking-[2.3px] underline hover:text-cyan underline-offset-8  decoration-cyan "><Link to="/contactforms">CONTACT ME</Link></h3>
        </div>
        
        <img src="/assets/portfolio.png" className="object-contain w-[300px]  md:w-[320px] lg:w-[335px] xl:w-[420px] absolute top-32 md:top-[90px] lg:top-[142px] xl:top-[105px] md:left-[399px] lg:left-[610px] xl:left-[900px]"/>
  </div>

  )
}

export default Hero
