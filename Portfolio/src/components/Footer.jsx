/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin ,FaXTwitter} from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => {
    return (
    <>
        <hr className='border-[1px] xl:mx-32 lg:mx-20 md:mx-7 mx-5'/>
        <div className='w-full bg-deepGrey text-lightGrey flex lg:py-9 py-5 xl:px-32 lg:px-20 md:px-12 md:flex-row md:justify-between justify-center items-center flex-col'>
            <h1 className="text-custom text-[700] xl:text-[35px] lg:text-[32px] text-[25px] md:mb-0 mb-3 leading-[32px] tracking-[0.4px]">jecholiahopare</h1>    
                <div className="flex gap-5">
                    <a href="https://github.com/Jecholiah001" className='hover:text-cyan'><FaGithub/></a>
                    <a href="#" className='hover:text-cyan'><SiFrontendmentor /></a>
                    <a href="https://www.linkedin.com/in/jecholiahopare" className='hover:text-cyan'><FaLinkedin/></a>
                    <a href="#" className='hover:text-cyan'><FaXTwitter/></a>
                </div>       
        </div>
    </>
    )
}

export default Footer