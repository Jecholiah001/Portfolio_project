 /* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Card({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-4 pb-28 md:pb-0 md:px-0 md:py-0 md:mb-24 lg:mb-20 gap-8 ">
      <div
        className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10  md:mb-6 relative`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="group">
          <div className={`w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none ${isHovered ? 'lg:group-hover:opacity-15' : ''}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-fill h-[180px] lg:h-[250px]"
            />
          </div>
          {/* Positioning the links absolutely, but they will be initially hidden */}
          <div className="absolute top-[23rem] -mt-[37px] md:-mt-8 lg:-mt-16 md:mb-6 lg:mx-36 xl:mx-56 lg:top-[5rem] lg:flex lg:flex-col lg:gap-6 lg:h-[200px] cursor-pointer">
            <a
              href={item.projectLink}
              className={`mr-12 underline underline-offset-[12px] decoration-cyan hover:text-cyan decoration-4 lg:m-auto lg:${isHovered ? '' : 'hidden'}`}
            >
              View Project
            </a>
            <a
              href={item.codeLink}
              className={`underline underline-offset-[12px] decoration-cyan hover:text-cyan decoration-4 lg:m-auto lg:${isHovered ? '' : 'hidden'}`}
            >
              View Code
            </a>
          </div>
        </div>
        <div className="uppercase text-white font-bold h-12">
          <div>
            <h2 className="text-[20px] md:text-[24px] text-[700] leading-[32px]">
              {item.name}
            </h2>
            <div className="text-[16px] md:text-[18px] text-[700] leading-[28px] flex flex-wrap my-3 lg:my-5">
              <p className="mr-4 ">{item.skill1}</p>
              <p className="mr-4 ">{item.skill2}</p>
              <p className="mr-4 ">{item.skill3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
