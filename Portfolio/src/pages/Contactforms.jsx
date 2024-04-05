/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Contactforms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    // Basic validation: Check if required fields are filled
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Sorry, Invalid format here';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    // Clear form fields after sending messages
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    
  }


  return (
    <div className=" lg:h-full font-custom bg-deepGrey text-lightGrey flex flex-col lg:flex-row py-16 lg:py-20">
      <div className='flex flex-col lg:flex-row xl:px-32 lg:px-20 md:px-12 px-6  md:pb-10 lg:gap-10'> 
        <div className="text-center lg:text-start lg:w-1/2">
          <h2 className=" text-[50px] lg:text-[72px] font-[700] leading-[72px] tracking-[2.1px] my-8 ">Contact</h2>
          <p className="md:mx-28 lg:mx-0 text-[18px] font-[500] leading-[28px]">I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        </div>
        <form  className=" py-20 md:py-0 sm:mt-20 lg:mt-10  md:mx-28 lg:mx-0" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:gap-x-2 lg:gap-x-4 opacity-[50%] lg:w-[450px] xl:w-[600px]">
            <div>
              <label htmlFor="name" className="block text-[16px] font-[500] leading-[28px] tracking-[0.22px] text-lightGrey after:content-['*'] after:ml-1.5 after:text-red-500">NAME</label>
              <div className="mt-2.5 border-b border-lightGrey ">
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}  className="bg-deepGrey  w-full"/>
              </div>
              {formErrors.name && <p className="text-red-500 text-end">{formErrors.name}</p>}
            </div>

            <div className="sm:col-span-2 ">
              <label htmlFor="email" className="block text-[16px] font-[500] leading-[28px] tracking-[0.22px] text-lightGrey after:content-['*'] after:ml-1.5 after:text-red-500">EMAIL</label>
              <div className="mt-2.5 border-b border-gray-300">
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className=" bg-deepGrey  w-full " />
              </div>
              {formErrors.email && <p className="text-red-500 text-end">{formErrors.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-[16px] font-[500] leading-[28px] tracking-[0.22px] text-lightGrey after:content-['*'] after:ml-1.5 after:text-red-500">MESSAGE</label>
              <div className="mt-2.5 border-b border-gray-300">
                <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} className="bg-deepGrey w-full"></textarea>
              </div>
              {formErrors.message && <p className="text-red-500 text-end">{formErrors.message}</p>}
            </div>
          </div>

          <div className="mt-10">
            <button type="submit" className="block w-full text-right text-[16px] font-[700] leading-[26px] tracking-[2.3px]  underline underline-offset-[12px] decoration-cyan decoration-4 hover:text-cyan">SEND MESSAGE</button>
          </div>
        </form></div>
    
    </div>
  );
}

export default Contactforms;