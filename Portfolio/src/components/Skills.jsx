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
    <div className='bg-lightBlack text-white font-custom' >
        <hr className='border-[2px] xl:mx-32 lg:mx-20 md:mx-12 mx-10'/>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-4  md:mt-10 gap-6 md:gap-5 lg:gap-10  py-12'>
            {skills.map((item,index)=>{
                return(
                    <div className='mb-4' key={index}>
                    <h2 className='text-[30px] md:text-[35px] lg:text-[32px] xl:text-[48px] font-[700] leading-[56px] tracking-[1.5px] flex  text-center justify-center  md:text-start md:justify-start  xl:ml-[130px] lg:ml-20 md:ml-12'>
                    {item.name}
                    </h2>
                    <p className='16px ml-2 w-54 text-gray flex  text-center justify-center  md:w-[200px] md:flex md:justify-start  md:ml-20 lg:ml-28 xl:text-[20px] xl:w-[300px] xl:ml-[120px] xl2:ml-[125px] 2xl:text-[40px]  2xl:w-[600px]  xl2:ml-[200px]'>{item.years} years experience</p>
                    </div>
                )
            })}
        </div>
    </div>    
    </>
    )
}

export default Skills