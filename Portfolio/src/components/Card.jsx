/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Card({item, isHovered}) {
  return (
    <div className="px-4 py-16 md:px-0 md:py-0 md:mb-24 lg:mb-20  gap-8  ">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  md:mb-6 ">
        <div className="group relative">
          <div className="w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:group-hover:opacity-15">
              <img
                src={item.image}
                alt={item.name}
                className=" w-full object-fill h-[180px] lg:h-[250px] "
              />

              {(isHovered ||window.innerWidth<=1024) && (
              <div className="w-full flex text-md absolute lg:absolute top-[23rem] -mt-[100px] md:-mt-20 md:mb-6 lg:-mt-1lg:mx-[10px] lg:top-[5rem] lg:flex-col lg:gap-6 lg:h-[200px]  cursor-pointer">
                <a
                  href={item.projectLink}
                  className="mr-12 mt-4 underline underline-offset-[12px] decoration-cyan hover:text-cyan decoration-4  lg:m-auto"
                >
                  View Project
                </a>
                <a
                  href={item.codeLink}
                  className="mt-4 underline underline-offset-[12px] decoration-cyan hover:text-cyan decoration-4 lg:m-auto"
                >
                  View Code
                </a>
              </div>
              )}
          </div>
          <div className="mt-4 uppercase text-white font-bold h-12">
            <div>
              <h2 className="mt-7">{item.name}</h2>
              <div className="flex flex-wrap mb-3 text-sm mt-3">
                <p className="mr-4 ">{item.skill1}</p>
                <p className="mr-4 ">{item.skill2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card