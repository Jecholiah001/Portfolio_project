/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Contactforms from '../pages/Contactforms'
import Projects from '../components/Projects'

function Home() {
  return (
    <div>
      <div className='font-custom bg-lightBlack'>
        <Header/>
        <Hero/>
        <Skills/>
        <Projects/>
      </div>
      <div className='bg-deepGrey'>
        <Contactforms/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home