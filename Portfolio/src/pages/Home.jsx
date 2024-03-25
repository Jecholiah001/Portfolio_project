/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-lightBlack '>
      <Header/>
      <Hero/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home