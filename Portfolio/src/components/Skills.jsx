/* eslint-disable no-unused-vars */
import React from 'react'

const Skills = () => {

    const skills=[
        {
        index:1,
        name:"HTML",
        years:"1+"
    },
    {
        index:2,
        name:"CSS",
        years:"1+"
    },
    {
        index:3,
        name:"Javascript",
        years:"1+"
    },
    {
        index:4,
        name:"React",
        years:"1+"
    },
    {
        index:5,
        name:"Tailwind CSS",
        years:"1+"
    },
]
    return (
    <>
    <div className='bg-lightBlack text-lightGrey font-custom' >
        <hr className='border-[1px] xl:mx-32 lg:mx-20 md:mx-7 mx-5'/>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-10 py-16 lg:py-12'>
            {skills.map((item,index)=>{
                return(
                    <div className='mb-4 xl:ml-[130px] lg:ml-20 md:ml-12' key={index}>
                    <h2 className='text-[30px] md:text-[35px] lg:text-[32px] xl:text-[48px] font-[700] leading-[56px] tracking-[1.5px] flex  text-center justify-center  md:text-start md:justify-start'>   {item.name}</h2>
                    <p className='text-[13px] lg:text-[16px] xl:text-[18px] text-[#D9D9D9] font-[500] leading-[28px] flex  text-center justify-center  md:text-start md:justify-start'>{item.years} years experience</p>
                    </div>
                )
            })}
        </div>
    </div>    
    </>
    )
}

export default Skills