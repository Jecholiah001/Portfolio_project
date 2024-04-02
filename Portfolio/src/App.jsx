/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contactforms from './pages/Contactforms'
import Home from './pages/Home'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contactforms' element={<Contactforms/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
